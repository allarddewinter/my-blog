---
title: "Include your tests in coverage reports"
description: "A short post on why, inspired by Ned Batchelder, you should include your test code in your coverage analysis."
date: 2025-07-21
tags: [technology, testing, coverage]
---

I recently came across this article by [Ned Batchelder](https://nedbatchelder.com/blog/201908/dont_omit_tests_from_coverage.html). He makes a case against the common practice of omitting test files from code coverage reports. I completely agree with him. 

He argues that your tests are code too and should be scrutinised. Including them can help you find issues you might otherwise miss. Here are the main reasons why:

*   **It helps detect simple errors**, like accidentally duplicating a test by copy-pasting and forgetting to rename the function. The old test would be overwritten, but coverage would show the code as un-run.
*   **It can identify unused helper code** within your test suite. If a helper function or a specific clause is never executed, it is worth investigating why.
*   **It provides a more complete picture** of your codebase. While it might increase your overall coverage percentage, that is not a bad thing. You can always adjust your target percentage accordingly.

It is a small change in configuration that can provide valuable feedback on the quality of your test suite. You can read his full article for more details.