---
title: "Assessing new technology with Readiness Levels"
description: "A practical look at using Technology Readiness Levels (TRLs) and Commercial Readiness Levels (CRLs) to assess new technologies and decide where to invest effort."
date: 2025-07-01
tags: [strategy, technology-assessment, nasa, decision-making]
---

I recently came across the concept of Technology Readiness Levels (TRLs), and it immediately struck me as a very practical tool. Originally developed by NASA to assess technologies for space missions, it provides a simple yet effective scale for measuring the maturity of a technology.

It is a straightforward way to create a common language when discussing how 'ready' a new piece of technology is. Here is a simplified summary of the levels:

| Level | Name | Description |
| :---: | :--- | :--- |
| **TRL 1-3** | **Research** | Basic principles observed, concepts formulated, and proof-of-concept demonstrated. This is the blue-sky thinking and early lab work phase. |
| **TRL 4-6** | **Development** | Components are tested in a lab, then in a 'relevant' environment. A prototype exists that works in a simulated operational environment. |
| **TRL 7-9** | **Deployment** | The prototype is demonstrated in an operational environment, the final system is qualified, and it is proven to work through successful operation. |

### How I use it

This framework is very practical when assessing a new demand or technology. It helps answer critical questions before committing significant effort:
*   Does it fit our existing architecture?
*   Does it align with our data landscape?
*   Can it be integrated into our current processes?

The TRL scale helps frame the answers. If a technology is at a low TRL (e.g., TRL 3), it is perfectly acceptable that it does not fit with our established processes. At this stage, we are just experimenting to learn. The goal is not integration, but validation of the concept itself.

However, if the ambition is to bring that technology to a mature state (e.g., TRL 8), the assessment changes. We must then plan and dedicate effort to embedding it within the organisation. This work runs parallel to the technical development and building our team's experience with it. Using TRLs makes this distinction clear and helps manage expectations.

### Shortcomings and the commercial view

No model is perfect. A high TRL ensures a technology is mature, but it does not guarantee it is appropriate or commercially viable. This is a critical gap, as a technically perfect product that nobody wants is a failure.

This is where the Commercial Readiness Level (CRL) comes in. It acts as a parallel framework to TRL, assessing everything from initial market research and business model validation to achieving the first revenue.

{% image "/assets/images/posts/crl-vs-trl.jpg", "A diagram showing the parallel tracks of Technology Readiness Level (TRL) and Commercial Readiness Level (CRL), from concept to market launch.", "TRL and CRL are interdependent journeys, not sequential steps. (From: [LaMonaco & Associates](https://lamonaco.com/blogs/2024/12/11/commercial-readiness-level-crl-for-startups))", "eager", null, "image-width-75" %}

Technology Readiness Level (TRL) and Commercial Readiness Level (CRL) are not sequential; they are interdependent and should progress in parallel. A common mistake is to perfect the technology (high TRL) before even starting the commercial validation (low CRL). Feedback from early customer interviews (a low CRL activity) should directly influence technical priorities and feature development (TRL activities). This alignment ensures you are building something people actually want, reducing market risk and making resource allocation far more efficient.

### Connecting the dots: A more complete strategic toolkit

How do these readiness levels fit into a broader strategy? Short recap what they give us: Technology Readiness Level (TRL) answers the question, "Can we build it?" It measures technical maturity and helps us manage engineering risk. Commercial Readiness Level (CRL) answers the question, "Should we build it?" It measures market viability and helps us manage commercial risk.

In my earlier post on a [practical toolkit for technology strategy](https://allarddewinter.net/blog/a-practical-toolkit-for-technology-strategy/), I outlined a way to map the strategic landscape using two key frameworks:
1.  **Wardley Maps:** To visualise our value chain and understand how components evolve from new ideas (**Genesis**) to stable utilities (**Commodity**).
2.  **Pace Layering:** To categorise our systems by their required speed of change, from fast-moving **Systems of Innovation** to slow and stable **Systems of Record**.

This is where TRL and CRL become useful additions to that toolkit. They provide the granular, evidence-based metrics needed to make those high-level maps actionable.

*   **TRLs quantify the Wardley Map evolution axis.** A component in 'Genesis' has a low TRL by definition. A 'Commodity' service has a TRL of 9. Using TRLs allows us to precisely measure where a component is on its journey and plan the work needed to move it.
*   **TRLs and CRLs act as gates for Pace Layering.** A technology with a low TRL and CRL belongs firmly in the 'System of Innovation'. We would never place it in a 'System of Record'. As a technology matures both technically (higher TRL) and commercially (higher CRL), we can make a conscious, data-informed decision to migrate it to a more stable layer.
*   **CRL validates the 'user need' on the map.** A Wardley Map starts with a user need. CRL is the framework for testing if that need is real and if our proposed solution is desirable before we over-invest in technical development.

By combining these frameworks, we move from abstract maps to a practical, measurable system for managing technology development and de-risking our strategic bets. For those who want to go deeper, the definitive document on TRL is the [NASA Technology Readiness Assessment Guide](https://ntrs.nasa.gov/api/citations/20205003605/downloads/%20SP-20205003605%20TRA%20BP%20Guide%20FINAL.pdf). For a great breakdown of CRL, I recommend the post by [LaMonaco & Associates](https://lamonaco.com/blogs/2024/12/11/commercial-readiness-level-crl-for-startups).

**Pairing technical assessment (TRL) with commercial validation (CRL) provides a more complete picture, ensuring that what you build is not only feasible but also valuable.**
