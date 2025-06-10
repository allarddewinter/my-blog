---
title: "Building a PDF to markdown converter with vibe-coding"
description: "How I built PDF and Markdown conversion tools using Claude Sonnet 4 and prompt engineering best practices"
date: 2025-06-07
tags: [technology, vibe-coding, productivity]
---

I needed a way to extract text from poorly formatted PDF handouts for my studies. The plan was to feed this extracted text, together with the video captions of the lessons, to an LLM. I have configured this LLM to be my teaching assistant, formatting and structuring the text in a way that makes it easy to read and helps me understand the material for my exams.

## The PDF to Markdown approach

Rather than spending time researching complex solutions, I decided to build something simple that worked. One HTML file with everything included: PDF.js for parsing, vanilla JavaScript, and modern CSS.

## Using Claude Sonnet 4 effectively

Before starting, I read through Anthropic's [Claude 4 prompt engineering best practices](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/claude-4-best-practices). The documentation provides specific techniques for getting optimal results from Claude 4 models. I recommend reading it if you're working with Claude.

Using their guidance, I crafted this prompt for Sonnet 4:

> Give me options to transform pdf to markdown. Can you create a converter tool using a single web page? First think of how you would design such a tool.
>
> Please write a high quality plan for a general purpose solution. Implement a solution that works correctly for all valid inputs, not just the test cases. Do not hard-code values or create solutions that only work for specific test inputs. Instead, implement the actual logic that solves the problem generally.
>
> Focus on understanding the problem requirements and implementing the correct algorithm. Tests are there to verify correctness, not to define the solution. Provide a principled implementation that follows best practices and software design principles.
>
> If the task is unreasonable or infeasible, or if any of tests are incorrect, please tell me. The solution should be robust, maintainable, and extendable.

The result worked perfectly on the first attempt. Impressive.

## The Markdown to OneNote converter

After successfully creating the PDF to Markdown tool, I followed up by building a converter that takes Markdown with formatting and converts it to OneNote format. This allows me to easily adapt the notes in my favourite note-taking tool.

I started with a similar prompt, but this one proved more challenging. It required multiple attempts to get right. During development, I used prompts like this when encountering errors:

> I have this error, can you think of a fix? One that is elegant, robust and works in a generic way. Include as many relevant features and interactions as possible. Don't hold back. Give it your all.
>
> The overall goal of the tool is to copy markdown with formatting to OneNote.
>
> I do not think you have access here to a Python environment.
>
> **Error**
> ```
> markdown-to-onenote.html:823
> Image loading failed, using SVG data URL
> img.onerror @ markdown-to-onenote.html:823
> ```

Through iterative refinement, we eventually arrived at a working solution. The final result handles Markdown formatting and converts it properly to OneNote's format. ~~However, it still has some limitations, such as not supporting more than one diagram. I would like to improve this, but I have to dive into what the real problem is.~~* 
*Fully working now for mupliple diagrams in one page.

You can try the tools here:
- [PDF to Markdown Converter](https://allarddewinter.github.io/pdf-to-markdown-converter) ([source code](https://github.com/allarddewinter/pdf-to-markdown-converter))
- [Markdown to OneNote Converter](https://allarddewinter.github.io/markdown-to-onenote/) ([source code](https://github.com/allarddewinter/markdown-to-onenote/tree/main))

## Results

These tools now handle my study workflow efficiently:
1. Convert PDF handouts to Markdown.
2. Feed text and video captions to Claude with instructions to create study summaries.
3. Convert formatted Markdown to OneNote for easy editing.
4. Get structured exam notes in my preferred note-taking app.

What used to take hours of manual text extraction and formatting now takes minutes. The combination of proper prompt engineering and focused tools solved the actual problems I had. The iterative development process, while sometimes challenging, ultimately produced robust solutions that work well for my needs. And most importantly, it was a lot of fun to build, and I am very impressed with the capabilities of these new models!
