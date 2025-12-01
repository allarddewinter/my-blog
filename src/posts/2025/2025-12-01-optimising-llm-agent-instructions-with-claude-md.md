---
title: "Optimising LLM Agent Instructions with CLAUDE.md"
description: "A guide to effectively instructing large language model agents by structuring CLAUDE.md for clarity and performance."
date: 2025-12-01
tags: [technology, llms, agents, productivity]
---

From: [Writing a good CLAUDE.md | HumanLayer Blog](https://humanlayer.com/blog/writing-a-good-claude-md)

This article explores best practices for creating effective `CLAUDE.md` (or `AGENTS.md`) files, which are crucial for instructing large language model (LLM) agents. It highlights that LLMs are largely stateless and require explicit instruction for each session, making `CLAUDE.md` a high-leverage point for onboarding agents to a codebase.

> "CLAUDE.md (or AGENTS.md) is the only file that by default goes into _every single conversation_ you have with the agent."

The author notes that LLMs often ignore `CLAUDE.md` content if it is not deemed relevant to the current task, due to an embedded system reminder. This underscores the importance of keeping instructions concise and universally applicable.

### Key Principles for a Good `CLAUDE.md`

The article outlines several recommendations for crafting an effective `CLAUDE.md` file:

*   **Onboard the Agent:** Use `CLAUDE.md` to provide the agent with essential context about the codebase, covering:
    *   **WHAT:** Technology stack, project structure, and codebase map (especially for monorepos).
    *   **WHY:** The project's purpose and the function of its various parts.
    *   **HOW:** How the agent should operate, including tools (e.g., `bun` instead of `node`) and verification steps (tests, typechecks).
*   **Less is More:**
    *   LLMs, particularly smaller models, have limitations on the number of instructions they can reliably follow (around 150-200 for frontier models).
    *   Instruction-following quality decreases uniformly as instruction count increases.
    *   The Claude Code system prompt already consumes about 50 instructions.
    *   Therefore, `CLAUDE.md` should contain as few, universally applicable instructions as possible.
*   **Concise and Universally Applicable:**
    *   The context window performs better with focused, relevant information.
    *   Since `CLAUDE.md` is included in *every* session, its contents must be broadly applicable. Avoid task-specific instructions.
    *   Aim for less than 300 lines; shorter is generally better. The HumanLayer root `CLAUDE.md` is under sixty lines.
*   **Progressive Disclosure:**
    *   Instead of including all instructions in `CLAUDE.md`, store task-specific instructions in separate Markdown files (e.g., `agent_docs/building_the_project.md`).
    *   `CLAUDE.md` can then list these files and instruct the agent to read them only when relevant.
    *   Prefer pointers (`file:line` references) over copying code snippets to avoid outdated information.
*   **LLMs are Not Linters:**
    *   Do not use LLMs for code style guidelines or formatting; they are expensive and slow compared to deterministic tools like linters and formatters.
    *   LLMs are in-context learners; if your code follows conventions, they should adapt with minimal explicit instruction.
    *   Consider using `Stop` hooks or Slash Commands to integrate linters and formatters, allowing the agent to fix issues identified by these tools.
*   **Avoid Auto-Generation:**
    *   `CLAUDE.md` is a critical leverage point for agent performance.
    *   Carefully craft its contents rather than relying on auto-generation tools, as a poorly constructed `CLAUDE.md` can negatively impact every phase of the workflow.

### My Take

My recent experience with LLMs, particularly Gemini Pro 2.5, has shown a noticeable decrease in performance and instruction adherence, even with human-readable instructions. This article provides a compelling explanation for why this might be the case and offers practical strategies to mitigate it.

The concept of "less is more" and the emphasis on "universally applicable" instructions are particularly relevant. I have often been guilty of trying to stuff too much detail into initial prompts, hoping to cover all eventualities. The idea of using "Progressive Disclosure" by pointing to separate, task-specific Markdown files is a game-changer. This allows for detailed guidance without overwhelming the agent's primary context window.

I also appreciate the strong stance against using LLMs as linters. It reinforces the principle of using the right tool for the job, leveraging deterministic tools for deterministic tasks and reserving LLMs for more complex, non-deterministic problem-solving. I plan to implement the "CRITICAL (PRIORITY 0)!!!!" approach mentioned in the Hacker News discussion for my `AGENTS.md` files, alongside these structured principles, to see if it improves instruction following.

This approach aligns well with the idea of creating a "README for agents," where the `README.md` remains for humans, but the agent-specific documentation is optimised for LLM processing efficiency and instruction adherence.
