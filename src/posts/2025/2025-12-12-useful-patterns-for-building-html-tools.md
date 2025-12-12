---
title: "Useful patterns for building HTML tools"
description: "Simon Willison shares his experience building over 150 single-file HTML tools, outlining key patterns such as copy-paste, debugging, state persistence, and leveraging CORS-enabled APIs."
date: 2025-12-12
tags: [technology, web-development, tools, productivity]
---

From: [Useful patterns for building HTML tools](https://simonwillison.net/2025/Dec/10/html-tools/)

> I’ve started using the term **HTML tools** to refer to HTML applications that I’ve been building which combine HTML, JavaScript, and CSS in a single file and use them to provide useful functionality.

Simon Willison has built over 150 such tools, almost all with the help of LLMs. Here are the core insights and reusable patterns from his experience.

### Core characteristics of HTML tools
- **Single file**: inline JavaScript and CSS, no separate files.
- **No React or build steps**: avoids complexity and eases copying.
- **Dependencies from CDNs**: load libraries like PDF.js from CDNjs or jsDelivr.
- **Small size**: typically a few hundred lines, making them easy to rewrite or understand.

### Development workflow
1. **Prototype with LLM canvases**: Use ChatGPT Canvas, Claude Artifacts, or Gemini Canvas to quickly generate a working tool.
    > "Build a canvas that lets me paste in JSON and converts it to YAML. No React."
3. **Switch to coding agents for complex projects**: Tools like Claude Code or Codex CLI can test code with Playwright and submit pull requests.
4. **Self-host on GitHub Pages**: Copy-paste the HTML into a repository and enable GitHub Pages for reliable, sandbox-free hosting.

### Key patterns
- **Copy and paste**: Leverage clipboard events for input and output; include “Copy to clipboard” buttons for mobile convenience.
- **Debugging tools**: Build tools to inspect browser capabilities (e.g., clipboard formats, key codes, CORS). 
- **State persistence**:
  - **URL**: store state in query parameters or hash for bookmarkable/shareable tools.
  - **localStorage**: for larger state or secrets like API keys.
- **CORS-enabled APIs**: Directly fetch data from APIs with open CORS headers (iNaturalist, PyPI, GitHub raw content, Bluesky, Mastodon). 
- **Calling LLM APIs**: OpenAI, Anthropic, and Gemini APIs are CORS-enabled; store API keys in `localStorage`. 
- **File handling**: Use `<input type="file">` to read files locally and process them with JavaScript libraries (PDF.js, Tesseract.js). 
- **Downloadable files**: Generate files client-side and offer download via `URL.createObjectURL()`. 
- **Pyodide**: Run Python in the browser, loading additional packages via micropip. 
- **WebAssembly**: Use WebAssembly ports of existing tools (e.g., Tesseract.js, SLOCCount).
- **Remixing previous tools**: Reference existing tools in your prompt to leverage proven patterns. For example, to create `pypi-changelog`, Simon instructed:
    > "Look at the pypi package explorer tool... Build a new tool pypi-changelog.html which uses the PyPI API to get the wheel URLs..." 

