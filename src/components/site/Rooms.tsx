import { Wifi, Waves, Wind, Coffee, Bath, Users, ChevronRight } from "lucide-react";
import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";
import room3 from "@/assets/room-3.jpg";

const rooms = [
  {
    img: room1,
    name: "Suíte Vista Oceano",
    tag: "Mais Procurada",
    desc: "Ampla suíte com varanda privativa e vista panorâmica para o mar.",
    price: 320,
    amenities: [
      { icon: Wifi, label: "Wi-Fi Premium" },
      { icon: Wind, label: "Ar Condicionado" },
      { icon: Coffee, label: "Pequeno-almoço" },
      { icon: Users, label: "2 hóspedes" },
    ],
  },
  {
    img: room2,
    name: "Villa com Piscina Privada",
    tag: "Exclusiva",
    desc: "Villa independente com piscina privativa, jardim tropical e serviço 24h.",
    price: 620,
    amenities: [
      { icon: Waves, label: "Piscina Privada" },
      { icon: Wifi, label: "Wi-Fi Premium" },
      { icon: Bath, label: "Banheira spa" },
      { icon: Users, label: "4 hóspedes" },
    ],
  },
  {
    img: room3,
    name: "Villa Familiar Deluxe",
    tag: "Ideal p/ famílias",
    desc: "Dois quartos amplos, sala de estar e terraço com vista para os jardins.",
    price: 480,
    amenities: [
      { icon: Users, label: "6 hóspedes" },
      { icon: Wind, label: "Ar Condicionado" },
      { icon: Wifi, label: "Wi-Fi Premium" },
      { icon: Coffee, label: "Cozinha equipada" },
    ],
  },
];

export function Rooms() {
  return (
    <section id="acomodacoes" className="bg-muted/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-ocean">
            Acomodações
          </p>
          <h2 className="font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Quartos & Villas de <span className="italic text-gradient-ocean">sonho</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground lg:text-lg">
            Cada acomodação é um santuário privado, desenhado para envolver, acolher e inspirar.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((r) => (
            <article
              key={r.name}
              className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-soft transition duration-500 hover:-translate-y-2 hover:shadow-elegant"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={r.img}
                  alt={r.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-accent-foreground shadow-sun">
                  {r.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl text-foreground">{r.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>

                <ul className="mt-5 grid grid-cols-2 gap-2">
                  {r.amenities.map((a) => (
                    <li key={a.label} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <a.icon className="h-3.5 w-3.5 text-ocean" />
                      {a.label}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-end justify-between border-t border-border/60 pt-5">
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                      A partir de
                    </p>
                    <p className="font-display text-2xl text-foreground">
                      €{r.price}
                      <span className="text-sm font-sans text-muted-foreground"> /noite</span>
                    </p>
                  </div>
                  <button className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition hover:bg-primary/90">
                    Ver Detalhes <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
