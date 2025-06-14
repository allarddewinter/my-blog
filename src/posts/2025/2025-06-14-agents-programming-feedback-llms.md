---
title: "Agents: Programming with feedback-driven LLMs"
description: "How LLM agents become dramatically more capable when given tools to interact with their environment."
date: 2025-06-14
tags: [technology, programming, ai, agents, productivity]
---

David Crawshaw shares a good perspective on [how LLMs transform into powerful programming assistants](https://crawshaw.io/blog/programming-with-agents) when given tools to interact with their environment. While definitions of "AI agents" vary widely, David aligns with Simon Willison and Solomon Hykes' view of agents as systems that repeatedly interact with their environment; what Solomon calls ["wrecking its environment in a loop"](https://simonwillison.net/2025/Jun/5/wrecking-its-environment-in-a-loop/).

*Via [Pointer.io's Essential Reading For Engineering Leaders newsletter](https://pointerio.beehiiv.com/p/issue-624)*

{% image "/assets/images/posts/wrecking-its-environment.jpeg", "Definition of an agent: An LLM 'wrecking' its environment in a loop", "Definition of an agent by Solomon Hykes (photo from Simon Willison)", "eager" %}

Unlike standalone language models that operate in isolation, agents can execute commands, read files, and iterate based on feedback; this fundamentally changes their capabilities. 
The core insight: Agents are essentially feedback loops where an LLM can:
- Run test suites and interpret results
- Execute bash commands to explore codebases
- Apply patches and validate changes
- Access documentation through web searches

> "Agents are LLMs with environmental feedback. Just as humans thrive in environments with feedback, LLMs go from nice demos to useful programmers when given a surprisingly small core set of tools."

A practical example: When an agent runs your test suite and encounters failures, it can:
1. Analyse error messages
2. Modify the problematic code
3. Re-run tests
4. Repeat until passing

This transforms coding from a "whiteboard exercise" into an interactive process where the LLM can validate its own work. As David notes:

> "The result, compared to an LLM generating code without these tools available is significantly different. API use is greatly improved because the agent can web search for documentation and `curl` the docs into its context window."

While agents currently work slower than traditional coding (minutes vs seconds, meaning they are still relatively expensive), they enable completing "dreary tasks" that might otherwise take days, freeing developers for higher-value work. 

### Containerized agent environments
The future likely involves containerized agent environments, isolated execution spaces that solve two key challenges:
1. **Safety**: Prevents agents from accessing sensitive credentials or systems
2. **Parallelism**: Allows multiple agents to work simultaneously without conflicts

These sandboxed environments let developers safely run agents while maintaining their normal workflow, with changes extracted as diffs or branches when complete. 
