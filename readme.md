# Allard de Winter's Personal Website & Linkblog

> A thoughtful exploration of technology, strategic thinking, and positive mindset

[![Netlify Status](https://api.netlify.com/api/v1/badges/57c89d85-535f-4fb8-b60e-3a2f26fe0498/deploy-status)](https://app.netlify.com/sites/allarddewinter/deploys)
[![Built with Eleventy](https://img.shields.io/badge/built%20with-Eleventy-663399.svg?style=flat-square)](https://11ty.dev/)
[![Lighthouse Performance](https://img.shields.io/badge/Lighthouse-95%2B-brightgreen.svg?style=flat-square)](https://pagespeed.web.dev/analysis/https-allarddewinter-net/pz1920iyle?form_factor=desktop)

**Live Site**: [allarddewinter.net](https://allarddewinter.net)

---

## About This Site

This is my personal linkblog and digital garden where I explore the intersection of technology, strategic thinking, and cultivating a positive mindset. Drawing inspiration from:

- **Simon Willison's approach** to technology linkblogging and knowledge sharing
- **Will Larsen's strategic perspectives** on systems thinking and engineering leadership  
- **Michael Pilarczyk's philosophy** on mindset and positive business principles

The site serves as both a knowledge repository and a space for processing insights from my work as a Technical Authority and Domain Architect in the European energy sector. It's my way of bookmarking ideas, reflecting on complex topics, and sharing discoveries that matter both professionally and personally.

## Technical Foundation

Built on the exceptional [Eleventy Excellent](https://eleventy-excellent.netlify.app/) starter template created by [Lene Saile](https://github.com/madrilene). This foundation provides a robust, performant, and accessible base that I've customised for my specific content needs.

### Key Features

- **Static Site Generation**: Powered by [Eleventy](https://11ty.dev) v3.0
- **Advanced Search**: Full-text search powered by [Pagefind](https://pagefind.app/) with WebAssembly optimisation
- **CSS Architecture**: CUBE CSS methodology with intelligent Tailwind integration
- **Component System**: WebC custom elements for enhanced functionality
- **Performance First**: Optimised images, lazy loading, minimal JavaScript footprint
- **Accessibility**: WCAG compliant with semantic HTML and proper ARIA implementation
- **SEO Optimised**: Auto-generated Open Graph images, structured data, XML sitemaps
- **Modern Security**: Content Security Policy, XSS protection, and secure headers
- **Deployment**: Seamlessly hosted on Netlify with optimised build pipeline

### Search Implementation

The site features a sophisticated search system using Pagefind:

- **Full-text indexing** of all content with intelligent ranking
- **WebAssembly optimisation** for lightning-fast client-side search
- **Progressive enhancement** - works without JavaScript
- **Smart caching** with immutable headers for optimal performance
- **Accessible interface** with keyboard navigation support

## Content Philosophy

This linkblog operates on the principle that sharing knowledge and insights creates value for both the author and readers. Each post aims to:

- **Explore complex topics** with clarity and practical application
- **Bridge technical and strategic thinking** through real-world examples
- **Maintain a positive, constructive tone** while addressing genuine challenges
- **Provide context and reflection** rather than just raw links or information

The content spans technology trends, strategic decision-making, leadership insights, and the mindset approaches that underpin effective work and life.

## Development

### Prerequisites

- Node.js 20.x or higher
- npm or yarn package manager

### Local Development

```bash
# Clone the repository
git clone https://github.com/allarddewinter/my-blog.git
cd my-blog

# Install dependencies
npm install

# Start development server
npm start
```

The site will be available at `http://localhost:8080` with hot reload enabled.

### Building for Production

```bash
# Create optimised production build
npm run build

# The built site will be in the /dist directory
```

### Deployment

The site automatically deploys to Netlify on pushes to the main branch. The build process includes:

- Static site generation with Eleventy
- Search index generation with Pagefind
- Asset optimisation and minification
- Security header configuration

## Credits and Acknowledgements

This site stands on the shoulders of giants. Huge thanks to:

### Primary Foundation

**[Lene Saile](https://github.com/madrilene)** - Creator of Eleventy Excellent  
The stellar foundation that makes this site possible. Lene's attention to performance, accessibility, and developer experience is exceptional.

**[Andy Bell](https://buildexcellentwebsit.es/)** - CUBE CSS and Build Excellent Websites  
The methodology and principles that guide the CSS architecture and overall approach.

### Core Contributors

**[Zach Leatherman](https://www.zachleat.com/)** - Creator of Eleventy  
For building and continuously improving the static site generator that powers this site.

**[CloudCannon Team](https://cloudcannon.com/)** - Pagefind creators  
For the brilliant client-side search solution that makes content discovery seamless.

### Inspiration and Methodology

**[Heydon Pickering](https://inclusive-components.design/)** - Inclusive design principles  
**[Stephanie Eckles](https://moderncss.dev/)** - Modern CSS approaches  
**[Sara Soueidan](https://www.sarasoueidan.com/)** - Accessibility expertise  

### Content Influences

**[Simon Willison](https://simonwillison.net/)** - Linkblogging mastery and technical insight sharing  
**[Will Larsen](https://lethain.com/)** - Strategic thinking and engineering leadership  
**[Michael Pilarczyk](https://michaelpilarczyk.com/)** - Positive business philosophy and mindset approaches  

---

**Personal Site** - Built with care by [Allard de Winter](https://allarddewinter.net/about/) | **Not accepting contributions** - This is a personal learning and sharing space
