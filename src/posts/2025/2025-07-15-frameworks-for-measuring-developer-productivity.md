---
title: "Frameworks for measuring developer productivity"
description: "A look at the DX frameworks for measuring AI and developer productivity, placed in the context of other models like DORA and SPACE."
date: 2025-07-15
tags: [strategy, developer productivity, ai, metrics]
---

Quantifying the impact of AI on software development can be a challenge. I came across two resources from DX that provide a structured approach: the [DX AI Measurement Framework™](https://getdx.com/research/measuring-ai-code-assistants-and-agents/) and the foundational [DX Core 4](https://getdx.com/research/measuring-developer-productivity-with-the-dx-core-4/).

The Core 4 addresses overall engineering health, while the AI framework focuses on the specific impact of AI tools. Here is a summary of their key indicators:

| Framework | Dimension | Focus |
| :--- | :--- | :--- |
| **DX Core 4** | Speed | Measures PR throughput and perceived rate of delivery. |
| | Effectiveness | Assesses the developer experience (DXI) and time allocation. |
| | Quality | Tracks change failure rate and time to restore service. |
| | Business Impact | Connects engineering work to organisational goals. |
| **AI Framework** | Utilization | Tracks the adoption and active usage of AI tools. |
| | Impact | Measures direct time savings and indirect productivity gains. |
| | Cost | Monitors usage to identify high-ROI use cases and manage expenses. |

### The developer's changing role

The articles offer an interesting perspective on the two ways the developer's role is changing. First, existing developers will increasingly act as leads for teams of AI agents, shifting their focus to directing and overseeing automated systems.

Second, AI is lowering the barrier to entry for software creation. The articles note that roles like product managers, designers, and business analysts are now using AI to generate working software. This expands the definition of who a "developer" is within an organisation. Consequently, when applying metrics, it becomes important to distinguish between production-grade contributions and disposable, AI-generated prototypes to ensure the data is measured in the right context.

### Other productivity frameworks

The DX framework is a useful model, but it is one of several in the landscape of developer productivity. Other well-known frameworks include:

-   **DORA Metrics:** Originating from the DevOps Research and Assessment (DORA) team at Google, these four metrics (Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore Service) are highly focused on the speed and stability of the software delivery process. They are used effectively for measuring the health of a CI/CD pipeline.
-   **SPACE Framework:** Developed by researchers from Microsoft and the University of Victoria, this is a more holistic model that covers five dimensions: Satisfaction & Well-being, Performance, Activity, Communication & Collaboration, and Efficiency & Flow. Its inclusion of developer satisfaction provides a human-centric balance to purely output-based metrics.

The DX Core 4 framework actually aims to encapsulate principles from both DORA and SPACE, creating a unified system. Understanding these different models provides a broader context for choosing the metrics that best fit an organisation's specific goals.

### The importance of starting early

Regardless of the framework chosen, the articles make a strong case for establishing baselines early. This can begin with self-reported data to get an initial understanding. It is critical to communicate that these metrics are for understanding tool effectiveness and guiding investment, not for individual performance reviews. This avoids gamification and helps ensure the data remains meaningful.