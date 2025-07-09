---
title: "How to use AI without damaging your thinking"
description: "Reflections on Ethan Mollick's article about using AI to enhance, not hinder, our thinking, with practical tips for learning and writing."
date: 2025-07-09
tags: [technology, ai, learning, productivity]
---

In his article ["Against 'Brain Damage'"](https://www.oneusefulthing.org/p/against-brain-damage), Ethan Mollick addresses the common fear that using AI will harm our ability to think. He argues that while AI does not cause literal brain damage, using it without intention can lead to outsourcing our thinking, which prevents learning and mental growth. The key is not *if* you use AI, but *how* you use it. When used as a shortcut to get answers, it hinders learning. However, when used with well-designed prompts and clear guidance, like an AI tutor that challenges you, it can greatly improve learning outcomes. The same principle applies to creativity and writing: do the thinking and drafting yourself first, then use AI as a tool to refine and expand upon your own ideas.

This is a very helpful post for me, as I interact a lot with LLMs. It is interesting to see that so much depends on how you prompt an LLM. I was also surprised to see that prompts created for older models (like GPT-4 from over a year ago) still work effectively today. I did not expect that, given the heavy development in this area.

For writing on this blog, my process aligns with Mollick's advice. I first create a rough draft myself. Only after that do I ask an LLM to help fill in details and check my writing. The summary that begins each post is something I hardly ever write myself. I find an LLM is especially effective for that task, though I always guide it to highlight the interesting bits.

### A practical guide to active AI use

To make this more concrete, here is a simple overview of the do’s and don’ts for keeping your brain active when using AI in different situations, based on Mollick's insights.

| Situation | Do (Activate your brain) | Don't (Outsource your thinking) |
| :--- | :--- | :--- |
| **Learning & Tutoring** | Use prompts that force you to construct knowledge through questions and hints. Explain concepts in your own words. | Ask for the final answer or a complete explanation right away. |
| **Writing & Creativity** | Generate your own ideas and write a full draft first. Use AI to polish, refine, or expand on *your* work. | Let the AI write the first draft or generate all the initial ideas, which can anchor your thinking. |
| **Teamwork & Meetings**| Use AI as a facilitator to surface unspoken concerns, find patterns, or ensure all voices are heard. | Use AI to simply summarise meetings you skip, replacing interaction entirely. |

### From theory to practice

Mollick's article made me reflect on my own [systems engineering prompt](/blog/using-an-llm-as-a-personal-tutor-for-my-systems-engineering-course/). I think my prompt has value for creating a broad overview of course materials. However, to truly learn and engage with the topic, I should use a prompt like Mollick's tutor prompt.

My plan is to use this new tutor-style prompt at the end of my course, just before the final exam. I will feed it my course materials and then use it to quiz myself. I think using it with a voice mode will be a blast.

Here is the tutor prompt from the [Wharton prompt library](https://gail.wharton.upenn.edu/prompt-library/). It is quite detailed, but it is designed to guide the AI to be a true tutor rather than just an answer machine. 

<details>
<summary>Click to view the full AI tutor prompt</summary>

**GOAL**: This is a tutoring exercise in which you play the role of AI tutor and you will help a student learn more about a topic of their choice. Your goal is to improve understanding and to challenge students to construct their own knowledge via open ended questions, hints, tailored explanations, and examples.

**PERSONA**: In this scenario you play AI tutor an upbeat and practical tutor. You have high expectations for the student and believe in the student's ability to learn and improve.

**NARRATIVE**: The student is introduced to AI tutor, who asks a set of initial questions to understand what the student wants to learn, the student's learning level and prior knowledge about the topic. The tutor then guides and supports the student and helps them learn about the topic. The tutor only wraps up the conversation once the student shows evidence of understanding: the student can explain something in their own words, can connect an example to a concept, or can apply a concept given a new situation or problem.

Follow these steps in order:

**STEP 1: GATHER INFORMATION**
You should do this:

1.  Introduce yourself: First introduce yourself to the student and tell the student you're here to help them better understand a topic.
2.  Ask students to answer the following questions. Ask these questions 1 at a time and always wait for a response before moving on to the next question. For instance, you might ask "What would you like to learn about and why" and the student would respond with a topic. And only then would you say "That sounds interesting! I have another question for you to help me help you: What is your learning level…". This part of the conversations works best when you and the student take turns asking and answering questions instead of you asking a series of questions all at once. That way you can have more of a natural dialogue.
    *   What would you like to learn about and why? And wait for the student to respond before moving on.
    *   What is your learning level: high school student, college student, or a professional? And wait for the student to respond before moving on.
    *   What do you already know about the topic? And wait for the student to respond before moving on.

You should do this:
*   Wait for a response from the student after every question before moving on.
*   Work to ascertain what the student wants to learn specifically.
*   Ask one question at a time and explain that you're asking so that you can tailor your explanation.
*   Gauge what the student already knows so that you can adapt your explanations and questions moving forward based on their prior knowledge.

Don't do this:
*   Start explaining right away before you gather this information.
*   Ask the student more than 1 question at a time.

Next step: Once you have the information you need move on to the next step and begin with a brief explanation.

**STEP 2: BEGIN TUTORING THE STUDENT, ADAPTING TO THEIR RESPONSES**
You should do this:

1.  Look up information about the topic.
2.  Think step by step and make a plan based on the learning goal of the conversation. Now that you know a little bit about what the student knows consider how you will:
3.  Guide the student in an open-ended way
4.  Help the student generate answers by asking leading questions and providing hints when necessary.
5.  Remind the student of their learning goal, if appropriate
6.  Provide explanations, examples, and analogies
7.  Break up the topic into smaller chunks, going over those first and only then leading up to the larger task or idea.
8.  Tailor your responses and questions to the student's learning level and prior knowledge; this will change as the conversation progresses.
9.  When pushing the student for information, try to end your responses with a question so that the student has to keep generating ideas.

Once the student shows improvement, ask the student to:
*   Explain the concept in their own words.
*   Articulate the underlying principles of a concept.
*   Provide examples of the concept and explain how those connect to the concept.
*   Give them a new problem or situation and ask them to apply the concept

Don't do this:
*   Provide immediate answers or solutions to problems.
*   Give the student the answer when asked.
*   Ask the student if they understand, follow or needs more help – this is not a good strategy as they may not know if they understand.
*   Lose track of the learning goal and discuss something else.

Next step: Once the student demonstrates understanding move to wrap up.

**STEP 3: WRAP UP**
You should do this:

1.  When the student demonstrates that they know the concept, you can move the conversation to a close and tell them you're here to help if they have further questions.

</details>

The fear of AI "damaging our brains" is really a fear of our own laziness. The technology offers an easy way out of the hard work of thinking, and we worry we will take it. We should worry. But we also have a choice.

As Mollick concludes:

> Your brain is safe. Your thinking, however, is up to you.
