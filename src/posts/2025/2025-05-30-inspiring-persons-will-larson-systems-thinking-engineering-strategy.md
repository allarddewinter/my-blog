---
title: "Inspiring Persons: Will Larson's systems thinking approach to engineering strategy"
description: "How Will Larson transforms complex engineering challenges like LLM adoption into structured conversations using simple systems models"
date: 2025-05-30
tags: [strategy, engineering, systems-thinking]
---

I find this fascinating: mapping a complex problem to a simple diagram with some numbers. This helps shift discussions from opinion-based to something more structured. This text is just an example from a larger book Will Larson is writing on engineering strategy. It shows how you can turn a sensitive topic like implementing LLMs, changing the way engineers work (maybe even combined with vibe coding), into a structured and meaningful conversation about impact on engineering quality and velocity.

{% image "/assets/images/posts/llm-dx-model-1.png", "Developer workflow model showing five stages from open tickets to closed tickets, with error flows moving backwards", "Larson's systems model of developer workflow with forward progress and error feedback loops" %}

It even backs up the importance of a good test suite, as it saves time throughout the whole software lifecycle. I've often had to have conversations about why it makes sense to invest in better testing. In the time of LLMs writing (parts of) code and vibe coding, it makes sense to have good tests to ensure the generated code actually does what you want. Of course, you can use LLMs to help generate the tests too. See also a recent discussion from [Simon Willison on this](https://simonwillison.net).

What I appreciate is how he iterates and refines his approach and thinking on the job, meanwhile releasing some open source tooling ([systems modelling tools](https://github.com/lethain/systems)) and free-to-read chapters from his book.

Here are some key insights from his [LLM developer experience model](https://lethain.com/dx-llm-model/):

> "The value of a model is in refining our thinking, and simple models are usually more effective at refining thinking across a group than complex models, simply because complex models are fairly difficult to align a group around."

> "This is a fascinating result, because tripling development and testing velocity has changed how much work we start, but ultimately the real constraint in our system is the error discovery rate in production."

> "If we want to increase our velocity, we have to reduce the rate that we discover errors in production."

## Systems modelling definition 

Larson provides this summary of systems modelling (from his [strategy systems modelling post](https://lethain.com/strategy-systems-modeling/)):

Systems thinking uses stocks (accumulations like boxes in a diagram) and flows (changes between stocks, shown as arrows) to understand circumstances that might otherwise have surprising behaviour or are too slow to understand from measurement.

In his LLM impact model, Larson demonstrates how tripling development speed doesn't actually increase overall velocity if errors in production remain the constraint. Without the model, teams might celebrate faster coding while missing that the real bottleneck is downstream error rates, this is what models do: they create a cheap way to understand reality when fully understanding reality is cumbersome.

For deeper learning, Larson recommends Donella Meadows' *Thinking in Systems* or his own shorter introduction in *An Elegant Puzzle*.

Source: [Modeling impact of LLMs on Developer Experience](https://lethain.com/dx-llm-model/)

This structured way of thinking, creating an overview, focusing on identifying constraints and levers for improvement, is very valuable for improving the software development process.