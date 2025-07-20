---
title: "Lessons on building software quickly"
description: "A look at Evan Hahn's practical advice for efficient software development, focusing on key takeaways like rough drafts and focused work."
date: 2025-07-20
tags: [productivity, software-development, efficiency]
---

I recently came across an article by Evan Hahn titled "[How I build software quickly](https://evanhahn.com/how-i-build-software-quickly/)". It is a practical and down-to-earth read on a topic that is relevant to every developer: finding the right balance between speed and quality.

What I appreciate is that while Large Language Models (LLMs) are mentioned, the focus remains on foundational practices. It is a refreshing perspective that earns bonus points from me.

Evan covers several useful techniques, but a few, in particular, stood out to me.

### Key takeaways

*   **Fine-tuning requirements**: One of the most effective ways to work faster is to do less. Evan makes a great point about questioning and softening requirements where possible. This strategic approach can prevent a lot of unnecessary work.

*   **Building top to bottom**: His advice to build "top to bottom" is very practical. He suggests starting with the user-facing part first to ensure the underlying logic serves the actual use case from the beginning.
    > Build the top layer first—the “dream code” I want to write or the API I wish existed—rather than trying to build the “bottom” layer first. It’s easier to make the right API decisions when I start with how it will be used.

*   **Using a timer**: The simple trick of setting a timer to stay focused is something I can relate to. It is an effective way to avoid getting "lost in the mud" and wandering through the codebase.
    > My estimates are frequently wrong, but when the timer goes off, I’m often jolted out of some silly distraction.

*   **Extracting smaller changes**: I also found the suggestion to extract smaller, self-contained changes (like a dependency update or a minor bug fix) into separate patches very useful. It simplifies reviews and makes the main task easier to manage.

The article contains many more valuable points, including the importance of rough drafts and making small, incremental changes. I highly recommend reading the full post on Evan Hahn's website for a complete picture.