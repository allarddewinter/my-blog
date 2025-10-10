---
title: "The Critical Scrutiny of TOGAF: A Pragmatic Reflection"
description: "A balanced look at TOGAF's evolution, its claims as a methodology versus a toolkit, and the practical challenges of its application in enterprise architecture, reflecting on its continued utility."
date: 2025-10-10
tags: [technology, enterprise-architecture, togaf, methodology, criticism]
---

Following my recent post, "[TOGAF: A Pragmatic Starter Kit for Engineers](https://allarddewinter.net/blog/togaf-a-pragmatic-starter-kit-for-engineers/)," which explored a lean, iterative approach to leveraging TOGAF's principles, it is equally important to critically examine the framework itself. This post aims to provide a balanced perspective on TOGAF's utility and limitations, acknowledging its enduring presence while reflecting on its practical application.

Svyatoslav Kotusev, a dedicated researcher in the field of Enterprise Architecture, offers a comprehensive and critical analysis in his article, "[The Critical Scrutiny of TOGAF](https://medium.com/@kotusev/the-critical-scrutiny-of-togaf-577acee2f4e8)." His work challenges the common perception of TOGAF as a definitive guide for EA practitioners, prompting a deeper reflection on its role.

## TOGAF: Methodology or Toolkit?

A central point of discussion revolves around TOGAF's identity: is it a consistent methodology or merely a toolkit?

*   **Original Intent as Methodology:** Kotusev highlights that TOGAF's original documentation explicitly positioned it as "a detailed method and a set of supporting tools." The Architecture Development Method (ADM) was described as a "step-by-step approach," and the Architecture Content Framework (ACF) as a "detailed model of the outputs to be created by the ADM." This indicates an initial design as a comprehensive, consistent methodology.
*   **Repositioning as Toolkit:** In practice, many architects find it challenging to follow the ADM's prescribed steps or produce the extensive documentation recommended by the ACF. This practical disconnect has led to TOGAF being increasingly positioned by its community as a "useful toolkit" rather than a rigid methodology. Kotusev suggests this repositioning occurred because the "detailed method" proved impractical in real-world scenarios.
*   **Evolution of "Framework":** Even the term "Framework" in TOGAF's title has seen a reinterpretation. Initially, an EA framework was defined as a "logical structure for classifying and organizing the descriptive representations of an Enterprise." However, contemporary interpretations by TOGAF trainers often equate "Framework" with "a set of reusable components," akin to software frameworks, a meaning that diverges from its original definition.

This shift from a prescriptive methodology to a more flexible toolkit, alongside the redefinition of core terminology, suggests an adaptation to practical realities where a rigid, original approach might have been unworkable.

## Best Practice: Claim Versus Reality

The Open Group asserts that TOGAF is based on "best practice" developed through the collaborative efforts of numerous leading companies. However, Kotusev's research prompts us to question this claim:

*   **Lack of Real-World Adherence:** If practitioners do not consistently follow the ADM or create the recommended documents, whose "best practice" does TOGAF truly represent? Kotusev notes that he has "never seen any architects or organizations who might have said that the ADM, ACF or Enterprise Continuum represent their actual best practice."
*   **Origins in TAFIM:** TOGAF's foundation in the Technical Architecture Framework for Information Management (TAFIM) is also scrutinised. TAFIM was reportedly retired due to its impracticality and high costs, which raises valid questions about how a framework based on an unsuccessful predecessor can claim to embody best practice.
*   **Marketing Motivation:** Kotusev suggests that the "best practice" claims are primarily marketing statements, driven by the significant revenue generated from TOGAF certifications, training, and related services.

Furthermore, Kotusev argues that actual best practices in EA are often *not* fully captured within TOGAF. A prime example is the Business Capability Map (BCM), widely used in many organisations for strategic alignment and IT investment, yet "not even mentioned in TOGAF at all." This highlights a potential gap between TOGAF's content and the practical tools employed by successful EA practices.

## The Illusion of Flexibility

TOGAF's proponents often praise its flexibility, arguing it can be tailored to various organisational contexts. Kotusev, however, views this flexibility as a "logical trick" or "catch-22."

*   **Removed Categorisation Model:** Earlier versions of TOGAF (e.g., Version 9) categorised its content into "core," "mandated," "recommended," and "supporting" sections, implying that certain elements were essential for it to be "recognizably TOGAF." The removal of this categorisation model in TOGAF Version 9.1 effectively allows any EA-related activity to be interpreted as "using adapted TOGAF," regardless of its actual adherence to the framework's recommendations.
*   **Unspecified Adaptation:** While TOGAF's documentation mentions the need for adaptation, it provides little guidance on *how* to adapt it effectively. This can leave practitioners to "adapt" TOGAF by essentially setting aside its impractical recommendations and devising their own solutions.
*   **"Lossless Lottery" for The Open Group:** This "flexibility trick" places The Open Group in a beneficial position: failures can be attributed to improper adaptation by unqualified architects, while successes can be "appropriated" as TOGAF-based due to its broad adaptability.

In essence, Kotusev concludes that TOGAF's admired flexibility "is nothing more than a simple trick helping (1) conceal impracticality of the actual TOGAF’s recommendations, (2) put the burden of responsibility for improper adaptation on EA practitioners, (3) avoid any potential criticism and (4) interpret successes and failures 'properly'."

## TOGAF 10: Addressing Criticisms, or More Symbolic Than Ever?

Kotusev's analysis of the TOGAF Standard, 10th Edition, prompts us to consider whether the latest version genuinely addresses long-standing criticisms or merely reinforces its symbolic status.

*   **Attempting to Address Criticisms:** The 10th edition attempts to address some long-standing criticisms, such as the perception of the ADM as a rigid waterfall model. The removal of arrowheads from the ADM aims to convey a more iterative and agile approach. However, Kotusev argues this is a "patently perfunctory, 'quick and dirty' fix" [Kotusev, "The TOGAF Standard, 10th Edition: What’s New?"].
*   **Restructuring, Not Substantive Change:** The 10th edition primarily involves restructuring and extending content, splitting the previous monolithic manual into "TOGAF Fundamental Content" and "TOGAF Series Guides." While presented as an improvement for usability, Kotusev argues that "no substantial changes have actually been introduced to the framework."
*   **Rhetorical Novelties:** New guides often address trendy topics like "digital" and "agile," but offer little concrete advice beyond asserting TOGAF's compatibility. The introduction of terms like "minimum viable architecture (MVA)" is seen as applying agile terminology to EA without substantive methodological changes.
*   **Contradictory Statements:** The removal of arrowheads from the ADM in the 10th edition, intended to counter the perception of a waterfall model, has led to contradictions within the text. While some sections still describe the ADM as a "tested and repeatable process" with a "recommended sequence," others explicitly state that "The TOGAF ADM should not be understood as a processes model."
*   **Increased Volume, Decreased Clarity:** Despite the modularisation, the total volume of TOGAF documentation has increased significantly, making it even more challenging to comprehend. Kotusev describes the text as "very poorly written, incoherent and hard to follow," with repetitions and unintelligible fragments.

This analysis suggests that while TOGAF 10 makes an effort to adapt rhetorically to current industry buzzwords, it may inadvertently further obscure its already vague ideas, potentially reinforcing its symbolic status rather than enhancing its practical clarity.

## What is TOGAF, Then?

Kotusev ultimately characterises TOGAF as "a toolkit of random EA-related recommendations" that struggles to clearly define what EA practice is. Its value, from this perspective, can be haphazard, realised only if some of its recommendations "accidentally turn out useful."

He also describes TOGAF as a "distractor of attention," potentially shifting discourse away from real EA-related questions towards artificial ones about TOGAF's application or advantages. This can lead to a "doublethink" phenomenon, where TOGAF's existence implies extensive knowledge of EA practice, yet its perceived impracticality means no one can specify how it should be used.

Kotusev provocatively likens TOGAF to a "religious text" due to its disputable origins, perceived mythical wisdom, need for interpretation by "enlightened gurus," and its vague, unchanging core text with evolving interpretations. While a strong metaphor, it underscores the challenge of objectively assessing a framework that often evokes strong opinions.

## Conclusion

Kotusev's critical scrutiny provides a valuable counterpoint to the conventional view of TOGAF. While my previous post explored how engineers might pragmatically extract value from TOGAF's concepts, Kotusev's analysis suggests that such an approach often involves "studying TOGAF and then doing something else instead."

The framework's popularity, he argues, stems from aggressive promotion, a perceived lack of serious alternatives, and the "inertness" of the EA research community. For many, TOGAF certification offers symbolic benefits for career progression rather than necessarily fostering genuine architectural competence.

Ultimately, I view TOGAF as a collection of ideas that can still be useful, provided one approaches it with a critical and reflective mindset. It is not a perfect, ready-to-use methodology, and its evolution, particularly in the 10th edition, shows an attempt to respond to criticisms, even if those responses are sometimes perceived as superficial. The key lies in understanding *how* and *what* to use from it, rather than adhering to it blindly. For those seeking a deeper, practical understanding of EA, it is crucial to complement TOGAF with evidence-based sources and real-world experience.