import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import JerseyVisual from "@/components/JerseyVisual";
import TrustBadges from "@/components/TrustBadges";
import Newsletter from "@/components/Newsletter";
import { leagues, popularTeams, products } from "@/lib/products";

const featured = products.filter((product) => product.featured).slice(0, 4);
const heroProduct = products[0];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #c8ff3d 0, transparent 27%), radial-gradient(circle at 80% 60%, #ffffff 0, transparent 16%)" }} />
        <div className="relative mx-auto grid min-h-[610px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
          <div>
            <span className="inline-flex rounded-full border border-volt/35 bg-volt/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-volt">Catálogo 2026/27 + retro</span>
            <h1 className="mt-6 max-w-3xl font-display text-6xl leading-[0.88] tracking-wide sm:text-7xl lg:text-[92px]">Tu camiseta. <span className="text-volt">Tu historia.</span></h1>
            <p className="mt-6 max-w-xl text-sm leading-6 text-paper/62 sm:text-base">GOLTRA reúne camisetas actuales y retro en un catálogo pensado para encontrar justo la que buscas: liga, equipo y temporada.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/tienda" className="rounded-full bg-volt px-7 py-3.5 text-xs font-extrabold uppercase tracking-[0.1em] text-ink transition hover:bg-white">Explorar catálogo</Link>
              <Link href="/camisetas/laliga/real-betis/1999-00" className="rounded-full border border-white/20 px-7 py-3.5 text-xs font-extrabold uppercase tracking-[0.1em] text-white transition hover:border-white">Ver retro</Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-5 text-[11px] font-semibold uppercase tracking-[0.1em] text-paper/45">
              <span>Fan · Player · Retro</span><span>Personalización</span><span>Parches</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[500px] lg:mr-0">
            <div className="absolute -left-8 top-16 hidden rotate-[-9deg] rounded-2xl bg-white px-4 py-3 text-ink shadow-2xl sm:block"><p className="text-[9px] font-bold uppercase tracking-[0.18em] text-ink/40">Cómo navegar</p><p className="mt-1 font-display text-xl">Liga → Equipo → Temporada</p></div>
            <div className="aspect-[4/5] overflow-hidden rounded-[2.2rem] border border-white/10 bg-paper shadow-2xl"><JerseyVisual product={heroProduct} /></div>
            <div className="absolute -bottom-5 right-4 rounded-2xl bg-volt px-5 py-4 text-ink shadow-2xl"><p className="text-[9px] font-extrabold uppercase tracking-[0.18em]">Desde</p><p className="font-display text-3xl">{heroProduct.priceFrom.toFixed(2).replace('.', ',')}€</p></div>
          </div>
        </div>
      </section>

      <TrustBadges />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div><span className="text-xs font-bold uppercase tracking-[0.2em] text-flame">Empieza por aquí</span><h2 className="mt-2 font-display text-4xl tracking-wide text-ink sm:text-5xl">Compra por liga</h2></div>
          <Link href="/tienda" className="hidden text-xs font-bold uppercase tracking-wide text-ink/50 hover:text-ink sm:block">Ver catálogo completo →</Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {leagues.map((league, index) => (
            <Link key={league.slug} href={`/camisetas/${league.slug}`} className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-6 transition hover:-translate-y-1 hover:border-ink/25 hover:shadow-lg">
              <div className="flex items-center justify-between gap-3"><span className="grid h-11 w-11 place-items-center rounded-full bg-paper font-display text-xl text-ink">0{index + 1}</span><span className="text-ink/30 transition group-hover:translate-x-1 group-hover:text-ink">→</span></div>
              <h3 className="mt-8 font-display text-3xl tracking-wide text-ink">{league.name}</h3>
              <p className="mt-1 text-xs text-ink/48">Ver equipos y temporadas</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-8"><span className="text-xs font-bold uppercase tracking-[0.2em] text-flame">Selección GOLTRA</span><h2 className="mt-2 font-display text-4xl tracking-wide text-ink sm:text-5xl">Camisetas destacadas</h2></div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">{featured.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid overflow-hidden rounded-[2rem] bg-volt lg:grid-cols-[1fr_1.3fr]">
          <div className="p-8 sm:p-12"><span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-ink/45">Atajo de catálogo</span><h2 className="mt-3 font-display text-5xl leading-[.95] tracking-wide text-ink">Tu equipo, sin dar vueltas</h2><p className="mt-4 max-w-md text-sm leading-relaxed text-ink/65">Cada camiseta vive dentro de una jerarquía clara. Puedes llegar desde la liga, entrar en el club y elegir la temporada.</p><Link href="/tienda" className="mt-7 inline-flex rounded-full bg-ink px-6 py-3 text-xs font-bold uppercase tracking-wide text-white">Buscar camiseta</Link></div>
          <div className="grid grid-cols-2 gap-px bg-ink/10 p-px sm:grid-cols-3">
            {popularTeams.map((product) => <Link key={product.teamSlug} href={`/camisetas/${product.leagueSlug}/${product.teamSlug}`} className="group bg-[#dfff86] p-5 transition hover:bg-white"><p className="text-[10px] font-bold uppercase tracking-wide text-ink/40">{product.league}</p><p className="mt-8 font-display text-2xl leading-none tracking-wide text-ink">{product.team}</p><span className="mt-3 inline-block text-xs font-bold text-ink/45 group-hover:text-ink">Ver temporadas →</span></Link>)}
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
}
