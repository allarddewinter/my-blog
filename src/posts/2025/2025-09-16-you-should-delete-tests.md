---
title: "You Should Delete Tests"
description: "A summary of André Arko's argument that tests should be deleted when they no longer increase confidence, with a focus on flaky, high-maintenance, or irrelevant tests."
date: 2025-09-16
tags: [technology, testing, software-development, maintenance]
---

I use automated tests extensively when working on Python code. I have often found it a challenge to strike the right balance: creating tests with enough detail to confirm functionality without making them so brittle that a minor code change requires rewriting the entire suite. This tension is why I found the perspective in André Arko's article, [You should delete tests](https://andre.arko.net/2025/06/30/you-should-delete-tests/), to be a practical reminder about the purpose of a test suite.

André argues that the fundamental reason for writing automated tests is to increase human confidence that a change will succeed. We run tests to be confident when we open a pull request, merge to main, and deploy to production.

> The core purpose of a test suite is to increase confidence. Therefore, a test should be removed any time it begins to decrease that confidence.

If we accept this premise, then the decision to delete a test becomes clear. André identifies several scenarios where tests actively harm confidence and should be removed.

*   **Flaky Tests:** These are tests that fail intermittently and without a clear reason, like after fixing a typo. They train developers to ignore failures, which is a dangerous habit. As André puts it: `"Oh, it’s failing because of that flaky test, it’s actually fine” is something I have heard more times than I can count, even when the code is broken and the tests are really failing.` A test that encourages this behaviour is worse than no test at all.

*   **High-Maintenance Tests:** When a one-line code change requires updating 150 tests, the test suite is creating friction instead of confidence. This often indicates that the tests are too tightly coupled to the implementation details rather than the behaviour. Such a high volume of failures for a small change does not make a developer more confident; it just creates unnecessary work.

*   **Unrun Tests:** Sometimes, to speed up a slow test suite, teams start skipping tests that "always pass". A test that is never run provides a false sense of security, which is another form of flakiness. It harms confidence by creating a mismatch between perceived and actual test coverage.

*   **Irrelevant Tests:** When business requirements change, the tests for the old behaviour become obsolete. Spending time updating these tests to align with new logic is wasted effort. The correct action is to delete the old tests and write new ones that directly validate the new behaviour.

The main takeaway is that a test suite is a living tool, not a sacred artifact. Maintaining it requires not just addition but also subtraction. Unproductive overhead is a significant cost, and curating a test suite by deleting tests that no longer build confidence is a necessary and healthy part of software development.
