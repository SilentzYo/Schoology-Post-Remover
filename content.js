const normalize = (name) => name.trim().replace(/\s+/g, ' ').toLowerCase();

chrome.runtime.sendMessage('getNames').then((text) => {
  const names = new Set(
    text
      .split(/\r?\n/)
      .map(normalize)
      .filter((line) => line && !line.startsWith('#'))
  );
  if (names.size === 0) return;

  let loadedMore = false;

  function removePosts() {
    const moreButton = document.querySelector('a.sEdgeMore-processed');
    if (moreButton && !loadedMore) {
      loadedMore = true;
      moreButton.click();
    }

    for (const post of document.querySelectorAll('li[id^="edge-assoc-"]')) {
      const author = post.querySelector('span.long-username a');
      if (author && names.has(normalize(author.textContent))) {
        post.remove();
      }
    }
  }

  removePosts();
  new MutationObserver(removePosts).observe(document.body, { childList: true, subtree: true });
});
