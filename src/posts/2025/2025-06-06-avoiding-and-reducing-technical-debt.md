---
title: "Avoiding and reducing technical debt"
description: "Exploring Chelsea Troy's insights on managing maintenance load in software projects."
date: 2025-06-06
tags: [technology, productivity, leadership]
---
Following on from yesterday's post about [decision-making pitfalls for technical leaders](/blog/decision-making-pitfalls-for-technical-leaders), I wanted to highlight another series by Chelsea Troy on technical debt.

In her post ["Quantifying Technical Debt"](https://chelseatroy.com/2021/01/14/quantifying-technical-debt/), Chelsea starts by defining technical debt, or what she prefers to call "maintenance load," as the ongoing effort required to keep existing software features running. She argues that all code carries maintenance load, which increases over time depending on the practices used to build and maintain the software. In the post, she illustrates this with two cases: a "yikes case" where a team adds the equivalent of one full-time developer's worth of maintenance load every 18 months due to a lack of tests, documentation, and a complex coding style, and an "average case" where this happens every 24-30 months with some testing and documentation in place.

In the second post of the series, ["Avoiding Technical Debt"](https://chelseatroy.com/2021/01/18/avoiding-technical-debt/), Chelsea explores how some teams manage to keep their maintenance load from growing. She highlights the example of the Explosion company, which maintains multiple complex products with a small team. Key factors she identifies are:

*   **Lower churn:** Open-source projects, like SpaCy, tend to have lower developer churn, reducing the loss of undocumented context.
*   **Higher code stewardship skills:** Open-source contributors often have strong skills in testing, documenting, and communicating their work, as their "clients" are other developers who need to understand and contribute to the code. This focus on accessibility and clarity mitigates context loss.
*   **Developer empowerment:** In open-source, developers often have more autonomy to rethink or remove features, streamlining the codebase.

To avoid maintenance load growth, Chelsea consequently suggests:

*   Normalising and valuing writing tests and documentation.
*   Training and rewarding developers for effective communication about their technical choices.

In the third post, ["Reducing Technical Debt"](https://chelseatroy.com/2021/01/21/reducing-technical-debt/), Chelsea addresses the challenge of reducing maintenance load when a team is already struggling under its weight. She offers three strategies:

*   **Force features to earn their keep:** Regularly measure the ROI of features and remove those with low returns.
*   **Regularly equip developers to suggest streamlining options:** Give developers time and space to find simpler solutions that improve functionality, robustness, and maintainability simultaneously.
*   **Recover lost context:** Develop skills in "forensic software analysis" to understand how older codebases work, even when the original authors are gone. This is often less expensive than a full rewrite.

Chelsea emphasizes that both the technical team having these skills and the organisation valuing the use of those skills are crucial for managing and reducing maintenance load.

This series really resonated with me. The idea of "maintenance load" is a much more tangible way to think about technical debt than just "bad code." It highlights that it's an ongoing cost, not just a one-time fix. The strategies she outlines, particularly the focus on code stewardship and streamlining, provide practical steps teams can take. I have seen how a lack of documentation and communication negatively influences a team's ability to maintain a codebase, and the concept of "forensic software analysis" is an interesting approach to move away from that. It also highlights that investing in these "non-feature" activities is essential for long-term project health. Finally, effective technical leadership, as discussed in my [previous post](/blog/decision-making-pitfalls-for-technical-leaders), is key to implementing these strategies and fostering a culture that prioritises sustainable software development.

Links to the series:
*   Quantifying Technical Debt: [https://chelseatroy.com/2021/01/14/quantifying-technical-debt/](https://chelseatroy.com/2021/01/14/quantifying-technical-debt/)
*   Avoiding Technical Debt: [https://chelseatroy.com/2021/01/18/avoiding-technical-debt/](https://chelseatroy.com/2021/01/18/avoiding-technical-debt/)
*   Reducing Technical Debt: [https://chelseatroy.com/2021/01/21/reducing-technical-debt/](https://chelseatroy.com/2021/01/21/reducing-technical-debt/)
