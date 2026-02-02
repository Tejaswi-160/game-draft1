export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="text-lg font-semibold tracking-wide">YourStudio</div>

        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a className="hover:text-white" href="#games">
            Games
          </a>
          <a className="hover:text-white" href="#about">
            About
          </a>
          <a className="hover:text-white" href="#contact">
            Contact
          </a>
        </nav>

        <a
          href="#games"
          className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/90 hover:border-white/40 hover:text-white"
        >
          Explore
        </a>
      </div>
    </header>
  );
}
