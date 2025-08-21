---
title: "A modern toolkit for great Python projects"
description: "A summary of Duarte Pompeu's recommended Python development toolkit for 2025, focusing on uv, Ruff, and centralised configuration."
date: 2025-08-21
tags: [technology, python, tooling, best-practices]
---

I came across this excellent [repository and accompanying article by Duarte Pompeu](https://github.com/duarte-pompeu/greatpytools2025) which outlines a modern and pragmatic approach to setting up Python projects in 2025. It serves as a great reference for establishing a consistent and efficient development workflow.

The fundamental principle of Duarte's approach is the centralisation of all tool configurations within the `pyproject.toml` file. This simple strategy ensures consistency across different environments—from a developer's local machine and IDE to the CI/CD pipeline.

> If you work in a team, this means these tools will affect you and all your colleagues too! There are two possible outcomes: do it well, and everyone will have a smooth experience and appreciate the setup; do it wrong, and inconsistencies and errors will make it more painful than helpful.

### The recommended toolkit

The setup is built around a small set of fast and effective tools:

*   **Package Management (`uv`):** For managing dependencies and virtual environments. `uv` is recommended for its exceptional speed and for providing a reliable, all-in-one solution that simplifies previous complex setups involving tools like `poetry`, `pyenv`, and `pipx`.
*   **Formatting (`ruff format`):** `ruff` is used for code formatting, providing consistency similar to `black` but with better performance. It is paired with `reorder-python-imports` to manage imports in a way that minimises git conflicts.
*   **Linting (`ruff check`):** `ruff` is also used for linting, replacing `flake8` with a faster tool that offers hundreds of rules and auto-fixing capabilities. It can detect a wide range of potential errors, from unused imports to security vulnerabilities.
*   **Testing (`pytest`):** `pytest` remains the tool of choice for its ergonomic syntax and advanced features like fixtures and parametrized tests, making testing more efficient and maintainable.

### Centralised configuration in practice

By defining rules in `pyproject.toml`, you ensure that running a command like `uv run ruff check` behaves identically everywhere. The repository provides a clear example configuration.

```toml
[tool.ruff]
target-version="py313"

include = ["src/ **.py", "tests/** .py"]
exclude= ["src/before.py"]

lint.select = [
  "B",    # bugbear:    potential bugs
  "F",    # pyflakes:   potential errors
  "S",    # bandit:     security issues
  "UP",   # pyupgrade:  upgrade syntax for newer versions
  "PERF", # perflint:   performance anti-patterns
]

[tool.pytest.ini_options]
pythonpath = ["."]
testpaths = ["./tests"]
```
### My take
I find this approach very practical and it aligns with what I have seen work effectively in team environments. I am a strong proponent of using pre-commit to integrate these checks directly into the development workflow.

As Duarte also suggests in his Q&A, using pre-commit with language: system hooks ensures that the same tool versions and configurations defined in pyproject.toml are used. This creates a tight feedback loop.

The benefit is most apparent when working on code destined for cloud platforms. A CI/CD pipeline can take several minutes to provide feedback. Catching formatting, linting, or even basic security errors locally with a pre-commit hook is significantly faster and more efficient. It enforces consistency across the team before code is ever pushed.
