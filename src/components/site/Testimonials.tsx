import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Mariana Silva",
    role: "Lisboa, Portugal",
    text: "Uma experiência de luxo genuíno. O serviço foi impecável e a vista das villas simplesmente inesquecível. Voltaremos, sem dúvida.",
  },
  {
    name: "Rafael Costa",
    role: "São Paulo, Brasil",
    text: "O Paraíso do 25 superou todas as expectativas. Gastronomia refinada, SPA sublime e um ambiente que respira paz.",
  },
  {
    name: "Sofia Almeida",
    role: "Porto, Portugal",
    text: "Cada detalhe pensado ao milímetro. Passámos a lua-de-mel aqui e foi mágico do início ao fim.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-muted/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-ocean">
            Testemunhos
          </p>
          <h2 className="font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Histórias dos nossos <span className="italic text-gradient-ocean">hóspedes</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="relative flex flex-col rounded-3xl border border-border/60 bg-card p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <Quote className="absolute -top-4 left-6 h-10 w-10 rounded-full bg-accent p-2 text-accent-foreground shadow-sun" />
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 font-display text-lg leading-relaxed text-foreground">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border/60 pt-4">
                <p className="font-semibold text-foreground">{r.name}</p>
                <p className="text-sm text-muted-foreground">{r.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
