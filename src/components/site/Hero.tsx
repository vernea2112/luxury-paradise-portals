import { useEffect, useState } from "react";
import { Calendar, Users, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  { src: hero1, eyebrow: "Um refúgio à beira-mar", title: "Onde o oceano encontra o paraíso." },
  { src: hero2, eyebrow: "Piscinas infinitas ao pôr do sol", title: "Momentos que ficam para sempre." },
  { src: hero3, eyebrow: "Suítes com vista para o infinito", title: "Conforto elevado ao extraordinário." },
];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.src}
            alt=""
            className={`h-full w-full object-cover ${i === idx ? "animate-ken-burns" : ""}`}
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-40 lg:px-10">
        <div key={i} className="max-w-3xl animate-fade-up">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-accent">
            {slides[i].eyebrow}
          </p>
          <h1 className="font-display text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            {slides[i].title}
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/85 sm:text-lg">
            Descubra o Resort Paraíso do 25 — uma experiência de sofisticação e serenidade
            entre o azul do oceano e o verde tropical.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#reservar"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-sun transition-transform hover:scale-105"
            >
              Reservar Agora <ChevronRight className="h-4 w-4" />
            </a>
            <a
              href="#experiencias"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
            >
              Descobrir Experiências
            </a>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-40 left-6 z-20 flex gap-2 lg:left-10">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-1 rounded-full transition-all ${
                i === idx ? "w-12 bg-accent" : "w-6 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Booking widget */}
      <div
        id="reservar"
        className="absolute inset-x-4 bottom-6 z-20 mx-auto max-w-5xl sm:inset-x-6 lg:bottom-10"
      >
        <BookingWidget />
      </div>
    </section>
  );
}

function BookingWidget() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="grid grid-cols-1 gap-3 rounded-3xl border border-white/40 bg-white/90 p-4 shadow-elegant backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] lg:gap-2 lg:p-3"
    >
      <Field icon={<Calendar className="h-4 w-4" />} label="Check-in">
        <input type="date" className="w-full bg-transparent text-sm font-medium text-foreground outline-none" />
      </Field>
      <Field icon={<Calendar className="h-4 w-4" />} label="Check-out">
        <input type="date" className="w-full bg-transparent text-sm font-medium text-foreground outline-none" />
      </Field>
      <Field icon={<Users className="h-4 w-4" />} label="Hóspedes">
        <select className="w-full bg-transparent text-sm font-medium text-foreground outline-none">
          <option>2 adultos</option>
          <option>1 adulto</option>
          <option>2 adultos, 1 criança</option>
          <option>2 adultos, 2 crianças</option>
          <option>4 adultos</option>
        </select>
      </Field>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-primary/90"
      >
        Verificar Disponibilidade
      </button>
    </form>
  );
}

function Field({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <label className="flex items-center gap-3 rounded-2xl bg-muted/60 px-4 py-3 transition hover:bg-muted">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
        {children}
      </span>
    </label>
  );
}
