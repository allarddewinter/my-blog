---
title: "Building a modern resume: from manual tweaks to AI-powered automation"
description: "Discover how I transitioned from tedious manual resume updates to an efficient, AI-assisted workflow using Reactive-Resume and a custom JSON-to-Markdown converter."
date: 2025-06-03
tags: [technology, productivity, ai]
---

Creating and maintaining a resume used to be a real headache. In the past, I'd spend hours fine-tuning the layout. Every text edit meant a cascade of layout adjustments just to make it fit, look decent, or simply not break. It was a constant battle.

My next attempt was using PowerPoint, with two A4-sized slides. This gave me a bit more freedom to tweak the design, and it looked pretty cool, I must say. But still, fine-tuning the layout was hard, and selecting all text for editing was cumbersome. Even thinking about using a different layout meant hours of tweaking everything from scratch.

My third iteration, however, has been the best so far. I stumbled upon an open-source tool called [Reactive-Resume](https://github.com/AmruthPillai/Reactive-Resume). With this, you can store your resume as JSON, use an interactive UI, and with a single click, play around with a limited selection of themes. It's truly great that this tool has been developed and open-sourced.

As their documentation states:
> Reactive Resume is a free and open-source resume builder that simplifies the process of creating, updating, and sharing your resume. With zero user tracking or advertising, your privacy is a top priority. The platform is extremely user-friendly and can be self-hosted in less than 30 seconds if you wish to own your data completely.
>
> It's available in multiple languages and comes packed with features such as real-time editing, dozens of templates, drag-and-drop customisation, and integration with OpenAI for enhancing your writing.
>
> You can share a personalised link of your resume to potential employers, track its views or downloads, and customise your page layout by dragging-and-dropping sections. The platform also supports various font options and provides dozens of templates to choose from. And yes, there's even a dark mode for a more comfortable viewing experience.
>
> Start creating your standout resume with Reactive Resume today!
> (Source: [https://docs.rxresu.me/](https://docs.rxresu.me/))

It's a really easy tool to use with an intuitive UI. Also, I can store the JSON in my GitHub, which automatically gives me an overview of the history of changes. Then I use the online editor to play with the layout and generate a PDF version.

Of course, I also used generative AI for translating and fine-tuning my resume's text. I tried many different models, but at this moment, I most liked the language use of Google's Gemini 2.5 Flash, especially if you tell it not to be "too engaging" 🤭. I heard others saying they had good experiences with Anthropic Sonnet 4 or even Opus 4. I liked these for translation from English to Dutch, but overall, I think they tend to generate overly long texts, which means a lot of editing for me.

For editing all text from the document using an LLM, you could share the whole JSON in the chat, but that's quite large. I also noticed you really need to be very specific about what it can change; for example, it shouldn't alter the unique identifiers in the JSON. I found it easier to only give the personally written texts as Markdown to the LLM and let it proofread that. To get the text from the JSON, again, you need to be very specific. The models tend not to copy everything or change some text here and there. Proofreading the LLM's output to ensure it was correct, and waiting for it to generate the output, became quite tedious.

So, I asked Anthropic Sonnet 4 to create an app for me:

> I want you to build me app in which I can paste a json and as output I get the relevant text in markdown. I will provide an example json, it is my resume, I am only interested in the text I wrote, like summary or title, and not IDs. First create a step by step plan to build this app. I would prefer something that can run in the browser.
>
> \# json
> [resume json]

It came back with a plan to build the app:

> \# Step-by-Step Plan: JSON Resume to Markdown Converter
> [...]
> ## Overview
> [...]
> ## Steps
> [...]
> ### 1. **Setup Basic HTML Structure**
> [...]
> ### 2. **Design the User Interface**
> [...]
> ### 3. **Implement JSON Parsing Logic**
> [...]
> ### 4. **Create Content Extraction Functions**
> [...]
> ### 5. **Implement HTML to Text Conversion**
> [...]
> ### 6. **Create Markdown Formatting Functions**
> [...]
> ### 7. **Implement the Main Conversion Logic**
> [...]
> ### 8. **Add User Experience Features**
> [...]
> ### 9. **Error Handling and Validation**
> [...]
> ### 10. **Testing and Refinement**
> [...]
> ## Technical Approach
> [...]
> ## Expected Output Format
> [...]

Next, I asked it to build the app, and voilà, it created an app that worked in one go, did exactly what it needed to do, and even had quite a nice design. On closer inspection, I did ask it to make it a more generic tool, as the first version referenced an ID, which is, of course, unique to my example JSON. I asked it to come up with a more generic solution for that, and it did the filtering on section name, which seems to be working just as well.

{% image "/assets/images/posts/rxresume-json-markdown-converter.png", "Screenshot of the Reactive Resume JSON to Markdown converter web application.", "My custom-built web tool for extracting text from Reactive Resume JSON into Markdown.", "eager" %}

I've hosted it using GitHub Pages, so you can try it for yourself. Here is the link: [https://allarddewinter.github.io/rxresume-json-markdown-converter/](https://allarddewinter.github.io/rxresume-json-markdown-converter/).

This has been absolute fun to make! Using code (HTML, CSS, JavaScript), which I only have limited experience with, saves me a lot of hassle proofreading the LLM. The output is instant, and it saves tokens used (although I don't think that really saves a lot of money). It also touches on the environmental impact, a topic Simon Willison has explored recently:

> Developers burning through $100 of tokens per day (not impossible given some of the LLM-heavy development patterns that are beginning to emerge) could end the year with the equivalent of a short haul flight or 600 mile car journey.
> (Source: [https://simonwillison.net/2025/May/20/ai-energy-footprint/](https://simonwillison.net/2025/May/20/ai-energy-footprint/) and [https://simonwillison.net/2025/May/6/whats-the-carbon-footprint-of-using-chatgpt/](https://simonwillison.net/2025/May/6/whats-the-carbon-footprint-of-using-chatgpt/))

Overall, it's been real fun to be 'vibe coding' like this and creating tooling to make my work easier.
