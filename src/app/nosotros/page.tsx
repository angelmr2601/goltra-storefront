import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = { title: "GOLTRA — Sobre la marca", description: "Goltra es el hogar de todas las camisetas de fútbol." };

const principles = [
  { n: "01", title: "Encontrar antes que navegar", text: "La tienda se organiza por cómo busca un aficionado: liga, equipo y temporada." },
  { n: "02", title: "Actual + retro", text: "Las novedades conviven con camisetas de otras épocas sin mezclar categorías ni obligarte a rebuscar." },
  { n: "03", title: "Configurable", text: "Versión, talla, personalización y parches se resuelven dentro de la ficha de cada camiseta." },
];

export default function NosotrosPage() {
  return (
    <main className="bg-paper">
      <section className="overflow-hidden bg-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1fr_300px] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-volt">La idea detrás de GOLTRA</p>
            <h1 className="mt-4 max-w-4xl font-display text-6xl leading-[.9] tracking-wide sm:text-7xl">El hogar de todas las camisetas de fútbol.</h1>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-paper/60">Una tienda construida alrededor de las camisetas, no alrededor de menús interminables. El objetivo es que si buscas una del Betis del año 2000, puedas llegar a ella en pocos pasos.</p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Logo framed priority imageClassName="w-48 sm:w-56 lg:w-[280px]" className="opacity-90" />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-5 md:grid-cols-3">{principles.map((item) => <article key={item.n} className="rounded-3xl border border-ink/10 bg-white p-7"><span className="font-display text-3xl text-volt-dark">{item.n}</span><h2 className="mt-8 font-display text-3xl leading-none tracking-wide text-ink">{item.title}</h2><p className="mt-3 text-sm leading-relaxed text-ink/55">{item.text}</p></article>)}</div>
        <div className="mt-14 rounded-[2rem] bg-volt p-8 sm:p-12"><p className="text-xs font-bold uppercase tracking-[0.16em] text-ink/45">La prioridad ahora</p><div className="mt-3 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end"><h2 className="max-w-3xl font-display text-5xl leading-[.95] tracking-wide text-ink">Catálogo y producto primero. Carrito, pagos y operaciones después.</h2><Link href="/tienda" className="w-fit rounded-full bg-ink px-7 py-3.5 text-xs font-bold uppercase tracking-wide text-white">Ver catálogo</Link></div></div>
      </section>
      <Newsletter />
    </main>
  );
}
