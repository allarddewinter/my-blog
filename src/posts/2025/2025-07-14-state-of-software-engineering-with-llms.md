---
title: "The state of software engineering with LLMs in 2025"
description: "A look at how LLMs are changing software development, inspired by Gergely Orosz's recent article, and my own plans for adopting these new tools."
date: 2025-07-14
tags: [technology, llms, development, ai, tools]
---

Gergely Orosz at The Pragmatic Engineer recently published an overview titled "[Software engineering with LLMs in 2025: reality check](https://newsletter.pragmaticengineer.com/p/software-engineering-with-llms-in-2025)". The article provides a grounded look at how Large Language Models (LLMs) are being used in the industry today, moving beyond the hype to see what is actually working.

He covers the spectrum from AI startups dogfooding their own products to how Big Tech organisations are integrating these tools.

### Corporate adoption and progress

The article highlights how companies like Google and Amazon are systematically integrating AI into their internal development workflows. Google has built AI features into its custom toolchain, from the Cider IDE to its Critique code review system. They are taking a cautious but steady approach, aiming to build trust with their engineers.

Amazon is heavily promoting its own tool, Amazon Q, and is seeing significant internal adoption of the Model Context Protocol (MCP). This protocol makes it trivial to turn internal APIs into servers that AI agents can interact with, automating tasks across different systems. This widespread adoption is a direct result of the "API-first" mandate Jeff Bezos instituted years ago.

### The view from experienced engineers

For me, the most interesting part of the article was the perspective of seasoned software engineers. Many, like Armin Ronacher (creator of Flask), have shifted from being sceptical to becoming believers in the productivity gains offered by agentic AI tools. The sentiment is that models like Claude have become "shockingly good".

This enthusiasm is shared by others, including Simon Willison, whose work I follow closely. The consensus is that we have reached an inflection point where these tools are no longer just toys but are fundamentally changing how we build software. Kent Beck, a creator of Extreme Programming, is quoted as saying he is "having more fun programming than I ever had in 52 years". When engineers with decades of experience express this level of excitement, it is a clear signal that a significant shift is happening.

### My own next steps with AI tools

Reading this has sharpened my own thinking and plans for the near future. I want to integrate these agentic tools more deeply into my workflow, especially those that connect directly with Git.

I have been using Cline in VS Code, and my experience has been mixed. Sometimes it works very well, but at other times it falls short. I plan to dedicate more time to mastering it, particularly its Git integration and the rule system. I also intend to experiment with Cursor, which looks very promising.

Perhaps the most significant next step for me is to improve my use of Test-Driven Development (TDD). The article reinforces the idea that agents work best when they have clear goals and feedback loops, and a solid test suite provides exactly that. An LLM can work against the tests to ensure its output complies with the requirements.

While I have experience writing tests in Python, I need to explore how to effectively apply this to static sites like this blog. It is a new area for me, and I am keen to learn how to get it working properly.

### A time for experimentation

The key takeaway from Gergely's article is that the landscape of what is "cheap" and "expensive" in software development has changed. It is time to experiment. The tools are maturing at an incredible pace, and I am excited to see how they will continue to evolve and enhance the way we create.