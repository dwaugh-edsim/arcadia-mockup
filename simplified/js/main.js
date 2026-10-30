// @ts-check
(function (A) {
  const { selectors: sel } = A.config;

  document.querySelectorAll(sel.year).forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });

  Object.entries(A.modules).forEach(([name, mod]) => {
    try {
      mod.init();
    } catch (err) {
      console.error(`[arcadia] module "${name}" failed to initialise`, err);
    }
  });
})(window.ArcadiaLite);
