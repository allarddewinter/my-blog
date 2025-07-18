---
title: "Practical lessons from Meta on improving code"
description: "Exploring Meta's data-driven and cultural approach to code improvement and how we can apply these lessons to our own projects."
date: 2025-07-18
tags: [technology, leadership, productivity]
---

Following on from my last post about [the human cost of technical debt](/blog/the-human-cost-of-technical-debt/), it is clear that actively managing code quality is crucial for team morale and confidence. The next question is: how can we do this effectively?

The [Research-Driven Engineering Leadership newsletter](https://open.substack.com/pub/rdel/p/rdel-101-what-can-we-learn-from-metas) pointed me towards a [research paper from Meta](https://arxiv.org/html/2504.12517v2) that details their systematic approach to improving a massive, rapidly evolving codebase. Their findings offer practical lessons for teams of any size.

At Meta, code improvement is not an afterthought. The research found that over 14% of all code changes were explicitly for improvement purposes. This is a significant investment and shows a deep commitment to maintainability.

Their approach is a mix of top-down strategic initiatives and bottom-up, organic work from individual engineers. What I is interesting is how they decide where to focus their efforts: it is based on data.

### Practical lessons

The research highlights several key practices that we can adapt for our own teams.

#### 1. Make improvement work visible and measurable

At Meta, improvement work is explicitly tagged. This prevents it from being invisible labour buried within feature development. By tracking this work, teams can understand how much effort is being dedicated to code health and recognise engineers for their contributions. We can do this with specific tags or task types in our project management tools.

#### 2. Prioritise with data, not just intuition

The Meta teams use over 20 different criteria to prioritise which parts of the codebase to improve. This goes far beyond simply looking for "code smells." Some of the most compelling criteria they use are:

*   **Outage history:** Files frequently associated with production issues are obvious candidates for improvement.
*   **Authoring speed:** They measure Diff Authoring Time (DAT). If it consistently takes a long time to make changes to a specific file, it is a sign of high complexity or poor design.
*   **Knowledge loss:** They track the percentage of changes made by developers who have since left the company. A high percentage indicates a knowledge silo and a potential risk, making that code a priority for refactoring and documentation.
*   **Centrality:** They analyse how interconnected a piece of code is. Improving central, highly-depended-on components has a much larger ripple effect across the system.

#### 3. Foster a culture of continuous improvement

Meta's "Better Engineering" initiative encourages teams to allocate 20-30% of their time to these projects. They support this with training, tooling, and even gamification elements like profile badges for deleting code or fixing high-priority issues.

While we might not need a company-wide gamification system, the principle is sound: create time and space for improvement, and actively recognise and reward the effort.

What this research from Meta demonstrates is that managing technical debt can be a mature engineering discipline. These practical, data-driven approaches are the antidote to the falling morale and reduced confidence discussed previously. By making improvement a visible, valued, and systematic part of work, we not only build better software but also foster healthier and more effective engineering teams.