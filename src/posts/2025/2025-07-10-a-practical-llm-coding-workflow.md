---
title: "A practical LLM coding workflow and a reflection on teamwork"
description: "A summary of Harper's LLM codegen workflow and how structured rulebooks might solve the 'solo developer' problem he identifies."
date: 2025-07-10
tags: [technology, ai, workflow, development]
---

I came across a post by Harper titled "[My LLM codegen workflow atm](https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/)" that offers a practical, hands-on look at using Large Language Models for software development. While it is already a few months old—a long time in the AI space—his core principles remain relevant.

He breaks his process down into two main paths.

### For new (greenfield) projects

This is a structured, three-step approach that moves from idea to execution.

1.  **Idea honing:** Use a conversational LLM to brainstorm and flesh out an idea, ending with a detailed developer specification.
2.  **Planning:** Feed the specification to a reasoning model to create a detailed, step-by-step implementation plan, broken down into small, testable chunks.
3.  **Execution:** Use a codegen tool like Aider or pair-programme with a model like Claude to work through the plan, step by step.

### For existing projects

When working on an established codebase, the approach is more iterative and task-focused.

*   **Get context:** Use a tool to package the relevant parts of the codebase into a context file for the LLM. He mentions `repomix`, but another popular tool for this is `gitingest`.
*   **Use specific prompts:** Run targeted prompts against the context to perform tasks like generating a code review, identifying missing tests, or creating GitHub issues.

### From solo-mode to multiplayer

What particularly caught my attention was Harper's final point about the loneliness of this workflow.

> My main complaint about these workflows is that it is largely a solo endeavor - i.e. the interfaces are all single player mode.

He notes that the tools are largely single-player, making it difficult to collaborate as a team. This connects directly to my previous post, "[Beyond the vibe: structuring AI-assisted development](/blog/beyond-the-vibe-structuring-ai-assisted-development/)". I believe the "rulebook" or "constitution" approach we discussed there is the key to unlocking team-based, AI-assisted development.

By establishing a shared set of rules—whether in a `CLAUDE.md`, a `.cursor/rules` directory, or a similar system—we create a unified standard for how the AI should behave. This acts like a traditional linter or code style guide, but for AI collaboration. It ensures that every developer's AI assistant is working from the same playbook, respecting the same architectural boundaries, and following the same coding conventions.

This transforms the process from a series of isolated "single-player" sessions into a coordinated "multiplayer" effort, where the AI becomes a consistent and predictable partner for the entire team.
