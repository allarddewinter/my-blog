---
title: "Embracing the Parallel Coding Agent Lifestyle"
description: "Exploring how running multiple AI coding agents in parallel can enhance productivity for specific development tasks."
date: 2025-10-06
tags: [technology, productivity, ai, coding-agents]
---

Simon Willison's recent post, "[Embracing the parallel coding agent lifestyle](https://simonwillison.net/2025/Oct/5/parallel-coding-agents/)", details his evolving approach to using multiple AI coding agents concurrently. Initially sceptical, Simon has found specific scenarios where parallel agents significantly boost efficiency without overwhelming the human reviewer.

> "I can only focus on reviewing and landing one significant change at a time, but I’m finding an increasing number of tasks that can still be fired off in parallel without adding too much cognitive overhead to my primary work."

### Effective Patterns for Parallel Agents

Simon outlines several patterns where running multiple agents proves beneficial:

*   **Research for Proof of Concepts:** Agents can quickly build proof-of-concept implementations for new libraries or technologies, even if they are too new to be in the training data. This helps answer fundamental questions about feasibility and integration.
*   **Understanding Existing Systems:** For complex codebases, agents can provide detailed explanations of how specific parts of the system function. They can trace code paths, identify dependencies, and summarise functionality, which can then be used as context for future prompts.
*   **Small Maintenance Tasks:** Low-stakes tasks, such as fixing deprecation warnings or minor irritations, can be delegated to agents. This allows the developer to remain focused on primary work while the agent resolves peripheral issues.
*   **Carefully Specified and Directed Work:** When the developer provides a precise specification, agents can generate code that requires less effort to review. This "authoritarian approach" to prompting reduces the cognitive load of validation.

Simon currently uses a mix of Claude Code (on Sonnet 4.5), Codex CLI (on GPT-5-Codex), and Codex Cloud for asynchronous tasks. He often runs multiple terminal windows with different agents, sometimes in "YOLO mode" for tasks where the risk of malicious instructions is low.

### Jesse Vincent's Parallel Agent Workflow

Jesse Vincent's article, "[How I'm using coding agents in September, 2025](https://blog.fsck.com/2025/10/05/how-im-using-coding-agents-in-september-2025/)", provides a detailed workflow for parallel agents, primarily using Claude Code. Jesse employs a "brainstorming" prompt to refine ideas into a design and specification, followed by a "planning" prompt to generate a comprehensive implementation plan.

A key aspect of Jesse's method involves using two separate Claude Code instances: an "architect" and an "implementer".

*   **Architect Agent:** This agent focuses on design, planning, and reviewing the work of the implementer. It helps clarify and update the planning document.
*   **Implementer Agent:** This agent executes the tasks outlined in the plan. It works in small chunks, and its output is reviewed by the architect.

Jesse also uses `git worktree` to isolate tasks, allowing multiple agents to work on different features within the same codebase concurrently. For code review, he integrates CodeRabbit, but adds a layer of role-play to his prompts, asking the agent to evaluate the reviewer's suggestions critically rather than blindly applying them.

> "A reviewer did some analysis of this PR. They're external, so reading the codebase cold. This is their analysis of the changes and I'd like you to evaluate the analysis and the reviewer carefully."

### Personal Commentary

The concept of running parallel coding agents, as described by Simon and Jesse, offers a compelling vision for enhanced development productivity. The ability to offload research, minor fixes, or even carefully specified implementation tasks to AI agents while maintaining focus on a primary task is particularly appealing.

I believe this approach can be highly effective, especially for projects where the review bottleneck is managed. I am keen to explore this further, potentially by setting up a local environment using tools like `y-router`[^1] to connect Claude Code CLI with OpenRouter. This would allow me to experiment with various LLMs and host my own local LLM safely accessible via Tailscale. The inherent latency in receiving responses from LLMs suggests that spinning up multiple agents in parallel could be a natural way to maximise throughput, as one might as well initiate another task while waiting for a current one to complete.

[^1]: `y-router` is a Cloudflare Worker that translates between Anthropic's Claude API and OpenAI-compatible APIs, enabling the use of Claude Code with OpenRouter and other OpenAI-compatible providers.
