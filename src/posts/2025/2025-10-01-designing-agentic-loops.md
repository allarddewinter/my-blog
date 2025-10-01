---
title: "Designing Safe and Effective Agentic Loops"
description: "Simon Willison's article on 'designing agentic loops' provides a practical framework for safely using powerful AI coding agents by sandboxing them in environments like GitHub Codespaces."
date: 2025-10-01
tags: [technology, ai, llm, development]
---

AI coding agents that can write, execute, and correct their own code represent a significant step forward. However, their power comes with inherent risks. In his post on [designing agentic loops](https://simonwillison.net/2025/Sep/30/designing-agentic-loops/), Simon Willison provides a clear case for what is needed to work with these agents effectively and safely.

An agentic loop, as Simon defines it, is an LLM running tools in a loop to achieve a goal. The skill lies in carefully designing that loop and the tools within it.

### The Risk of "YOLO Mode"

To get the most out of these agents, they need to run unattended in what Simon calls "YOLO mode," where they can execute commands without constant human approval. This is also where the danger lies. As Solomon Hykes memorably put it:

> An AI agent is an LLM wrecking its environment in a loop.

The primary risks of an unattended agent include:
*   Executing destructive shell commands that delete or corrupt files.
*   Exfiltrating sensitive data like source code or API keys.
*   Using your machine as a proxy for malicious attacks on other systems.

### A Practical Approach to Safety

Simon outlines three ways to manage these risks, with a clear preference for one. While you can take the risk on your local machine or trust the tool's built-in sandboxing, the most robust approach is to use a secure, isolated environment.

His preferred method is to use "someone else's computer." This is a practical idea; by running the agent in a disposable, cloud-based environment like a GitHub Codespace, you contain the potential damage. If the agent goes rogue, it does so on a temporary virtual machine, not your primary workstation. This prevents breaches of your local data and contains any harm to the isolated environment.

### Designing an Effective Loop

Once a safe environment is established, the focus shifts to designing the loop itself.

*   **Provide the Right Tools:** Agents are proficient with shell commands. Instead of complex abstractions, you can create a simple `AGENTS.md` file with examples of the commands you want it to use. This gives the agent a clear, discoverable set of capabilities.
*   **Issue Scoped Credentials:** If the agent needs access to services, provide it with tightly scoped credentials. For example, use API keys for a staging environment or set low budget limits on accounts that can incur costs.

### When to Use Agentic Loops

This pattern is not a universal solution. It is most effective for problems that have clear success criteria and are likely to require significant trial and error. Good use cases include:

*   **Debugging:** Investigating why a test is failing.
*   **Performance Optimisation:** Experimenting with database indexes to improve query speed.
*   **Dependency Upgrades:** Updating packages and fixing minor breaking changes, provided you have a solid test suite.

The key takeaway is that the power of AI agents is unlocked not just by the model itself, but by the secure and well-designed environment you create for them. Using disposable sandboxes like GitHub Codespaces is an effective strategy for mitigating risk while still allowing the agent the freedom it needs to solve complex problems.
