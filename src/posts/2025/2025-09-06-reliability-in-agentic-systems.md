---
title: "Building Reliable AI Agents: Notes on Evaluation and Contracts"
description: "A concise look at why evaluating AI agents is essential and how the 'contractor' model can improve their reliability in business."
date: 2025-09-06
tags: [technology, ai, agents, reliability, strategy]
---

As AI agents are integrated into business operations, ensuring their reliability is essential. A new book, *Agentic Design Patterns* by Antonio Gulli, offers a practical guide for building robust agentic systems. You can find it on [Amazon](https://www.amazon.com/Agentic-Design-Patterns-Hands-Intelligent/dp/3032014018/) or read the [pre-print version on Google Docs](https://docs.google.com/document/d/1rsaK53T3Lg5KoGwvf8ukOUvbELRtH-V0LnOIFDxBryE).

The foreword by Marco Argenti, CIO of Goldman Sachs, clearly states the problem:

> The hard truth is that you cannot simply overlay these powerful new tools onto messy, inconsistent systems and expect good results. Messy systems plus agents are a recipe for disaster.

So, how do we build and monitor agents to be dependable? The book's chapter on "Evaluation and Monitoring" provides a clear framework.

### How to Evaluate Agents

Traditional software testing is not enough for probabilistic systems like AI agents. We need continuous evaluation. Key techniques include:

*   **Response Assessment:** Check if the agent's output is correct using methods that understand meaning, not just exact text matches.
*   **Performance Monitoring:** Track metrics like response speed and resource consumption to ensure the agent runs efficiently.
*   **Qualitative Assessment:** Use another AI as a "judge" (LLM-as-a-Judge) to evaluate subjective qualities like helpfulness based on a clear rubric.[^1]
*   **Trajectory Analysis:** Review the sequence of steps an agent took to understand its reasoning process and spot inefficiencies.

### The 'Contractor' Model for Reliability

To achieve the reliability needed for business-critical tasks, the book proposes evolving from simple agents to "contractors."

> This contractor framework reimagines AI interaction by embedding principles of formal specification, negotiation, and verifiable execution directly into the agent's core logic.

This model is built on four pillars:

1.  **The Formalised Contract:** Define the task with a detailed specification, not a vague prompt. This makes the outcome objectively verifiable.
2.  **Dynamic Negotiation:** The agent can analyse the contract and clarify ambiguities *before* starting work, preventing errors from misunderstandings.
3.  **Quality-Focused Execution:** The agent prioritises correctness, operating in a loop of generating, self-validating, and correcting its work until quality standards are met.
4.  **Hierarchical Decomposition:** A primary contractor can break a large task into smaller sub-tasks, creating formal "subcontracts" for other specialised agents.

### Conclusion

Building trust in AI agents requires a shift in approach. By implementing robust evaluation frameworks and adopting the "contractor" model—which relies on formal agreements and verification—we can move from unpredictable tools to reliable systems fit for critical business applications.

[^1]: The LLM-as-a-Judge approach is powerful but has limitations. Its effectiveness is constrained by the capabilities of the judge model, and it may overlook errors in intermediate reasoning steps if only the final output is assessed.