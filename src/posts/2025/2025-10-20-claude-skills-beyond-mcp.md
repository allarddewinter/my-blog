---
title: "Claude Skills: A Simpler Approach to Specialised AI Tasks"
description: "How Anthropic's Skills framework offers a more natural, library-like extension to LLM capabilities compared to MCP."
date: 2025-10-20
tags: [technology, ai-agents, prompt-engineering, llms, resources]
---

From: https://simonwillison.net/2025/Oct/16/claude-skills/

Claude Skills represent a refreshingly simple approach to extending AI capabilities—functioning like a library where the model acts as a librarian, accessing only relevant resources when needed. This contrasts with more complex protocols like MCP, offering a natural extension to how language models handle specialised tasks.

> Skills are conceptually extremely simple: a skill is a Markdown file telling the model how to do something, optionally accompanied by extra documents and scripts that the model can run to help it accomplish the tasks described by the skill.

The core innovation lies in its minimalism:

- **Context-aware loading**: Skills only consume tokens when relevant to the current task
- **Library-like organisation**: Each skill is a self-contained folder of instructions and resources
- **Natural integration**: The model accesses skills as needed, like a librarian retrieving specific materials

This approach addresses key limitations of previous systems:

| Feature | Skills | MCP |
|---------|--------|-------|
| Complexity | Simple Markdown files | Full protocol specification |
| Token efficiency | Only loads metadata initially | Consumes thousands of tokens upfront |
| Implementation | Single files or small folders | Requires dedicated infrastructure |
| Adaptability | Easy to iterate and share | More rigid implementation |

The library analogy proves particularly apt—rather than forcing the model to carry all knowledge at once, Skills allow it to reference external resources only when necessary. This creates a more sustainable pattern for extending AI capabilities without overwhelming the model's context window.

What makes Skills compelling is their accessibility. Unlike MCP's comprehensive protocol, Skills require minimal setup:

- A skill is essentially a well-structured Markdown file
- Optional supporting scripts can be added as needed
- The system only loads relevant skills during a session

This simplicity enables rapid iteration and sharing. As Willison notes, "The core simplicity of the skills design is why I'm so excited about it." The approach leverages what LLMs do best—interpreting text instructions—while outsourcing complex coordination to the underlying system.

The contrast with MCP is instructive. Where MCP required significant infrastructure investment, Skills work with existing coding environments, making them more practical for immediate implementation. This shift from protocol to pattern represents a maturation in how we extend AI capabilities.

From: https://github.com/anthropics/skills

The official skills repository demonstrates this simplicity in practice. Each skill is self-contained in its own directory with a `SKILL.md` file containing instructions and metadata. The repository includes both open-source examples and the proprietary document creation skills that power Claude's native document capabilities. The basic structure requires only two fields in the YAML frontmatter: a unique name and a description of when to use the skill.