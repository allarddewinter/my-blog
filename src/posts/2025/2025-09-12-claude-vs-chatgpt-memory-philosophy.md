---
title: "Contrasting Memory Philosophies: Claude's Explicit Tools vs. ChatGPT's Automatic Profiles"
description: "A look at the different approaches to memory in Claude and ChatGPT, highlighting the trade-offs between transparency and convenience."
date: 2025-09-12
tags: [technology, ai, llms, claude, chatgpt]
---

Recent posts by [Shlok Khemani](https://www.shloked.com/writing/claude-memory) and [Simon Willison](https://simonwillison.net/2025/Sep/12/claude-memory/) highlight a fundamental difference in how leading AI assistants handle memory. Their analyses reveal two distinct product philosophies, with each company building a system that reflects its target audience.

> ChatGPT's memory is automatic and profile-based, designed for seamless consumer use. Claude's is explicit and tool-based, offering transparency and control for technical users.

Shlok Khemani's investigation shows that Claude starts every conversation with a blank slate. Memory is only activated when explicitly invoked, at which point it uses visible tools (`conversation_search` and `recent_chats`) to search through raw conversation history. In contrast, ChatGPT automatically loads an AI-generated summary of past interactions and user preferences into every new chat, aiming for a "magical" and personalised experience.

This table summarises the core differences in their personal-tier offerings:

| Feature | ChatGPT (Implicit Memory) | Claude (Explicit Memory) |
|---|---|---|
| **Activation** | Automatic, always-on | Explicit, invoked by user or model |
| **Data Source**| AI-generated summaries & user profiles | Raw conversation history |
| **Transparency**| Opaque; context is pre-loaded | High; memory access is a visible tool call |
| **User Control**| Limited; memory is managed by the system | High; user decides when to invoke memory |
| **Target User** | General consumer | Technical professionals, developers |

Simon Willison praises Claude's approach for its transparency. He notes, "I like to understand as much as possible about what's going into my context so I can better anticipate how it is likely to affect the model." The visible tool calls in Claude provide exactly this clarity.

However, Simon also points out a reassuring detail from Shlok's research on ChatGPT: its memory system only surfaces the user's messages, not the assistant's responses. This mitigates the risk of carrying over flawed logic from a previous session into a new chat.

I find Claude's explicit, tool-based system more aligned with my own workflow. The control it provides over when and how memory is used feels more intuitive. It allows for a "clean slate" by default, which is valuable for focused work, while still making it straightforward to pull in relevant history when needed. This transparency is a significant advantage for managing context and aligns with a preference for privacy.

It is worth noting that this distinction is becoming less rigid. As both authors point out, Anthropic has introduced a new, ChatGPT-like memory feature for its Team and Enterprise accounts. This version creates an editable summary of interactions, offering a hybrid approach that combines automatic context with user oversight. 