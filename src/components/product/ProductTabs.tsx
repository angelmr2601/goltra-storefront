"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";

const tabs = ["Descripción", "Guía de tallas", "Envíos y devoluciones", "Opiniones"];
const reviews = [
  { name: "Carlos M.", rating: 5, text: "Talla perfecta y tejido muy fresco. Volveré a comprar." },
  { name: "Ana R.", rating: 4, text: "Muy buen acabado, el envío tardó un día más de lo previsto." },
  { name: "Diego F.", rating: 5, text: "El bordado del escudo es idéntico al original, encantado." },
];

export default function ProductTabs({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-ink/10 sm:gap-6">{tabs.map((tab, i) => <button key={tab} onClick={() => setActive(i)} className={`border-b-2 px-1 pb-4 text-sm font-bold uppercase tracking-wide transition ${active === i ? "border-ink text-ink" : "border-transparent text-ink/40 hover:text-ink/70"}`}>{tab}</button>)}</div>
      <div className="py-8 text-sm leading-relaxed text-ink/70">
        {active === 0 && <div className="grid gap-8 md:grid-cols-2"><p>{product.description}</p><ul className="space-y-2">{product.features.map((f) => <li key={f} className="flex items-start gap-2"><span className="mt-1 text-volt-dark">●</span>{f}</li>)}</ul></div>}
        {active === 1 && <div className="max-w-2xl overflow-x-auto"><table className="w-full border-collapse text-left text-sm"><thead><tr className="border-b border-ink/10 text-xs uppercase tracking-wide text-ink/50"><th className="py-2 pr-4">Talla</th><th className="py-2 pr-4">Pecho (cm)</th><th className="py-2 pr-4">Largo (cm)</th></tr></thead><tbody>{[["XS","88","66"],["S","92","68"],["M","98","70"],["L","104","72"],["XL","110","74"],["XXL","116","76"]].map((row) => <tr key={row[0]} className="border-b border-ink/5"><td className="py-2 pr-4 font-semibold text-ink">{row[0]}</td><td className="py-2 pr-4">{row[1]}</td><td className="py-2 pr-4">{row[2]}</td></tr>)}</tbody></table></div>}
        {active === 2 && <div className="space-y-3 max-w-2xl"><p>📦 Envío estándar: 24–48h laborables a la península. Gratis a partir de 60€.</p><p>🚚 Envío urgente disponible en el checkout (entrega en 24h).</p><p>↩️ Devoluciones gratuitas durante 30 días desde la recepción del pedido.</p><p>🌍 Envíos internacionales disponibles a la mayoría de países de la UE.</p></div>}
        {active === 3 && <div className="max-w-2xl space-y-5"><div className="flex items-center gap-3"><span className="font-display text-4xl text-ink">{product.rating}</span><div><div className="text-gold">★★★★★</div><p className="text-xs text-ink/50">Basado en {product.reviews} opiniones</p></div></div><div className="space-y-4">{reviews.map((r) => <div key={r.name} className="border-b border-ink/5 pb-4"><div className="flex items-center justify-between"><p className="font-bold text-ink">{r.name}</p><span className="text-gold text-xs">{"★".repeat(r.rating)}{"☆".repeat(5-r.rating)}</span></div><p className="mt-1 text-ink/65">{r.text}</p></div>)}</div></div>}
      </div>
    </div>
  );
}
