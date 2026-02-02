export default function AboutStrip() {
  return (
    <section
      id="about"
      className="border-y border-white/10 bg-gradient-to-b from-black to-white/5"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
        <div>
          <h2 className="text-2xl font-semibold md:text-3xl">About</h2>
          <p className="mt-3 text-sm text-white/75 md:text-base">
            We’re a small team building character-driven games with handcrafted
            visuals, satisfying gameplay, and memorable sound.
          </p>
          <p className="mt-3 text-sm text-white/75 md:text-base">
            This website is a draft showcase: a current title, a next project,
            and one legendary game from 30 years ago.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-medium">Contact</h3>
          <p className="mt-2 text-sm text-white/70" id="contact">
            For partnerships, press, or hiring:
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <p className="text-white/85">hello@yourstudio.com</p>
            <p className="text-white/85">New York, USA</p>
          </div>
        </div>
      </div>
    </section>
  );
}
