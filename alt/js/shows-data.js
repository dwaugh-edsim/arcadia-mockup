// @ts-check
/**
 * Arcadia catalogue data — the ONE file to edit when shows change.
 *
 * Each entry:
 *   id       string   short slug, unique (used as the card key)
 *   title    string   display title
 *   genre    string   genre label shown under the title
 *   img      string   path to the card image (relative to alt/, keep 4:3 ~500x375)
 *   href     string?  set ONLY for flagship shows that have a detail page
 *                     (e.g. "work/hope-for-wildlife.html"). Omit for plain cards.
 *   contain  boolean? true if the image should fit-inside instead of crop
 *                     (used for the few wider-than-4:3 stills)
 *
 * To feature a new show on the Work page: add it here, drop the image in
 * assets/img/cards/, and (optionally) create a detail page by copying
 * work/_template notes in AGENTS.md.
 */
(function (A) {
  A.shows = [
    // Flagship titles (have detail pages under work/)
    { id: "hope-for-wildlife",     title: "Hope for Wildlife",                    genre: "Wildlife",             img: "hope-for-wildlife-hero.jpg",        href: "work/hope-for-wildlife.html" },
    { id: "how-we-got",            title: "How We Got",                           genre: "History & invention",  img: "how-we-got.jpg",                    href: "work/how-we-got.html" },
    { id: "mega-marine-machines",  title: "Mega Marine Machines",                 genre: "Engineering",          img: "mega-marine-machines.jpg",          href: "work/mega-marine-machines.html" },
    { id: "canada-over-the-edge",  title: "Canada Over the Edge / America Over the Edge", genre: "Aerial & geography", img: "canada-over-the-edge-wide.jpg", href: "work/canada-over-the-edge.html" },
    { id: "viking-quest",          title: "Viking Quest",                         genre: "History & archaeology", img: "viking-quest.jpg",                 href: "work/viking-quest.html" },
    { id: "ghost-ships",           title: "Ghost Ships",                          genre: "Ocean mysteries",      img: "ghost-ships.jpg",                   href: "work/ghost-ships.html" },

    // Catalogue titles
    { id: "polar-bears",           title: "Polar Bears: A Summer Odyssey",        genre: "Natural history",      img: "cards/polar-bears.jpg" },
    { id: "black-files",           title: "The Black Files Declassified",         genre: "Investigation",        img: "cards/black-files-declassified.jpg" },
    { id: "if-we-built-it-today",  title: "If We Built It Today",                 genre: "Engineering & history", img: "cards/if-we-built-it-today.jpg" },
    { id: "lords-of-the-ocean",    title: "Lords of the Ocean",                   genre: "Ocean adventure",      img: "cards/lords-of-the-ocean.jpg" },
    { id: "woodstock-bus",         title: "The Woodstock Bus: Finding the Light", genre: "Pop culture",          img: "cards/woodstock-bus.jpg" },
    { id: "reef-wrecks",           title: "Reef Wrecks",                          genre: "Underwater",           img: "cards/reef-wrecks.jpg" },
    { id: "dreamwrecks",           title: "Dreamwrecks",                          genre: "Underwater",           img: "cards/dreamwrecks.jpg" },
    { id: "ocean-parks",           title: "Ocean Parks",                          genre: "Marine wildlife",      img: "cards/ocean-parks.jpg" },
    { id: "canada-360",            title: "Canada 360",                           genre: "Aerial",               img: "cards/canada-360.jpg" },
    { id: "america-over-the-edge", title: "America Over the Edge",                genre: "Aerial",               img: "cards/america-over-the-edge.jpg" },
    { id: "black-bear-red-tape",   title: "Black Bear, Red Tape",                 genre: "Wildlife",             img: "cards/black-bear-red-tape.jpg" },
    { id: "doctor-barry",          title: "Doctor Barry",                         genre: "Wildlife",             img: "cards/doctor-barry.jpg" },
    { id: "wild-wild-east",        title: "Wild Wild East",                       genre: "Natural history",      img: "cards/wild-wild-east.jpg" },
    { id: "animal-empires",        title: "Animal Empires",                       genre: "Natural history",      img: "cards/animal-empires.jpg" },
    { id: "chasing-unicorns",      title: "Chasing Unicorns",                     genre: "Arctic expedition",    img: "cards/chasing-unicorns.jpg" },
    { id: "the-living-beach",      title: "The Living Beach",                     genre: "Nature & science",     img: "cards/the-living-beach.jpg" },
    { id: "battle-of-kings",       title: "Battle of Kings: Bannockburn",         genre: "History",              img: "cards/battle-of-kings.jpg" },
    { id: "last-stand-templars",   title: "Last Stand of the Templars",           genre: "Archaeology",          img: "cards/last-stand-of-the-templars.jpg" },
    { id: "deadly-journeys",       title: "Deadly Journeys of the Apostles",      genre: "History",              img: "cards/deadly-journeys-of-the-apostles.jpg", contain: true },
    { id: "buried-at-sea",         title: "Buried at Sea",                        genre: "Investigation",        img: "cards/buried-at-sea.jpg" },
    { id: "mabel-bells",           title: "Mabel Bell’s Aerial Experiment",       genre: "History",              img: "cards/mabel-bells-aerial-experiment.jpg" },
    { id: "the-orchard",           title: "The Orchard",                          genre: "Documentary",          img: "cards/the-orchard.jpg" },
  ];
})(window.Arcadia = window.Arcadia || {});
