---
title: "Securely Accessing OpenWebUI with Tailscale Funnel on Proxmox"
description: "A refined guide to setting up OpenWebUI in an LXC container on Proxmox, secured with Tailscale Funnel for public access."
date: 2025-10-22
tags: [technology, proxmox, tailscale, openwebui, security]
---

This guide outlines a method for making your OpenWebUI instance publicly accessible via [Tailscale Funnel](https://tailscale.com/kb/1223/funnel), while maintaining robust security on your Proxmox host. The approach isolates OpenWebUI within an LXC container and uses Nginx as a reverse proxy, ensuring that only the OpenWebUI service is exposed.

This solution segments access so only the OpenWebUI service is publicly available while keeping your critical management interfaces secure.

This setup is designed for security and maintainability, providing persistent data, auto-updates, and compatibility with various network environments.

## 1. Environment Setup Overview

The solution consists of three main environments with specific tools and purposes:

| Environment | Tools Installed | Purpose |
|-------------|-----------------|---------|
| **Proxmox Host** | Nginx, Tailscale | Reverse proxy and secure public access |
| **LXC Container** | Docker, OpenWebUI | Application isolation and execution |
| **Tailscale Network** | ACLs, Funnel | Secure access control and public exposure |

## 2. Architecture Options

Before proceeding with the setup, consider these architectural choices based on your specific needs. The standard implementation is optimized for home use where simplicity and reliability are prioritized over enterprise-grade scalability.

| Component | Purpose | Tool Used | Practical Alternatives |
|-----------|---------|-------------------------|------------------------|
| **Container Platform** | Isolates the application from the host system | LXC on Proxmox | Docker on bare metal (simpler but less isolation) |
| **Reverse Proxy** | Routes traffic to the correct service | Nginx on Proxmox host | Caddy (simpler configuration), Traefik (more dynamic) |
| **Public Access** | Provides secure external connectivity | Tailscale Funnel | Cloudflare Tunnel (requires domain), SSH tunneling |
| **Security Model** | Controls who can access what | Tailscale ACLs with tags | Basic authentication, IP whitelisting |
| **OS for Container** | Base operating system for the container | Debian 12 | Ubuntu (more familiar), Alpine Linux (smaller footprint) |

> **Home Use Notes:**  
> For personal deployments, avoid over-engineering. Kubernetes is excessive for a single OpenWebUI instance. The standard implementation provides the right balance of security and simplicity for home use. While OpenWebUI does have a Python version, the Docker implementation is more reliable for persistent deployment.

## 3. Setting Up the LXC Container on Proxmox

Create a new LXC container with the following specifications (when not hosting a model locally this is fine):

*   **Operating System:** Debian 12
*   **Resources:** 2GB RAM, 2 CPU cores, 20GB disk
*   **Container ID:** 101
*   **Hostname:** `opwebui-lxc`

After creation, enable nesting by adding the following lines to the container's configuration file at `/etc/pve/lxc/101.conf` on the Proxmox host:

```
lxc.apparmor.profile: unconfined
lxc.cap.drop: 
lxc.cgroup2.devices.allow: a
lxc.mount.auto: cgroup:rw
```

> **Note:** For production use, consider setting a static IP for the LXC container in the Proxmox web interface to avoid IP changes that could disrupt the Nginx configuration. The command `pct list` in the Proxmox host terminal can also be used to verify the container's current IP address.

## 4. Configuring the LXC Container for OpenWebUI

### 4.1 Install Docker

Docker is required to run OpenWebUI. Follow the official installation guide for Debian: [Docker Installation for Debian](https://docs.docker.com/desktop/setup/install/linux/debian/).

> **Note:** The `curl` and `git` packages are not strictly required for this specific setup but are commonly used in container environments. If you need them, install with `apt install -y curl git`.

### 4.2 Create OpenWebUI Directory Structure

```bash
mkdir -p /root/openwebui
cd /root/openwebui
```

### 4.3 Create the `.env` File

This file stores environment variables for the OpenWebUI Docker container. Replace `Europe/Amsterdam` with your local timezone.

```bash
cat > .env <<EOF
WEBUI_SECRET_KEY=$(openssl rand -hex 32)
TZ=Europe/Amsterdam
EOF
```

Alternatively, you could use `nano .env` to create and edit the file.

### 4.4 Create the `docker-compose.yml`

This file defines the OpenWebUI service and a Watchtower service for automatic updates. Note the `WEBUI_URL` placeholder; this will be the public URL for your OpenWebUI instance.

```bash
cat > docker-compose.yml <<'EOF'
services:
  open-webui:
    image: ghcr.io/open-webui/open-webui:main-slim
    container_name: open-webui
    ports:
      - "8080:8080"
    environment:
      - WEBUI_SECRET_KEY=${WEBUI_SECRET_KEY}
      - WEBUI_URL=https://opwebui.yourdomain.ts.net # Replace with your Tailscale Funnel URL
      - ENABLE_SIGNUP=false
      - DEFAULT_USER_ROLE=pending
    volumes:
      - open-webui:/app/backend/data
    restart: unless-stopped
    labels:
      - "com.centurylinklabs.watchtower.enable=true"
    
  watchtower:
    image: containrrr/watchtower:latest
    container_name: openwebui-watchtower
    environment:
      - WATCHTOWER_CLEANUP=true
      - WATCHTOWER_LABEL_ENABLE=true
      - WATCHTOWER_INCLUDE_RESTARTING=true
      - WATCHTOWER_SCHEDULE=0 0 7 * * *
      - TZ=${TZ:-Europe/Amsterdam}
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    restart: unless-stopped
    
volumes:
  open-webui:
EOF
```

### 4.5 Start the Containers

```bash
docker compose up -d
```

## 5. Configuring the Proxmox Host

### 5.1 Install Required Packages

```bash
apt update && apt upgrade -y
apt install -y nginx net-tools
```

### 5.2 Create Nginx Configuration

This Nginx configuration listens on `127.0.0.1:8090` (localhost only) and proxies requests to the OpenWebUI container. This ensures Nginx is not directly exposed to the network.

```bash
cat > /etc/nginx/sites-available/openwebui.conf <<EOF
server {
    listen 127.0.0.1:8090;
    server_name opwebui.yourdomain.ts.net; # Replace with your Tailscale Funnel URL
    
    client_max_body_size 100M;
    
    location / {
        proxy_pass http://192.168.1.100:8080; # Replace with your LXC's static IP
        
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
            
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection "upgrade";
            
        proxy_read_timeout 300s;
        proxy_send_timeout 300s;
        proxy_buffering off;
        proxy_request_buffering off;
    }
    
    location = /health {
        return 200 "OK\n";
        access_log off;
        add_header Content-Type text/plain;
    }
}
EOF
```

### 5.3 Enable the Nginx Configuration

```bash
ln -sf /etc/nginx/sites-available/openwebui.conf /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl restart nginx
```

## 6. Configuring Tailscale Security

### 6.1 Install Tailscale

```bash
curl -fsSL https://tailscale.com/install.sh | sh
```

### 6.2 Authenticate Tailscale

```bash
tailscale up
```

Follow the URL provided in the output to authenticate your Proxmox host with your Tailscale account.

### 6.3 Apply Security Tags

```bash
tailscale up --advertise-tags=tag:openwebui,tag:proxmox
```

### 6.4 Configure ACLs in Tailscale Dashboard

1.  Go to the [Tailscale admin console](https://login.tailscale.com/admin/acls)
2.  Replace the existing ACL configuration with the following:
    ```json
    {
      "acls": [
        {"action": "accept", "src": ["autogroup:members"], "dst": ["autogroup:self:*"]},
        {"action": "accept", "src": ["autogroup:members"], "dst": ["tag:openwebui:443"]},
        {"action": "accept", "src": ["autogroup:admin"], "dst": ["tag:proxmox:22", "tag:proxmox:8006"]}
      ],
          
      "tagOwners": {
        "tag:openwebui": ["autogroup:members"],
        "tag:proxmox": ["autogroup:admin"]
      },
          
      "nodeAttrs": [
        {
          "target": ["tag:openwebui"],
          "attr": ["funnel"]
        }
      ],
          
      "ssh": [
        {
          "action": "check",
          "src": ["autogroup:admin"],
          "dst": ["tag:proxmox"],
          "users": ["root"]
        }
      ]
    }
    ```
3.  Save the configuration

### 6.5 Enable Funnel for Public Access

```bash
tailscale funnel --bg --https=443 8090
```

## 7. Verification and Testing

### 7.1 Verify OpenWebUI is Running

In the LXC container:
```bash
docker ps
# Should show open-webui and openwebui-watchtower
```

### 7.2 Verify Nginx is Listening

On the Proxmox host:
```bash
ss -tlnp | grep :8090
# Should show nginx listening on 127.0.0.1:8090
```

### 7.3 Test Public Access

```bash
curl -I https://opwebui.yourdomain.ts.net
# Should return HTTP 200 OK
```

## 8. Troubleshooting Common Issues

### If you get "connection refused" errors:

1.  Check Nginx is running: `systemctl status nginx`
2.  Verify Nginx is listening: `ss -tlnp | grep :8090`
3.  Check OpenWebUI is running: `docker ps` (in LXC container)

### If Tailscale Funnel is not working:

1.  Check Funnel status: `tailscale funnel status`
2.  Verify tags are applied: `tailscale status | grep Tags`
3.  Check ACL is active in the Tailscale admin console

### If WebSocket streaming fails:

1.  Verify Nginx has WebSocket headers:
    ```bash
    grep -A10 "location /" /etc/nginx/sites-available/openwebui.conf
    ```
2.  Ensure you are using HTTPS (not HTTP) for public access

## Final Notes

This configuration:

*   Secures your Proxmox host while allowing public access to OpenWebUI.
*   Respects Tailscale's architecture without workarounds.
*   Maintains all requirements for persistence, auto-updates, and corporate proxy compatibility.
*   Follows security best practices with the principle of least privilege.

The solution is intentionally minimal; only the necessary components are used, each with a clear purpose. This reduces complexity and attack surface while ensuring reliable operation. Your OpenWebUI instance is now securely accessible from anywhere, keeping your critical Proxmox management interfaces protected from unauthorised access.

A note on corporate proxies: While this setup is designed to be robust, some corporate proxies can interfere with WebSocket connections, leading to errors such as `websocket connection failed to wss://...`. If you encounter this, it may be due to the proxy's strict filtering or inspection of WebSocket traffic. Unfortunately, direct workarounds for client-side corporate proxies are often limited without administrative access to the proxy itself. If you have found a solution for this specific issue, please share it.

For accessing environments via SSH, particularly on Windows, tools like MobaXterm can offer a more reliable experience compared to web interfaces, especially when dealing with network complexities.

[^1]: The `WEBUI_URL` in `docker-compose.yml` and `server_name` in `nginx.conf` should match the Tailscale Funnel URL you intend to use (e.g., `opwebui.yourdomain.ts.net`).
[^2]: When using `cat > filename <<EOF` for creating files, ensure there are no leading spaces before `EOF` on the closing line, as this can cause syntax errors.
