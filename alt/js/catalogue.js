// @ts-check
/**
 * Renders the catalogue grid on work.html from window.Arcadia.shows
 * (see js/shows-data.js — edit that file, not this one, to change titles).
 * Cards whose entry has `href` (flagship shows) link to their detail page.
 */
(function (A) {
  const grid = document.querySelector("[data-catalogue]");
  if (!grid || !A.shows) return;

  const frag = document.createDocumentFragment();

  // Renders every title. Entries with `href` (flagship shows) become links
  // to their detail pages; the rest are plain catalogue cards.
  A.shows.forEach((show) => {
    const li = document.createElement("li");
    li.className = "archive-card" + (show.contain ? " archive-card--contain" : "");

    const figure = document.createElement("figure");
    const frame = document.createElement("div");
    frame.className = "archive-card__frame";

    const img = document.createElement("img");
    img.src = "assets/img/" + show.img;
    img.alt = "";
    img.loading = "lazy";
    img.width = 500;
    img.height = 375;
    frame.appendChild(img);

    const caption = document.createElement("figcaption");
    const title = document.createElement("span");
    title.className = "archive-card__title";
    title.textContent = show.title;
    const genre = document.createElement("span");
    genre.className = "archive-card__genre";
    genre.textContent = show.genre;
    caption.append(title, genre);

    figure.append(frame, caption);
    li.appendChild(figure);

    if (show.href) {
      const link = document.createElement("a");
      link.className = "archive-card__link";
      link.href = show.href;
      link.appendChild(figure);
      li.replaceChildren(link);
    }

    frag.appendChild(li);
  });

  grid.appendChild(frag);
})(window.Arcadia);
