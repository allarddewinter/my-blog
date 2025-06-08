---
title: "Actionable strategy: implementing an ML platform in an energy business"
description: "A practical guide to applying Will Larson's strategy framework for selecting and deploying a machine learning platform, addressing common organisational challenges."
date: 2025-06-08
tags: [strategy, technology, machine-learning]
---

In a large organisation, making significant technology decisions, such as selecting a machine learning platform, demands more than just a good idea. It requires a clear, actionable strategy to ensure the chosen solution truly integrates and delivers value. I have found Will Larson's structured approach to engineering strategy to be a valuable tool for this.

Will's framework, detailed in his "[Components of Engineering Strategy](https://lethain.com/components-of-eng-strategy/)" article, breaks down strategy creation into five practical steps:

1.  **Exploring:** Understanding the landscape of existing ideas and practices
2.  **Diagnosing:** Deep dive into the specific problem and its context
3.  **Refinement:** Testing and validating initial ideas
4.  **Policy:** Making concrete decisions and defining guidelines
5.  **Operations:** Implementing mechanisms to ensure adoption and success

These steps are designed to prevent common pitfalls and provide a robust path from concept to execution. I will focus on how the steps of exploration, diagnosis, and operations can be practically applied to a challenge I faced some time ago: implementing an ML platform within an offshore wind business. I draw on Will's insights from "[Exploring for Strategy](https://lethain.com/exploring-for-strategy/)", "[Diagnosis for Strategy](https://lethain.com/diagnosis-for-strategy/)", and "[Operations for Strategy](https://lethain.com/operations-for-strategy/)", together with a systems engineering perspective.

### Exploration: gathering the facts on ML platform options

{% image "/assets/images/posts/hero-explore.png", "All phases in strategy, exploration highlighted" %}

The exploration phase provides the opportunity to gather comprehensive information about potential ML platforms without premature commitment. It is about understanding the practical realities of different solutions and avoiding the trap of simply adopting what is familiar or trendy, as Will cautions.

For our context, this means:

*   **External benchmarking:** Actively researching various ML platforms, including those within our central IT's Azure guardrails and other industry-leading solutions. How are other companies, particularly in the energy sector or those managing similar data complexities, successfully implementing ML? This involves a practical review of industry case studies, technical documentation, and direct conversations with peers to understand real-world trade-offs and team structures.
*   **Internal audit:** Conducting a thorough review of existing technology within our large, distributed organisation. Different business units may operate with distinct technology architectures, including various data platforms (like Snowflake or Databricks) and ML tools (such as Azure ML). Our own department has an existing data platform that supports ML tasks. Exploration here means documenting these existing components, assessing their current utilisation for ML, and identifying any internal "skunkworks" projects or successful patterns in other departments that could offer valuable lessons.

From a systems engineering perspective, exploration is about collecting data on available components and their performance characteristics. We are identifying existing infrastructure, data sources, and tools, and also very important, understanding the human capabilities and team models that support successful ML operations in various contexts. This fact-finding ensures strategy is founded on a broad understanding of the options.

### Diagnosis: pinpointing our specific ML platform challenges

Following exploration, diagnosis is the crucial step of precisely defining the problem we need the ML platform to solve within our specific offshore wind context. Will indicates that a wrong diagnosis is a primary reason for strategic failure, making this phase essential.

For our ML platform, a precise diagnosis requires:

*   **Defining ML use cases:** Clearly articulating the specific ML problems our data scientists aim to address (for example, optimising turbine performance, predictive maintenance). What are the exact performance, reliability, and scalability requirements for these applications?
*   **Assessing data ecosystem:** Mapping our data sources, access patterns, and processing needs. What are the volumes, velocity, and specific data governance, security, and compliance requirements for our energy data? In this, we need to clarify our responsibility and influence. For example, some tasks might be handled via an Operational Level Agreement (OLA) with other teams, while others we manage ourselves.
*   **Evaluating team capabilities and gaps:** We have skilled data scientists and data engineers. However, an important observation in our current system is the absence of dedicated ML engineers who specialise in operationalising models and maintaining ML infrastructure. This skill gap is a significant constraint that must be explicitly addressed in our strategy. We also acknowledge that our data scientists, while domain experts, may require support with platform-specific technologies.
*   **Acknowledging resource constraints:** Recognising that our business unit operates with resource limitations, a reality in the current offshore wind market. This directly impacts the feasibility and scope of any platform implementation and the investment in new skills.
*   **Clarifying organisational interfaces:** Defining how we will effectively collaborate with central IT, who provide essential guardrails, and how we can leverage insights from other, more mature ML departments within the organisation.

Applying a systems engineering perspective, diagnosis involves creating a detailed problem statement for our ML system. We quantify where possible, using objective criteria to describe the current state and desired future state:

*   **Platform maintainability:** What is the estimated ongoing effort (for example, FTE hours) to maintain the platform, explicitly factoring in the current lack of dedicated ML engineering expertise?
*   **Developer experience (DX):** How efficiently can our data scientists perform core tasks (data access, model training, deployment, monitoring)? This must consider their current proficiency levels and the need for streamlined workflows.
*   **Integration with existing data:** How well does the platform integrate with our existing data infrastructure (Snowflake, Databricks)?
*   **Alignment with IT guardrails:** Does the platform adhere to central IT's approved technology stack? What level of support and collaboration can we expect from IT?
*   **Resource footprint:** What are the estimated infrastructure costs and the human resources needed for implementation and ongoing support, including the investment required to build ML engineering skills?
*   **Collaboration effectiveness:** How will the platform and associated processes improve collaboration between data scientists and data engineers, and how will it facilitate the integration of new ML engineering capabilities?
*   **Skill gap analysis:** What is the current availability of necessary skills (data science, data engineering, ML engineering), and how significant is the gap in dedicated ML engineering expertise?

By step by step diagnosing these elements, we build a clear, evidence-based understanding of our challenges, which is essential for making informed decisions.

### Operations: actioning the strategy and building new expertise

The final step is operations. A well-conceived strategy and a carefully chosen platform will not deliver value without the practical mechanisms to ensure adoption and sustained success. Operations is about translating policy into tangible actions, and this critically includes addressing the skill gaps identified in our diagnosis.

Operational mechanisms for our ML platform strategy could include:

*   **Structured collaboration frameworks:** Implementing clear processes and regular forums that encourage data scientists and data engineers to work together on platform usage and improvements. Crucially, this must also define how new ML engineering skills will be integrated into this collaborative model, perhaps through dedicated MLOps working groups or shared responsibilities.
*   **Targeted training and support programmes:** Providing accessible, hands-on training tailored to our data scientists' existing skill levels, focusing on the practical use of the chosen platform. Establishing clear support channels, involving both our internal tech teams and central IT. This training should also include structured pathways for data engineers or data scientists interested in advancing into ML engineering roles, for internal talent development (this would be ideal).
*   **Clear guidelines and best practices:** Documenting how to use the platform effectively, including standards for model development, versioning, and deployment. These guidelines should evolve to incorporate the MLOps practices that dedicated ML engineering expertise can enable.
*   **Automated workflow tools:** Implementing automated checks for model versioning, testing, or deployment standards, with nudges to guide developers towards best practices. Developing and maintaining these automation tools is a key function that ML engineering can support, streamlining operations.
*   **Lightweight review processes:** Establishing efficient review processes for new model or software package deployments to ensure they meet quality, security, and operational standards.
*   **Performance monitoring and feedback loops:** Setting up dashboards to monitor platform usage, performance, cost, and user satisfaction. Establishing a clear channel for data scientists to provide feedback on their experience and needs to the platform support teams and IT, ensuring continuous improvement.
*   **Strategic skill development plan:** Explicitly defining how the necessary ML engineering skills will be acquired – whether through targeted hiring, dedicated upskilling programmes for existing data engineers or data scientists, or a combination. This plan is a core operational mechanism for the strategy's long-term success.

These operational mechanisms, as Will describes, are the practical steps that transform the platform choice (the policy) into a living, impactful part of our engineering practice. They address the human and process elements necessary for technical success in a complex organisation, including the vital step of building the required expertise.

### The path forward: driving impact with clear strategy

Applying Will Larson's framework provides a clear and actionable path for navigating the complexities of choosing and implementing an ML platform in our environment. It moves us beyond simply evaluating technical features to building a holistic strategy that considers our specific needs, constraints, the operational realities of a large energy company, and the crucial human skills required for success.

By focusing on thorough exploration, a detailed diagnosis grounded in our unique context (including acknowledging skill gaps), and practical operational mechanisms (including a plan for skill development), we can build a strategy that is not only technically sound but also achievable and impactful for our offshore wind business. The remaining steps in Will's framework, refinement and policy, would guide us in testing our assumptions and drafting well-informed policy. ML engineering expertise is key in this to getting the full potential of ML for optimising turbine performance and contributing to our KPIs.

You can find Will Larson's full series on engineering strategy here:

*   [Steps to build an engineering strategy](https://lethain.com/components-of-eng-strategy/)
*   [Exploring for Strategy](https://lethain.com/exploring-for-strategy/)
*   [Diagnosis for Strategy](https://lethain.com/diagnosis-for-strategy/)
*   [Operations for Strategy](https://lethain.com/operations-for-strategy/)

***

*Disclaimer: This post reflects my personal thoughts and learning based on publicly available frameworks and general industry challenges. It does not represent the official views, plans, or internal details of my employer.*