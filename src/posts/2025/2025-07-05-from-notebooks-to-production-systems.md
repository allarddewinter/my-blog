---
title: "From notebooks to production systems"
description: "A comprehensive overview of moving data science projects from exploration in notebooks to robust, production-ready systems using open-source tools."
date: 2025-07-05
tags: [technology, data-science, mlops, python]
---

I recently listened to an episode of the [TalkPython podcast featuring Dr. Catherine Nelson](https://talkpython.fm/511), where she discussed the journey from exploratory data science in notebooks to building scalable, production-grade systems. The conversation highlighted a critical transition that many data scientists face, and I wanted to expand on the key points that stood out to me.

### The limits of notebooks

Notebooks are fantastic tools for **exploration**. Their interactive nature allows for rapid iteration, visualisation, and a free-form approach to understanding data. This is perfect for the initial stages of a project where the path forward is not yet clear.

However, this flexibility becomes a liability when a project needs to be run **repeatedly and reliably**. When a notebook is simply converted to a Python script, several problems emerge:

-   **Hidden state and execution order:** Notebooks allow you to run cells out of order, creating an invisible state that a linear script cannot replicate. A script might fail because it depends on a variable from a cell that was run manually but is not in the correct sequence.
-   **Monolithic structure:** A single notebook often mixes data loading, cleaning, analysis, and modelling. This makes the resulting script a "God script"—impossible to test in isolation, difficult to debug, and with no reusable components.
-   **Testing blind spots:** Notebooks are rarely written with testing in mind. Code is not structured in testable functions, making it hard to validate logic without significant refactoring.
-   **Collaboration barriers:** The JSON structure of `.ipynb` files is notoriously difficult to manage with Git, leading to frustrating merge conflicts that hinder team collaboration.

### The shift to a production engineering mindset

The most crucial takeaway for me was the necessary shift in thinking from an exploratory, scientific mindset to a **production engineering mindset**. This is not about abandoning data science principles but augmenting them with **software engineering best practices**.

It is about recognising that your successful experiment is now a piece of software. The focus must change from "what can this data tell me?" to "how can I build a reliable, efficient, and maintainable system that delivers this result consistently?"

This means moving from:
-   **Exploration-first** to **reliability-first**.
-   **"Throwaway" code** to **maintainable, reusable code**.
-   **Manual execution** in a notebook to **automated CI/CD pipelines**.
-   **Local environments** to **containerised, reproducible systems**.

### A practical workflow for making the switch

Dr. Nelson outlined a practical, battle-tested process for moving code from a notebook into a production-ready structure.

1.  **Map the workflow:** Before writing any code, draw a simple diagram of the logical steps in your notebook. This could be as straightforward as `load_data` → `clean_data` → `train_model` → `predict`. This map becomes the blueprint for your new structure.

2.  **Refactor into functions:** Create separate Python files and begin moving code from your notebook cells into single-responsibility functions. Start with empty function stubs that match your workflow diagram, then fill them in one by one. Tools like `nbconvert` can do a one-time export, while `Jupytext` can keep a `.py` file and a notebook in sync, which is useful during the transition.

3.  **Write tests as you go:** For each function you create, write a corresponding unit test using a framework like `pytest`. This validates that the logic works as expected and provides a safety net for future changes. It forces you to write clean, testable code from the start.

4.  **Adopt engineering fundamentals:** Fully commit to standard software engineering practices. Use **Git** for version control, write clear **docstrings** to explain what your functions do, and use a **linter** to maintain code quality.

### The role of MLOps and containerization

This new workflow is supported by two key technological pillars: MLOps and containerization.

**MLOps (Machine Learning Operations)** provides the framework to manage the entire machine learning lifecycle in a standardised way. Platforms like **MLflow** or **TensorFlow Extended (TFX)** help automate data validation, model retraining, and deployment, preventing the "ad hoc script proliferation" that plagues many teams.

**Containerization (with Docker)** for production systems. It solves the "it works on my machine" problem by packaging your code, libraries, and system dependencies into a single, consistent unit. This ensures your application runs identically everywhere, from your laptop to a cloud server, and is essential for building scalable, isolated microservices.

### Diving deeper into MLOps

For those looking to learn more, the field of MLOps is fortunately well-documented. The major cloud providers, such as Databricks, Microsoft, and Amazon, offer extensive documentation that, if you focus on the bigger picture, provides valuable platform-agnostic principles.

If you prefer a more structured, book-based approach, several excellent texts can guide you. For instance, *Implementing MLOps in the Enterprise* by Yaron Haviv and Noah Gift takes a production-first approach, focusing on designing the operational pipeline before integrating machine learning components. Alternatively, *Introducing MLOps* by Mark Treveil et al. introduces the core concepts by breaking down the entire model lifecycle into five key stages: Build, Preproduction, Deployment, Monitoring, and Governance.

The journey from a notebook to a production system is a sign of success. It means your work has proven valuable enough to be operationalised. As Dr. Nelson said, it is about making your code robust and easy for others to use—that is how data science creates real impact.