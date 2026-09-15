"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";

const tabs = ["Detalles", "Tallas", "Envío"];

export default function ProductTabs({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="flex flex-wrap gap-5 border-b border-ink/10">{tabs.map((tab, index) => <button key={tab} onClick={() => setActive(index)} className={`border-b-2 px-1 pb-4 text-xs font-bold uppercase tracking-[0.12em] transition ${active === index ? "border-ink text-ink" : "border-transparent text-ink/35 hover:text-ink/65"}`}>{tab}</button>)}</div>
      <div className="py-8 text-sm leading-relaxed text-ink/65">
        {active === 0 && <div className="grid gap-8 md:grid-cols-2"><p>{product.description}</p><ul className="space-y-2">{product.features.map((feature) => <li key={feature} className="flex items-start gap-2"><span className="mt-1 text-volt-dark">●</span>{feature}</li>)}</ul></div>}
        {active === 1 && <div className="max-w-2xl"><p>El tallaje puede variar según la versión. La tabla definitiva se conectará al catálogo del proveedor antes de publicar la tienda.</p><div className="mt-4 flex flex-wrap gap-2">{product.sizes.map((size) => <span key={size} className="rounded-lg border border-ink/10 bg-white px-3 py-2 text-xs font-bold text-ink">{size}</span>)}</div></div>}
        {active === 2 && <div className="max-w-2xl space-y-3"><p>La tienda está preparada para mostrar envío estándar y envío rápido como opciones diferenciadas.</p><p>Los plazos y tarifas definitivos se centralizarán en configuración para poder actualizarlos sin tocar cada producto.</p></div>}
      </div>
    </div>
  );
}
