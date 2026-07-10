import { Instagram, Facebook, Twitter } from "lucide-react";
import logo from "@/assets/logo.asset.json";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo.url} alt="Logo" className="h-14 w-14 rounded-full object-cover ring-2 ring-white/20" />
              <div>
                <p className="font-display text-xl">Resort Paraíso do 25</p>
                <p className="text-xs uppercase tracking-widest text-primary-foreground/60">
                  Luxury Beachfront Escape
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm text-primary-foreground/70">
              Um refúgio à beira-mar onde o tempo abranda e a experiência de acolhimento
              se transforma em memória para toda a vida.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-lg">Navegar</p>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#sobre" className="hover:text-accent">Sobre</a></li>
              <li><a href="#acomodacoes" className="hover:text-accent">Acomodações</a></li>
              <li><a href="#experiencias" className="hover:text-accent">Experiências</a></li>
              <li><a href="#galeria" className="hover:text-accent">Galeria</a></li>
            </ul>
          </div>
          <div>
            <p className="font-display text-lg">Contactos</p>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
              <li>Estrada Costeira, Km 25</li>
              <li>+351 200 250 250</li>
              <li>reservas@paraisodo25.pt</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-primary-foreground/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Resort Paraíso do 25. Todos os direitos reservados.</p>
          <p>Política de Privacidade · Termos</p>
        </div>
      </div>
    </footer>
  );
}
