---
title: "Experimenting with Kilo Code and the Model Context Protocol"
description: "A look at my first experiences with Kilo Code, an open-source alternative to Cursor, and the process of getting the Playwright MCP working."
date: 2025-08-02
tags: [technology, ai, kilocode, cursor]
---

For the past couple of weeks, I have been experimenting with AI-assisted coding tools. After trying Cursor, I started looking into [Kilo Code](https://kilocode.ai/), an open-source alternative that plugs into VS Code. My main motivation was to gain more flexibility, specifically the ability to experiment with models of my own choosing, like the Kimi K2 model from Moonshot via [OpenRouter](https://openrouter.ai/).

> Kilo Code accelerates development with AI-driven code generation and task automation. This open source extension plugs directly into VS Code.

My initial impressions are positive. I particularly like the ease with which you can change the rules for the AI and the availability of different modes, such as the 'Architect' mode, which adapts the AI's persona for specific tasks.

### The challenge with the Model Context Protocol

However, I ran into a snag while trying to set up the Playwright Model Context Protocol (MCP) to allow the AI to control a web browser. The Playwright documentation suggested a simple 'add to cursor' button, but this did not work as expected within Kilo Code. I could see in the logs that the server was spinning up correctly, but Kilo Code itself could not connect. It took some digging to realise the server was being initiated in the context of my main editor, not within Kilo Code's environment.

The solution was in the [Kilo Code documentation](https://kilocode.ai/docs/features/mcp/using-mcp-in-kilo-code#windows-configuration-example), which provided a Windows-specific configuration for running MCP servers directly. Adapting the example was the key to getting it working: 

```json
{
  "mcpServers": {
    "playwright": {
      "command": "cmd",
      "args": [
        "/c",
        "npx",
        "-y",
        "@playwright/mcp@latest"
      ]
    }
  }
}
```

With the setup now working correctly, I am experimenting with a project to build a reverse hotel search: you select a room, and it finds the availability. It is still a work in progress, but it is a fun way to explore the capabilities of these new tools.

This hands-on experience of configuring tools and setting up protocols is a practical follow-up to my previous thoughts on [structuring AI-assisted development](/blog/beyond-the-vibe-structuring-ai-assisted-development/). Having the right rules and configurations in place is essential to move beyond simple 'vibe coding' and into a more deliberate and powerful workflow.