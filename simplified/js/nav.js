// @ts-check
(function (A) {
  const { selectors: sel, classes, nav: navConfig } = A.config;

  function init() {
    const nav = document.querySelector(sel.nav);
    const toggle = document.querySelector(sel.navToggle);
    if (!nav || !toggle) return;

    const mobile = window.matchMedia(navConfig.mobileQuery);

    const syncScrolled = () =>
      nav.classList.toggle(classes.navScrolled, window.scrollY > navConfig.scrolledOffsetPx);

    /** @param {boolean} open */
    const setOpen = (open) => {
      nav.classList.toggle(classes.navOpen, open);
      toggle.setAttribute("aria-expanded", String(open));
    };

    toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
    nav.querySelectorAll(sel.navLink).forEach((link) => link.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });
    mobile.addEventListener("change", () => setOpen(false));

    window.addEventListener("scroll", syncScrolled, { passive: true });
    syncScrolled();
  }

  A.modules.nav = Object.freeze({ init });
})(window.ArcadiaLite);
