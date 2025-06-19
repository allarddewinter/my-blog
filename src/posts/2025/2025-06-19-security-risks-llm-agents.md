---
title: "Security risks in LLM agents: Simon Willison’s insights"
description: "A summary of Simon Willison’s recent posts on security risks in LLM agents, including the lethal trifecta, design patterns, and real-world vulnerabilities."
date: 2025-06-19
tags: [technology, ai, security]
---

In his latest newsletter and blog posts, Simon Willison shared some excellent thoughts on the security challenges surrounding LLM (Large Language Model) agents. These agents, also known as tool-using LLM systems, are AI models that interact with external tools or systems to perform tasks. Simon’s analysis moves from theoretical frameworks to practical examples, highlighting the risks and potential solutions. Here are some of his recent posts that I found especially insightful:

### 1. The lethal trifecta for AI agents: private data, untrusted content, and external communication
[Source](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/)

If you’re using LLM agents that combine private data access, exposure to untrusted content, and external communication capabilities, you’re exposing yourself to significant risks. Simon explains this as the "lethal trifecta":

> If you are a user of LLM systems that use tools (you can call them "AI agents" if you like) it is critically important that you understand the risk of combining tools with the following three characteristics. Failing to understand this can let an attacker steal your data. The lethal trifecta of capabilities is:
> - Access to your private data – one of the most common purposes of tools in the first place!
> - Exposure to untrusted content – any mechanism by which text (or images) controlled by a malicious attacker could become available to your LLM.
> - The ability to externally communicate in a way that could be used to steal your data (I often call this "exfiltration" but I'm not confident that term is widely understood).
> If your agent combines these three features, an attacker can easily trick it into accessing your private data and sending it to that attacker.

{% image "/assets/images/posts/the-lethal-trifecta.jpg", "Illustration of the lethal trifecta in LLM agents", null, "eager" %}

### 2. Design patterns for securing LLM agents against prompt injections
[Source](https://simonwillison.net/2025/Jun/13/prompt-injection-design-patterns/)

Simon highlights several design patterns to protect LLM agents from prompt injection attacks. These patterns include:
- The Action-Selector Pattern
- The Plan-Then-Execute Pattern
- The LLM Map-Reduce Pattern
- The Dual LLM Pattern
- The Code-Then-Execute Pattern
- The Context-Minimization Pattern

These patterns are discussed in detail in the paper [here](https://arxiv.org/abs/2506.08837).

### 3. An introduction to Google’s approach to AI agent security
[Source](https://simonwillison.net/2025/Jun/15/ai-agent-security/)

Google outlines three core principles for securing AI agents:
1. Agents must have well-defined human controllers.
   > It is essential for security and accountability that agents operate under clear human oversight. Every agent must have a well-defined set of controlling human user(s).
2. Agent powers must have limitations.
3. Agent actions and planning must be observable.

Simon agrees with this approach, emphasizing the importance of transparency in LLM systems:

> Yes. Yes. Yes. LLM systems that hide what they are doing from me are inherently frustrating – they make it much harder for me to evaluate if they are doing a good job and spot when they make mistakes. This paper has convinced me that there's a very strong security argument to be made too: the more opaque the system, the less chance I have to identify when it's going rogue and being subverted by prompt injection attacks.

I also appreciate this approach. Working with LLMs that display their thought process is more intuitive and even entertaining 😅. It helps fine-tune prompts and ensures better results. This is especially useful when working with tools like Cline, where you can ask it to start with a planning phase and it shows you all the intermediate steps.

### 4. Breaking down ‘EchoLeak’, the first zero-click AI vulnerability
[Source](https://www.aim.security/lp/aim-labs-echoleak-blogpost)

The ‘EchoLeak’ vulnerability in Microsoft 365 Copilot was a major security concern. It demonstrated how the lethal trifecta can be exploited in real-world scenarios:

> The lethal trifecta strikes again! Any time a system combines access to private data with exposure to malicious tokens and an exfiltration vector you're going to see the same exact security issue.

{% image "/assets/images/posts/image-of-a-mischievous-looking-ai-robot.png", "A mischievous-looking AI robot juggling data, made with recraft.ai", "This AI looks like it’s up to no good!", "eager", null, "image-width-75" %}

This vulnerability was big news in many companies, including mine. While Copilot has been a valuable tool for managing business data, especially as an advanced search function, it also highlights the risks we face. I have always raised my eyebrows at SharePoint’s usability and design decisions, but Copilot made it easier to find documents. However, this incident underscores the need for caution.

### Bonus: Anthropic’s multi-agent research system
[Source](https://www.anthropic.com/engineering/built-multi-agent-research-system)

Simon also shared a link to Anthropic’s documentation on their multi-agent research system. It’s a great example of how to build secure and effective LLM agents. You can read more about it [here](https://www.anthropic.com/engineering/built-multi-agent-research-system).
