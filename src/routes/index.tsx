import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Rooms } from "@/components/site/Rooms";
import { Experiences } from "@/components/site/Experiences";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Resort Paraíso do 25 — Refúgio de luxo à beira-mar" },
      {
        name: "description",
        content:
          "Descubra o Resort Paraíso do 25: villas privadas, gastronomia autoral, SPA e experiências únicas num paraíso tropical.",
      },
      { property: "og:title", content: "Resort Paraíso do 25" },
      {
        property: "og:description",
        content: "Um refúgio de luxo à beira-mar. Villas, SPA, gastronomia e experiências inesquecíveis.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Experiences />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
