---
title: "Building and deploying LLMs: A course made by practitioners"
description: "A comprehensive open course on LLMs taught by industry veterans, covering everything from fine-tuning to deployment architectures"
date: 2025-05-31
tags: [technology, tutorials, resources]
---

Although published a year ago, this [Mastering LLMs course](https://hamel.dev/blog/posts/course/) remains a good resource for understanding LLM best practices. With teachers like Jeremy Howard and Simon Willison, it offers practical insights from people actually building AI products.

I particularly appreciate the deployment architecture perspectives. For those making technology decisions, understanding deployment complexity matters:

> **Simple Model Serving**: Basic setup with minimal configuration, direct integration with model library (e.g., FastAPI), ideal for proof of concepts and simple applications
> 
> **Advanced Model Serving**: Complex setup involving multiple components and configurations, uses auto-scaling clusters, load balancers, and specialized components, designed for high availability and scalability, suitable for large-scale, production-level applications

## Course contents

The course covers these topics:

- **Evaluations**: Testing frameworks for LLM applications
- **RAG (Retrieval-Augmented Generation)**: Information retrieval systems
- **Fine-tuning**: LoRA adaptations and QLoRA optimisation  
- **Building applications**: Deployment patterns and serving architectures
- **Prompt engineering**: Production techniques

Each section includes chapter summaries, notes, and resources. I especially like how they discuss building actual LLM-powered applications and model serving.

The course is free and open. It covers applied topics rather than theory.