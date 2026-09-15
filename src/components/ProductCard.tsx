import Link from "next/link";
import JerseyVisual from "./JerseyVisual";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/producto/${product.slug}`}
      className="group flex min-w-0 flex-col overflow-hidden rounded-[1.4rem] border border-ink/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(12,15,20,0.12)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-paper-dark">
        <JerseyVisual product={product} compact className="transition duration-500 group-hover:scale-[1.035]" />
        <div className="absolute left-3 top-3 flex flex-col items-start gap-1.5">
          {product.isNew && <span className="rounded-full bg-ink px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">Nuevo</span>}
          {product.badge && <span className="rounded-full bg-volt px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-ink">{product.badge}</span>}
        </div>
        <span className="absolute bottom-3 left-3 right-3 translate-y-8 rounded-full bg-ink py-2.5 text-center text-[11px] font-bold uppercase tracking-[0.08em] text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          Ver camiseta
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink/42">{product.league} · {product.season}</p>
        <h3 className="mt-1 font-display text-xl leading-tight tracking-wide text-ink">{product.team}</h3>
        <p className="mt-1 text-xs text-ink/55">{product.kitType} · {product.versions.join(" / ")}</p>
        <div className="mt-4 flex items-end justify-between gap-2 border-t border-ink/8 pt-3">
          <div>
            <span className="text-[10px] uppercase tracking-wide text-ink/40">Desde</span>
            <p className="font-display text-2xl tracking-wide text-ink">{product.priceFrom.toFixed(2).replace(".", ",")}€</p>
          </div>
          <span className="text-xs font-bold text-ink/45 transition group-hover:text-ink">Ver →</span>
        </div>
      </div>
    </Link>
  );
}
