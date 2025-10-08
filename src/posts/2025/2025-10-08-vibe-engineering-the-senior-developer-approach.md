---
title: "Vibe Engineering: The Senior Developer's Approach to LLMs"
description: "Exploring 'vibe engineering' as a structured, best-practice-driven method for senior developers to leverage LLMs, treating them as junior collaborators."
date: 2025-10-08
tags: [technology, strategy, productivity, llm, software-engineering]
---

Simon Willison has introduced the concept of "[vibe engineering](https://simonwillison.net/2025/Oct/7/vibe-engineering/)" to distinguish a rigorous, professional approach to working with Large Language Models (LLMs) from the more casual "vibe coding." While "vibe coding" often involves fast, prompt-driven software development with less attention to underlying mechanics, "vibe engineering" focuses on integrating LLMs into established software engineering best practices, treating the LLM as a junior developer under the guidance of a senior engineer.

This concept also builds on Simon's earlier work, which I have previously explored, regarding the effective and safe use of AI in development. Specifically, his insights on [embracing parallel coding agents](https://allarddewinter.net/blog/embracing-the-parallel-coding-agent-lifestyle/) and [designing safe and effective agentic loops](https://allarddewinter.net/blog/designing-safe-and-effective-agentic-loops/) provide crucial context for understanding the "vibe engineering" philosophy.

### The Essence of Vibe Engineering

Vibe engineering is about seasoned professionals accelerating their work with LLMs while maintaining accountability for the software they produce. It acknowledges that productive engagement with LLMs is complex, requiring a deep understanding of the tools and an awareness of potential pitfalls. The rise of coding agents—such as Claude Code, OpenAI's Codex CLI, and Gemini CLI—has amplified the need for this structured approach, as these tools can iterate on code, test, and modify it to achieve specified goals.

Simon notes that he is increasingly hearing from experienced engineers who are running multiple agents simultaneously, tackling several problems in parallel. He himself has started [running multiple agents](https://simonwillison.net/2025/Oct/5/parallel-coding-agents/), finding it surprisingly effective, albeit mentally demanding. This contrasts sharply with "vibe coding," where simple, low-stakes tasks are outsourced to an LLM with less rigorous review.

> "Iterating with coding agents to produce production-quality code that I’m confident I can maintain in the future feels like a different process entirely."

### Key Elements of Vibe Engineering

Vibe engineering actively rewards and amplifies existing top-tier software engineering practices. The following elements are crucial for effectively leveraging LLMs in a professional development context, categorised for clarity:

#### **I. Technical Foundations**

*   **Automated Testing:** Robust, comprehensive, and stable test suites allow agentic coding tools to operate efficiently. Without tests, agents might claim functionality without actual verification, and new changes could introduce regressions unnoticed. Test-first development is particularly effective with agents.
*   **Comprehensive Documentation:** LLMs, like human programmers, have limited context windows. Providing relevant documentation enables them to use APIs from other areas without needing to read the entire codebase. Well-written documentation can even allow models to build implementations from input alone.
*   **Good Version Control Habits:** The ability to undo mistakes and understand change history is paramount, especially when coding agents are making modifications. LLMs are proficient with Git, capable of navigating history and using tools like `git bisect` to track down bug origins.
*   **Effective Automation:** Continuous integration, automated formatting and linting, and continuous deployment to preview environments all benefit agentic coding tools. LLMs can also facilitate the creation of quick automation scripts for consistent task repetition.

#### **II. Strategic & Managerial Skills**

*   **Planning in Advance:** A high-level plan is essential before beginning development. With agents, this becomes even more critical; the plan can be refined first, then handed off to the agent for code generation.
*   **A Unique Form of Management:** Interacting with coding agents requires clear instructions, necessary context, and actionable feedback, akin to managing a human collaborator. While agents do not have emotions, existing management experience proves surprisingly useful in guiding their work.
*   **Instinct for Outsourcing:** Developing an intuition for what tasks are best delegated to AI and what requires manual handling is an evolving skill.
*   **Updated Sense of Estimation:** AI-assisted coding changes project timelines significantly. Estimating project duration, a core senior engineer skill, becomes more complex as tasks that were once time-consuming become much faster, introducing new variables for consideration.

#### **III. Quality Assurance & Review**

*   **Culture of Code Review:** A fast and productive code review process is vital when working with LLMs. This ensures quality and allows for human oversight of agent-generated code.
*   **Strong Manual QA:** Beyond automated tests, proficiency in manual testing, including predicting and investigating edge cases, is crucial.
*   **Ability to Ship to a Preview Environment:** Safely previewing agent-built features before production deployment makes reviews more productive and reduces deployment risks.

#### **IV. Problem Solving & Research**

*   **Research Skills:** The ability to identify the best approaches and validate solutions remains important before engaging an agent to write code.

These characteristics are largely those already possessed by senior software engineers. AI tools, therefore, serve to amplify existing expertise; the more skills and experience a developer has, the better and faster the results they can achieve with LLMs and coding agents.

### The "Senior Developer" Analogy

The analogy of treating an LLM as a junior developer is fitting. A senior developer provides clear instructions, sets up a supportive environment (including robust testing and documentation), reviews the junior's work, and guides them towards the desired outcome. This mirrors the "vibe engineering" approach, where the human engineer acts as the architect and manager, ensuring the LLM's output aligns with project goals and quality standards.

> "You’re not just responsible for writing the code—you’re researching approaches, deciding on high-level architecture, writing specifications, defining success criteria, designing agentic loops, planning QA, managing a growing army of weird digital interns who will absolutely cheat if you give them a chance, and spending so much time on code review."

This perspective highlights the shift in the senior engineer's role: from solely writing code to orchestrating and validating the work of AI collaborators. It is a more sophisticated way of working with AI tools to build production-ready software, ensuring that the power of LLMs is harnessed responsibly and effectively.

I applaud Simon Willison for articulating this nuanced approach, which provides a valuable framework for navigating the evolving landscape of AI-assisted development. His work consistently offers practical and forward-thinking insights into this rapidly changing field.