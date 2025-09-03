---
title: "Quantifying the Environmental Impact of Large Language Models"
description: "Mistral AI has published a comprehensive lifecycle analysis of its models, setting a potential standard for measuring the environmental impact of artificial intelligence."
date: 2025-09-03
tags: [technology, ai, sustainability, llm]
---

As artificial intelligence systems become more integrated into our digital infrastructure, understanding their environmental impact is a growing concern. While discussions often focus on carbon emissions, the full picture includes water consumption and material resource depletion.

In a move towards greater transparency, the French company Mistral AI published [a comprehensive lifecycle analysis (LCA)](https://mistral.ai/news/our-contribution-to-a-global-environmental-standard-for-ai) of its models. The study, conducted with leading environmental consultancies, is one of the first of its kind and aims to establish a standard for evaluating the environmental footprint of AI.

### Key Findings from the Mistral Report

The analysis tracked the environmental impact of Mistral Large 2 (a 123-billion-parameter model) over 18 months, covering everything from data centre construction to model training and inference.

**Training Impacts:**
*   **Greenhouse Gases:** 20,400 metric tons of CO₂e.
*   **Water Consumption:** 281,000 cubic metres.
*   **Resource Depletion:** 660 kg Sb eq.[^1]

To put these numbers in context, the training emissions are roughly equal to the annual emissions of 4,400 petrol-powered cars. The water consumed is equivalent to what an average U.S. family of four would use in 500 years, according to an analysis in [Andrew Ng's The Batch newsletter](https://info.deeplearning.ai/ai-powered-phones-get-proactive-robot-antelope-joins-herd-llm-environmental-impacts-get-measured-1).

**Inference Impacts (per 400-token response):**
*   **Greenhouse Gases:** 1.14 gCO₂e (similar to watching a 10-second YouTube clip in the U.S.).
*   **Water Consumption:** 45 millilitres (about 3 tablespoons).
*   **Resource Depletion:** 0.16 mg Sb eq.

The report also breaks down where these impacts originate.

| Impact Source | Greenhouse Gas Emissions | Water Consumption | Materials Consumption |
| :--- | :--- | :--- | :--- |
| Training & Inference | 85.5% | 91% | 29% |
| Server Lifecycle | 11% | 5% | 61% |
| Network Traffic | < 1% | < 1% | < 1% |

This data shows that while the operational phase (training and inference) dominates emissions and water use, the manufacturing and transport of hardware are the primary drivers of material resource depletion.

### Why This Matters

Andrew Ng's newsletter, *The Batch*, summarises the core issue well, explaining why such analysis is critical for the future of the technology.

> AI consumes enormous amounts of energy and water, and finding efficient ways to train and run models is critical to ensure that the technology can benefit large numbers of people. Mistral’s approach provides a standardized approach to assessing the environmental impacts.

### A Proposed Standard and Takeaways

The initiative by Mistral AI is a crucial step towards establishing industry-wide transparency. By publishing a methodology and its results, Mistral provides a framework that other companies can adopt, which could enable more direct and objective comparisons between models.

This push for transparency coincides with a trend towards greater model efficiency. Newer models and architectures are often more resource-efficient. While commercial incentives to reduce operational costs are a likely driver for this, the resulting progress in sustainability is a positive outcome.

Mistral's report proposes that a useful standard should include:
1.  The absolute environmental impacts of training a model.
2.  The marginal impacts of inference.
3.  The ratio of total inference impacts to total lifecycle impacts.

Having a clear, standardised picture of AI's consumption of resources is essential for managing them effectively as demand continues to rise. This report provides a valuable baseline for the industry to build upon.

[^1]: Abiotic Resource Depletion (ADP) quantifies the depletion of non-renewable resources like metals and minerals. Values are standardised relative to Antimony (Sb), a scarce resource, providing a uniform unit of `kg Sb eq`.
