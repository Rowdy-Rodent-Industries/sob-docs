
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

  const escapeHtml = s => String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[c]));

  const indexUrl = new URL(
    'search.json',
    document.querySelector('.brand').href
  ).href;

  // Find the earliest matching search term in the document.
  function getMatchPosition(content, terms) {
    const lowerContent = content.toLowerCase();

    const positions = terms
      .map(term => lowerContent.indexOf(term))
      .filter(position => position !== -1);

    return positions.length ? Math.min(...positions) : -1;
  }

  // Generate a link that opens the document at the matching passage.
  function getDeepLink(doc, terms) {
    const content = doc.content || '';
    const matchPosition = getMatchPosition(content, terms);

    // If the match is only in the title, open the document normally.
    if (matchPosition === -1) return doc.url;

    // Extract a passage beginning at the matching search term.
    const fragmentText = content
      .slice(matchPosition, matchPosition + 100)
      .trim()
      .replace(/\s+/g, ' ');

    if (!fragmentText) return doc.url;

    const target = new URL(doc.url, window.location.href);

    // Preserve any existing page anchor.
    const existingHash = target.hash ? target.hash.slice(1) : '';

    target.hash = `${existingHash ? `${existingHash}:` : ''}~:text=${encodeURIComponent(fragmentText)}`;

    return target.href;
  }

  async function openSearch() {
    lastFocus = document.activeElement;
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    input.focus();

    if (!documents) {
      results.innerHTML = '<p class="search-hint">Loading documentation…</p>';

      try {
        const response = await fetch(indexUrl);

        if (!response.ok) {
          throw new Error('Search index unavailable');
        }

        documents = await response.json();
        render();

      } catch (error) {
        results.innerHTML = '<p class="search-hint">Search could not load. Check that GitHub Pages finished building.</p>';
      }

    } else {
      render();
    }
  }

  function closeSearch() {
    overlay.hidden = true;
    document.body.style.overflow = '';
    lastFocus?.focus();
  }

  function render() {
    if (!documents) return;

    const q = input.value.trim().toLowerCase();

    if (!q) {
      results.innerHTML = '<p class="search-hint">Start typing to search all documentation.</p>';
      return;
    }

    const terms = q.split(/\s+/).filter(Boolean);

    const matches = documents.map(doc => {
      const title = doc.title || '';
      const content = doc.content || '';

      const lowerTitle = title.toLowerCase();
      const lowerContent = content.toLowerCase();

      const haystack = `${lowerTitle} ${lowerContent}`;

      // Require every search term to exist.
      if (!terms.every(term => haystack.includes(term))) {
        return null;
      }

      // Prioritize matches in document titles.
      const score = terms.reduce(
        (sum, term) => sum + (lowerTitle.includes(term) ? 5 : 0),
        0
      );

      // Find the passage containing the earliest matching term.
      const matchPosition = getMatchPosition(content, terms);

      const start = Math.max(0, matchPosition - 70);

      const snippet = matchPosition === -1
        ? content.slice(0, 190).trim()
        : `${start ? '…' : ''}${content.slice(start, start + 190).trim()}${content.length > start + 190 ? '…' : ''}`;

      return {
        title,
        url: getDeepLink(doc, terms),
        snippet,
        score
      };

    }).filter(Boolean)
      .sort((a, b) => b.score - a.score)
      .slice(0, 30);

    // Display the search results.
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
    if (e.target === overlay) closeSearch();
  });

  input?.addEventListener('input', render);

  // Keyboard shortcuts.
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !overlay.hidden) {
      closeSearch();
    }

    if (
      (
        e.key === '/' ||
        (e.key.toLowerCase() === 'k' && (e.ctrlKey || e.metaKey))
      ) &&
      overlay.hidden &&
      !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName) &&
      !document.activeElement.isContentEditable
    ) {
      e.preventDefault();
      openSearch();
    }
  });

  // Mobile navigation.
  menu?.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    menu.setAttribute('aria-expanded', String(open));
  });

})();
