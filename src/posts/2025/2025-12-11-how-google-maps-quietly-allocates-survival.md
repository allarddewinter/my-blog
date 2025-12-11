---
title: "How Google Maps Quietly Allocates Survival Across London's Restaurants"
description: "An analysis of how Google Maps' ranking algorithm acts as a market maker, shaping demand and survival for restaurants in London."
date: 2025-12-11
tags: [links, technology, business, data-analysis, urban-economics]
---

From: [How Google Maps quietly allocates survival across London’s restaurants - and how I built a dashboard to see through it](https://laurenleek.substack.com/p/how-google-maps-quietly-allocates)

Lauren Leek's analysis provides a data-driven look at how Google Maps' ranking system doesn't just reflect consumer choice but actively shapes it, creating a cumulative advantage for some restaurants while leaving others algorithmically invisible.

### Google Maps as a Market Maker
The platform's public story is one of passive reflection, but its ranking is built on three signals: relevance, distance, and prominence. It is the last one—prominence—that is politically and economically significant. Google defines it using review volume, review velocity, average rating, brand recognition, and web visibility.

> “Visibility on these ranked lists determines foot traffic. Foot traffic determines how quickly reviews accumulate. Review accumulation then feeds directly back into the prominence signal. The system compounds.”

This creates a feedback loop that disproportionately benefits chains and venues in high-footfall areas, while new independents face a cold-start problem. The dynamic resembles Robert Merton's Matthew Effect: 'unto every one that hath shall be given.' In economic terms, Google Maps functions less like a directory and more like a market maker, allocating attention and steering demand.

### Building a Counterfactual with Machine Learning
To separate a restaurant's intrinsic appeal from its platform-amplified visibility, Leek built a machine learning model. It predicts a restaurant's expected Google rating based on structural features like review count, cuisine, chain status, price, and location. The difference between the actual rating and this predicted baseline is the *rating residual*.

A positive residual indicates a restaurant performs better than the algorithm typically rewards for its type; a negative one suggests it is underperforming relative to the platform's structural biases. This residual acts as a measure of "algorithmic mispricing."

### The London Food Dashboard
The practical output of this analysis is a [public dashboard](https://laurenleek.eu/food-map). Users can filter London restaurants by cuisine, borough, price, and, crucially, by "underrated gems"—those with high positive residuals. The tool makes the abstract effects of the algorithm concretely visible.

### From Restaurants to Neighbourhood Ecosystems
Scaling the analysis up, Leek aggregated restaurant data into spatial cells to classify neighbourhoods into hub types: elite, strong, everyday, and weak. The analysis reveals that culinary diversity is not evenly distributed. Migrant cuisines often cluster in areas with weaker algorithmic visibility, tied to settlement histories and affordability.

> “Cuisine diversity, in other words, is not just about taste. It is about where families settled, which high streets remained affordable long enough for a second generation to open businesses, and which parts of the city experienced displacement before culinary ecosystems could mature.”

### The Takeaway
The core insight is that platforms like Google Maps now quietly structure economic survival in urban markets. What appears as consumer choice is increasingly a downstream effect of ranking algorithms. This has implications for policy, suggesting that tools for urban regeneration and small business support must now consider platform transparency and auditability.

Leek concludes that we audit financial markets, so we should also audit the attention markets that increasingly govern local economies.
