import { useState } from "react";
import { UtensilsCrossed, Flower2, Waves, PartyPopper } from "lucide-react";
import restaurant from "@/assets/resort-restaurant.jpg.asset.json";
import poolside from "@/assets/resort-poolside.jpg.asset.json";
import poolLounge from "@/assets/resort-pool-lounge.jpg.asset.json";
import poolGuests from "@/assets/resort-pool-guests.jpg.asset.json";

const tabs = [
  {
    id: "gastro",
    icon: UtensilsCrossed,
    label: "Gastronomia",
    title: "Sabores autorais ao ar livre",
    text: "O nosso restaurante coberto acolhe momentos memoráveis, servindo pratos autorais num ambiente descontraído e sofisticado.",
    img: restaurant.url,
  },
  {
    id: "spa",
    icon: Flower2,
    label: "Bem-estar",
    title: "Descanso e relaxamento",
    text: "Espaços tranquilos, jardins bem cuidados e áreas sombreadas convidam a longos momentos de descontração.",
    img: poolside.url,
  },
  {
    id: "pool",
    icon: Waves,
    label: "Piscinas",
    title: "Piscinas para todos os momentos",
    text: "Águas cristalinas rodeadas de zonas verdes e lounges confortáveis, do nascer ao pôr do sol.",
    img: poolLounge.url,
  },
  {
    id: "events",
    icon: PartyPopper,
    label: "Eventos & Lazer",
    title: "Momentos em grupo",
    text: "Espaços versáteis para reuniões, celebrações familiares e eventos privados junto à piscina.",
    img: poolGuests.url,
  },
];

export function Experiences() {
  const [active, setActive] = useState(tabs[0].id);
  const t = tabs.find((x) => x.id === active)!;
  return (
    <section id="experiencias" className="relative overflow-hidden bg-primary py-24 text-primary-foreground lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-accent">
            Experiências
          </p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Momentos <span className="italic text-accent">inesquecíveis</span>
          </h2>
          <p className="mt-5 text-base text-primary-foreground/70 lg:text-lg">
            Uma curadoria de experiências pensadas para elevar cada instante da sua estadia.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? "border-accent bg-accent text-accent-foreground shadow-sun"
                    : "border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground/80 hover:bg-primary-foreground/10"
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div key={active} className="mt-12 grid animate-fade-up items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative overflow-hidden rounded-3xl shadow-elegant">
            <img
              src={t.img}
              alt={t.title}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {t.title}
            </h3>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/75 lg:text-lg">
              {t.text}
            </p>
            <a
              href="#reservar"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-sun transition hover:scale-105"
            >
              Saber mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
