---
title: "Measuring AI Impact on Developers: No Holy Grail, But Practical Paths Forward"
description: "How large tech companies measure AI’s real-world impact — and what smaller teams can adapt. Spoiler: It’s not about lines of code."
date: 2025-08-30
tags: [technology, developer productivity, ai, metrics, strategy]
---

In my earlier post, [“A deeper look at AI’s impact through the SPACE framework”](/blog/a-deeper-look-at-ais-impact-through-the-space-framework/), I explored how AI affects developers across multiple dimensions; not just output, but satisfaction and collaboration. But how do organisations *measure* that impact at scale?

As Laura Tacho, CTO at DX, details in her deepdive for *The Pragmatic Engineer*, [“How tech companies measure the impact of AI on software development”](https://newsletter.pragmaticengineer.com/p/how-tech-companies-measure-the-impact-of-ai), there is no single metric that tells you whether AI is working. In fact, 60% of engineering leaders cite a lack of clear metrics as their biggest AI challenge.

> “We agreed a long time ago that LOC is a bad measure of developer productivity, but it’s easy to measure LOC, and in the absence of a clear alternative, easy to latch on to.” — Laura Tacho

From her article, here’s what actually works and what doesn’t.

---

### What to Measure: The Core + AI Blend

You don’t need new metrics. Start with what already matters and add AI-specific signals on top.

#### Core Engineering Metrics (What Always Mattered)

- **Change Failure Rate (CFR)**[^1]: % of deployments that cause incidents or rollbacks. Measures reliability.
- **PR Throughput**[^2]: Number of pull requests merged per engineer or team per week. Measures delivery speed.
- **PR Cycle Time**[^3]: Time from first commit to PR merge. Measures workflow efficiency.
- **Developer Experience (DevEx)**[^4]: How much friction developers feel across planning, coding, testing, and production. Often measured via surveys.

#### AI-Specific Signals (What’s New)

- **DAU/WAU**[^5]: Daily or weekly active users of AI tools. Shows adoption depth.
- **CSAT**[^6]: Satisfaction score for AI tools, e.g.; “On a scale of 1–5, how satisfied are you with Copilot?”
- **Self-reported time saved**: Estimated hours per week saved using AI tools.
- **Cost per engineer**: AI tool spend divided by active users. Helps track ROI.

Dropbox, for example, tracks both and found that AI users merge 20% more PRs *while reducing* CFR. This dual tracking prevents over-indexing on speed.

> “You don’t need totally new metrics to measure AI impact. Instead, focus on what’s always mattered. Is AI helping your organization get better at those things?” — Laura Tacho

---

### What *Not* to Measure (Or At Least, Not Alone)

These metrics are misleading if used in isolation:

- **Lines of Code (LOC)**[^7]: Easy to count, meaningless as a productivity signal. Doesn’t reflect quality, maintainability, or business value.
- **Acceptance Rate** (alone): Measures how often developers accept AI suggestions, but says nothing about whether the code is good, maintainable, or bug-free.
- **Token Spend** (without context): Cost matters, but not if it’s divorced from value delivered. Some companies (like Shopify) celebrate high spend as a sign of experimentation.
- **“AI-Generated Code %”**: A headline-friendly number, but tells you nothing about quality, reliability, or developer experience.

As Monzo’s Suhail Patel puts it:

> “If we have to spend an equal amount of time fixing up AI-generated code as we spent handwriting the code, then we’ve made no progress!”

---

### Break Down Data, Don’t Aggregate Blindly

Don’t treat “AI impact” as a monolith. Slice and dice your data:

- **AI users vs. non-AI users**[^8]: An “AI user” is typically someone who uses an AI tool at least weekly. Compare their metrics (e.g., PR throughput, CFR) against non-users.
- **Cohort analysis**[^9]: Follow the same group of developers before and after they adopt AI tools. Measures individual impact.
- **Segment by role, tenure, or language**[^10]: E.g., junior devs may open more PRs; seniors may slow down due to review load. Reveals where enablement is needed.

Webflow found AI saved the most time for devs with 3+ years experience. Monzo saw juniors open more PRs, seniors slow down likely reviewing AI output. These aren’t flaws, they’re signals for targeted enablement.

---

### Balance Speed with Quality and Maintainability

Track metrics that keep each other in check:

- **PR Throughput + Change Failure Rate**: Speed without stability is a trap.
- **System data + Self-reported data**: You can’t measure “maintainability” or “change confidence” from logs alone.

> “Developer experience tells us the story behind the numbers. While output metrics like PR throughput show us what is happening, developer satisfaction reveals whether it's sustainable.” — Shelly Stuart, CircleCI

---

### How to Start (Even Without Big Tech Resources)

1. **Establish baselines** for core metrics (CFR, cycle time, throughput).
2. **Layer in AI signals** via surveys (CSAT, time saved) and system data (DAU, spend).
3. **Use experience sampling** ask quick questions during workflows (e.g., “Did you use AI here?”).
4. **Adopt an experimental mindset** test hypotheses, not just collect data.

As Tacho notes:

> “Taking these measurements once won’t give you much insight into AI impact; tracking them over time is what reveals trends and patterns.”

---

### What This Means for Your Team

- **No single metric is enough**. Speed, quality, maintainability, and experience are interdependent — measure them together.
- **Context is king**. A 20% PR increase means nothing if bugs spike. Always ask: “At what cost?”
- **Culture matters more than tools**. Teams with high AI adoption report greater personal and team benefits — because they share best practices and support each other.
- **Start small, iterate often**. You don’t need perfect data — you need enough to make better decisions. Pick one core metric and one AI signal to track next quarter.

The goal isn’t to “measure AI”, it’s to measure whether AI is helping your team deliver better software, faster, without burning out or accumulating tech debt. That’s a challenge worth tackling; one metric, one cohort, one survey at a time.

[^1]: **Change Failure Rate (CFR)**: % of deployments that cause incidents or rollbacks. Measures reliability.
[^2]: **PR Throughput**: Number of pull requests merged per engineer or team per week. Measures delivery speed.
[^3]: **PR Cycle Time**: Time from first commit to PR merge. Measures workflow efficiency.
[^4]: **Developer Experience (DevEx)**: How much friction developers feel across planning, coding, testing, and production. Often measured via surveys.
[^5]: **DAU/WAU**: Daily or weekly active users of AI tools. Shows adoption depth.
[^6]: **CSAT**: Satisfaction score for AI tools — e.g., “On a scale of 1–5, how satisfied are you with Copilot?”
[^7]: **Lines of Code (LOC)**: Total lines of code written or generated. A poor proxy for productivity or value.
[^8]: **AI users vs. non-AI users**: An “AI user” is typically someone who uses an AI tool at least weekly. Compare their metrics against non-users.
[^9]: **Cohort analysis**: Follow the same group of developers before and after they adopt AI tools. Measures individual impact.
[^10]: **Segment by role, tenure, or language**: E.g., junior devs may open more PRs; seniors may slow down due to review load. Reveals where enablement is needed.
