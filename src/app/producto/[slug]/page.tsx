import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import Gallery from "@/components/product/Gallery";
import PurchasePanel from "@/components/product/PurchasePanel";
import ProductTabs from "@/components/product/ProductTabs";
import { getProductBySlug, getRelatedProducts, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Producto no encontrado — GOLTRA" };
  return { title: `${product.name} — GOLTRA`, description: product.description };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const related = getRelatedProducts(slug);

  return (
    <main className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ink/45">
          <Link href="/" className="hover:text-ink">Inicio</Link><span>/</span><Link href="/tienda" className="hover:text-ink">Tienda</Link><span>/</span><span className="text-ink">{product.name}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <Gallery images={product.gallery} name={product.name} />
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-flame">{product.league} · {product.season}</span>
            <h1 className="mt-2 font-display text-4xl leading-tight tracking-wide text-ink sm:text-5xl">{product.name}</h1>
            <div className="mt-3 flex items-center gap-3 text-sm"><span className="text-gold">★★★★★</span><span className="text-ink/60">{product.rating} · {product.reviews} opiniones</span><span className="rounded-full bg-paper-dark px-3 py-1 text-xs font-bold uppercase text-ink/60">{product.category}</span></div>
            <div className="mt-5 flex items-center gap-3"><span className="font-display text-4xl tracking-wide text-ink">{product.price.toFixed(2)}€</span>{product.oldPrice && <span className="text-lg text-ink/40 line-through">{product.oldPrice.toFixed(2)}€</span>}{product.oldPrice && <span className="rounded-full bg-flame px-2.5 py-1 text-xs font-bold text-white">Ahorras {(product.oldPrice - product.price).toFixed(2)}€</span>}</div>
            <p className="mt-1 text-xs text-ink/50">IVA incluido. Envío calculado en el checkout.</p>
            <div className="mt-8 border-t border-ink/10 pt-8"><PurchasePanel colors={product.colors} /></div>
            <div className="mt-8 grid grid-cols-1 gap-3 border-t border-ink/10 pt-6 sm:grid-cols-3">
              {[["🚚", "Envío 24-48h"],["🔒", "Pago 100% seguro"],["↩️", "30 días para devolver"]].map(([icon, text]) => <div key={text} className="flex items-center gap-2 text-xs font-semibold text-ink/65"><span>{icon}</span>{text}</div>)}
            </div>
          </div>
        </div>

        <div className="mt-16"><ProductTabs product={product} /></div>
        {related.length > 0 && <div className="mt-16"><h2 className="mb-6 font-display text-3xl tracking-wide text-ink">También te puede gustar</h2><div className="grid grid-cols-2 gap-4 sm:grid-cols-4">{related.map((p) => <ProductCard key={p.slug} product={p} />)}</div></div>}
      </div>
    </main>
  );
}
