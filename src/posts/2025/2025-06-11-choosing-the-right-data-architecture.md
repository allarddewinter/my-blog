---
title: "Choosing the right data architecture"
description: "Exploring Data Warehouse, Data Lake, Data Lakehouse, and Data Mesh architectures from a data engineer's perspective."
date: 2025-06-11
tags: [technology, architecture, data]
---

This post summarises an article by Dr. Fatih Hattatoglu on Medium, exploring different data architecture choices from a data engineer's perspective. The article highlights the importance of data as a valuable asset and the need for flexible solutions to manage the increasing volume and diversity of data, particularly as use cases continue to grow, including those in machine learning and AI.

{% image "/assets/images/posts/1749632950319.png", "A clay model of a data lakehouse created by recraft.ai", "A 'data lakehouse' from clay, made by <a href=\"https://www.recraft.ai/\">recraft.ai</a>", "eager", null, "image-width-75" %}


As Dr. Hattatoglu notes:

> However, the foundations of a successful data architecture must be laid right from the beginning of the design process. This is not just about building a technical structure, but aligning it with organisational goals and data management strategies.

This quote is particularly relevant as it underscores that technology choices are always connected with broader business and strategic considerations.

The article discusses four main data architecture approaches:

1.  **Data Warehouse:** Focused on structured data, optimised for reporting and analysis. Uses ETL processes and is suitable for consistent, well-organised data. However, it can be expensive and only handles structured data.
2.  **Data Lake:** A flexible structure for storing structured, semi-structured, and unstructured data in its raw form. Ideal for advanced analytics and machine learning, offering flexibility but posing challenges in data management and security.
3.  **Data Lakehouse:** Combines the flexibility of a Data Lake with the structured management of a Data Warehouse. Supports both SQL queries and machine learning, offering the best of both worlds but with complex setup and management.
4.  **Data Mesh:** A decentralised architecture where each department manages its own data product. Promotes flexible management and avoids bottlenecks but can create challenges in data consistency and integration.

The article stresses that the choice of architecture is a strategic decision, not just technical, and must align with organisational goals and data management strategies. Requirement analysis is presented as the crucial first step to define needs, identify stakeholders, clarify scope, and choose the correct technology.

### Data architecture and machine learning / AI

Here is a summary of how each data architecture approach relates to the needs of machine learning and AI, based on the article:

| Data Architecture | Suitability for Machine Learning / AI | Key Characteristics Relevant to ML/AI |
| :---------------- | :----------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| **Data Warehouse** | Limited suitability. Primarily designed for structured data and reporting, not the diverse data types often needed for ML/AI. | - Works only with structured data. <br>- Optimised for reporting, not flexible data exploration or raw data processing. |
| **Data Lake**     | Highly suitable. Designed to store raw, diverse data (structured, semi-structured, unstructured) which is crucial for ML/AI training. | - Stores data in native format (raw). <br>- Offers flexibility for data engineers/scientists to process data as needed. <br>- Ideal for handling continuously changing datasets. |
| **Data Lakehouse**| Highly suitable. Combines the flexibility of a Data Lake with the structure/performance of a Data Warehouse, supporting both ML/AI and traditional BI. | - Handles both structured and unstructured data. <br>- Supports both SQL-based queries and machine learning operations on the same platform. |
| **Data Mesh**     | Potentially suitable, but depends on how data products are designed and shared. Decentralisation can support domain-specific ML/AI efforts. | - Distributed data management. <br>- Data ownership by departments. <br>- Requires careful consideration of data integration and consistency for cross-domain ML/AI. |

In essence, Data Lakes and Data Lakehouses are presented as the most inherently suitable architectures for the diverse data needs and processing flexibility required by modern machine learning and AI workflows.

### Designing data architecture: A systems engineering approach

Designing the right data architecture is a complex undertaking that benefits greatly from applying Systems Engineering principles. This approach breaks down the process into structured phases, ensuring that the solution meets requirements throughout its entire lifecycle. Here is a simplified view of this process, aligning with the data lifecycle:

1.  **Pre-Acquisition (Understand the Problem & Needs)**
    *   **Define the business mission & data purpose (Why?):** Begin by clearly articulating the business objectives that the data architecture needs to support. Why is this data needed? What strategic goals will it enable (e.g., predicting turbine component failures, optimising maintenance schedules based on weather forecasts)?
    *   **Identify stakeholder data needs & requirements (What?):** This involves deep engagement with all users and consumers of the data (offshore technicians, data scientists building predictive models, operational managers). Determine the specific data types required (SCADA (sensor) data, weather data, maintenance logs, video feeds), how data needs to be accessed (real-time streaming, batch processing), performance expectations (low latency for anomaly detection), necessary governance policies (data security for sensitive operational data), and data ownership responsibilities (who is responsible for turbine sensor data?).
    *   *Output:* This phase culminates in a **Logical Data Architecture**, defining the functional requirements and conceptual data model – essentially, the "what" the system must do.

2.  **Acquisition (Design the Solution)**
    *   **Explore data architecture options (How – High Level):** Based on the requirements gathered in the previous phase, evaluate the different architectural patterns discussed (Data Warehouse, Data Lake, Data Lakehouse, or Data Mesh). Select the pattern that best fits the identified needs and constraints, particularly considering the need for diverse data types common in offshore wind (structured sensor data, unstructured video, semi-structured logs).
    *   *Output:* This results in a **High-Level Physical Data Architecture**, outlining the chosen pattern and major components – the high-level "how".
    *   **Detailed design & technology selection (How – Detailed):** With the high-level architecture decided, delve into the specifics. Select the appropriate technologies and platforms (e.g., cloud storage for raw data, a processing engine for time-series analysis, a database for structured maintenance records). Design the detailed data models, data pipelines (including streaming data from turbines), security mechanisms, and infrastructure.
    *   *Output:* This yields the **Detailed Physical Data Architecture**, providing the complete blueprint – the detailed "how".
    *   **Construct & produce (Build & Test)**: Implement the detailed design, building the data pipelines, storage layers, and processing components. Test the system to ensure it meets all defined requirements for data quality, performance (especially for real-time data), security, and functionality (e.g., can the ML models access the necessary data?).

3.  **Utilization (Operate & Evolve)**
    *   **Operational use & support:** Once implemented, the architecture is put into production, supporting ML model training, inference, and operational reporting. This phase involves ongoing monitoring of performance, data quality (critical for model accuracy), and security. It also includes providing support to data users and addressing any operational issues.
    *   **Modification & evolution:** Data needs and technologies are constantly changing. This phase involves adapting the architecture to accommodate new sensor types, evolving ML model requirements, or integrating new data sources (e.g., drone inspection footage). This is an iterative process, potentially looping back to the design phase.

4.  **Retirement (When Data is No Longer Needed)**
    *   **Data retirement:** When data or parts of the architecture are no longer required (due to compliance, obsolescence, or data retention policies for specific data types like raw sensor streams from SCADA), a plan for secure and compliant retirement is executed. This involves archiving data or securely deleting it according to established policies.

This structured, lifecycle-oriented approach, rooted in Systems Engineering, helps ensure that the data architecture is not only technically sound but also strategically aligned, maintainable, and capable of evolving over time to support critical operations like offshore wind maintenance.

You can read the original article here: [https://medium.com/academy-team/which-data-architecture-should-i-choose-for-my-workplace-a-data-engineers-approach-f913b71d8ee6](https://medium.com/academy-team/which-data-architecture-should-i-choose-for-my-workplace-a-data-engineers-approach-f913b71d8ee6)
