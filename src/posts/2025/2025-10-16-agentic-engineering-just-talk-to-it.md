---
title: "Agentic Engineering: Just Talk To It"
description: "Peter Steinberger shares his 'no-bs' approach to agentic engineering, focusing on direct interaction with models like GPT-5-Codex over complex tooling."
date: 2025-10-16
tags: [technology, ai, engineering, productivity]
---

From: [https://steipete.me/posts/just-talk-to-it#do-you-do-spec-driven-development](https://steipete.me/posts/just-talk-to-it#do-you-do-spec-driven-development)

Peter Steinberger presents a streamlined approach to agentic engineering, advocating for direct, conversational interaction with AI models rather than relying on elaborate frameworks or subagents. His workflow, heavily centred on GPT-5-Codex, emphasises simplicity, rapid iteration, and developing an intuitive understanding of the model's capabilities.

> "Don’t waste your time on stuff like RAG, subagents, Agents 2.0 or other things that are mostly just charade. Just talk to it. Play with it. Develop intuition."

### Key Tenets of Steinberger's Agentic Workflow

*   **Model of Choice:** GPT-5-Codex is preferred over Claude Code due to its superior context management, efficiency, speed, and less "silly" conversational style.
    *   **Context & Efficiency:** Codex offers ~230k usable context, which fills slower than Claude Code's 156k.
    *   **Speed:** Rewritten in Rust, Codex is "incredibly fast" and lightweight, avoiding the freezes and memory issues observed with Claude Code.
    *   **Language & Interaction:** Codex is described as an "introverted engineer that chugs along and just gets stuff done," requiring shorter prompts and being less prone to "silly" responses.
*   **Harness & Parallelisation:**
    *   **`codex cli`:** The primary daily driver, often run in 3-8 parallel instances within a terminal grid for concurrent tasks.
    *   **Atomic Commits:** Agents are configured to perform atomic Git commits, ensuring a clean history.
    *   **No Worktrees:** A single development server is used to facilitate testing multiple changes simultaneously, avoiding the overhead of multiple branches or servers.
*   **"Blast Radius" Thinking:**
    *   Before making changes, consider the potential impact (time and files touched).
    *   Prefer "many small bombs" (small, isolated changes) over "Fat Man" (large, sweeping changes) to maintain control and ease of rollback.
    *   Don't hesitate to stop models mid-way to check status or redirect, as file changes are atomic.
*   **Prompting Strategy:**
    *   **Concise Prompts:** Codex requires significantly shorter prompts (often 1-2 sentences) due to its ability to read the codebase effectively.
    *   **Visual Context:** Screenshots are frequently used (up to 50% of prompts) to provide visual context, with the model adept at identifying relevant strings and locations.
    *   **Conversational Approach:** Instead of rigid "plan mode" or structured documents, Steinberger "talks" to Codex, asking it to "discuss" or "give me options" and waiting for approval.
*   **Refactoring & Maintenance:**
    *   Approximately 20% of time is dedicated to refactoring, entirely performed by agents.
    *   Refactoring tasks include code duplication checks (jscpd), dead code removal (knip), ESLint checks, API consolidation, documentation, dependency updates, and test writing.
    *   This cyclical approach of rapid iteration followed by dedicated refactoring phases is considered more productive and enjoyable.
*   **Spec-Driven Development (Evolved):**
    *   The "old way" of writing a large spec and letting the model build for hours is eschewed.
    *   Current approach involves a collaborative discussion with Codex, feeding it websites and ideas, and fleshing out features together.
    *   For tricky features, a spec might be drafted and reviewed by GPT-5-Pro (via ChatGPT.com) for alternative ideas, then integrated back.
    *   UI-based work often starts with under-specified requests, allowing the model to build and iterate in real-time, morphing the "chaos into the shape that feels right."
*   **Tooling & "Charade":**
    *   **Avoids Over-Engineering:** Dismisses many agentic tools (e.g., Conductor, Terragon, Sculptor) as "thin wrappers" that work around inefficiencies and promote suboptimal workflows.
    *   **CLI over MCPs:** Advocates for using command-line interface (CLI) tools over "Multi-Command Prompts" (MCPs) due to their zero context cost and existing model knowledge.
    *   **`tmux` for Background Tasks:** Instead of relying on model-specific background task features, `tmux` is used for persistent CLI sessions.
*   **Addressing Model Imperfections:**
    *   Acknowledges that Codex is not perfect (e.g., occasional reverts, forgetting bash commands, "losing" lines in the terminal).
    *   These flaws are considered minor compared to its overall effectiveness, and human-like patience is sometimes required ("soothen it like a child").
    *   **Lazy Workarounds:** For long-running tasks, queuing "continue" messages can keep the model engaged.
    *   **Test Generation:** Asking the model to write tests after each feature/fix improves test quality and uncovers bugs.
    *   **Intent Preservation:** Prompting to "add code comments on tricky parts" helps both human and future model understanding.

Steinberger's "Just Talk To It" philosophy underscores the importance of developing intuition and direct communication with AI agents, treating them as collaborative partners rather than complex systems requiring elaborate orchestration. The skills needed to manage agents, he notes, mirror those of senior software engineers.

[^1]: "Agentic engineering" refers to the practice of using AI agents to autonomously perform engineering tasks, such as writing, debugging, and refactoring code.
[^2]: "Blast radius" is a term borrowed from engineering, referring to the scope or impact of a change or failure within a system. In this context, it refers to how many files or how much of the codebase a particular change might affect.
