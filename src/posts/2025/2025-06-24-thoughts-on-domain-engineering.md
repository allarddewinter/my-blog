---
title: "Finding leverage in the middle: Thoughts on domain engineering"
description: "A look at Jack Danger's concept of Domain Engineering and why this often-neglected middle layer is crucial for long-term strategy and scalability."
date: 2025-06-24
tags: [strategy, domain engineering, architecture, technology]
---

I recently came across a very clear article by Jack Danger called [Infrastructure Gravity](https://jackdanger.com/infrastructure-gravity/). It puts a name to a concept I have been thinking about a lot lately: the critical importance of the 'middle layer' in a company's technology stack.

In his article, Jack argues that engineering organisations do not have two layers (Product and Infrastructure), but three. He identifies powerful forces that pull engineers to the extremes. **Feature Lift** pulls them towards shipping visible new features, while **Infrastructure Gravity** pulls them down into the foundational, transferable skills of running software.

This leaves the middle layer—what he calls **Domain Engineering**—often neglected. This is the layer that contains the logic and concepts unique to the company's business but shared across multiple features. It is the connective tissue.

### The power of the domain layer

This middle layer is where the real leverage for a company exists. It is the difference between building a series of disconnected features and creating a cohesive, scalable system.

Consider a practical example from industrial technology. In the past, connecting a wind turbine's SCADA control system to a cloud platform for machine learning was often a direct, point-to-point job. An engineer would write custom code to pull data from the turbine and push it to a specific cloud endpoint. This works, but it is fragile. What happens when you add a new type of turbine, or want to send the data to a second platform? You have to build it all over again.

Now, imagine introducing a domain layer. This layer does not just move data; it acts as a standardisation layer. It provides a standard way for any system—new or old—to talk about turbines and their data, for example, by enabling the use of a shared ontology like [WeDoWind](https://community.wedowind.ch/spaces/17701604/page) for the wind industry.

The SCADA system sends its data once, to the domain layer. The machine learning platform requests data once, from the domain layer. This layer is the translator and the central hub. It is a powerful enabler for long-term growth, making it simpler to add new data sources and consumers without rebuilding the core logic each time.

### Putting it into practice

At my own company, we are making a conscious effort to invest more in this middle, or domain, architecture. We see it not as a cost centre, but as a strategic investment. It helps us structure our development efforts and ensures that our short-term work aligns with our long-term vision.

By deliberately building and maintaining this domain layer, we are not just fixing problems; we are building leverage for the future. It allows us to move faster, be more consistent, and build a more resilient and valuable technology platform.
