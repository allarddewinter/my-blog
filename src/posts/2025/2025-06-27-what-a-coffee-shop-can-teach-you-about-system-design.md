---
title: "What a coffee shop can teach you about system design"
description: "A summary of a great article by Raul Junco that uses a coffee shop to explain complex system design principles in a simple way."
date: 2025-06-27
tags: [technology, system-design, analogy, substack]
---

I recently received a genuinely good suggested read from Substack: an article by [Raul Junco](https://newsletter.systemdesignclassroom.com/p/what-a-coffee-shop-taught-me-about-system-design) that uses a common, everyday experience—ordering a coffee—to explain the core principles of system design. I found the analogy so effective that I wanted to share it here.

In architecture, it can sometimes be challenging to move from complex processes, interconnections, and technologies to a clear overview that still has enough detail. Methodologies like TOGAF and tools like ArchiMate offer guidance, but they can also be overwhelming. I think this post shows an interesting perspective on how to model a system with some practical considerations along the way.

{% image "/assets/images/posts/coffee-shop-systems-design.webp", "A diagram showing the parallels between a coffee shop workflow and a system design architecture.", "This diagram by Raul Junco illustrates the coffee shop analogy.", "eager", null, "image-width-75" %}

The central idea is that a busy coffee shop operates much like a distributed system in software engineering. By observing how it handles requests, queues, and bottlenecks, we can gain a practical understanding of otherwise abstract concepts.

Here is a breakdown of his main points:

1.  **The Cashier as an API Gateway:** The system's entry point that validates and logs requests.
2.  **The Order Queue as a Message Queue:** A buffer that holds tasks, where processing time can vary.
3.  **The Baristas as Event Consumers:** Independent workers who pull tasks from the queue when they have capacity.
4.  **The Espresso Machine as a Shared Bottleneck:** A limited resource that can cause contention and slow down the system.
5.  **Calling Your Name as a Push Notification:** An efficient way to signal task completion without wasteful polling.

As Junco puts it:
> Distributed systems don’t start in the cloud.
> They start with understanding how work flows, where it gets stuck, and who needs to be notified.
> You don’t need Kubernetes to learn system design. You just need to watch how a coffee shop works under pressure.
>
> Next time you're in line, look around and ask:
> - Where’s the queue?
> - What’s async?
> - What’s the bottleneck?
> - What breaks under load?
> 
> **If you can model a coffee shop, you can model a backend system.**

Using a simple analogy like this is a powerful way to establish a shared understanding with stakeholders before introducing the complexity of a full enterprise architecture model.
