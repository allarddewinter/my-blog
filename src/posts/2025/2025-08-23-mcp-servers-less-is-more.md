---
title: "MCP servers: less is more"
description: "An analysis of the risks associated with Model Context Protocol (MCP) servers, focusing on token consumption and security vulnerabilities."
date: 2025-08-23
tags: [technology, ai, mcp, security]
---

The AI development space is currently buzzing with talk of Model Context Protocol (MCP) servers, which promise to extend the capabilities of Large Language Models (LLMs). However, a recent article by Geoffrey Huntley, "[too many model context protocol servers and LLM allocations on the dance floor](https://ghuntley.com/allocations/)", serves as a critical reminder that this new frontier is not without its significant challenges.

Geoffrey argues that while the hype is immense, the foundational understanding of how MCPs affect LLM performance is dangerously low. His core thesis is simple: when it comes to context, less is more.

### The hidden cost of context

The central problem Geoffrey identifies is the consumption of the LLM's context window. Every tool and tool description from an installed MCP server is loaded into this window, effectively reducing the available space for your actual query and the model's response.

He illustrates this with a stark example: a model with a 200k context window might only have 176k of usable space after the model's own system prompt and the harness prompt are loaded. If a developer then installs a handful of popular MCP servers, this usable space can shrink dramatically, sometimes by more than 50%.

> If your AGENTS.md, or Cursor rules are incredibly extensive, then you could find yourself operating with a headroom of 20k tokens and thus the quality of output is utter dogpoo.

This "context bloat" leads to several issues:
*   **Degraded Performance:** LLMs perform a "needle in a haystack" search. The more you allocate, the harder it is for the model to find the relevant information, resulting in lower-quality output.
*   **Tool Conflicts:** The MCP space currently lacks namespacing. If you have multiple tools that perform similar functions (e.g., listing files), the model's behaviour becomes non-deterministic.
*   **Inconsistent Tuning:** Different LLM providers have different best practices for writing tool prompts. A tool tuned for an Anthropic model might perform poorly with a GPT model, and vice-versa.

### The security blind spot

Beyond performance, Geoffrey highlights a major security risk. This echoes concerns I recently covered in my post, "[Simon Willison on the lethal trifecta and MCP security](/blog/simon-willison-on-the-lethal-trifecta-and-mcp-security/)", which discusses the dangers of combining private data access with untrusted content. Since there is no meaningful separation between system prompts, harness prompts, and tool prompts, a malicious tool could potentially execute harmful instructions.

> Again, there is no name-spacing in the context window. If it's in the context window, it is up for consideration and execution. There is no significant difference between the coding harness prompt, the model system prompt, and the tooling prompts. It's all the same.

He points to a supply chain attack on Amazon's Q assistant as a real-world example of this vulnerability. His recommendation for enterprises is clear: ban third-party MCPs and build your own, first-party tools to maintain control over the supply chain.

### My takeaway

Geoffrey's analysis confirms the feeling that the MCP ecosystem is currently the Wild West. The rush to add more tools and capabilities is happening without sufficient regard for the second-order effects of token consumption and security. The indiscriminate installation of MCP servers is akin to filling a small backpack with every tool imaginable, only to find you have no room left for food and water.

The key is to be deliberate. Before installing an MCP server, we should ask:
1.  Is this functionality already achievable through a CLI that the model knows?
2.  How many tokens will this server and its tools consume?
3.  Have I vetted the source of this tool?

Ultimately, curating a small, trusted, and efficient set of tools will yield far better and safer results than collecting every available MCP server.

### Popular MCP servers by the numbers

To provide some context on the landscape, here is a list of some of the most-starred MCP servers, based on data from [Glama.ai](https://glama.ai/mcp/servers?sort=github-stargazers%3Adesc). This illustrates the variety and popularity of tools currently available.

| Server | Stars | Language | Description |
| :--- | :--- | :--- | :--- |
| PaddleOCR | 52,748 | Python | Multiple text-type recognition, handwriting recognition, and high-precision parsing. |
| Prisma | 43,529 | TypeScript | Manage Prisma Postgres databases with ease. |
| crewAI | 35,854 | Python | A framework for orchestrating role-playing, autonomous AI agents. |
| Context7 | 25,610 | JavaScript | Fetches up-to-date, version-specific documentation and code examples. |
| GitHub MCP | 21,218 | Go | Official GitHub MCP server for repository interaction. |
| Repomix | 18,620 | TypeScript | Packages repositories into single files to reduce token usage. |
| Playwright MCP | 17,368 | TypeScript | Enables LLMs to interact with web pages through accessibility snapshots. |

This list shows the significant developer interest in extending LLM capabilities, but as Geoffrey Huntley's article makes clear, this power must be wielded with caution and a clear understanding of the trade-offs.