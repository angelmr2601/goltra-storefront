"use client";

import { useMemo, useState } from "react";
import { PATCH_PRICE, PERSONALIZATION_PRICE, VERSION_PRICES, kidsSizes, type Product, type ProductVersion } from "@/lib/products";

export default function PurchasePanel({ product }: { product: Product }) {
  const [version, setVersion] = useState<ProductVersion>(product.versions[0]);
  const [size, setSize] = useState<string | null>(null);
  const [personalized, setPersonalized] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [patches, setPatches] = useState(false);
  const [saved, setSaved] = useState(false);

  const total = useMemo(() => VERSION_PRICES[version] + (personalized ? PERSONALIZATION_PRICE : 0) + (patches ? PATCH_PRICE : 0), [version, personalized, patches]);
  const visibleSizes = version === "Infantil" ? kidsSizes : product.sizes;

  return (
    <div className="space-y-6">
      <div>
        <div className="mb-3 flex items-center justify-between"><h4 className="text-xs font-bold uppercase tracking-[0.14em] text-ink/55">Versión</h4><span className="text-xs text-ink/40">El precio se actualiza al instante</span></div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {product.versions.map((item) => <button key={item} onClick={() => setVersion(item)} className={`rounded-xl border px-3 py-3 text-left transition ${version === item ? "border-ink bg-ink text-white" : "border-ink/12 bg-white text-ink hover:border-ink/35"}`}><span className="block text-xs font-bold">{item}</span><span className={`mt-1 block text-[11px] ${version === item ? "text-white/55" : "text-ink/45"}`}>{VERSION_PRICES[item].toFixed(2).replace('.', ',')}€</span></button>)}
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-ink/55">Talla</h4>
        <div className="flex flex-wrap gap-2">{visibleSizes.map((item) => <button key={item} onClick={() => setSize(item)} className={`min-w-11 rounded-xl border px-3 py-2.5 text-xs font-bold transition ${size === item ? "border-ink bg-ink text-white" : "border-ink/12 bg-white text-ink/65 hover:border-ink/35"}`}>{item}</button>)}</div>
        {!size && <p className="mt-2 text-[11px] text-flame">Selecciona una talla para preparar la configuración.</p>}
      </div>

      {product.personalization && (
        <div className="rounded-2xl border border-ink/10 bg-white p-4">
          <label className="flex cursor-pointer items-center justify-between gap-4"><span><span className="block text-sm font-bold text-ink">Personalización</span><span className="text-xs text-ink/48">Nombre y/o dorsal +{PERSONALIZATION_PRICE.toFixed(2).replace('.', ',')}€</span></span><input type="checkbox" checked={personalized} onChange={(e) => setPersonalized(e.target.checked)} className="h-4 w-4 accent-ink" /></label>
          {personalized && <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_100px]"><input value={name} onChange={(e) => setName(e.target.value.toUpperCase().slice(0, 14))} placeholder="NOMBRE" className="input-field" /><input value={number} onChange={(e) => setNumber(e.target.value.replace(/\D/g, '').slice(0, 2))} placeholder="10" inputMode="numeric" className="input-field" /></div>}
        </div>
      )}

      {product.patches && <label className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-ink/10 bg-white p-4"><span><span className="block text-sm font-bold text-ink">Añadir parches</span><span className="text-xs text-ink/48">Opción de parche +{PATCH_PRICE.toFixed(2).replace('.', ',')}€</span></span><input type="checkbox" checked={patches} onChange={(e) => setPatches(e.target.checked)} className="h-4 w-4 accent-ink" /></label>}

      <div className="flex items-end justify-between gap-4 border-t border-ink/10 pt-5"><div><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink/40">Configuración</p><p className="font-display text-4xl tracking-wide text-ink">{total.toFixed(2).replace('.', ',')}€</p></div><p className="max-w-[190px] text-right text-[11px] leading-relaxed text-ink/42">Carrito y pagos se conectarán en la siguiente fase.</p></div>
      <button disabled={!size} onClick={() => setSaved(true)} className="w-full rounded-full bg-ink py-4 text-xs font-extrabold uppercase tracking-[0.1em] text-white transition enabled:hover:bg-ink-soft disabled:cursor-not-allowed disabled:opacity-35">{saved ? "Configuración preparada ✓" : "Preparar esta camiseta"}</button>
    </div>
  );
}
