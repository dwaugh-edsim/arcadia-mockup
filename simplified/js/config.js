// @ts-check
window.ArcadiaLite = {
  modules: {},
  config: Object.freeze({
    selectors: Object.freeze({
      nav: "[data-nav]",
      navToggle: "[data-nav-toggle]",
      navLink: "[data-nav-link]",
      reveal: "[data-reveal]",
      year: "[data-year]",
      videoOpen: "[data-video-open]",
      videoDialog: "[data-video-dialog]",
      videoTitle: "[data-video-title]",
      videoFrame: "[data-video-frame]",
      videoLoading: "[data-video-loading]",
      videoError: "[data-video-error]",
      videoExternal: "[data-video-external]",
      videoClose: "[data-video-close]",
    }),
    classes: Object.freeze({
      navScrolled: "is-scrolled",
      navOpen: "is-open",
      revealed: "is-visible",
    }),
    nav: Object.freeze({
      scrolledOffsetPx: 24,
      mobileQuery: "(max-width: 52rem)",
    }),
    reveal: Object.freeze({
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.1,
      staggerMs: 90,
      maxStaggerSteps: 3,
    }),
    video: Object.freeze({
      embedBase: "https://www.youtube-nocookie.com/embed/",
      embedParams: "autoplay=1&rel=0&modestbranding=1",
      watchBase: "https://www.youtube.com/watch?v=",
      loadTimeoutMs: 12000,
      defaultTitle: "Video",
    }),
  }),
};
