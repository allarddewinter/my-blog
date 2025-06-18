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

    // Skip admin pages and other non-content pages
    if (outputPath.includes('/admin/') || 
        outputPath.includes('/404.html') ||
        outputPath.includes('/robots.txt') ||
        outputPath.includes('/sitemap.xml') ||
        outputPath.includes('/tags/') ||      // Exclude tag pages
        outputPath.includes('/search/') ||    // Exclude search page
        outputPath.endsWith('/index.html') || // Exclude home page
        outputPath.endsWith('/blog/index.html')) { // Exclude blog listing page
      return content;
    }

    // Add data-pagefind-body to main content areas
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
          `  ${metaTags.join('\n  ')}\n</head>`
        );
      }
    }

    // Add higher weight to headings (Pagefind 1.0 does this automatically, but we can enhance it)
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

  // Run Pagefind indexing after build (in production only)
  if (process.env.ELEVENTY_ENV === 'production') {
    eleventyConfig.on('eleventy.after', async () => {
      console.log('🔍 Running Pagefind indexing...');
      
      try {
        const outputDir = eleventyConfig.dir?.output || 'dist';
        
        // Run Pagefind with modern v1.0+ options
        execSync(`npx pagefind --site ${outputDir} --output-subdir pagefind`, {
          stdio: 'inherit',
          cwd: process.cwd()
        });
        
        console.log('✅ Pagefind indexing completed successfully');
      } catch (error) {
        console.error('❌ Pagefind indexing failed:', error.message);
        throw error;
      }
    });
  }

  return {
    name: 'pagefind-plugin'
  };
}
