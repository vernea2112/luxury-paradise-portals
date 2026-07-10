import { useState } from "react";
import { UtensilsCrossed, Flower2, Waves, Sailboat } from "lucide-react";
import restaurant from "@/assets/exp-restaurant.jpg";
import spa from "@/assets/exp-spa.jpg";
import pool from "@/assets/exp-pool.jpg";
import nautical from "@/assets/exp-nautical.jpg";

const tabs = [
  {
    id: "gastro",
    icon: UtensilsCrossed,
    label: "Gastronomia",
    title: "Sabores autorais à beira-mar",
    text: "O nosso Chef assina uma cozinha contemporânea inspirada nos frutos do mar e sabores tropicais. Uma experiência sensorial ao entardecer.",
    img: restaurant,
  },
  {
    id: "spa",
    icon: Flower2,
    label: "SPA & Bem-estar",
    title: "Rituais que restauram",
    text: "Massagens, hidroterapia e rituais holísticos num espaço envolto em silêncio, aromas naturais e luz suave.",
    img: spa,
  },
  {
    id: "pool",
    icon: Waves,
    label: "Piscinas",
    title: "Piscinas suspensas sobre o oceano",
    text: "Piscinas de bordas infinitas, cabanas privadas e serviço de bar à beira da água, do amanhecer ao pôr do sol.",
    img: pool,
  },
  {
    id: "sea",
    icon: Sailboat,
    label: "Atividades Náuticas",
    title: "Aventuras no mar turquesa",
    text: "Passeios de catamarã, mergulho, paddle e experiências privadas ao largo de uma das mais belas costas do país.",
    img: nautical,
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
