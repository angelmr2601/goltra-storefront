import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import TrustBadges from "@/components/TrustBadges";
import Newsletter from "@/components/Newsletter";
import { categories, products } from "@/lib/products";

const featured = products.slice(0, 4);
const retro = products.filter((p) => p.category === "Retro");

const testimonials = [
  {
    name: "Marc S.",
    text: "La calidad de la tela sorprende para el precio. El escudo bordado y el ajuste son perfectos, parece de tienda oficial.",
    rating: 5,
  },
  {
    name: "Laura G.",
    text: "Pedí la retro de 1994 y llegó en 2 días. El acabado vintage es una pasada, muy recomendable.",
    rating: 5,
  },
  {
    name: "Iker P.",
    text: "Ya es la tercera camiseta que compro. Atención al cliente rápida y personalización de dorsal impecable.",
    rating: 4,
  },
];

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white">
        <Image
          src="/images/hero-jersey.jpg"
          alt="Camiseta de fútbol destacada"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/10" />
        <div className="relative mx-auto flex min-h-[560px] max-w-7xl flex-col justify-center px-5 py-24 sm:px-8">
          <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-volt/40 bg-volt/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-volt">
            Temporada 2024/25 ya disponible
          </span>
          <h1 className="max-w-2xl font-display text-5xl leading-[0.95] tracking-wide sm:text-7xl">
            Viste los colores que <span className="text-volt">te representan</span>
          </h1>
          <p className="mt-5 max-w-md text-base text-paper/70">
            Réplicas premium de camisetas de clubes, selecciones y ediciones retro. Tejidos técnicos,
            bordados de precisión y envío exprés.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/tienda"
              className="rounded-full bg-volt px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-ink transition hover:bg-white"
            >
              Ver colección
            </Link>
            <Link
              href="/tienda?categoria=Retro"
              className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:border-white"
            >
              Colección Retro
            </Link>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-flame">Explora</span>
            <h2 className="mt-2 font-display text-4xl tracking-wide text-ink">Compra por categoría</h2>
          </div>
          <Link href="/tienda" className="hidden text-sm font-bold uppercase tracking-wide text-ink/60 hover:text-ink sm:block">
            Ver todo →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/tienda?liga=${cat.slug}`}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-ink"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover opacity-80 transition duration-500 group-hover:scale-110 group-hover:opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="font-display text-2xl tracking-wide text-white">{cat.name}</h3>
                <p className="text-xs text-paper/70">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-flame">Lo más vendido</span>
              <h2 className="mt-2 font-display text-4xl tracking-wide text-ink">Camisetas destacadas</h2>
            </div>
            <Link href="/tienda" className="hidden text-sm font-bold uppercase tracking-wide text-ink/60 hover:text-ink sm:block">
              Ver todo →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* PROMO SPLIT */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid overflow-hidden rounded-3xl bg-ink md:grid-cols-2">
          <div className="flex flex-col justify-center gap-4 p-10 sm:p-14">
            <span className="w-fit rounded-full bg-flame px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
              Oferta por tiempo limitado
            </span>
            <h3 className="font-display text-4xl leading-tight tracking-wide text-white sm:text-5xl">
              2ª unidad al 20% de descuento
            </h3>
            <p className="max-w-sm text-sm text-paper/65">
              Combina tu equipación titular con la segunda o tercera y consigue un descuento automático
              en tu carrito.
            </p>
            <Link
              href="/tienda"
              className="mt-2 w-fit rounded-full bg-volt px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink transition hover:bg-white"
            >
              Aprovechar oferta
            </Link>
          </div>
          <div className="relative min-h-[280px]">
            <Image src="/images/jersey-4.jpg" alt="Oferta camisetas" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* RETRO STRIP */}
      <section className="relative overflow-hidden bg-paper-dark py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-flame">Clásicos</span>
              <h2 className="mt-2 font-display text-4xl tracking-wide text-ink">Colección Retro</h2>
            </div>
            <Link href="/tienda?categoria=Retro" className="hidden text-sm font-bold uppercase tracking-wide text-ink/60 hover:text-ink sm:block">
              Ver todo →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[...retro, ...retro].slice(0, 4).map((product, i) => (
              <ProductCard key={product.slug + i} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src="/images/about-workshop.jpg" alt="Confección de camisetas" fill className="object-cover" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-flame">Nuestro compromiso</span>
            <h2 className="mt-2 font-display text-4xl leading-tight tracking-wide text-ink">
              Obsesionados con el detalle, apasionados por el fútbol
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/65">
              Cada camiseta pasa por un control de calidad exhaustivo: tejidos técnicos, bordados de
              precisión y acabados fieles a la equipación original. Trabajamos con talleres
              especializados para ofrecerte la mejor réplica al mejor precio.
            </p>
            <Link
              href="/nosotros"
              className="mt-6 inline-block rounded-full border border-ink px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink transition hover:bg-ink hover:text-white"
            >
              Conoce nuestra historia
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-flame">Opiniones</span>
            <h2 className="mt-2 font-display text-4xl tracking-wide text-ink">Lo que dice nuestra afición</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-ink/10 bg-paper p-6">
                <div className="text-gold">{"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}</div>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">&ldquo;{t.text}&rdquo;</p>
                <p className="mt-4 text-sm font-bold text-ink">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
}
