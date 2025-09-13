---
title: "Working with AI Wizards and the Need for Explainability"
description: "Ethan Mollick's 'wizard' analogy for AI highlights a growing problem: as models become more powerful, their processes become more opaque, creating a critical need for explainability."
date: 2025-09-13
tags: [technology, ai, strategy, explainability]
---

In a recent post, [Ethan Mollick describes a fundamental shift in how we interact with AI](https://www.oneusefulthing.org/p/on-working-with-wizards). He argues we are moving away from a "co-intelligence" model, where we act as collaborators guiding an AI intern, towards working with a "wizard." In this new model, we provide a vague request and receive a sophisticated, often impressive, output with little to no insight into the process.

Ethan illustrates this with several powerful examples:
*   **NotebookLM:** Generated a coherent video summary of his book and articles, but offered no explanation for how it selected its key points or structured the narrative.
*   **GPT-5 Pro:** Analysed his academic paper, ran its own code to verify results, and found a subtle error that had gone unnoticed for years. The output was remarkable, but the method was a complete black box.
*   **Claude 4.1 Opus:** Transformed a multi-tab Excel spreadsheet for a new business case, preserving the original lesson's goal. It reported its steps, but these were summaries, not a verifiable log of its actions.

This leads to what Ethan calls the "wizard problem." The results are good, sometimes exceptionally so, but we become a passive audience, unable to verify the work without significant effort.

> The paradox of working with AI wizards is that competence and opacity rise together. We need these tools most for the tasks where we're least able to verify them.

This observation is accurate. Interacting with these advanced models can feel like outsourcing our thinking, which might make us lazy. But the more important question is whether this opacity is an acceptable trade-off. For casual tasks, perhaps. For professional and scientific work, it is a significant barrier.

In scientific research, the process is as important as the result. If an AI wizard finds a novel insight in a dataset, its discovery is of limited value if it cannot explain the steps it took to get there. We need to understand the intermediate steps to trust the conclusion.

This is not a new problem. I have seen the same requirement in business settings for machine learning models. Stakeholders are rightly hesitant to trust a model's prediction—whether for credit risk, sales forecasting, or customer churn—unless they can understand the factors and logic driving its conclusion. The same will be true for generative AI.

The way forward is to build explainability into the core of these models.[^1] The ability for an AI to provide a step-by-step, verifiable account of its process will be critical for adoption in high-stakes fields. There is a clear business opportunity for companies that can move beyond the black box and deliver transparent, trustworthy AI systems.

Ethan concludes that we must develop a new literacy for working with wizards: learn when to use them, become better judges of their output, and embrace a "provisional trust." While this is practical advice for today, the real goal should be to demand more from our tools. We need wizards that are willing to show us their spellbooks.

[^1]: I have a feeling that some open-source models are already making progress in this area, though I have not verified this completely. Their architecture seems to lend itself better to exposing the internal state and reasoning process.