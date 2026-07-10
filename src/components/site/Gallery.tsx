import g1 from "@/assets/resort-pool-lounge.jpg.asset.json";
import g2 from "@/assets/resort-pool-dolphin.jpg.asset.json";
import g3 from "@/assets/resort-pool-guests.jpg.asset.json";
import g4 from "@/assets/resort-poolside.jpg.asset.json";
import g5 from "@/assets/resort-restaurant.jpg.asset.json";

const imgs = [
  { src: g1.url, span: "row-span-2" },
  { src: g2.url, span: "" },
  { src: g5.url, span: "" },
  { src: g4.url, span: "row-span-2" },
  { src: g3.url, span: "" },
  { src: g2.url, span: "" },
];

export function Gallery() {
  return (
    <section id="galeria" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-ocean">
            Galeria
          </p>
          <h2 className="font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
            O paraíso em <span className="italic text-gradient-ocean">imagens</span>
          </h2>
        </div>

        <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
          {imgs.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ${img.span}`}
            >
              <img
                src={img.src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition duration-[1500ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
