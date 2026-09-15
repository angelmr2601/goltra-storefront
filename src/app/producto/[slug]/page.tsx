import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import Gallery from "@/components/product/Gallery";
import ProductTabs from "@/components/product/ProductTabs";
import PurchasePanel from "@/components/product/PurchasePanel";
import { getProductBySlug, getRelatedProducts } from "@/lib/products";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const related = getRelatedProducts(slug);

  return (
    <main className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.1em] text-ink/35"><Link href="/">Inicio</Link><span>/</span><Link href={`/camisetas/${product.leagueSlug}`}>{product.league}</Link><span>/</span><Link href={`/camisetas/${product.leagueSlug}/${product.teamSlug}`}>{product.team}</Link><span>/</span><span className="text-ink">{product.season}</span></nav>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
          <Gallery product={product} />
          <div className="lg:pt-3">
            <div className="flex flex-wrap gap-2"><span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-ink/50">{product.league}</span><span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-ink/50">{product.season}</span>{product.badge && <span className="rounded-full bg-volt px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-ink">{product.badge}</span>}</div>
            <h1 className="mt-4 font-display text-5xl leading-[.95] tracking-wide text-ink sm:text-6xl">{product.team}</h1>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-ink/42">{product.kitType} · {product.season}</p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink/58">{product.description}</p>
            <div className="my-7 border-t border-ink/10" />
            <PurchasePanel product={product} />
          </div>
        </div>
        <div className="mt-14"><ProductTabs product={product} /></div>
        <section className="mt-16 border-t border-ink/10 pt-12"><div className="mb-6 flex items-end justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-flame">Sigue buscando</p><h2 className="mt-2 font-display text-4xl tracking-wide">También te puede interesar</h2></div><Link href={`/camisetas/${product.leagueSlug}/${product.teamSlug}`} className="hidden text-xs font-bold uppercase tracking-wide text-ink/50 sm:block">Ver {product.team} →</Link></div><div className="grid grid-cols-2 gap-4 md:grid-cols-4">{related.map((item) => <ProductCard key={item.slug} product={item} />)}</div></section>
      </div>
    </main>
  );
}
