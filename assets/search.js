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
  const escapeHtml = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const indexUrl = new URL('search.json', document.querySelector('.brand').href).href;
  async function openSearch() {
    lastFocus = document.activeElement;
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    input.focus();
    if (!documents) {
      results.innerHTML = '<p class="search-hint">Loading documentation…</p>';
      try {
        const response = await fetch(indexUrl);
        if (!response.ok) throw new Error('Search index unavailable');
        documents = await response.json();
        render();
      } catch (error) {
        results.innerHTML = '<p class="search-hint">Search could not load. Check that GitHub Pages finished building.</p>';
      }
    } else render();
  }
  function closeSearch() { overlay.hidden = true; document.body.style.overflow = ''; lastFocus?.focus(); }
  function render() {
    if (!documents) return;
    const q = input.value.trim().toLowerCase();
    if (!q) { results.innerHTML = '<p class="search-hint">Start typing to search all documentation.</p>'; return; }
    const terms = q.split(/\s+/).filter(Boolean);
    const matches = documents.map(doc => {
      const title = doc.title || '';
      const content = doc.content || '';
      const haystack = `${title} ${content}`.toLowerCase();
      if (!terms.every(term => haystack.includes(term))) return null;
      const score = terms.reduce((sum, term) => sum + (title.toLowerCase().includes(term) ? 5 : 0), 0);
      const first = Math.max(0, content.toLowerCase().indexOf(terms[0]));
      const start = Math.max(0, first - 70);
      const snippet = `${start ? '…' : ''}${content.slice(start, start + 190).trim()}${content.length > start + 190 ? '…' : ''}`;
      return { title, url: doc.url, snippet, score };
    }).filter(Boolean).sort((a,b) => b.score-a.score).slice(0,30);
    results.innerHTML = matches.length ? matches.map(m => `<a class="result" href="${escapeHtml(m.url)}"><div class="result-title">${escapeHtml(m.title)}</div><div class="result-snippet">${escapeHtml(m.snippet)}</div></a>`).join('') : '<p class="search-hint">No matching documents found. Try a different term.</p>';
  }
  trigger?.addEventListener('click', openSearch);
  sidebarSearch?.addEventListener('click', openSearch);
  close?.addEventListener('click', closeSearch);
  overlay?.addEventListener('click', e => { if (e.target === overlay) closeSearch(); });
  input?.addEventListener('input', render);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !overlay.hidden) closeSearch();
    if ((e.key === '/' || (e.key.toLowerCase() === 'k' && (e.ctrlKey || e.metaKey))) && overlay.hidden && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName) && !document.activeElement.isContentEditable) { e.preventDefault(); openSearch(); }
  });
  menu?.addEventListener('click', () => { const open = document.body.classList.toggle('nav-open'); menu.setAttribute('aria-expanded', String(open)); });
})();
