---
title: "Yevgeniy Brikman on DevOps from an engineer's perspective."
description: "Yevgeniy Brikman's view on DevOps as a broad set of processes, not just a role, and its practical implications for engineers, based on his book."
date: 2025-05-23
tags: [technology, books, devops]
---

> "The goal of DevOps is to make software delivery vastly more efficient."

That quote comes from Yevgeniy Brikman's book, *Fundamentals of DevOps and Software Delivery* (2025), which can be read for free on the [Gruntwork website](https://www.gruntwork.io/books/fundamentals-of-devops).

I had always thought of DevOps primarily as a separate role or team within tech. However, the book clarifies that it's much broader:

> "DevOps isn’t the name of a team or a job title or a particular technology (though you’ll see it used for all three). Instead, it’s a set of processes, ideas, and techniques."

Based on the outline, the book dives deep into the practical, hands-on aspects of software delivery from an engineer's viewpoint. It covers topics like deploying applications, managing infrastructure as code, using orchestration tools, setting up CI/CD pipelines, handling networking and security, managing data storage, and monitoring systems. It provides concrete examples using various tools, making complex concepts accessible and providing code examples.

If, like me, you come from a technical background but have (or want to have) a more holistic view on how to work efficiently, this book seems like a great fit. It describes from an engineering perspective how to become better in DevOps. The potential improvements for companies that adopt these principles are significant:

> *   Deploying once per month versus many times per day.
> *   Deployment processes that take 36 hours versus 5 minutes.
> *   Two out of three deployments causing problems versus one out of twenty.
> *   Outages that last 24 hours versus 2 minutes.

Implementing DevOps is challenging, though; the task can feel daunting. I had similar experiences, particularly when trying to implement and educate about MLOps. Often, you focus on optimising a single piece of the puzzle, making that more efficient in isolation. But the scope of what needs to change is so broad that changes are needed across the board, and you get stuck somewhere in the middle for more complete and lasting improvements. You might need to influence not only your own team but also surrounding teams, and perhaps even department structures or the overall company philosophy.

Brikman describes this complexity as a "[box of snakes](https://www.gruntwork.io/books/fundamentals-of-devops#box_of_snakes)" 🐍🐍🐍:

> What makes DevOps hard is not that any one of these concepts is incredibly complicated by itself, but that there are so many concepts to master—and you have to connect them all together just right. The TLS certificate must be configured just right, or your users will get scary errors that prevent them from accessing your website; your deployment pipeline must be configured just right, or your team won’t be able to deploy; your database backup must be set up just right, or you are at risk of data loss, and if you lose all your data, you may go out of business entirely. DevOps is remarkable combination of an incredibly broad surface area, but also one where you have to sweat every single detail, for either you get everything connected together correctly, or nothing works at all.

The perspective Brikman takes is that of the engineer, which makes the book a very accessible read if you're coming from a tech background. It is an absolutely valuable read for anyone looking to understand and improve the efficiency of software delivery.
