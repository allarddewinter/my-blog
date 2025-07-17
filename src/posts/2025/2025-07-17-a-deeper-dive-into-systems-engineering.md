---
title: "A deeper dive into systems engineering: from design to disposal"
description: "A summary of the core concepts from the second half of my systems engineering course, covering the journey from detailed design to system retirement and management."
date: 2025-07-17
tags: [technology, systems-engineering, learning, coursera, design]
---

A short while ago, I wrote an [overview of the core concepts of systems engineering](https://allarddewinter.net/blog/an-overview-of-systems-engineering-core-concepts/), summarising the first half of the [Introduction to Systems Engineering](https://www.coursera.org/learn/systems-engineering) course I am taking. I have now completed the second half, and it has been just as valuable. This part of the course moves from the foundational 'what' to the practical 'how', covering the entire lifecycle from detailed design and production to operational use and eventual disposal.

This post synthesises the key ideas from these final modules. It covers the transition from a logical design to a physical product, the activities required to support a system in the real world, and the management disciplines needed to keep the entire process on track.

{% image "/assets/images/posts/squirrel-team.jpg", "A team of squirrels in hard hats and high-visibility vests carefully reviewing a complex blueprint for a simple birdhouse.", null, "eager", null, "image-width-50" %}


### From blueprint to build

The first half of the course focused on defining the problem and establishing the system's requirements (the 'what'). The second half dives into creating the solution (the 'how'). This journey is a structured progression from a high-level concept to a detailed, buildable design.

The process starts by decomposing the overall system into interconnected subsystems. For each subsystem, a critical decision must be made on how to acquire it. This is a trade-off between cost, schedule, risk, and performance.

| Option | Description | pro | con |
| :--- | :--- | :--- | :--- |
| **COTS** | Commercial Off-the-Shelf | Low cost, low risk, immediate availability. | May be an imperfect fit for requirements. |
| **MOTS** | Modified Off-the-Shelf | A tailored solution built on a known base. | Modification adds risk, cost, and schedule delays. |
| **Developmental** | Built from scratch. | Potential for a "perfect" fit. | Highest risk, cost, and longest schedule. |

A core activity throughout this phase is **requirements traceability**. Every feature in the design must trace back to an authorised requirement. This is the primary defence against 'requirements creep'—the tendency for a system to become more complex than necessary.

> For example, a team might build a fantastic, feature-rich air conditioner for a car, but if its extra weight and power consumption cause the car to fail its overall efficiency targets, the team has created a great subsystem but a failing system.

Backward traceability prevents this by forcing the question: "Which top-level requirement does this feature support?"

This design effort concludes with two major milestones that act as quality gates:
1.  **Preliminary Design Review (PDR):** Confirms that the high-level design approach for each subsystem is sound before committing to the expensive detailed design phase.
2.  **Critical Design Review (CDR):** The final gate before production. It confirms the detailed design is complete, correct, and ready for manufacturing.

### The system in the wild

Once the design is approved at the CDR, the systems engineer's role shifts from creation to oversight. The focus is on ensuring the system is built, operated, and supported correctly.

#### Production and construction
During this phase, the main activities are **Verification** and **Configuration Audits**. Verification is the process of confirming that the as-built system meets its specified requirements. This is not just testing; it involves a combination of methods:
- **Inspection:** Looking at the system.
- **Analysis:** Using calculations or certificates.
- **Demonstration:** Showing it can perform a function.
- **Test:** Using equipment to measure performance.

At the same time, a **Physical Configuration Audit (PCA)** is performed. This audit confirms that the system's documentation perfectly matches the physical product. This must be done *during* construction, not after. For example, you confirm the exact location of a stormwater pipe in an open trench before it is buried. This creates an accurate record that is invaluable for future maintenance and modifications.

#### Utilisation and support
Once the system is operational, it requires ongoing support. This happens at different levels, from day-to-day operational tasks performed by the user to deeper engineering support for modifications and upgrades. Any modification is treated as a "mini" systems engineering project, requiring a formal process to avoid introducing new problems.

#### Disposal
Finally, every system has an end-of-life. Planning for disposal from the very beginning is a key part of modern systems engineering. This applies to software as well. Retiring a legacy enterprise system is not just about turning off a server. It involves a planned process of data migration to a new system, ensuring data integrity, and securely wiping sensitive customer information from old databases and backups to comply with privacy regulations like GDPR. Without a plan, companies risk data loss, security breaches, and legal penalties.

### Managing the machine
Underpinning the entire lifecycle is a set of management disciplines that provide control and mitigate risk. Without them, complex projects can quickly descend into chaos.

The course highlighted four key areas:

| Management Function | Purpose | Key Activities |
| :--- | :--- | :--- |
| **Verification & Validation (V&V)** | To prove we built the system right (Verification) and that we built the right system (Validation). | Planning and executing a progressive evaluation program, from component tests to final operational evaluation. |
| **Configuration Management** | To ensure the system's configuration is known, accurate, and controlled at all times. | Identifying what is under control, tracking its status, managing changes formally, and auditing the process. |
| **Technical Risk Management** | To identify, assess, and treat risks that could cause the system to fail technically. | Assessing the likelihood and consequence of risks; treating them by avoiding, reducing, or transferring them. |
| **Technical Reviews** | To assess progress at logical points, detect errors early, and approve plans for the next phase. | Conducting formal reviews like the PDR and CDR to ensure readiness before proceeding. |

All of these activities are documented in a **Systems Engineering Management Plan (SEMP)**. This is the master plan for the entire technical effort, defining the strategies, processes, and resources for the project.

### Final thoughts
This second half of the course provided a clear framework for how a system moves from an idea to a real-world entity and through to its eventual retirement. The emphasis on structured processes, continuous verification, and proactive management is a powerful lesson. It shows that systems engineering is not just a collection of technical tasks, but a holistic discipline for managing complexity and ensuring that what we build truly delivers lasting value.
