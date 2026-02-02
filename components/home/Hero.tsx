export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/10 via-black to-black" />
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <p className="text-sm text-white/70">Indie Game Studio • US</p>

        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
          We craft worlds you’ll remember.
        </h1>

        <p className="mt-5 max-w-2xl text-base text-white/75 md:text-lg">
          Three games across three eras — a current release, the next adventure,
          and a legacy title from 30 years ago.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#games"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-white/90"
          >
            View games
          </a>

          <a
            href="#about"
            className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white hover:border-white/40"
          >
            About the studio
          </a>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm text-white/70">Current</div>
            <div className="mt-1 text-lg font-medium">Featured release</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm text-white/70">Next</div>
            <div className="mt-1 text-lg font-medium">In development</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm text-white/70">Legacy</div>
            <div className="mt-1 text-lg font-medium">30 years ago</div>
          </div>
        </div>
      </div>
    </section>
  );
}
