---
title: "DevOps for Data Science"
description: "A review of Alex K Gold's book 'DevOps for Data Science', offering a framework and guidance for data scientists and IT admins."
date: 2025-05-27
tags: [technology, books, devops]
---

Following up on the discussion about DevOps from an engineer's perspective, I wanted to share some thoughts on Alex K Gold's book, ["DevOps for Data Science"](https://do4ds.com/).

This book offers a clear introduction to DevOps specifically for the data science field. Given the diverse backgrounds these special creatures called data scientists often have, the explanations start at a very accessible level. For instance, it covers foundational concepts like how an SSH connection is established and notes that Python and R are primarily single-threaded.

It provides a good overview of essential topics such as branching strategies, continuous integration/continuous deployment (CI/CD), and the necessity of different environments. While it doesn't go deeply into each topic, it effectively introduces the terminology and explains the general purpose of these practices within DevOps.

The book includes a helpful table summarising how it addresses common challenges faced by data science teams and those supporting them:

| Why I want it                                                                                                                                                              | How I feel | What's my pain                                                                                      | Pain Killer                                                                                                                         | DO4DS is...                   |
|----------------------|---------|-----------------|---------------|------------|
| I'm trying to take my/our DS practices + procedures to the next level. I need a **framework** for what I should do.                                                        | Unclear    | I know our data science practice isn't *production-grade*, but I don't know how to get better.      | DO4DS gives me a framework for thinking about production data science.                                                              | Clear + Full of Mental Models |
| I don't know how to communicate with the IT/Admins who manage our data science environment. I need **advice**.                                                             | Confused   | I don't know what matters to IT/Admins or the words they use. Are they just bamboozling me?         | DO4DS helps me understand the concerns of an IT/Admin and gives me the vocabulary to speak with them.                               | DS-Focused                    |
| I'm suddenly have to manage a data science environment as a data scientist. I need to know **where to start** with this IT/Admin stuff.                                    | Alone      | I have no mental models for how IT/Admin stuff works. Can someone help me understand?               | DO4DS gives me step-by-step instructions for getting started.                                                                       | Actionable                    |
| I'm administering a data science environment, but I'm way over my head. I need some **reassurance** that I'm not accidentally laying landmines I'm going to step on later. | Scared     | I think I've figured it out, but I'm self-taught and don't know if I've missed something important. | DO4DS points out security and stability risks and ways to limit them. I might not have it perfect now, but I understand the issues. | Forewarned                    |

Here is a relatable moment from the book that made me smile 🤭:

> […]All this means it is impossible to work without real data.
>
> **“Duh”, you say, “Of course you can’t do data science without real data”.**
>
> This may be obvious to you, but needing to do data science on real data in dev is a common source of friction with IT/Admins.[…]

This highlights a common point of friction and the book's intention on bridging the gap between data science needs and IT realities.

Overall, "DevOps for Data Science" is a valuable resource for anyone looking to understand or implement DevOps principles in a data science context, providing a easy to understand explanations and some practical guidance.

{% image "/assets/images/posts/DevOps for Data Science.jpg", "Cover of the book 'DevOps for Data Science' by Alex K Gold", [300, 600] %}
