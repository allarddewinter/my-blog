---
title: "The Model Context Protocol is a fad"
description: "An analysis of why the Model Context Protocol (MCP) may not survive the long term due to architectural overhead and security risks."
date: 2026-01-09
tags: [technology, ai, software-architecture, standards]
---

From: [https://tombedor.dev/mcp-is-a-fad/](https://tombedor.dev/mcp-is-a-fad/)

The Model Context Protocol (MCP) has gained rapid traction as a standard for connecting AI agents to various toolsets. However, Tom Bedor argues that this popularity is driven more by marketing momentum and ease of initial integration than by long-term technical utility. While it aims to solve the "NxM" problem—connecting N agents to M tools—the architectural trade-offs and security implications suggest it may be a transient trend.

### The NxM Problem and MCP's Approach
The core promise of MCP is to eliminate the need for bespoke connectors between different LLM APIs (like Gemini or OpenAI) and various tools. Currently, frameworks like LangChain or LiteLLM already handle these minor schema differences. MCP shifts tool execution into separate, long-lived processes.

> "This abstracts away schema generation and invocation, but at a cost. Tool logic runs in a separate process, making resource management opaque. The application loses control over tool instructions, logging, and error handling."

### Key Structural Issues
The transition to MCP introduces several technical hurdles:
*   **Incoherent Toolboxes:** Tools developed in isolation lack context regarding other available tools, leading to "tool confusion" where an agent might use pliers when a hammer is more appropriate.
*   **Runtime Complexity:** Each MCP server requires its own environment. Users often struggle with dangling subprocesses, memory leaks, and dependency management across different runtimes like Node and Python.
*   **Security Vulnerabilities:** MCP often bypasses traditional security infrastructure. Recent CVEs have highlighted risks such as Remote Code Execution (RCE) and data exfiltration through prompt injection.

> "You're not eliminating trust; you're redirecting it to third-party code that, as the CVEs demonstrate, is often unaudited and vulnerable."

### Better Alternatives
For most use cases, existing methods provide more robust results without the protocol overhead:

| User Type | Better Alternative | Reason |
| :--- | :--- | :--- |
| **Technical Users** | Local scripts + command runners | AI can easily write these; they work for humans too. |
| **App Developers** | 1st party tools | Better auth, logging, and shared memory state. |
| **Tool Authors** | OpenAPI / REST | Decades of battle-tested tooling and validation. |

Simon Willison has also expressed skepticism regarding MCP's long-term dominance, and I agree that the protocol's benefits rarely outweigh its complexity and token cost. As model providers introduce native capabilities like Claude Skills, the need for a separate, over-engineered protocol is likely to diminish.