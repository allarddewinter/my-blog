---
title: "Fixing the context window for LLM agents"
description: "A look at key strategies for managing context in LLM agents, inspired by an article from dbreunig.com and insights from Cognition AI."
date: 2025-08-16
tags: [technology, ai, llm, agents]
---

I recently came across an article by dbreunig.com, "[How to Fix Your Context](https://www.dbreunig.com/2025/06/26/how-to-fix-your-context.html)", they neatly summarise several ideas on how to manage the context window for Large Language Model (LLM) agents. As models get ever-larger context windows, it is tempting to think we can just "throw it all in". However, this approach often leads to degraded performance.

The article brings an information-management perspective to the problem, with some principles from the days before LLMs became mainstream. It all comes down to the saying: "Garbage in, garbage out."

### The problem with long contexts

The core issue is that every token in the context influences the model's response. The article identifies four main ways this can go wrong, which can be summarised as follows:

| Failure Mode         | Description                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------- |
| **Context Poisoning**  | An error or hallucination gets into the context and is repeatedly referenced.                |
| **Context Distraction**| The context becomes so large that the model focuses too much on it, ignoring its training. |
| **Context Confusion**  | Superfluous information in the context is used by the model to generate a low-quality response. |
| **Context Clash**      | New information or tools added to the context conflict with existing information.            |

### Six tactics for context management

To tackle these issues, the post outlines six key tactics for actively managing an agent's context.

> Every time a model ups the context window ante, a new “RAG is Dead” debate is born... But, as we covered last time: if you treat your context like a junk drawer, the junk will influence your response.

| Tactic                 | Description                                                                     |
| ---------------------- | ------------------------------------------------------------------------------- |
| **RAG**                | Selectively adding only relevant information to the prompt.                     |
| **Tool Loadout**       | Applying RAG principles to select only the most relevant tool definitions.      |
| **Context Quarantine** | Isolating different tasks into their own threads, each with a dedicated context.|
| **Context Pruning**    | Actively removing irrelevant or unneeded information from the context.          |
| **Context Summarisation**| Condensing the accrued context into a shorter summary.                          |
| **Context Offloading** | Using an external tool, like a scratchpad, to store notes outside the context.  |

### A closer look at Provence

I was particularly interested in the "Context Pruning" tactic and the mention of a model called [Provence](https://arxiv.org/abs/2501.16214). This isn't just a simple filter. Provence is a specialised model trained to be an efficient and robust context pruner.

It works by framing the task as "sequence labeling", where it learns to identify and keep only the relevant sentences in a body of text for a given query. What makes it particularly clever is that it can be unified with a reranker—a standard component in a RAG pipeline—which means it can prune the context with almost no additional computational cost. It is trained on diverse data, making it effective across different domains out-of-the-box.

### A practical perspective on multi-agent systems

The idea of "Context Quarantine" is powerful, but it also highlights the biggest challenge in agent architecture. A recent post from Cognition AI, "[Don’t Build Multi-Agents](https://cognition.ai/blog/dont-build-multi-agents)", offers a strong, practical opinion on this.

The author argues that most multi-agent systems are fragile because they fail to share context effectively. If sub-agents work in isolation, their outputs can be based on conflicting assumptions, leading to poor results when the main agent tries to combine them.

> **Principle 1**: Share context, and share full agent traces, not just individual messages.
>
> **Principle 2**: Actions carry implicit decisions, and conflicting decisions carry bad results.

This perspective from Cognition AI does not contradict the tactics from dbreunig's article; instead, it reinforces them. It serves as a real-world example of why disciplined context engineering is essential. Building agents that can truly work in parallel requires solving the difficult problem of cross-agent context passing, which remains a significant challenge.

### Final thoughts

The key takeaway from these articles is that massive context windows are a powerful capability, but not an excuse for sloppy information management. The principles of RAG, pruning, and selective inclusion are still important. As the dbreunig article concludes, it is the job of the agent designer to be deliberate about what goes into the context.

> The key insight across all the above tactics is that context is not free. Every token in the context influences the model’s behavior, for better or worse... As you build your next agent or optimize an existing one, ask yourself: Is everything in this context earning its keep?

