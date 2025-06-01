---
title: "Twelve-factor agents: Building reliable LLM applications"
description: "A structured approach to creating production-ready LLM applications inspired by the classic 12 Factor Apps methodology"
date: 2025-06-01
tags: [technology, llm, architecture]
---

Dexter Horthy has put online a guide on building production level LLM applications. The guide presents a structured approach for developing LLM-powered software, in similar fashion as the original 12 factor framework. 

## 12 factors for LLM applications

Building LLM applications presents challenges when moving from prototype to production. The gap between demonstration quality and production readiness requires proven engineering principles. The original 12 Factor Apps methodology provided structure for SaaS development (web-based software delivered as a service to users). Dexter created a similar framework for LLM applications.

Most production AI agents are not fully autonomous systems. They consist of traditional software with LLM components integrated at specific points. This guide documents patterns for building functional systems.

{% image "/assets/images/posts/026-agent-dag-lines.png", "Diagram showing how LLMs make real-time decisions to determine execution paths", "Let the LLM make decisions in real time to figure out the path", "eager" %}

The twelve principles are:

1. Natural language to tool calls
2. Own your prompts
3. Own your context window
4. Tools are just structured outputs
5. Unify execution state and business state
6. Launch/pause/resume with simple APIs
7. Contact humans with tool calls
8. Own your control flow
9. Compact errors into context window
10. Small, focused agents
11. Trigger from anywhere, meet users where they are
12. Make your agent a stateless reducer

The complete guide is available at [12-factor-agents on GitHub](https://github.com/humanlayer/12-factor-agents).

Two factors stand out as particularly important yet factor 4 is for example often overlooked in the current AI hype with all these marketing terms:

## Factor 4: Tools are just structured outputs

This principle defines tools as structured JSON outputs from LLMs that trigger deterministic code. All the function calls you see today are simply JSON outputs. The pattern separates decision-making from execution. The LLM determines actions while application code controls implementation. This provides flexibility in execution logic without being constrained to specific function calls.

## Factor 10: Small, focused agents

This principle recommends building specialised agents for specific tasks rather than monolithic, everything-in-one systems. Context window limitations affect LLM performance as complexity increases. Limiting agents to 3-10 steps maintains manageable context and improves reliability. This approach facilitates debugging and testing while allowing gradual scope expansion.

## The original 12 Factor Apps

The [12 Factor Apps](https://12factor.net/) methodology, created by Adam Wiggins, established principles for building web applications. It addressed configuration management, dependency isolation, and deployment practices in SaaS development.

The 12-factor agents methodology addresses similar fragmentation in LLM application development. Both methodologies aim to create systematic approaches for building scalable software. Just as 12 Factor Apps gives order to web application development, this new framework provides structure for the field of LLM powered applications.
