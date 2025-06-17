---
title: "A clear framework for the build vs. buy decision"
description: "A reflection on a simple yet powerful rule for deciding when to build software versus buying it, inspired by an article from Entropic Thoughts."
date: 2025-06-17
tags: [strategy, build vs buy, links]
---

{% image "/assets/images/posts/1750147514194.png", "Decision tree", null, "eager", null, "image-width-50" %}

In my career, I have more than once encountered the 'build versus buy' dilemma. Many organisations have a policy that looks something like this: first, try to use an existing internal product; if not, buy an off-the-shelf solution; and only as a last resort, build it yourself. While this provides a sequence, it often lacks the nuance needed to make an effective decision.

This is why an article by Chris on his blog, [Entropic Thoughts](https://entropicthoughts.com/build-vs-buy), got my attention. He presents an simple and elegant approach for this exact problem.

The article suggests a simple rule: you should only **build** a component if it meets all three of the following criteria:
*   It has a **high cost**.
*   It is **tightly integrated** with your core system.
*   It is **difficult to design**.

If a component does not meet all three conditions, the default choice should be to **buy** it (or use an existing open-source solution).

The article provides an informative perspective on the actual cost of purchasing. It is not just the purchase price. For a component that is expensive and complex, the cost of properly evaluating suppliers and making a good purchasing decision is substantial. To make that decision well, your team needs to become experts on the component. The article argues that the process of becoming an expert (designing, prototyping, and testing) is almost indistinguishable from the initial stages of building it yourself. Once you have invested that effort, you are already a long way down the "build" path.

This quote captures the essence of focusing a company’s expertise where it matters most:
> The reason we want to buy as much as possible is that an organisation has a limited capacity for expertise, so we do not want to have to become experts on things that do not make up a competitive advantage.

And on the complexity of the judgment call itself:
> This type of judgment is the reason good software engineers get paid a lot of money – not for typing in code.

This approach provides the clarity that I have often found missing. It shifts the focus towards mastering what truly gives a competitive advantage. I will certainly be applying this line of thinking in my work.

The full post has a good example on building stealth planes, worth the read: [Entropic Thoughts](https://entropicthoughts.com/build-vs-buy). 
