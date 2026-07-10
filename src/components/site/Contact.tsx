import { MapPin, Phone, Mail, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contactos" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-ocean">
              Contacte-nos
            </p>
            <h2 className="font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Vamos planear a sua <span className="italic text-gradient-ocean">estadia</span>
            </h2>
            <p className="mt-5 text-muted-foreground lg:text-lg">
              A nossa equipa de concierge está disponível para desenhar uma experiência
              personalizada e única.
            </p>

            <ul className="mt-10 space-y-5">
              <Info icon={<MapPin className="h-5 w-5" />} title="Localização" text="Estrada Costeira, Km 25 · Paraíso, PT" />
              <Info icon={<Phone className="h-5 w-5" />} title="Telefone" text="+351 200 250 250" />
              <Info icon={<Mail className="h-5 w-5" />} title="Email" text="reservas@paraisodo25.pt" />
            </ul>

            <div className="mt-10 h-64 overflow-hidden rounded-3xl border border-border shadow-soft">
              <div className="grid h-full w-full place-items-center bg-gradient-to-br from-ocean/20 via-sky/30 to-palm/20 text-primary/50">
                <div className="text-center">
                  <MapPin className="mx-auto h-8 w-8" />
                  <p className="mt-2 text-sm font-medium">Mapa interativo em breve</p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-3xl border border-border/60 bg-card p-8 shadow-elegant lg:p-10"
          >
            <h3 className="font-display text-2xl text-foreground">Envie-nos uma mensagem</h3>
            <div className="mt-6 space-y-5">
              <Input label="Nome" type="text" placeholder="O seu nome" />
              <Input label="Email" type="email" placeholder="voce@email.com" />
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Mensagem
                </label>
                <textarea
                  rows={5}
                  placeholder="Como podemos ajudar?"
                  className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/30"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-primary/90"
              >
                Enviar Mensagem <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Info({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <li className="flex items-start gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {title}
        </p>
        <p className="mt-1 text-foreground">{text}</p>
      </div>
    </li>
  );
}

function Input({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/30"
      />
    </div>
  );
}
