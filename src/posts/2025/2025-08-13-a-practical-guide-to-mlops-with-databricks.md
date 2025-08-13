---
title: "A practical guide to MLOps with Databricks"
description: "A detailed overview and personal take on the excellent MLOps with Databricks course series by Marvelous MLOps."
date: 2025-08-13
tags: [technology, mlops, databricks, resources]
---

I recently came across this excellent free resource on MLOps with Databricks, and I am particularly proud that it comes from a great Dutch team. I have been following Maria Vechtomova and Başak Tuğçe Eskili of Marvelous MLOps for some time, and they are definitely very knowledgeable in this area.

This course is a great read if you want to get into the practical side of this topic. It is especially relevant as it focuses on Databricks, which provides useful but also very specific tooling for its platform.

### My perspective on MLOps with Databricks

While this course is an excellent guide to the "Databricks way," I believe it is important to approach any platform with a critical eye, especially with the goal of building a flexible, long-term MLOps strategy. My primary aim is always to avoid vendor lock-in and maintain a platform-agnostic mindset where possible.

From that viewpoint, here are some challenges and considerations when implementing MLOps on Databricks:

*   **Portability and Reusability:** Databricks-native components like Databricks Asset Bundles (DABs) are powerful for managing deployments within the ecosystem. However, they are not as portable as universal standards like Docker containers. This can make migrating workflows or parts of the stack to other platforms in the future more difficult.
*   **Limited Customisation:** The convenience of managed services like Model Serving comes with trade-offs. You have less control over the underlying environment, such as specific OS-level dependencies or fine-tuning the web server. This can be a limitation for complex models with unique requirements.
*   **Integrated vs. External Tooling:** The platform's monitoring capabilities are well-integrated but can feel like a walled garden. For a comprehensive observability strategy, it is crucial that monitoring data and alerts can be easily exported to external, best-of-breed systems (like Grafana, Prometheus, or Datadog) without significant effort.
*   **Cost Complexity:** The Databricks pricing model, based on DBUs (Databricks Units), can be complex to forecast and control. While powerful, features like serverless compute, auto-scaling clusters, and multiple specialised services can lead to unexpected costs if not governed carefully.
*   **Learning Curve:** Although Databricks simplifies many aspects of big data and ML, its ecosystem is vast and has a steep learning curve. Concepts like Unity Catalog, workspace management, and its specific Spark optimisations require significant investment to master.

Despite these considerations, the deep integration of open-source tools like **MLflow** is a major strength. It provides a solid, open foundation for model tracking and management that adds value both inside and outside the Databricks platform.

---

## Course overview

The **MLOps with Databricks** course is a comprehensive 10-lecture series that provides a hands-on guide to end-to-end machine learning operations.

[**Full Course Repository on GitHub**](https://github.com/marvelousmlops/marvel-characters)

What makes this course particularly valuable is its focus on practical implementation over theory, using the Marvel Characters dataset to build a complete MLOps pipeline.

Key technologies covered include:
- **Databricks Lakehouse Platform**
- **MLflow** for experiment tracking and model registry
- **Unity Catalog** for governance
- **Databricks Asset Bundles (DAB)** for CI/CD
- **Lakehouse Monitoring** for production model oversight

### Lecture summary

| Lecture | Title & Link                                                                                             | Key Focus                                                                                               |
| :------ | :------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------ |
| 1       | [Introduction to MLOps](https://marvelousmlops.substack.com/p/introduction-to-mlops)                     | Foundational concepts, the distinction from DevOps, and an overview of the MLOps tool landscape.        |
| 2       | [Developing on Databricks](https://marvelousmlops.substack.com/p/developing-on-databricks)                 | Moving beyond notebooks to production-grade software engineering practices and local development setups.  |
| 3       | [Getting Started with MLflow](https://marvelousmlops.substack.com/p/getting-started-with-mlflow)           | The core components of MLflow: tracking experiments, runs, parameters, metrics, and artifacts.          |
| 4       | [Logging and Registering Models](https://marvelousmlops.substack.com/p/logging-and-registering-models-with) | Bridging training and deployment by logging models, defining signatures, and using the model registry.  |
| 5       | [Model Serving Architectures](https://marvelousmlops.substack.com/p/model-serving-architectures)          | A conceptual overview of different deployment patterns: batch, real-time, and hybrid architectures.     |
| 6       | [Deploying Model Serving Endpoint](https://marvelousmlops.substack.com/p/lecture-6-deploying-model-serving) | A practical guide to deploying models as REST APIs, including A/B testing implementations.             |
| 7       | [Databricks Asset Bundles](https://marvelousmlops.substack.com/p/lecture-7-databricks-asset-bundles)       | Using declarative YAML (DABs) for infrastructure-as-code to package and deploy ML workflows.          |
| 8       | [CI/CD and Deployment Strategies](https://marvelousmlops.substack.com/p/cicd-and-deployment-strategies)    | Automating the path to production with Git flow, GitHub Actions, and security best practices.         |
| 9       | [Introduction to ML Monitoring](https://marvelousmlops.substack.com/p/introduction-to-ml-monitoring)       | The "why" of monitoring: understanding data drift, concept drift, and monitoring architecture.        |
| 10      | [Implementing Model Monitoring](https://marvelousmlops.substack.com/p/lecture-10-implementing-model-monitoring) | A complete implementation of a monitoring system using inference tables and Lakehouse Monitoring.       |
