---
title: "Software Factories and the Quest for Agentic Proof"
description: "Exploring the shift toward 'Dark Factories' where agents write and validate code without human intervention."
date: 2026-02-12
tags: [technology, coding-agents, software-engineering, automation]
---

The landscape of software development has reached a significant inflection point. We are moving beyond simple code assistance toward "Software Factories"—environments where human engineers no longer write or even review code. This shift, highlighted by Simon Willison in [How StrongDM’s AI team build serious software without even looking at the code](https://simonwillison.net/2026/Feb/7/software-factory/), suggests a future where the primary role of a developer is to build the systems that build the software.

### The Dark Factory Model

The concept of the "Dark Factory," a term borrowed from manufacturing to describe fully automated plants, is being applied to software by teams like StrongDM. Their approach is governed by radical rules: code must not be written or reviewed by humans.

> "We built a Software Factory: non-interactive development where specs + scenarios drive agents that write code, run harnesses, and converge without human review."

To make this viable, StrongDM utilizes several advanced techniques:

| Technique | Description |
| :--- | :--- |
| **Scenario Testing** | End-to-end user stories kept as "holdout sets" that agents cannot see, used to validate satisfaction. |
| **Digital Twin Universe** | Behavioral clones of third-party APIs (like Slack or Okta) built by agents to allow high-volume testing. |
| **Gene Transfusion** | Using agents to extract patterns from existing systems to reuse them in new contexts. |
| **Pyramid Summaries** | Multi-level documentation that allows agents to scan quickly and zoom in on details. |

### Proving That Code Works

If humans are not reviewing the code, the burden of proof shifts entirely to automated validation. Simon introduces two tools in [Introducing Showboat and Rodney, so agents can demo what they’ve built](https://simonwillison.net/2026/Feb/10/showboat-and-rodney/) designed to address this. These tools allow agents to demonstrate their work to human overseers through generated artifacts rather than raw code.

*   **Showboat:** A CLI tool that allows agents to construct Markdown documents. It records commands, outputs, and screenshots to "show" the progress of a feature.
*   **Rodney:** A browser automation tool designed for agents to perform web-based tasks and accessibility audits, feeding the results back into Showboat.

> "The more code we churn out with agents, the more valuable tools are that reduce the amount of manual QA time we need to spend."

### Economic and Professional Implications

This transition is not without its challenges. StrongDM suggests that a high-performing software factory might require a spend of $1,000 per day per engineer on LLM tokens. While this cost is significant, it raises a fundamental question: is it more profitable to pay for tokens than for a massive QA department?

For the individual engineer, the concern is twofold: how to remain relevant and how to maintain a business model when competitors can use similar agents to clone features rapidly. The focus is shifting from the "how" of implementation to the "what" of system design and verification. We are moving from being writers to being architects of automated pipelines.[^1]

[^1]: This reflects a broader trend where the value of a software engineer is increasingly found in their ability to define requirements and validation criteria rather than syntax.
