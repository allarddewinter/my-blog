---
title: "Thinking Like an Architect: Beyond the Job Title"
description: "Exploring Gregor Hohpe's perspective on the architect's role as an amplifier, translator, and enabler of better decision-making within organisations."
date: 2025-11-19
tags: [leadership, strategy, technology, mindset]
---

Interesting and funny talk from Gregor: [https://www.youtube.com/watch?v=xtxfrxf0mfE](https://www.youtube.com/watch?v=xtxfrxf0mfE)

Gregor Hohpe challenges the traditional view of an architect as a decision-maker or the "smartest person in the room." Instead, he posits that an architect's true value lies in making everyone else smarter, acting as an amplifier and translator across different organisational levels. This involves connecting disparate parts of a business, using powerful metaphors to bridge communication gaps, and employing models to sharpen thinking and facilitate better decisions.

Hohpe argues that the architect's role is not to dictate but to empower, enabling teams to navigate complexity and make informed choices.

> "I don't think the architects should strive or pretend to be the smartest people in the room and decide for other people. Rather, we should make everybody else a little bit smarter."

### The Architect as an Amplifier

Hohpe outlines several key ways architects can amplify intelligence within an organisation:

*   **Connecting Different Levels (The Architect Elevator):**
    *   Organisations often suffer from disconnects between "upper management" (the penthouse) and "development teams" (the engine room).
    *   Architects act as an "elevator," facilitating fast vertical movement and translation between these levels, ensuring technical efforts align with business strategy and vice versa.
    *   This isn't about telling different stories but translating decisions and constraints so they make sense to each audience.
    *   The architect's role is not to "dig" (code extensively) but to ensure the "tunnels meet," occasionally picking up a shovel to stay connected to reality.

*   **Using Metaphors:**
    *   Metaphors translate complex technical problems, constraints, and decisions into a domain easily understood by the audience.
    *   They are not merely "cute stories" but powerful tools that allow the audience to "think along with you" in their own context.
    *   **Example:** Hohpe uses car metaphors (accelerator vs. gas pedal, disruption with Japanese cars, "Halo products" in cloud services) and train metaphors (self-centering wheels, guard rails vs. lane assist) to explain complex concepts like technical debt, platforms, and governance.
    *   The most effective metaphors leverage the audience's business domain (e.g., financial options in a financial services context).

*   **Seeing More Dimensions:**
    *   Architects often perceive more dimensions in a problem than others, moving discussions from a binary "either/or" to a multi-dimensional "both/and."
    *   **Example:** Instead of viewing "cutting project timelines" and "compromising quality" as opposing forces, an architect might introduce dimensions like "shifting testing earlier" or "automated testing" to show how both can be achieved.
    *   Discussing "vendor lock-in" can be reframed by considering the "utility" gained from a service versus the "switching cost," leading to a more balanced ROI discussion.
    *   Lock-in is not just vendor-specific; any change has a switching cost, even within open-source products or different versions.
    *   "Mental lock-in" occurs when thinking is confined to a vendor's product terms (e.g., always thinking in AWS SQS/SNS instead of generic queues and retry policies).

*   **Expanding the Solution Space:**
    *   Architects break down problems, add dimensions, and understand interdependencies to expand the range of possible solutions.
    *   This moves discussions beyond simple "left or right" choices, making people "smarter and ultimately happier" by offering more nuanced options.
    *   **The Architect Boomerang:** When faced with buzzword-driven demands (e.g., "we need to be cloud-native"), an architect asks "what are we really after?" (resilience, scalability, developer productivity, reduced switching cost). This allows them to identify more options, understand trade-offs, and return with a better-fitting solution.

### The Architect as a Modeller

*   **Models for Sharpening Thinking:**
    *   Models are powerful tools for making people smarter, particularly at mid-levels of the organisation.
    *   They are not meant to be accurate depictions of reality but rather to sharpen thinking and aid decision-making.
    *   **Example:** The shift from a geocentric to a heliocentric model of the solar system simplified understanding by using a more suitable model, even though all models are inherently "wrong."
    *   Simple models are often more useful than over-elaborate ones, as they abstract away complexity to focus on key insights.
    *   **The "Read the Rest of the Paper" Rule:** Architects delve deeper than surface-level understanding, applying principles like George Box's quote: "All models are wrong, but some are useful." Simple models are the most useful.

*   **Context-Dependent Models:**
    *   The "best" model depends on the question being asked. A topographical map is excellent for planning a hike but useless for understanding population density.
    *   When asked to "show me your architecture," a valid retort is "what question are you looking to answer?"
    *   **Sketching for Two-Way Communication:** While standard models (UML, C4) are great for broadcasting information, custom sketches are powerful for two-way conversations, aiding dialogue and decision-making.
    *   Sketches can express over 20 dimensions (colour, shape, size, proximity, squiggliness for certainty), making them incredibly rich tools for communication.
    *   **Raising the Level of Abstraction:** "High-level diagrams" should not "dumb down" information. Instead, they should raise the level of abstraction to deepen thinking and reveal different complexities, as seen in the "Powers of Ten" concept.

### Failure Modes and Countermeasures

Hohpe highlights common pitfalls architects face:

*   **Believing the Audience "Doesn't Get It":**
    *   People are not stupid; they have different incentives and motivations.
    *   An architect must translate their message into the audience's language (e.g., selling "speed" to someone who cares about "cost" by linking speed to reduced operational costs or opportunity costs).
*   **Trying to Change Behaviour Directly:**
    *   It's nearly impossible to change behaviour without first changing underlying assumptions and beliefs.
    *   If someone resists change, it's often because they believe "change brings operational risk" (e.g., "never touch a running system"). The architect must address these beliefs with evidence and alternative approaches.
*   **Being Labelled "Too Academic":**
    *   When using the "architect boomerang" to explore options, some may demand a quick decision.
    *   Hohpe's "coin toss" analogy illustrates that an "informed decision" is preferable to a random one, justifying a brief pause for architectural thinking.
*   **Making Things "More Complicated":**
    *   This perception arises when others assume a stable, predictable future.
    *   Architects must challenge this "wrong assumption" by highlighting that complexity arises from uncertainty and change, which good architecture helps manage.

### Conclusion

Hohpe concludes that "architect" is not a job title but a way of thinking. By embracing the roles of amplifier, translator, and modeller, architects can empower others, foster better decision-making, and ultimately make organisations more effective and adaptable.

> "Architecture and agility are absolutely no opposites; they're no contradiction. Both thrive with high levels of uncertainty."

[^1]: This refers to the concept that the value of an option increases with the volatility or uncertainty of the underlying asset. In architecture, this means that in highly uncertain environments, the ability to defer decisions or maintain flexibility (i.e., architectural options) becomes more valuable.
