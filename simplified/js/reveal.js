// @ts-check
(function (A) {
  const { selectors: sel, classes, reveal: revealConfig } = A.config;

  /** @param {HTMLElement[]} items */
  function applyStagger(items) {
    const siblingsSeen = new Map();
    items.forEach((el) => {
      const parent = el.parentElement;
      const index = siblingsSeen.get(parent) ?? 0;
      siblingsSeen.set(parent, index + 1);
      const step = Math.min(index, revealConfig.maxStaggerSteps);
      el.style.setProperty("--reveal-delay", `${step * revealConfig.staggerMs}ms`);
    });
  }

  function init() {
    const items = /** @type {HTMLElement[]} */ (Array.from(document.querySelectorAll(sel.reveal)));
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add(classes.revealed));
      return;
    }

    applyStagger(items);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add(classes.revealed);
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: revealConfig.rootMargin, threshold: revealConfig.threshold },
    );

    items.forEach((el) => observer.observe(el));
  }

  A.modules.reveal = Object.freeze({ init });
})(window.ArcadiaLite);
