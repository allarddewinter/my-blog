---
title: "Do the simplest thing that could possibly work"
description: "A reflection on Sean Goedecke's article about the power of simplicity in system design, and how this principle applies beyond just code."
date: 2025-08-31
tags: [strategy, simplicity, kiss, software design]
---

In a recent article, [Sean Goedecke argues for a powerful principle in software design: "Do the simplest thing that could possibly work"](https://www.seangoedecke.com/the-simplest-thing-that-could-possibly-work/). It is a philosophy that pushes back against the common tendency to over-engineer solutions for problems that do not yet exist.

### A summary of Sean's argument

Sean observes that many engineers design for an imagined "ideal" system—one that is perfectly factored, infinitely scalable, and elegantly distributed. He suggests this is the wrong approach. Instead, the focus should be on deeply understanding the current system and implementing the most straightforward solution possible.

He notes that truly effective design can often seem underwhelming.

> Great software design looks underwhelming. It doesn’t look like anything much is happening at all. You can tell you’re in the presence of great software design because you start having thoughts like “oh, I didn’t realise the problem was that easy” or “oh nice, you don’t actually have to do anything difficult”.

Sean anticipates and addresses three common objections to this philosophy:

*   **Creating a "Big Ball of Mud"**: The concern that this approach encourages quick hacks, leading to a messy system. Sean counters that true hacks are inherently complex; the simplest solution often requires more engineering thought to discover and is fundamentally cleaner.
*   **The Ambiguity of "Simplicity"**: The argument that "simplest" is too subjective. He offers a practical definition: simple systems have fewer moving parts, are less internally connected, and are more stable, requiring less ongoing work.
*   **Ignoring Scalability**: The objection that this method is irresponsible because it does not prepare for future growth. Sean argues that trying to predict future scale often fails and leads to inflexible systems.

On the topic of scale, he is particularly direct:

> In my view, the cardinal sin of big tech SaaS engineering is an obsession with scale. I’ve seen so much unavoidable pain caused by over-engineering systems to prepare for several orders of magnitude more than the current scale.

The core message is to design for the requirements you have right now. This approach, originally credited to Ward Cunningham and Kent Beck, results in more flexible and manageable systems.

### Applying simplicity beyond code

I find this principle is applicable in almost any field. In my own work, for example, when writing architecture documents or creating diagrams, I actively try to make them as simple as possible. A straightforward diagram is much easier for stakeholders to understand and work with. It reduces the effort needed to convey the core message.

This line of thinking is crucial when designing the systems themselves. Consider the initial architecture for a new machine learning model. The temptation is to design a system with separate microservices for data ingestion, a dedicated feature store, and a complex orchestration tool like Kubeflow, all before the first model has proven its value.

Applying Sean's principle, the simplest thing that could possibly work looks very different:
*   A single, version-controlled script that pulls data, trains the model, and saves the model file and performance metrics.
*   A simple `cron` job to run this script on a schedule for retraining, leaning on existing system primitives.
*   If real-time predictions are a hard requirement, a basic API using Flask can serve the model. If not, the simplest solution is even more direct: a batch script that runs predictions and saves the results to a database or file.

This minimal setup delivers value immediately. You only add complexity—like a dedicated feature store or a more advanced orchestrator—when you have a proven need, such as multiple models reusing the same features or training dependencies that a `cron` job can no longer manage. By applying the KISS principle and leaving out anything that is not essential, the architecture becomes more approachable and we can focus on delivering value first.