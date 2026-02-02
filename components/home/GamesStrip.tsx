const games = [
  {
    era: "Current",
    title: "Project Nova",
    blurb: "A modern action RPG with tight combat and lush pixel art.",
    cta: "Learn more",
  },
  {
    era: "Next",
    title: "Project Eclipse",
    blurb: "A new world is forming. Wishlist and follow development updates.",
    cta: "See teaser",
  },
  {
    era: "Legacy",
    title: "RetroQuest (1996)",
    blurb: "A classic from another era — rebuilt for modern platforms.",
    cta: "Discover",
  },
];

export default function GamesStrip() {
  return (
    <section id="games" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl font-semibold md:text-3xl">Games</h2>
          <p className="mt-2 max-w-2xl text-sm text-white/70 md:text-base">
            One studio, three chapters — now, next, and a legacy title.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {games.map((g) => (
          <article
            key={g.title}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10"
          >
            <p className="text-xs uppercase tracking-widest text-white/60">
              {g.era}
            </p>
            <h3 className="mt-3 text-xl font-semibold">{g.title}</h3>
            <p className="mt-3 text-sm text-white/75">{g.blurb}</p>

            <button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white">
              {g.cta}
              <span className="transition group-hover:translate-x-0.5">→</span>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
