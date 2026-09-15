import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/producto/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(12,15,20,0.12)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-paper-dark">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="rounded-full bg-ink px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
              Nuevo
            </span>
          )}
          {product.badge && (
            <span className="rounded-full bg-flame px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
              {product.badge}
            </span>
          )}
        </div>
        <button
          type="button"
          aria-label="Añadir a favoritos"
          className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-ink opacity-0 shadow transition group-hover:opacity-100"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </button>
        <div className="absolute inset-x-3 bottom-3 translate-y-10 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="block w-full rounded-full bg-ink py-2.5 text-center text-xs font-bold uppercase tracking-wide text-white">
            Vista rápida
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-ink/45">
          {product.league} · {product.category}
        </span>
        <h3 className="font-display text-lg leading-tight tracking-wide text-ink">{product.name}</h3>

        <div className="mt-1 flex items-center gap-1 text-xs text-ink/60">
          <span className="text-gold">★★★★★</span>
          <span>({product.reviews})</span>
        </div>

        <div className="mt-auto flex items-center gap-2 pt-2">
          <span className="font-display text-xl tracking-wide text-ink">{product.price.toFixed(2)}€</span>
          {product.oldPrice && (
            <span className="text-sm text-ink/40 line-through">{product.oldPrice.toFixed(2)}€</span>
          )}
        </div>
      </div>
    </Link>
  );
}
