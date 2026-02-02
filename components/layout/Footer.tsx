export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} YourStudio. All rights reserved.</p>
        <div className="flex gap-4">
          <a className="hover:text-white" href="#games">
            Games
          </a>
          <a className="hover:text-white" href="#about">
            About
          </a>
        </div>
      </div>
    </footer>
  );
}
