"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products, sizes, type Product } from "@/lib/products";

const leagues = Array.from(new Set(products.map((p) => p.league)));
const kitTypes: Product["category"][] = ["Local", "Visitante", "Tercera", "Retro", "Selección"];
const sortOptions = ["Más populares", "Precio: menor a mayor", "Precio: mayor a menor", "Novedades"];

export default function ShopView({
  initialLeague,
  initialCategory,
  initialOnSale,
}: {
  initialLeague?: string;
  initialCategory?: string;
  initialOnSale?: boolean;
}) {
  const [selectedLeagues, setSelectedLeagues] = useState<string[]>(initialLeague ? [initialLeague] : []);
  const [selectedTypes, setSelectedTypes] = useState<Product["category"][]>(
    initialCategory ? [initialCategory as Product["category"]] : []
  );
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [onlyOffers, setOnlyOffers] = useState(Boolean(initialOnSale));
  const [maxPrice, setMaxPrice] = useState(70);
  const [sort, setSort] = useState(sortOptions[0]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggle = <T,>(list: T[], value: T, setter: (v: T[]) => void) => {
    setter(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const filtered = useMemo(() => {
    let list = products.filter((p) => p.price <= maxPrice);

    if (selectedLeagues.length) {
      list = list.filter((p) => selectedLeagues.includes(p.league));
    }
    if (selectedTypes.length) {
      list = list.filter((p) => selectedTypes.includes(p.category));
    }
    if (onlyOffers) {
      list = list.filter((p) => Boolean(p.oldPrice));
    }
    if (selectedSizes.length) {
      list = list;
    }

    switch (sort) {
      case "Precio: menor a mayor":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "Precio: mayor a menor":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "Novedades":
        list = [...list].sort((a, b) => Number(b.isNew) - Number(a.isNew));
        break;
      default:
        list = [...list].sort((a, b) => b.reviews - a.reviews);
    }

    return list;
  }, [selectedLeagues, selectedTypes, selectedSizes, onlyOffers, maxPrice, sort]);

  const clearAll = () => {
    setSelectedLeagues([]);
    setSelectedTypes([]);
    setSelectedSizes([]);
    setOnlyOffers(false);
    setMaxPrice(70);
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
      <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ink/45">
        <span>Inicio</span><span>/</span><span className="text-ink">Tienda</span>
      </div>

      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-flame">Catálogo</span>
          <h1 className="mt-2 font-display text-4xl tracking-wide text-ink sm:text-5xl">Todas las camisetas</h1>
        </div>
        <button type="button" onClick={() => setMobileFiltersOpen(true)} className="flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2.5 text-sm font-bold uppercase tracking-wide lg:hidden">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m9 12h3.75M16.5 18a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 18H13.5M10.5 12h9.75M10.5 12a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 12H7.5" /></svg>
          Filtros
        </button>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr]">
        <aside className="hidden lg:block">
          <FilterPanel selectedLeagues={selectedLeagues} setSelectedLeagues={(v) => setSelectedLeagues(v)} selectedTypes={selectedTypes} setSelectedTypes={(v) => setSelectedTypes(v)} selectedSizes={selectedSizes} setSelectedSizes={(v) => setSelectedSizes(v)} onlyOffers={onlyOffers} setOnlyOffers={setOnlyOffers} maxPrice={maxPrice} setMaxPrice={setMaxPrice} toggle={toggle} clearAll={clearAll} />
        </aside>

        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-50 flex lg:hidden">
            <div className="absolute inset-0 bg-ink/50" onClick={() => setMobileFiltersOpen(false)} />
            <div className="relative ml-auto flex h-full w-[85%] max-w-sm flex-col overflow-y-auto bg-paper p-6">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-display text-2xl tracking-wide">Filtros</h3>
                <button onClick={() => setMobileFiltersOpen(false)} aria-label="Cerrar filtros"><svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 18 6M6 6l12 12" /></svg></button>
              </div>
              <FilterPanel selectedLeagues={selectedLeagues} setSelectedLeagues={(v) => setSelectedLeagues(v)} selectedTypes={selectedTypes} setSelectedTypes={(v) => setSelectedTypes(v)} selectedSizes={selectedSizes} setSelectedSizes={(v) => setSelectedSizes(v)} onlyOffers={onlyOffers} setOnlyOffers={setOnlyOffers} maxPrice={maxPrice} setMaxPrice={setMaxPrice} toggle={toggle} clearAll={clearAll} />
              <button onClick={() => setMobileFiltersOpen(false)} className="mt-6 w-full rounded-full bg-ink py-3.5 text-sm font-bold uppercase tracking-wide text-white">Ver {filtered.length} resultados</button>
            </div>
          </div>
        )}

        <div>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 pb-4">
            <p className="text-sm text-ink/60"><span className="font-bold text-ink">{filtered.length}</span> productos encontrados</p>
            <label className="flex items-center gap-2 text-sm text-ink/70">
              Ordenar por
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-full border border-ink/15 bg-white px-3 py-2 text-sm font-semibold text-ink focus:outline-none">
                {sortOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </label>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-ink/20 p-16 text-center">
              <p className="font-display text-2xl tracking-wide text-ink">Sin resultados</p>
              <p className="mt-2 text-sm text-ink/55">Prueba a quitar algún filtro para ver más camisetas.</p>
              <button onClick={clearAll} className="mt-4 rounded-full bg-ink px-6 py-2.5 text-sm font-bold text-white">Limpiar filtros</button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-3">{filtered.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
          )}

          <div className="mt-12 flex items-center justify-center gap-2">
            {[1, 2, 3].map((n) => <button key={n} className={`h-9 w-9 rounded-full text-sm font-bold ${n === 1 ? "bg-ink text-white" : "border border-ink/15 text-ink/60 hover:border-ink/40"}`}>{n}</button>)}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterPanel({ selectedLeagues, setSelectedLeagues, selectedTypes, setSelectedTypes, selectedSizes, setSelectedSizes, onlyOffers, setOnlyOffers, maxPrice, setMaxPrice, toggle, clearAll }: { selectedLeagues: string[]; setSelectedLeagues: (v: string[]) => void; selectedTypes: Product["category"][]; setSelectedTypes: (v: Product["category"][]) => void; selectedSizes: string[]; setSelectedSizes: (v: string[]) => void; onlyOffers: boolean; setOnlyOffers: (v: boolean) => void; maxPrice: number; setMaxPrice: (v: number) => void; toggle: <T,>(list: T[], value: T, setter: (v: T[]) => void) => void; clearAll: () => void; }) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between"><h3 className="font-display text-xl tracking-wide">Filtrar</h3><button onClick={clearAll} className="text-xs font-bold uppercase tracking-wide text-flame hover:underline">Limpiar</button></div>
      <label className="flex items-center justify-between rounded-xl border border-ink/10 bg-white px-4 py-3"><span className="text-sm font-semibold text-ink">Solo ofertas</span><input type="checkbox" checked={onlyOffers} onChange={(e) => setOnlyOffers(e.target.checked)} className="h-4 w-4 accent-flame" /></label>
      <div><h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-ink/70">Liga</h4><div className="space-y-2">{leagues.map((league) => <label key={league} className="flex items-center gap-2.5 text-sm text-ink/70"><input type="checkbox" checked={selectedLeagues.includes(league)} onChange={() => toggle(selectedLeagues, league, setSelectedLeagues)} className="h-4 w-4 accent-ink" />{league}</label>)}</div></div>
      <div><h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-ink/70">Tipo de equipación</h4><div className="flex flex-wrap gap-2">{kitTypes.map((type) => <button key={type} onClick={() => toggle(selectedTypes, type, setSelectedTypes)} className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${selectedTypes.includes(type) ? "border-ink bg-ink text-white" : "border-ink/15 text-ink/65 hover:border-ink/40"}`}>{type}</button>)}</div></div>
      <div><h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-ink/70">Talla</h4><div className="flex flex-wrap gap-2">{sizes.map((size) => <button key={size} onClick={() => toggle(selectedSizes, size, setSelectedSizes)} className={`h-9 w-9 rounded-full border text-xs font-bold ${selectedSizes.includes(size) ? "border-ink bg-ink text-white" : "border-ink/15 text-ink/65 hover:border-ink/40"}`}>{size}</button>)}</div></div>
      <div><div className="mb-3 flex items-center justify-between"><h4 className="text-sm font-bold uppercase tracking-wide text-ink/70">Precio máximo</h4><span className="text-sm font-bold text-ink">{maxPrice}€</span></div><input type="range" min={30} max={70} value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full accent-flame" /></div>
    </div>
  );
}
