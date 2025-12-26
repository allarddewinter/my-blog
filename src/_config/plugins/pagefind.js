/**
 * Pagefind Plugin for Eleventy
 * Integrates modern Pagefind 1.0+ search functionality
 */

import { execSync } from 'child_process';
import path from 'path';

export default function(eleventyConfig) {
  // Add Pagefind indexing attributes to content
  eleventyConfig.addTransform('pagefind-indexing', function(content, outputPath) {
    if (!outputPath || !outputPath.endsWith('.html')) {
      return content;
    }

    // Enhanced exclusion patterns
    const excludePatterns = [
      '/admin/',
      '/404.html',
      '/robots.txt',
      '/sitemap.xml',
      '/tags/',           // All tag pages
      '/tag/',            // Alternative tag structure
      '/search/',         // Search page
      '/feed.',           // Feed files
      '/categories/',     // Category pages if you have them
    ];

    // Check if page should be excluded
    const shouldExclude = excludePatterns.some(pattern => 
      outputPath.includes(pattern)
    ) || 
    outputPath.endsWith('/index.html') ||         // Home page
    outputPath.endsWith('/blog/index.html') ||    // Blog listing
    outputPath.match(/\/tags\/[^\/]+\/index\.html$/); // Individual tag pages

    if (shouldExclude) {
      // Add data-pagefind-ignore to exclude from indexing
      content = content.replace(
        /<html([^>]*)>/gi,
        '<html$1 data-pagefind-ignore>'
      );
      return content;
    }

    // Add data-pagefind-body to main content areas for included pages
    content = content.replace(
      /<main([^>]*)>/gi,
      '<main$1 data-pagefind-body>'
    );

    // Add data-pagefind-meta attributes for better search results
    if (this.page && this.page.data) {
      const data = this.page.data;
      
      // Add meta tags for search indexing
      const metaTags = [];
      
      if (data.title) {
        metaTags.push(`<meta data-pagefind-meta="title" content="${data.title.replace(/"/g, '&quot;')}">`);
      }
      
      if (data.description) {
        metaTags.push(`<meta data-pagefind-meta="description" content="${data.description.replace(/"/g, '&quot;')}">`);
      }
      
      if (data.tags && Array.isArray(data.tags)) {
        metaTags.push(`<meta data-pagefind-meta="tags" content="${data.tags.join(', ')}">`);
      }
      
      if (data.date) {
        metaTags.push(`<meta data-pagefind-meta="date" content="${data.date}">`);
      }

      // Insert meta tags in the head
      if (metaTags.length > 0) {
        content = content.replace(
          /<\/head>/i,
          `  ${metaTags.join('\n  ')}\n  </head>`
        );
      }
    }

    // Add higher weight to headings
    content = content.replace(
      /<(h[1-6])([^>]*)>/gi,
      '<$1$2 data-pagefind-weight="2.0">'
    );

    // Reduce weight for code blocks to prevent over-representation
    content = content.replace(
      /<(pre|code)([^>]*)>/gi,
      '<$1$2 data-pagefind-weight="0.5">'
    );

    return content;
  });

  return {
    name: 'pagefind-plugin'
  };
}
