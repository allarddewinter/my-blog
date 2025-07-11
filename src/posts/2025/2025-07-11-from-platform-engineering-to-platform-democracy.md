---
title: "From platform engineering to platform democracy"
description: "An exploration of the evolution from platform engineering to a more collaborative 'platform democracy', driven by developer needs and efficiency."
date: 2025-07-11
tags: [technology, platform-engineering, devops, strategy]
---

In supporting software development teams the goal has always been to increase efficiency and reduce friction. A recent study and a couple of related articles have highlight a trend that builds on the foundations of DevOps and platform engineering.

### The core problem: wasted developer time

A study conducted by the Enterprise Strategy Group (ESG) for Google Cloud, ["Building Competitive Edge With Platform Engineering"](https://cloud.google.com/resources/content/google-cloud-esg-competitive-edge-platform-engineering), presents interesting statistics. As highlighted in an article by [The New Stack](https://thenewstack.io/google-study-65-of-developer-time-wasted-without-platforms/), developers can waste up to 65% of their time on tasks that are not directly related to writing code. This includes managing tools, patching systems, and navigating infrastructure complexities—all tasks that platform engineering aims to solve.

This waste represents a huge loss of value. For every €100,000 invested in development, only €35,000 translates into new features and products. Platform engineering addresses this by providing a curated, self-service portal and patterns where developers have access to proven and maintained tools, freeing them to focus on their primary role.

This is a natural progression from the principles of DevOps, which I have discussed before in the context of [DevOps for Data Science](https://allarddewinter.net/blog/devops-for-data-science/). While DevOps improved collaboration, it often does not scale well in organisations with more than 50 developers, creating a need for a more structured approach.

### The next evolution: platform democracy

While platform engineering provides a "golden path" for developers, it can sometimes feel restrictive. Developers often have strong preferences for their tools, and a one-size-fits-all platform may not cover every team's specific needs.

This is where the concept of "platform democracy" comes in, as explored in another article from [The New Stack, "Beyond Platform Engineering: The Rise of Platform Democracy"](https://thenewstack.io/beyond-platform-engineering-the-rise-of-platform-democracy/). The idea is to evolve from a centrally controlled platform to a more collaborative model.

Daniel Bryant from Syntasso describes it as enabling "all the producers in your organization to [reconfigure and modify] the platform to fit their individual needs". This means developers, security teams, and SREs can all contribute to the platform, shaping it collectively. It is a shift from a "my way or the highway" approach to a multiplayer mode where everyone participates.

The goal is to create a system that covers the common 80% of needs centrally, while allowing teams the flexibility to build the remaining 20% themselves in a supported and consistent way.

### Key enablers of modern platforms

The Google/ESG research points to several key components that make these modern platforms successful:

*   **Open source:** 96% (!) of organisations use open source tools to build their platforms. This provides the customisability and community support needed for a democratic and flexible approach.
*   **CI/CD tools:** Continuous integration and deployment pipelines are considered essential. They are the engine that automates the delivery process, making the "golden paths" efficient and reliable.
*   **Scalability:** The platform must be able to scale to handle growing workloads and adapt to new requirements, such as the increasing integration of AI and machine learning.

### A systems engineering perspective

From a systems engineering perspective, the "platform as a product" mindset is a direct application of lifecycle thinking. You analyse the needs of your users (developers), synthesise a solution (the platform), and evaluate its effectiveness with clear metrics (like deployment frequency or mean time to recovery).

Platform democracy is an adaptation of this model. It makes the "synthesise" and "evaluate" phases continuous and collaborative rather than top-down. It is a more agile, iterative approach to managing the system's lifecycle, ensuring it adapts to the evolving needs of its users.

The journey from DevOps to platform engineering and now towards platform democracy is about one thing: empowering developers to deliver value more effectively. It is a strategic shift that recognises that the best platforms are not just built *for* developers, but also *with* them.