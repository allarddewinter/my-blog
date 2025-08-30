---
title: "Documents: The architect's programming language"
description: "An extensive summary of Isaac Lyman's article on how architects use structured documentation to deploy ideas, and my perspective on treating documents like high-quality code."
date: 2025-08-30
tags: [strategy, architecture, documentation]
---

In a post on the Stack Overflow blog, Isaac Lyman presents a interesting argument that for a software architect, documents are the equivalent of a programming language. They are the primary tool for deploying ideas into a system of people, a powerful way to think about a skill that is often seen as a secondary task. [stackoverflow.blog](https://stackoverflow.blog/2025/08/20/documents-the-architect-s-programming-language/)

### The core idea: Deploying ideas to systems of people

The central premise of the article is captured in this distinction:

> Senior developers know how to deploy code to systems of code.
> Architects know how to deploy ideas to systems of people.

An architect's main challenge is not just technical implementation, but achieving alignment, consensus, and shared understanding across teams and stakeholders. The most significant bottlenecks are often people-related: communication, persuasion, and decision-making. Isaac argues that well-crafted documents are the most effective and repeatable way to navigate these challenges.

### Principles for effective documentation

To make documentation effective, Lyman suggests a few key principles and techniques:

*   **Prioritise action over perfection:** It is better to jot things down than to worry about the perfect structure initially. An existing, imperfect document is more valuable than a perfect one that was never written.
*   **Use bullet points and headers:** These tools are an architect's best friend. They force a focus on structure and completeness over style, and they make documents easy for busy people to skim and digest. The goal is to avoid a "wall of text".
*   **Embrace point-in-time documents:** Most documents serve a purpose and then become obsolete. They are more like one-off scripts than applications that need constant maintenance.

### A chronological approach to organisation

One practical idea in the article is the approach to organising documents. Instead of grouping them by topic—which Isaac argues is subjective and wastes time—he proposes a chronological structure. A few high-level, continuously maintained documents like an `Overview` and `Architecture` can live at the top level. Everything else is organised by time.

This structure might look like this:

```
📄 Overview
📄 Architecture
📁 2025
    📁 Jan 1 Sprint
        📄 Proposal: Connect edge compute 
        📄 ADR-132 Machine Learning on the edge
    📁 Jan 15 Sprint
        📄 ADR-135 Messaging edge 
```

This approach makes the timeline of decisions clear and encourages the use of search, which is often more efficient for finding specific information. When you find a document, you immediately have context for when it was written and what else was happening at the time.

### High-impact document types

The article provides an excellent appendix of high-impact document types that an architect can use to orchestrate ideas.

#### The architecture overview
*   **What it is:** A document or diagram describing the major components of a system and how they communicate.
*   **How it orchestrates ideas:** It helps contributors form a shared mental model of a system, which is essential for building on it, troubleshooting it, and getting it approved by leadership.

#### The dev design
*   **What it is:** A plan for code you intend to write, outlining the steps, classes, and methods involved.
*   **How it orchestrates ideas:** It helps developers share knowledge, preserve core patterns, and create a permanent record of how a system evolved. It provides many of the benefits of pair programming asynchronously.

#### The project proposal
*   **What it is:** A document communicating the value, cost, and impact of a potential project.
*   **How it orchestrates ideas:** This is how large, impactful projects are born. A well-written proposal sets the roadmap for entire teams by making it easy for leaders to say "yes".

#### The developer forecast
*   **What it is:** A document that raises potential risks or worse-than-expected outcomes of a decision.
*   **How it orchestrates ideas:** It allows an engineer to share professional foresight, get people thinking about pitfalls, and prepare the organisation to respond adeptly if things go wrong.

#### The technology menu
*   **What it is:** A comparison of favoured technologies (languages, frameworks, etc.) with recommendations for when to use each.
*   **How it orchestrates ideas:** It creates consensus on how things are built, freeing developers from "this-versus-that" debates and allowing them to spin up new projects efficiently.

#### The problem statement
*   **What it is:** A clear explanation of a problem, its constraints, and a few possible solutions.
*   **How it orchestrates ideas:** It enables anyone, regardless of their role, to understand a problem and weigh in on the solution. It also creates a record of the decision-making process.

#### The postmortem
*   **What it is:** A blameless analysis of a catastrophic failure, including its timeline, root causes, and recommended changes.
*   **How it orchestrates ideas:** It helps an organisation move from fear ("this can never happen again") to confidence ("we will make sure of it") and shifts the culture away from individual blame toward systemic resilience.

### My perspective: Documentation as code

Isaac's perspective aligns with how I view the craft of documentation. I see a direct parallel between writing good documentation and writing high-quality code. Just as we refactor code into clean, reusable, and understandable functions or classes, our documentation should follow the same principles.

The goal is not just to write something, but to create an asset that is easy for others (and our future selves) to parse and use. The emphasis on bullet points, clear headers, and logical structure is the documentation equivalent of clean code. It is about creating a clean, simple, and understandable artefact that serves a clear purpose. Thinking of documents as a "programming language" for influencing human systems is the right way to approach this essential architectural skill.