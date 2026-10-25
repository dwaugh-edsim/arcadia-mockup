// @ts-check
/**
 * Renders the catalogue grid on work.html from window.Arcadia.shows
 * (see js/shows-data.js — edit that file, not this one, to change titles).
 *
 * Only titles WITHOUT `href` are rendered here: the flagship shows (entries
 * with `href`) already appear in the page's featured slate, so listing them
 * again in the grid would duplicate them.
 */
(function (A) {
  const grid = document.querySelector("[data-catalogue]");
  if (!grid || !A.shows) return;

  const frag = document.createDocumentFragment();

  const titles = A.shows.filter((show) => !show.href);
  titles.forEach((show) => {
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

    li.dataset.search = (show.title + " " + show.genre).toLowerCase();
    li.hidden = false;
    frag.appendChild(li);
  });

  // Live filter: matches title or genre, case-insensitive. A "no results"
  // note appears when everything is filtered out.
  const note = document.createElement("p");
  note.className = "catalogue__noresults";
  note.textContent = "No titles match that search. Try a broader term, or ask us — the catalogue is deep.";
  note.hidden = true;

  grid.appendChild(frag);
  grid.parentNode?.appendChild(note);

  const input = document.querySelector("[data-catalogue-filter]");
  if (input) {
    const cards = Array.from(grid.children);
    input.addEventListener("input", () => {
      const q = input.value.trim().toLowerCase();
      let visible = 0;
      cards.forEach((card) => {
        const hit = !q || card.dataset.search?.includes(q);
        card.hidden = !hit;
        if (hit) visible += 1;
      });
      note.hidden = visible !== 0;
    });
  }
})(window.Arcadia);
