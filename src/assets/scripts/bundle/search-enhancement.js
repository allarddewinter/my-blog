/**
 * Search Enhancement Script
 * Provides additional search functionality and analytics
 */

class SearchEnhancement {
  constructor() {
    this.searchAnalytics = {
      queries: [],
      results: [],
      clicks: []
    };
    
    this.init();
  }

  init() {
    this.setupSearchAnalytics();
    this.setupKeyboardShortcuts();
    this.setupSearchSuggestions();
    this.setupPerformanceOptimizations();
  }

  setupSearchAnalytics() {
    // Track search queries (privacy-friendly)
    document.addEventListener('search-performed', (event) => {
      const { query, resultCount, timestamp } = event.detail;
      
      this.searchAnalytics.queries.push({
        query: this.hashQuery(query), // Hash for privacy
        resultCount,
        timestamp
      });
      
      // Keep only last 50 searches to prevent memory issues
      if (this.searchAnalytics.queries.length > 50) {
        this.searchAnalytics.queries.shift();
      }
    });

    // Track result clicks
    document.addEventListener('click', (event) => {
      const searchResult = event.target.closest('.search-result-link, .search-result-item');
      if (searchResult) {
        this.trackResultClick(searchResult);
      }
    });
  }

  setupKeyboardShortcuts() {
    // Additional keyboard shortcuts
    document.addEventListener('keydown', (event) => {
      // Slash key to focus search (like GitHub)
      if (event.key === '/' && !this.isInputFocused()) {
        event.preventDefault();
        this.focusSearch();
      }
      
      // Escape to close any open search interfaces
      if (event.key === 'Escape') {
        this.closeAllSearchInterfaces();
      }
    });
  }

  setupSearchSuggestions() {
    // Popular search terms based on content
    this.popularTerms = [
      'AI', 'machine learning', 'data science', 'python', 'javascript',
      'architecture', 'strategy', 'leadership', 'technology', 'engineering'
    ];

    // Listen for search input to provide suggestions
    document.addEventListener('input', (event) => {
      if (event.target.matches('.search-input')) {
        this.handleSearchSuggestions(event.target);
      }
    });
  }

  setupPerformanceOptimizations() {
    // Preload Pagefind on user interaction
    let pagefindPreloaded = false;
    
    const preloadPagefind = () => {
      if (!pagefindPreloaded) {
        // Preload the Pagefind module
        const link = document.createElement('link');
        link.rel = 'modulepreload';
        link.href = '/pagefind/pagefind.js';
        document.head.appendChild(link);
        
        pagefindPreloaded = true;
      }
    };

    // Preload on first user interaction
    ['mouseenter', 'touchstart', 'focus'].forEach(event => {
      document.addEventListener(event, preloadPagefind, { once: true, passive: true });
    });
  }

  hashQuery(query) {
    // Simple hash function for privacy-friendly analytics
    let hash = 0;
    for (let i = 0; i < query.length; i++) {
      const char = query.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return hash.toString();
  }

  trackResultClick(element) {
    const href = element.href || element.querySelector('a')?.href;
    if (href) {
      this.searchAnalytics.clicks.push({
        url: href,
        timestamp: Date.now(),
        position: this.getResultPosition(element)
      });
    }
  }

  getResultPosition(element) {
    const results = document.querySelectorAll('.search-result, .search-result-item');
    return Array.from(results).indexOf(element) + 1;
  }

  isInputFocused() {
    const activeElement = document.activeElement;
    return activeElement && (
      activeElement.tagName === 'INPUT' ||
      activeElement.tagName === 'TEXTAREA' ||
      activeElement.contentEditable === 'true'
    );
  }

  focusSearch() {
    // Try to focus the header search first
    const headerSearchToggle = document.querySelector('.search-toggle');
    if (headerSearchToggle) {
      headerSearchToggle.click();
      return;
    }

    // Fallback to page search input
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
      searchInput.focus();
    }
  }

  closeAllSearchInterfaces() {
    // Close search modal
    const searchModal = document.querySelector('.search-modal');
    if (searchModal && !searchModal.hidden) {
      const closeButton = searchModal.querySelector('.search-modal-close');
      if (closeButton) {
        closeButton.click();
      }
    }
  }

  handleSearchSuggestions(input) {
    const query = input.value.toLowerCase().trim();
    
    if (query.length < 2) {
      this.hideSuggestions(input);
      return;
    }

    const suggestions = this.popularTerms
      .filter(term => term.toLowerCase().includes(query))
      .slice(0, 5);

    if (suggestions.length > 0) {
      this.showSuggestions(input, suggestions);
    } else {
      this.hideSuggestions(input);
    }
  }

  showSuggestions(input, suggestions) {
    let suggestionsList = input.parentNode.querySelector('.search-suggestions');
    
    if (!suggestionsList) {
      suggestionsList = document.createElement('div');
      suggestionsList.className = 'search-suggestions';
      suggestionsList.setAttribute('role', 'listbox');
      input.parentNode.appendChild(suggestionsList);
    }

    suggestionsList.innerHTML = suggestions
      .map(suggestion => `
        <div class="search-suggestion" role="option" tabindex="-1">
          ${suggestion}
        </div>
      `)
      .join('');

    // Handle suggestion clicks
    suggestionsList.addEventListener('click', (event) => {
      const suggestion = event.target.closest('.search-suggestion');
      if (suggestion) {
        input.value = suggestion.textContent.trim();
        input.dispatchEvent(new Event('input', { bubbles: true }));
        this.hideSuggestions(input);
      }
    });

    suggestionsList.style.display = 'block';
  }

  hideSuggestions(input) {
    const suggestionsList = input.parentNode.querySelector('.search-suggestions');
    if (suggestionsList) {
      suggestionsList.style.display = 'none';
    }
  }

  // Public API for external use
  getSearchAnalytics() {
    return {
      totalQueries: this.searchAnalytics.queries.length,
      totalClicks: this.searchAnalytics.clicks.length,
      averageResultsPerQuery: this.searchAnalytics.queries.length > 0 
        ? this.searchAnalytics.queries.reduce((sum, q) => sum + q.resultCount, 0) / this.searchAnalytics.queries.length 
        : 0
    };
  }

  clearAnalytics() {
    this.searchAnalytics = {
      queries: [],
      results: [],
      clicks: []
    };
  }
}

// Initialize search enhancement when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.searchEnhancement = new SearchEnhancement();
  });
} else {
  window.searchEnhancement = new SearchEnhancement();
}

// Export for module usage
export default SearchEnhancement;
