---
title: "Simon Willison on the lethal trifecta and MCP security"
description: "A look at Simon Willison's latest talk on AI security, focusing on his 'lethal trifecta' concept and the risks of the Model Context Protocol (MCP)."
date: 2025-08-09
tags: [technology, ai, security, simon-willison]
---

Simon Willison has published another excellent piece on the persistent security challenges in the world of AI, based on his recent talk at the Bay Area AI Security Meetup. You can find his full annotated presentation [here](https://simonwillison.net/2025/Aug/9/bay-area-ai/).

He revisits the concept of prompt injection and expands on what he calls the "lethal trifecta"—a combination of capabilities that makes AI agents vulnerable to data theft.

> The lethal trifecta of capabilities is:
> - Access to your private data
> - Exposure to untrusted content
> - The ability to externally communicate in a way that could be used to steal your data

When an AI agent combines these three features, it can become a target for attackers who can trick it into accessing private information and sending it to them.

Simon argues that many common mitigations, such as using an AI to scan for malicious prompts, are insufficient. He makes a point about the standards we should demand:

> ... in application security, 99% is a failing grade! Imagine if our SQL injection protection failed 1% of the time.

This highlights a point that I find particularly frustrating: the security responsibility being placed on the end user. Most people are not aware of these risks. They are often just keen to experiment with the latest technology, and in doing so, can inadvertently create security holes. In my own company, we use Microsoft Copilot. While it offers clear benefits, it also introduces risks that need to be balanced with proper education—something that is often lacking. With the current lack of robust security standards for LLMs, it feels like we are simply waiting for the next security incident to happen.

This new post is a great follow-up to the ideas I summarised previously in "[Security risks in LLM agents: Simon Willison’s insights](/blog/security-risks-in-llm-agents-simon-willisons-insights/)", where I first covered the lethal trifecta. It is worrying to see how fundamental these challenges remain. Simon’s critique of the Model Context Protocol (MCP) for outsourcing these critical security decisions to users is good. We need better-designed systems, not just better-informed users.