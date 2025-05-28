---
title: "Notes on The Startup CTO's Handbook by Zach Goldberg"
description: "Reflections on Zach Goldberg's handbook, valuable for startup CTOs and anyone in tech leadership or engineering."
date: 2025-05-27
tags: [technology, leadership, resources]
---

Came across [The Startup CTO's Handbook](https://github.com/ZachGoldberg/Startup-CTO-Handbook/blob/main/StartupCTOHandbook.md) by Zach Goldberg. While titled for startup CTOs, it offers a lot of valuable insights that apply more broadly to anyone involved in tech leadership, engineering management, or even just looking to understand the processes and considerations within a tech department, whether in a startup or a larger corporate environment. It covers topics ranging from architecture and technology choices to team building and HR aspects.

A point on [tech architecture](https://github.com/ZachGoldberg/Startup-CTO-Handbook/blob/main/StartupCTOHandbook.md#tech-architecture) that resonated:

> Good architecture aligns the strengths of the tools and patterns you choose with the needs of your organization now and in the foreseeable future.

This highlights that architecture isn't just a technical exercise, but needs to serve the business context and its future trajectory.

Under [General Tips And Best Practices For Architecture Design](https://github.com/ZachGoldberg/Startup-CTO-Handbook/blob/main/StartupCTOHandbook.md#general-tips-and-best-practices-for-architecture-design), several practical recommendations stand out:

*   Putting business logic in the backend for testability, code sharing, and security.
*   Designing services to be externalisable, which encourages better API design and data abstraction from the outset.
*   Minimising the number of programming languages used, acknowledging the significant overhead each additional language introduces beyond just the code itself (build systems, dependencies, best practices, interfaces).

Another section worth noting is on [Boring Technology](https://github.com/ZachGoldberg/Startup-CTO-Handbook/blob/main/StartupCTOHandbook.md#boring-technology). The core idea here is that the primary goal is delivering business functionality, and this often doesn't require the newest, most exciting tools. Using "not boring" technology can introduce hidden costs (immature documentation, underdeveloped ecosystems, higher defect rates, training, maintenance) that can outweigh perceived benefits. The decision to adopt new tech should involve a clear-eyed assessment of these costs versus the velocity benefit.

Overall, the handbook provides a solid framework of considerations for building and leading engineering teams effectively. It's a resource worth exploring for practical advice on navigating the complexities of tech leadership and development processes.