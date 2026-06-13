import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks } from "../data/content";

type HeaderProps = {
  onConsultationClick: () => void;
};

export function Header({ onConsultationClick }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed top-0 right-0 left-0 z-50 px-6 pt-4 sm:px-10 sm:pt-5 lg:px-14">
      <nav
        className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between rounded-full border border-slate-200/80 bg-white/95 px-4 py-2.5 shadow-lg shadow-slate-900/10 backdrop-blur-md transition-shadow hover:shadow-xl hover:shadow-slate-900/15 sm:px-6 sm:py-3"
        aria-label="Main navigation"
      >
        <a href="#top" className="flex-shrink-0" aria-label="Project 19 home">
          <img
            src="/assets/logo.png"
            alt="Project 19"
            className="h-8 w-auto sm:h-9"
            width={160}
            height={36}
          />
        </a>

        <ul className="hidden items-center gap-4 lg:flex lg:gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-p19-muted transition-colors hover:text-p19-navy"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={onConsultationClick}
            className="inline-flex items-center gap-1.5 rounded-full bg-p19-blue px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-p19-blue-light hover:shadow-md hover:shadow-p19-blue/25"
          >
            Free Consultation
            <ArrowUpRight size={15} strokeWidth={2.5} />
          </button>
        </div>

        <button
          className="rounded-full p-1.5 text-p19-navy transition-colors hover:bg-slate-100 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="pointer-events-auto mx-auto mt-3 max-w-6xl overflow-hidden rounded-3xl border border-slate-200/80 bg-white/95 shadow-lg shadow-slate-900/10 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-xl px-3 py-2.5 text-base font-medium text-p19-muted transition-colors hover:bg-slate-50 hover:text-p19-navy"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-1">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onConsultationClick();
                }}
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-p19-blue px-6 py-3 text-sm font-semibold text-white"
              >
                Free Consultation
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
