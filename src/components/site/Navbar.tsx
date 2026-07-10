import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.asset.json";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#acomodacoes", label: "Acomodações" },
  { href: "#experiencias", label: "Experiências" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contactos", label: "Contactos" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg shadow-soft border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo.url}
            alt="Resort Paraíso do 25"
            className="h-12 w-12 rounded-full object-cover ring-2 ring-white/40 shadow-soft"
          />
          <span
            className={`hidden font-display text-lg tracking-wide sm:block transition-colors ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            Paraíso do 25
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                scrolled ? "text-foreground/80" : "text-white/90"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#reservar"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-sun transition-transform hover:scale-105 sm:inline-flex"
          >
            Reservar Agora
          </a>
          <button
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${
              scrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-lg lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-accent"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#reservar"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-foreground shadow-sun"
            >
              Reservar Agora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
