---
title: "A periodic table for system design"
description: "An exploration of Joy Arulraj's 'periodic table' of system design principles, with some reflections on its practical use."
date: 2025-08-08
tags: [technology, systems-engineering, design-principles, resources]
---

I came across a project on GitHub by Joy Arulraj that presents a "periodic table" of system design principles. The goal is to create a shared vocabulary for concepts that recur across different domains in computer science, such as databases, operating systems, and distributed systems.

The paper argues that different fields often use their own terminology for the same underlying ideas. As Arulraj notes:

> For newcomers, it can be challenging to spot connections across different domains due to the diversity of traditions and vocabularies: the same design principle may appear in different guises across domains.

This project attempts to solve this by distilling over 100 influential papers into a structured table of more than 40 design principles, grouped into themes like Structure, Efficiency, and Reliability.

### A systems engineering viewpoint

From a systems engineering perspective, the effort to create a common language is valuable. A core part of systems engineering education focuses on structured design, defining system boundaries, understanding interfaces, and performing trade-off analyses. This table provides a vocabulary for these activities.

For example, a trade-off analysis often involves balancing principles from different groups in the table. One might need to relax consistency (`Cr`) to improve scalability (`Sc`), or choose between a generalised design (`Gr`) and a common-case specialisation (`Cc`). Having these principles explicitly named helps in articulating design decisions.

The methodology for selecting principles is also logical, requiring them to be abstract (implementation-independent) and general (applicable across domains).

### Applying the principles effectively

To get the most value from this resource, it is helpful to consider how to apply it. While the abbreviations offer a concise shorthand, they do introduce a learning curve. Taking the time to become familiar with the definitions is key to using the vocabulary fluently in discussions.

The table's greatest strength is as a vocabulary for articulating design trade-offs, rather than as a prescriptive checklist. Approaching it as a checklist could inadvertently lead to over-engineering, which would contradict the foundational principle of Simplicity (`Si`). The author rightly notes this in the paper, positioning it as a vocabulary to aid discussion.

Within the list, certain principles stand out as universally applicable starting points for any project. Concepts like **Simplicity (`Si`)**, **Modularity (`Mo`)**, and **Policy/Mechanism Separation (`Pm`)** are not just items on a list but core tenets of sound engineering that help manage complexity from the beginning.

The full project and the paper are available on GitHub: [A Periodic Table of System Design Principles](https://github.com/jarulraj/periodic-table).