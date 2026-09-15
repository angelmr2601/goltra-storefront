"use client";

import { useState } from "react";
import { sizes } from "@/lib/products";

export default function PurchasePanel({ colors }: { colors: string[] }) {
  const [size, setSize] = useState<string | null>(null);
  const [color, setColor] = useState(0);
  const [qty, setQty] = useState(1);

  return (
    <div className="space-y-6">
      <div><h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-ink/70">Color: <span className="font-normal text-ink/50">Oficial</span></h4><div className="flex gap-2.5">{colors.map((c, i) => <button key={c} onClick={() => setColor(i)} aria-label={`Color ${i + 1}`} style={{ backgroundColor: c }} className={`h-8 w-8 rounded-full border-2 transition ${color === i ? "border-ink ring-2 ring-ink/30 ring-offset-2" : "border-white shadow"}`} />)}</div></div>
      <div><div className="mb-3 flex items-center justify-between"><h4 className="text-sm font-bold uppercase tracking-wide text-ink/70">Talla</h4><button className="text-xs font-semibold text-ink/50 underline underline-offset-2 hover:text-ink">Guía de tallas</button></div><div className="flex flex-wrap gap-2">{sizes.map((s) => <button key={s} onClick={() => setSize(s)} className={`h-11 w-11 rounded-xl border text-sm font-bold transition ${size === s ? "border-ink bg-ink text-white" : "border-ink/15 text-ink/70 hover:border-ink/40"}`}>{s}</button>)}</div>{!size && <p className="mt-2 text-xs text-flame">Selecciona una talla para continuar</p>}</div>
      <div><h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-ink/70">Cantidad</h4><div className="inline-flex items-center rounded-full border border-ink/15"><button onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid h-11 w-11 place-items-center text-lg font-bold text-ink/70 hover:text-ink" aria-label="Restar cantidad">−</button><span className="w-8 text-center text-sm font-bold">{qty}</span><button onClick={() => setQty((q) => Math.min(10, q + 1))} className="grid h-11 w-11 place-items-center text-lg font-bold text-ink/70 hover:text-ink" aria-label="Sumar cantidad">+</button></div></div>
      <div className="flex flex-col gap-3 pt-2 sm:flex-row"><button className="flex-1 rounded-full bg-ink py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-ink-soft">Añadir al carrito</button><button aria-label="Añadir a favoritos" className="grid h-[52px] w-[52px] shrink-0 place-items-center rounded-full border border-ink/15 text-ink transition hover:border-ink"><svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg></button></div>
      <button className="w-full rounded-full border border-volt-dark bg-volt py-4 text-sm font-bold uppercase tracking-wide text-ink transition hover:bg-volt-dark">Comprar ahora</button>
    </div>
  );
}
