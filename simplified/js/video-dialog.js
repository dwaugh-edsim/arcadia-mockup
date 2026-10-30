// @ts-check
(function (A) {
  const { selectors: sel, video: videoConfig } = A.config;

  /** @param {string} id */
  const watchUrl = (id) => `${videoConfig.watchBase}${encodeURIComponent(id)}`;

  /** @param {string} id */
  const embedUrl = (id) => `${videoConfig.embedBase}${encodeURIComponent(id)}?${videoConfig.embedParams}`;

  function init() {
    const openers = /** @type {HTMLElement[]} */ (Array.from(document.querySelectorAll(sel.videoOpen)));
    const dialog = /** @type {HTMLDialogElement | null} */ (document.querySelector(sel.videoDialog));

    if (!dialog || typeof dialog.showModal !== "function") {
      openers.forEach((btn) => {
        const id = btn.dataset.videoId;
        if (id) btn.addEventListener("click", () => window.open(watchUrl(id), "_blank", "noopener"));
      });
      return;
    }

    const title = /** @type {HTMLElement} */ (dialog.querySelector(sel.videoTitle));
    const frame = /** @type {HTMLElement} */ (dialog.querySelector(sel.videoFrame));
    const loading = /** @type {HTMLElement} */ (dialog.querySelector(sel.videoLoading));
    const error = /** @type {HTMLElement} */ (dialog.querySelector(sel.videoError));
    const external = /** @type {HTMLAnchorElement} */ (dialog.querySelector(sel.videoExternal));

    /** @type {number | undefined} */
    let timeoutId;

    const reset = () => {
      window.clearTimeout(timeoutId);
      frame.querySelectorAll("iframe").forEach((iframe) => iframe.remove());
      loading.hidden = false;
      error.hidden = true;
    };

    const showError = () => {
      loading.hidden = true;
      error.hidden = false;
    };

    /** @param {string} id @param {string} label */
    const open = (id, label) => {
      reset();
      title.textContent = label;
      external.href = id ? watchUrl(id) : "#";

      if (!id) {
        showError();
      } else {
        const iframe = document.createElement("iframe");
        iframe.src = embedUrl(id);
        iframe.title = label;
        iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
        iframe.allowFullscreen = true;
        iframe.referrerPolicy = "strict-origin-when-cross-origin";
        iframe.addEventListener("load", () => {
          window.clearTimeout(timeoutId);
          loading.hidden = true;
        }, { once: true });
        timeoutId = window.setTimeout(showError, videoConfig.loadTimeoutMs);
        frame.appendChild(iframe);
      }

      dialog.showModal();
    };

    openers.forEach((btn) =>
      btn.addEventListener("click", () =>
        open(btn.dataset.videoId || "", btn.dataset.videoTitle || videoConfig.defaultTitle),
      ),
    );

    dialog.querySelector(sel.videoClose)?.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener("close", reset);
  }

  A.modules.videoDialog = Object.freeze({ init });
})(window.ArcadiaLite);
