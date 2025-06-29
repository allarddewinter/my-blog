---
title: "The last hurrah of human coding"
description: "A reflection on Alex MacCaw's concept of 'vibe coding' for senior engineers and how it aligns with the need for structured, architect-led AI collaboration."
date: 2025-06-29
tags: [technology, ai, vibe-coding, development, cursor]
---

I just read an excellent article by Alex MacCaw titled "[How to Vibe Code as a Senior Engineer](https://blog.alexmaccaw.com/how-to-vibe-code-as-a-senior-engineer/)", and it captures the current excitement around AI-assisted development perfectly. He describes "vibe coding" not as a tool for junior developers to get by, but as a genuine superpower for experienced engineers.

> It feels like rubbing a magic lamp and whispering your intent to a genie.

He argues that with the latest generation of AI models, a senior engineer's productivity can be amplified to an incredible degree. It is a shift from writing every line of code to guiding a powerful, knowledgeable, but context-less assistant. As he puts it, we are in "the last hurrah of human coding" 😯😅, a magical time where our judgment and experience are still essential to guide these powerful new tools.

### The senior engineer's toolkit for vibe coding

Alex does not just celebrate the concept; he provides a practical toolkit for making it work effectively. His approach is about creating a highly structured environment where the AI can perform at its best. His key requirements include:

1.  **A solid foundation:** Starting with a rich monorepo scaffold gives the AI clear examples and patterns to follow. A monorepo is particularly effective because all the code is in one place, making it simple to provide the necessary context to the AI.
2.  **Clear rules of engagement:** Using a tool like Cursor's `.cursor/rules` to codify project conventions is critical. This acts as a rulebook for your AI assistant. For example, you can define a strict development cycle: force the AI to create a plan before coding, automatically run type-checking and linting after every change, and even forbid it from trying to start a dev server.
3.  **Providing the right context:** AI models have no memory, so it is our job to manually provide all relevant files—including TypeScript definitions—to get quality output.
4.  **A capable editor:** He recommends Cursor for its tight integration of linting, type-checking, and context management, allowing for rapid iteration.
5.  **Using the best models:** He advises against sacrificing quality for cost, advocating for top-tier models like Claude Opus 4 or Gemini 2.5 Pro.

This is not about letting the AI run wild; it is about creating the perfect conditions for it to succeed under your direction.

### From vibe to structure

This approach strongly connects with my own thoughts, which I shared in a previous post, "[Beyond the vibe: structuring AI-assisted development](/blog/beyond-the-vibe-structuring-ai-assisted-development/)". In that article, I discussed the need for guardrails and a clear "constitution" to make AI collaboration professional and scalable.

Alex's practical advice feels like the direct implementation of these principles. His "scaffold" and "rules" are the very guardrails and rulebooks I was exploring. It confirms that the path to successfully using these tools in a professional setting is through structure, not chaos.

As I wrote previously, the role of the senior developer is changing:

> Your role as a senior engineer has fundamentally shifted. You’re no longer just writing code—you’re curating knowledge, setting boundaries, and teaching both humans and AI systems how to work effectively.

The senior developer becomes the architect of the system that produces the code, embedding their expertise into the process itself.

### The architect remains in charge

Alex touches on a crucial point when he lists what AI is bad at: "Taste & Architecture." This is where human experience remains irreplaceable. An AI can generate code at an astonishing rate, but it cannot understand your project's long-term vision, its architectural principles, or the subtle trade-offs that define a robust system.

This reinforces my belief that AI does not diminish the importance of software architecture; it elevates it. A well-defined architecture, clear boundaries, and explicit rules are the map and compass the AI needs to navigate your codebase. Without them, you are just generating technical debt faster than ever before.

It is an exciting time to be building software. The tools are becoming magical, but they demand a new level of discipline and architectural clarity from us. We are not just coders anymore; we are becoming the conductors of a powerful orchestra.