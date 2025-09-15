---
title: "A Practical Guide to Coding with LLMs: Dos and Don'ts"
description: "A structured approach to using AI coding assistants, moving from contemplative prompting to scalable agentic workflows."
date: 2025-09-15
tags: [technology, ai, development, llm, productivity]
---

The way we build software is changing. Instead of writing code line-by-line, developers are increasingly orchestrating AI assistants to generate, refactor, and even debug entire features. As I have explored in previous posts, this shift requires a deliberate and structured approach to be effective.

Drawing from the experiences of developers like Matt Webb, Zach Wills, and Taylor, we can identify a set of principles for working with tools like Claude Code. These principles distinguish between productive, structured collaboration and chaotic, unproductive "vibe coding".

### The Two Faces of "Vibe Coding"

According to Matt Webb's reflections in [What I think about when I think about Claude Code](https://interconnected.org/home/2025/09/12/claude), working with an AI agent introduces a new, slower rhythm to development. It involves a loop of composing a thoughtful prompt and then waiting. This contemplative pace has an unexpected benefit: it helps avoid what Linda Stone called "email apnea," a tendency to hold one's breath and induce stress during focused screen work.[^1]

> With Claude Code, I don’t have that metronome shortening my breath. I do not subject myself to “code apnea.” So it becomes calm, contemplative.

This calm state, however, is only possible when the interaction is structured correctly. If problems are too large or vague, you fall into the trap of "vibe coding"—a process that produces code which may function but is often tangled and impossible for humans to edit.

However, as I discussed in "[The last hurrah of human coding](/blog/the-last-hurrah-of-human-coding/)", this term has another meaning. For senior engineers, "vibe coding" can be a superpower, but only when it happens within a highly structured environment. The key is to give the agent "large, but not too large, extremely well defined problems." As I noted previously, the path to successfully using these tools is through structure, not chaos.

### A Framework for Effective AI Collaboration

To move [beyond the vibe and toward structured development](/blog/beyond-the-vibe-structuring-ai-assisted-development/), we need a systematic approach. The central principle, articulated in a detailed case study by Taylor on building a tool called [*diggit.dev*](https://taylor.town/diggit-000), is that **the human must be the architect.** LLMs are excellent at executing well-defined tasks, but they are not designers.

Taylor proposes a phased, human-led workflow:

1.  **Viability:** Get the most basic version of the application running, even if it is broken.
2.  **Observability:** Make the application "loud" by adding comprehensive error handling and progress reporting. This is critical for debugging what the LLM produces.
3.  **Features:** Add core functionality through a series of small, focused tasks.
4.  **Styling:** Refine the user interface.

This process relies on giving the LLM atomic prompts for single, clear goals. Before writing any prompts, the human does the heavy lifting of creating plaintext mockups, defining the data model, and preparing copious notes. This "first swing" puts the LLM in a position to succeed.

### Scaling Up with an Agentic Workflow

For more complex projects, you can extend this structured approach by using multiple, specialist AI agents. In his post on [using sub-agents to parallelize development](https://zachwills.net/how-to-use-claude-code-subagents-to-parallelize-development/), Zach Wills outlines a sophisticated workflow built on three principles:

1.  **Parallel Execution:** Assign independent tasks (e.g., backend API, frontend component, QA tests) to different specialist agents to run concurrently.
2.  **Sequential Handoffs:** Create an automated assembly line where the output of one agent (e.g., a product-manager agent defining a feature) becomes the input for the next (e.g., an engineer agent implementing it).
3.  **Context Isolation:** Give each specialist agent its own dedicated context window. This prevents quality degradation, as each agent can focus entirely on its task without losing crucial details.

This method transforms the developer's role into that of an orchestrator, managing a team of AI agents to build software at a much faster pace. However, this powerful approach is not without its practical trade-offs, particularly regarding cost. As usage is typically priced per token—for both the input you provide and the output you receive—these advanced workflows can become expensive. Chaining multiple agents, especially in iterative loops, will increase your token usage significantly. This creates a direct trade-off: you gain development velocity and higher output at the expense of higher operational costs. Managing these "token economics" becomes a crucial part of orchestrating AI workflows at scale.

### Summary of Dos and Don'ts

To make these concepts practical, here is a summary of best practices for coding with LLMs.

| Do | Don't |
| --- | --- |
| **Be the architect.** Spend time on high-level design, data models, and planning before prompting. | **Outsource architectural decisions.** Do not expect the LLM to design a coherent system from a vague idea. |
| **Use atomic, well-defined prompts.** Give the agent one clear, focused task at a time. | **Engage in chaotic "vibe coding."** Avoid giving prompts that are too large or ill-defined, as this leads to write-only code. |
| **Codify conventions in a "rulebook".** Use files like `.cursor/rules` to provide persistent context and constraints. | **Let the AI touch "sacred boundaries."** Forbid the AI from modifying tests, database migrations, or security-critical code. |
| **Make it observable early.** Add logging and error handling so you can see what the agent is doing. | **Run the agent without supervision.** Avoid using modes like `--dangerously-skip-permissions`. Your role is approval and course correction. |
| **Choose LLM-friendly tools.** Select languages and frameworks with clear syntax and descriptive errors (e.g., Elm). | **Ignore the agent's limitations and costs.** Be aware of context windows, non-determinism, and the financial cost of token usage (both input and output). |

### Conclusion

Effectively using AI in development is less about mastering a specific tool and more about adopting a new mindset. The developer's primary skill is shifting from direct implementation to system design and process orchestration. As I concluded in a previous post, this changes the very nature of senior engineering.

> Your role as a senior engineer has fundamentally shifted. You’re no longer just writing code—you’re curating knowledge, setting boundaries, and teaching both humans and AI systems how to work effectively.

By providing structure, clarity, and thoughtful direction, you can transform an LLM from a simple autocomplete tool into a powerful collaborator.

[^1]: As described by Matt Webb, Linda Stone observed that 80% of people experienced compromised breathing while working on email, a phenomenon she termed "email apnea." This shallow breathing or breath-holding contributes to stress.
