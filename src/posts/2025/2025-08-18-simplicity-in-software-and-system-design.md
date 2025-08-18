---
title: "On Simplicity in Software and System Design"
description: "A summary of Sean Goedecke's principles on simple design, and a reflection on how they connect to broader concepts in Systems Engineering and TOGAF."
date: 2025-08-18
tags: [technology, software design, system design, architecture, systems engineering]
---

Sean Goedecke has written two posts that articulate a clear philosophy on design: simplicity and the deliberate elimination of complexity are marks of quality. This post summarises his main arguments and reflects on how they apply to wider architectural disciplines.

The ideas and concepts presented in the following summaries are entirely from Goedecke's articles: "[Great software design looks underwhelming](https://www.seangoedecke.com/great-software-design/)" and "[Everything I know about good system design](https://www.seangoedecke.com/good-system-design/)".

### Great software design is underwhelming

Goedecke's first article argues that great software design is not about using sophisticated features, but about proactively eliminating risk. Instead of reacting to potential failures, a good design removes the possibility of them occurring.

He outlines several methods for achieving this:
*   **Protecting the hot paths:** Moving slow or risky operations out of the direct user request-response cycle.
*   **Removing components:** Simplifying the architecture by using fewer parts.
*   **Centralising state:** Ensuring a single source of truth to prevent data inconsistency.
*   **Using robust systems:** Relying on battle-tested, simple technologies that are reliable due to their lack of sophistication.

> Great software design looks simple because it eliminates as many failure modes as possible during the design stage. The best way to eliminate a failure mode is to not do something exciting (or if you can, not do anything at all).

### Applying simplicity to system design

In the second article, Goedecke extends this philosophy from software (assembling code) to systems (assembling services). He states that complex systems are often a sign of poor design decisions being compensated for, not a mark of good engineering.

> A complex system that works always evolves from a simple system that works. Beginning from scratch with a complex system is a really bad idea.

His practical advice for keeping systems robust includes:
*   **Minimise stateful components:** State is where things go wrong. Isolate it to as few services as possible.
*   **Use databases wisely:** Design clear schemas, use indexes correctly, and offload reads to replicas.
*   **Use background jobs for slow operations:** Keep user-facing requests fast by pushing heavy work into a queue.
*   **Cache as little as possible:** Caching introduces another form of state and should be a last resort.
*   **Focus on the "hot paths":** Concentrate on the most critical and high-traffic parts of a system.

### Broader architectural context

While Goedecke frames these principles for software and system design, they echo fundamental concepts in broader disciplines like Systems Engineering and enterprise architecture frameworks like TOGAF.

The core idea is about tailoring the approach to the problem. In **Systems Engineering**, a key practice is to determine the necessary level of detail and formality based on the project's complexity and risk. Not every part of a formal process is needed for every project; knowing what to leave out is as important as knowing what to include. This aligns directly with Goedecke's principle of avoiding unnecessary components and complexity. As noted by the [Systems Engineering Body of Knowledge (SEBoK)](https://sebokwiki.org/wiki/Principles_of_Systems_Thinking), principles are general rules that guide reasoning and conduct, not rigid instructions.

Similarly, with a framework like **TOGAF**, the value is not in dogmatically applying every step but in using it as a toolbox. A good architect selects the appropriate tools and defines the right level of detail required to meet the stakeholder's goals. The objective is to create a useful, guiding architecture, not to produce documentation for its own sake.

Goedecke's focus on simplicity is a practical application of this thinking. Whether designing a small software component or a large enterprise system, the goal remains the same: build a solution that is fit for purpose. This means resisting the urge to add complexity and instead focusing on creating a robust, simple, and maintainable system that meets the end goal. Less is often more.