---
title: "TOGAF: A Pragmatic Starter Kit for Engineers"
description: "Why TOGAF still matters, how to launch it without drowning in paper, and the minimal habits that keep the architecture alive after day-one."
date: 2025-10-09
tags: [technology, enterprise-architecture, togaf, governance, links]
---

The Open Group Architecture Framework (TOGAF) has long been a foundational standard for Enterprise Architecture. The framework continues to evolve, offering a structured yet adaptable approach to managing the complexity inherent in modern enterprise systems. This post aims to distil the essence of TOGAF, particularly for software engineers, focusing on its practical application, the establishment of an architecture capability, and the sustained maintenance of architectural integrity. It addresses the common challenges faced in integrating architectural principles into dynamic development environments, providing a pragmatic pathway to leverage TOGAF's benefits without succumbing to bureaucratic overhead.

> Architecture is a moving target; TOGAF simply gives you a rifle and a compass—not a cage.

## 1. Why Implement TOGAF?

The strategic implementation of TOGAF offers distinct advantages over ad-hoc architectural practices, particularly in mitigating common organizational inefficiencies and risks.

| Pain without TOGAF | Pain with ad-hoc TOGAF | Gain with disciplined TOGAF |
|---|---|---|
| Ambiguity regarding data ownership and system responsibilities across development teams. | Extensive, often unread, architectural documentation lacking practical application. | Concise Architecture Vision documents complemented by living data catalogues. |
| Repetitive integration efforts for disparate systems following organizational expansion. | Protracted architectural definition phases, leading to delayed project initiation. | Streamlined Architecture Development Method (ADM) cycles, fostering the creation of reusable building blocks. |
| Recurring audit findings due to inconsistent architectural adherence. | Superficial governance processes that fail to enforce architectural standards effectively. | Robust governance mechanisms, including Architecture Board reviews linked to verifiable compliance checks. |

The enduring relevance of TOGAF lies not in its rigidity, but in its capacity to provide a structured approach to architectural development and governance. The framework has refined this, emphasizing adaptability and integration with contemporary development methodologies such as Agile and DevOps. The core Architecture Development Method (ADM) remains a robust foundation for guiding architectural efforts, irrespective of prevailing technological trends. For a deeper understanding of its application in solution architecture, refer to Anatolii Gabuza's article: ["What Software Engineers Should Know About “TOGAF” Solution Architecture?"](https://medium.com/better-programming/what-should-every-engineer-know-about-togaf-solution-architecture-866e21f77edb).

## 2. The Architecture Development Method (ADM): A Conceptual Overview

The ADM, central to TOGAF, can be conceptualized as an iterative, risk-driven process akin to an OODA (Observe, Orient, Decide, Act) loop, guiding the evolution of enterprise architecture.

1.  **Observe** – Encompasses the Preliminary Phase and Architecture Vision, focusing on establishing the architecture capability and defining the scope and high-level vision.
2.  **Orient** – Involves the detailed definition of Business, Information Systems (Data and Application), and Technology Architectures.
3.  **Decide** – Addresses Opportunities & Solutions and Migration Planning, translating architectural definitions into actionable implementation strategies.
4.  **Act** – Pertains to Implementation Governance and Architecture Change Management, ensuring adherence during implementation and managing subsequent architectural evolution.

This iterative nature underscores that the ADM is not a linear, waterfall model. It is expected that insights gained during the "Act" phase, particularly from actual implementation, may necessitate revisiting earlier "Orient" phases to refine architectural decisions.

## 3. Initiating the First Iteration

A pragmatic approach to adopting TOGAF involves a focused, iterative launch, prioritizing tangible outcomes over comprehensive documentation.

### Step 0 – Defining the Scope
Effective scoping is paramount for a successful initial iteration. This involves:
*   **Breadth:** Concentrating on a single, manageable value stream (e.g., "customer onboarding").
*   **Depth:** Limiting the architectural detail to a "container" level. The C4 model, while not explicitly mentioned or endorsed by TOGAF, provides a hierarchical approach to modelling technical architecture, allowing for different levels of detail to be presented to various audiences. This aligns with the TOGAF principle of views and viewpoints, ensuring stakeholders receive tailored perspectives.
*   **Domains:** Potentially deferring a deep dive into Business Architecture if the "why" of the initiative is already clearly articulated by product management.

### Step 1 – Preliminary Phase
This phase establishes the foundational elements for architectural work.
*   **Role Assignment:** Designate an **Architecture Owner** (typically a lead engineer) and a **Business Sponsor** (e.g., a product director).
*   **Principle Definition:** Draft a concise set of **five core Architecture Principles** to guide decision-making. An example could be: "Services are reusable across divisions unless a legal exemption is formally granted by the Architecture Board." These principles, as defined in TOGAF, are enduring rules that guide decision-making and support governance.
*   **Tooling Selection:** Establish a centralized, version-controlled repository for architectural artefacts, such as a Confluence space or a Git repository. This aligns with the concept of the Architecture Repository as a central vault for architectural outputs.

### Step 2 – Architecture Definition Sprint (Phases A→D)
This period focuses on developing the initial architectural definitions.
*   **Architecture Vision:** Conduct a collaborative workshop to produce a high-level **Architecture Vision** document. While TOGAF defines the Architecture Vision as a key deliverable, it does not specify its format or length. A concise, one-page summary can be an effective way to gain stakeholder approval.
*   **Parallel Track Development:**
    *   **Data Architecture:** Identify canonical data entities, their respective owners, and critical quality dimensions. This corresponds to the Data Architecture aspect of Phase C.
    *   **Application Architecture:** Map existing application capabilities, categorizing them for retirement, retention, or new development. This corresponds to the Application Architecture aspect of Phase C.
    *   **Technology Architecture:** Define the target technology stack, security zones, and non-functional requirements. This is the focus of Phase D.
*   **Gap Analysis and Risk Identification:** Consolidate findings into a gap matrix and a comprehensive risk register. Gap analysis is a key technique to identify differences between baseline and target architectures.
*   **Architecture Board Review:** Conduct a concise review with the Architecture Board to capture key decisions. While TOGAF supports documenting decisions, it does not use the specific term "Architecture Decision Records (ADRs)" or prescribe this format. However, the practice of formally recording architectural decisions is consistent with TOGAF's emphasis on governance and accountability.

### Step 3 – Planning for Implementation (Phases E→F)
This phase translates architectural definitions into an actionable implementation plan.
*   **Work Package Definition:** Decompose identified gaps into manageable **work packages**, ideally requiring limited effort.
*   **Prioritization and Resource Allocation:** Prioritize work packages using methodologies like MoSCoW, assigning estimated costs, risks, and business value.
*   **Migration Plan:** Document the **Migration Plan** as a dynamic artefact. While TOGAF defines the Architecture Roadmap and Migration Plan, it does not specify tooling. Using dynamic boards like DevOps can be a practical approach to manage and visualize the plan.

### Step 4 – Continuous Governance (Phases G→H)
Sustained architectural integrity requires continuous oversight and adaptation.
*   **Compliance Checks:** Implement regular compliance checks to ensure development activities adhere to established architectural decisions. While TOGAF supports early compliance and governance, it does not explicitly mention code-level enforcement mechanisms like pull request checks. However, such mechanisms can be effective in ensuring implementation projects conform to the Target Architecture, which is a core objective of Phase G, Implementation Governance.
*   **Change Management:** Establish a "change window" to review new requirements and funnel them into the Requirements Management log. Triggering mini-ADM cycles based on change thresholds is not formally defined in TOGAF, though Phase H (Architecture Change Management) supports iterative updates and managing changes to the new architecture. This pragmatic approach helps maintain the architecture's relevance.

## 4. Essential Architectural Artefacts

To maintain agility and avoid documentation overload, focus on a minimal set of high-impact artefacts, ensuring they are version-controlled and easily accessible.

| Artefact | Storage Location | Update Trigger | Primary Audience |
|---|---|---|---|
| Architecture Vision (1 page) | `docs/vision.md` | Introduction of a new strategic objective. | Executive leadership, stakeholders. |
| Architectural Decision Log | `docs/adr/` | Each significant architectural decision. | Development teams, architects. |
| Data Catalogue (auto-generated) | GitHub Pages | Schema changes or new data entity definitions. | Data engineers, business analysts. |
| C4 Diagrams (Levels 1-3) | Mermaid in repository | Introduction of new containers or significant system changes. | Development teams, architects. |
| Roadmap Board | Devops/Miro/Trello or similar platform | Conclusion of each Program Increment (PI). | Project Management Office (PMO), stakeholders. |

> If an architectural artefact is not maintained within a version control system, its practical utility and reliability are diminished.

## 5. Sustaining Architectural Momentum

Maintaining a living architecture requires embedding architectural practices into routine organizational processes.

1.  **Integration with Development Rituals:**
    *   **Sprint Planning:** Incorporate a review of the architectural decision log to identify architectural implications for upcoming user stories.
    *   **Demonstrations:** Present architecture compliance dashboards, providing visual feedback on adherence to architectural standards.
2.  **Performance Measurement:** While TOGAF discusses KPIs and maturity models, it does not define specific metrics such as re-use ratio, escape rate, or time-to-integrate. However, organizations can define their own relevant metrics to gauge the effectiveness of their architectural practice.
3.  **Annual Principle Review:** Periodically (e.g., annually) review and refresh architectural principles. Any principle that cannot be linked to a measurable outcome or address a recurring issue should be re-evaluated or retired.
4.  **Leveraging the TOGAF Library:** Utilize the **TOGAF Series Guides** selectively, focusing on those directly relevant to current organizational needs. Examples include:
    *   For Agile development: *"ADM & Agile"*
    *   For cloud migration initiatives: *"Cloud Architecture"*
    *   For security mandates: *"Security Architecture"*

## 6. Common Pitfalls and Mitigation Strategies

Experience reveals recurring challenges in architectural practice. Awareness and proactive mitigation are key.

| Trap | Symptom | Antidote |
|---|---|---|
| **Big-Bang Target Architecture** | Overly ambitious, multi-year architectural projects yielding no intermediate deliverables. | Adopt a capabilities-based roadmap with short-term horizons. |
| **Template-Driven Documentation** | Production of voluminous, generic documents filled with boilerplate content. | Prioritize concise, purpose-driven documentation. Each artefact should address a specific audience and concern. |
| **Retrospective Governance** | Architecture Board reviews occurring only after significant implementation efforts are complete. | Implement "shift-left" governance, where architectural compliance is assessed at earlier stages, such as during code reviews or pull request approvals. |

## Key Takeaways

1.  TOGAF is a **lightweight risk-management loop**, not a document factory.
2.  Run the first ADM cycle **lean**: focused scope, limited principles.
3.  Store architectural truth in **Git**, not static documents.
4.  Tie every governance gate to a **working product increment**.
5.  Iterate continuously—architecture requires ongoing adaptation.

TOGAF, when applied judiciously, serves as a powerful tool for strategic alignment and risk management, ensuring that architectural efforts contribute directly to business value. By embracing its iterative nature and focusing on pragmatic application, engineers can effectively leverage TOGAF to navigate the complexities of enterprise-scale development.

[^1]: An Architecture Building Block (ABB) is a logical capability; a Solution Building Block (SBB) is the actual vendor product or code that realises it.
[^2]: The Open Group neither defines “Solution Architect” as a role nor links it to a pay-grade—your HR department does that.
[^3]: C4 model by Simon Brown, [CC4-licensed](https://c4model.com/).
