
(() => {
  const overlay = document.getElementById('search-dialog');
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  const trigger = document.getElementById('open-search');
  const sidebarSearch = document.getElementById('sidebar-search');
  const close = document.getElementById('close-search');
  const menu = document.getElementById('menu-toggle');

  let documents = null;
  let lastFocus = null;

  // Safely escape displayed text.
  const escapeHtml = s => String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[c]));

  // Resolve the search index relative to the website root.
  const brand = document.querySelector('.brand');

  const siteRoot = new URL(
    brand ? brand.href : window.location.href,
    window.location.href
  );

  siteRoot.pathname = siteRoot.pathname.replace(/\/?$/, '/');

  const indexUrl = new URL('search.json', siteRoot).href;

  // Find the earliest matching search term.
  function getMatchPosition(content, terms) {
    const lowerContent = content.toLowerCase();

    const positions = terms
      .map(term => lowerContent.indexOf(term))
      .filter(position => position !== -1);

    return positions.length ? Math.min(...positions) : -1;
  }

  // Generate a link to the matching passage.
  function getDeepLink(doc, terms) {
    const content = doc.content || '';
    const matchPosition = getMatchPosition(content, terms);

    if (matchPosition === -1) return doc.url;

    const fragmentText = content
      .slice(matchPosition, matchPosition + 100)
      .trim()
      .replace(/\s+/g, ' ');

    if (!fragmentText) return doc.url;

    const target = new URL(doc.url, siteRoot);

    const existingHash = target.hash
      ? target.hash.slice(1)
      : '';

    target.hash = `${existingHash ? `${existingHash}:` : ''}~:text=${encodeURIComponent(fragmentText)}`;

    return target.href;
  }

  // Load the search index.
  async function loadDocuments() {
    if (documents !== null) return;

    results.innerHTML =
      '<p class="search-hint">Loading documentation…</p>';

    try {
      const response = await fetch(indexUrl, {
        cache: 'no-store'
      });

      if (!response.ok) {
        throw new Error(
          `Search index returned HTTP ${response.status}: ${indexUrl}`
        );
      }

      const data = await response.json();

      // Support either a direct array or a wrapped document collection.
      if (Array.isArray(data)) {
        documents = data;
      } else if (Array.isArray(data.documents)) {
        documents = data.documents;
      } else if (Array.isArray(data.pages)) {
        documents = data.pages;
      } else {
        throw new Error(
          'Unexpected search.json structure. Expected an array of documents.'
        );
      }

      render();

    } catch (error) {
      console.error('SOB Docs search error:', error);

      documents = null;

      results.innerHTML = `
        <p class="search-hint">
          Search could not load.
          <br><br>
          ${escapeHtml(error.message)}
          <br><br>
          Check the browser console for details.
        </p>
      `;
    }
  }

  // Open search.
  async function openSearch() {
    if (!overlay || !input || !results) return;

    lastFocus = document.activeElement;

    overlay.hidden = false;
    document.body.style.overflow = 'hidden';

    input.focus();

    await loadDocuments();
  }

  // Close search.
  function closeSearch() {
    if (!overlay) return;

    overlay.hidden = true;
    document.body.style.overflow = '';

    lastFocus?.focus();
  }

  // Display search results.
  function render() {
    if (!documents || !input || !results) return;

    const q = input.value.trim().toLowerCase();

    if (!q) {
      results.innerHTML =
        '<p class="search-hint">Start typing to search all documentation.</p>';
      return;
    }

    const terms = q.split(/\s+/).filter(Boolean);

    const matches = documents.map(doc => {
      const title = String(doc.title || '');
      const content = String(doc.content || '');

      const lowerTitle = title.toLowerCase();
      const lowerContent = content.toLowerCase();

      const haystack = `${lowerTitle} ${lowerContent}`;

      // Require every search term to exist.
      if (!terms.every(term => haystack.includes(term))) {
        return null;
      }

      // Prioritize title matches.
      const score = terms.reduce(
        (sum, term) =>
          sum + (lowerTitle.includes(term) ? 5 : 0),
        0
      );

      const matchPosition = getMatchPosition(content, terms);

      const start = Math.max(0, matchPosition - 70);

      const snippet = matchPosition === -1
        ? content.slice(0, 190).trim()
        : `${start ? '…' : ''}${content.slice(start, start + 190).trim()}${content.length > start + 190 ? '…' : ''}`;

      return {
        title,
        url: doc.url
          ? getDeepLink(doc, terms)
          : '#',
        snippet,
        score
      };

    }).filter(Boolean)
      .sort((a, b) => b.score - a.score)
      .slice(0, 30);

    results.innerHTML = matches.length
      ? matches.map(match => `
          <a class="result" href="${escapeHtml(match.url)}">
            <div class="result-title">${escapeHtml(match.title)}</div>
            <div class="result-snippet">${escapeHtml(match.snippet)}</div>
          </a>
        `).join('')
      : '<p class="search-hint">No matching documents found. Try a different term.</p>';
  }

  // Search controls.
  trigger?.addEventListener('click', openSearch);
  sidebarSearch?.addEventListener('click', openSearch);
  close?.addEventListener('click', closeSearch);

  overlay?.addEventListener('click', e => {
    if (e.target === overlay) {
      closeSearch();
    }
  });

  input?.addEventListener('input', render);

  // Keyboard shortcuts.
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay && !overlay.hidden) {
      closeSearch();
    }

    if (
      (
        e.key === '/' ||
        (e.key.toLowerCase() === 'k' && (e.ctrlKey || e.metaKey))
      ) &&
      (!overlay || overlay.hidden) &&
      !['INPUT', 'TEXTAREA'].includes(
        document.activeElement.tagName
      ) &&
      !document.activeElement.isContentEditable
    ) {
      e.preventDefault();
      openSearch();
    }
  });

  // Mobile navigation.
  menu?.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('nav-open');

    menu.setAttribute('aria-expanded', String(isOpen));
  });

})();
