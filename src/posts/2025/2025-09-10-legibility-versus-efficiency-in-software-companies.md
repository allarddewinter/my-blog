---
title: "The Tension Between Legibility and Efficiency in Software Companies"
description: "Exploring the concept of legibility and how large organisations often prioritise it over real efficiency, based on an article by Sean Goedecke."
date: 2025-09-10
tags: [strategy, technology, organisations, management]
---

In his article "[Seeing like a software company](https://www.seangoedecke.com/seeing-like-a-software-company)", Sean Goedecke applies the ideas of James C. Scott's book *Seeing Like a State* to the world of large technology companies. The core concept is "legibility"—the drive by a central authority to make a complex system understandable, measurable, and controllable.

This often creates a fundamental tension. While legibility provides significant benefits for planning and coordination, it frequently comes at the cost of on-the-ground efficiency and resilience. This model helps explain many seemingly counter-productive behaviours I have observed in large organisations.

### The Core Idea: Legibility vs. Illegibility

Goedecke summarises Scott's idea with a simple analogy: 19th-century German scientific forestry. To maximise timber yields, state foresters replaced complex, diverse forests with neat rows of a single, fast-growing tree species.

*   **The Goal (Legibility):** The new forest was "legible". An inspector could easily count the trees and predict the yield. This enabled long-term planning, large trade deals, and reduced graft.
*   **The Reality (Reduced Efficiency):** This legible forest was a biological failure. It was vulnerable to a single pest and ultimately produced less wood than the old, "illegible" forest, which had a complex, self-regulating ecosystem.

Even when it became clear that legibility reduced overall productivity, states continued to pursue it because the benefits of control and planning were considered more valuable.

> Increasing legibility thus often actually lowers efficiency - but the other benefits are high enough that organizations are typically willing to do so regardless.

In software companies, this translates to a distinction between two types of work:

*   **Legible Work:** Predictable, estimated, and tracked through systems like Jira and OKRs. It has a clear paper trail and is designed for management oversight.
*   **Illegible Work:** The informal, untracked work that is often essential. This includes asking for favours, using unwritten tacit knowledge, and leveraging interpersonal relationships to get things done quickly.

Small companies thrive on illegibility and can be highly efficient. Large companies, however, optimise for legibility to manage complexity and secure large enterprise deals, which require long-term commitments and predictable roadmaps.

### The Paradox of Process and the Role of TOGAF

Large organisations make simplifying, legible assumptions that are practically false but useful for planning: that engineers are interchangeable, that productivity is tied to headcount, and that project estimates are reliable.

Frameworks like The Open Group Architecture Framework (TOGAF) are powerful tools for achieving this legibility. For "business as usual" activities, TOGAF provides a comprehensive structure and acts as a checklist to ensure nothing is forgotten. It helps an organisation arrange itself in a predictable, repeatable manner. This is the positive side of legibility: it creates order and a common language for complex operations.

The downside emerges when such frameworks are applied too rigidly. Their exhaustive processes can stifle the very illegible work—quick favours, rapid pivots, creative problem-solving—that is essential for genuine efficiency. This is how managers can be dismissed for failing to prioritise critical tasks, even when all their processes were well-defined. They become so focused on the legible game of process compliance that they fail to navigate the illegible world where urgent problems are actually solved.

However, a framework like TOGAF is not inherently negative. With some creativity, its principles can be adapted for more ad-hoc work. One could use a "TOGAF-lite" approach within an engineering team, borrowing its structural thinking without adopting the full bureaucratic weight. This represents a mature approach: using tools of legibility selectively, rather than being controlled by them.

### Sanctioned Zones of Illegibility

When a crisis hits—like an imminent database failure—the formal, multi-step approval process is too slow. Goedecke notes that companies create a clever compromise: "temporary sanctioned zones of illegibility".

These are often called "tiger teams" or "strike teams" and operate under a different set of rules:
1.  A team of trusted, hand-picked engineers is assembled.
2.  They are given a loose mandate (e.g., "Fix the urgent problem").
3.  They are empowered to do whatever is necessary, bypassing normal processes.

This allows the organisation to benefit from high-efficiency, illegible work in a controlled way without abandoning the legible structure it needs for day-to-day operations. It is a formal acknowledgement that the official process is not always fit for purpose.

Even these zones are not immune to the pull of legibility. In my experience, even when a tiger team is formed, managers often want to see a budget approved and funds transferred internally before work can begin.[^1] The instinct to measure and control remains powerful.

Ultimately, an organisation's success depends on its ability to balance both worlds. It needs the legible systems for stability and scale, but it must also allow space for the unsanctioned, illegible work that provides resilience and true operational effectiveness.

[^1]: This adds a layer of formal process back onto an activity designed to escape it, showing the deep-seated organisational preference for legibility.
