---
title: "A refreshing, back-to-basics approach to coding with AI"
description: "A look at antirez's argument for using LLMs as direct, human-controlled add-ons, avoiding agents and retaining full control over the development process."
date: 2025-07-28
tags: [technology, ai, development, llm]
---

I came across an article by Salvatore Sanfilippo (antirez) titled "[Coding with LLMs in the summer of 2025](https://antirez.com/news/154)". I find his perspective on using Large Language Models (LLMs) in development quite refreshing because it feels like a return to first principles.

Antirez argues that while frontier models like Gemini 2.5 Pro are incredibly powerful, their best use is as a direct extension of the programmer, not as an autonomous agent. The goal is not to have the AI do the work for you, but to amplify your own capabilities. He sees the ideal partnership as a "human+LLM equation" where the developer remains firmly in control.

> I strongly believe the maximum quality of work is reached using the human+LLM equation.

His approach is about maximising the effectiveness of this partnership by providing the LLM with extensive, high-quality context—the entire codebase, relevant documentation, and a "brain dump" of your own thoughts and goals.

### Retaining control: no agents allowed

The most distinct part of his argument is the deliberate rejection of integrated agents and tools that automate the interaction with the LLM. He advocates for a more manual, explicit process: copying and pasting code from your terminal directly into a LLM's interface and back again.

His reasoning is that this keeps the developer in the loop at all times. You are forced to see, review, and understand every piece of information the LLM receives and every suggestion it provides. This prevents the model from making decisions based on incomplete or incorrect context, which is a common failure point for many integrated tools.

> You must be in control of what the LLM can see when providing a reply.

By acting as the manual interface, you ensure you are still the coder, just an augmented one. You retain a complete understanding of the code and its design, which is essential for building high-quality, robust software.

### A different perspective on developer augmentation

This view provides an interesting contrast to the "vibe coding" approach I wrote about recently in "[The last hurrah of human coding](/blog/the-last-hurrah-of-human-coding/)", which relies on integrated tools like Cursor to structure the AI's workflow.

While Alex MacCaw's method uses rules and scaffolds to rein in the AI within an editor, antirez's method achieves control by stepping outside the editor entirely. It is a more purist approach, ensuring nothing happens without the developer's explicit action.

Both philosophies agree on the most important point: the developer's experience, taste, and architectural judgment are irreplaceable. The debate is simply about the best interface for applying that judgment. Antirez's method feels particularly suited for deep, foundational work where absolute clarity and control are needed. It is a reminder that sometimes, the most effective tools are the ones that keep us most engaged.