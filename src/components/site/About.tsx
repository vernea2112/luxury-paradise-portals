import { Waves, Leaf, Sun } from "lucide-react";
import poolLounge from "@/assets/resort-pool-lounge.jpg.asset.json";
import poolside from "@/assets/resort-poolside.jpg.asset.json";
import restaurant from "@/assets/resort-restaurant.jpg.asset.json";

export function About() {
  return (
    <section id="sobre" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div className="relative">
          <div className="grid grid-cols-5 grid-rows-6 gap-4 h-[560px] lg:h-[680px]">
            <img
              src={poolLounge.url}
              alt="Piscina do resort"
              loading="lazy"
              className="col-span-3 row-span-4 h-full w-full rounded-3xl object-cover shadow-elegant"
            />
            <img
              src={poolside.url}
              alt="Zona de descanso"
              loading="lazy"
              className="col-span-2 row-span-3 col-start-4 row-start-2 h-full w-full rounded-3xl object-cover shadow-soft"
            />
            <img
              src={restaurant.url}
              alt="Restaurante"
              loading="lazy"
              className="col-span-3 row-span-2 col-start-2 row-start-5 h-full w-full rounded-3xl object-cover shadow-soft"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 hidden rounded-2xl bg-accent px-6 py-4 shadow-sun sm:block">
            <p className="font-display text-3xl text-accent-foreground">25+</p>
            <p className="text-xs uppercase tracking-widest text-accent-foreground/80">Anos de excelência</p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-ocean">
            Sobre o Resort
          </p>
          <h2 className="font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Um <span className="text-gradient-ocean italic">paraíso</span> desenhado para os sentidos.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Envolvido por jardins tropicais e piscinas convidativas, o Resort Paraíso do 25
            é um convite ao descanso absoluto. Cada detalhe — dos espaços comuns à curadoria
            gastronómica — foi pensado para transformar dias comuns em memórias eternas.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Aqui, o luxo é discreto, o serviço é atento e o tempo passa ao seu ritmo.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <Feature icon={<Waves className="h-5 w-5" />} title="Piscinas" text="Águas cristalinas para relaxar." />
            <Feature icon={<Sun className="h-5 w-5" />} title="Sol o ano todo" text="Clima tropical e brisas suaves." />
            <Feature icon={<Leaf className="h-5 w-5" />} title="Natureza viva" text="Jardins tropicais imersivos." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">{icon}</div>
      <p className="mt-3 font-display text-lg text-foreground">{title}</p>
      <p className="mt-1 text-sm text-muted-foreground">{text}</p>
    </div>
  );
}
