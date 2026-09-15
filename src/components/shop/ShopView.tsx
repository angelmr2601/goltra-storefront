"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { adultSizes, products, type KitType, type ProductVersion } from "@/lib/products";

const kitTypes: KitType[] = ["Local", "Visitante", "Tercera", "Retro"];
const versions: ProductVersion[] = ["Fan", "Player", "Retro", "Infantil", "Manga larga"];
const sortOptions = ["Recomendados", "Precio: menor a mayor", "Precio: mayor a menor", "Equipo A-Z", "Novedades"];

type ShopViewProps = {
  initialLeague?: string;
  initialTeam?: string;
  initialSeason?: string;
  initialType?: string;
  initialSearch?: string;
};

export default function ShopView({ initialLeague, initialTeam, initialSeason, initialType, initialSearch = "" }: ShopViewProps) {
  const [selectedLeagues, setSelectedLeagues] = useState<string[]>(initialLeague ? [initialLeague] : []);
  const [selectedTeams, setSelectedTeams] = useState<string[]>(initialTeam ? [initialTeam] : []);
  const [selectedSeasons, setSelectedSeasons] = useState<string[]>(initialSeason ? [initialSeason] : []);
  const [selectedTypes, setSelectedTypes] = useState<KitType[]>(initialType && kitTypes.includes(initialType as KitType) ? [initialType as KitType] : []);
  const [selectedVersions, setSelectedVersions] = useState<ProductVersion[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [search, setSearch] = useState(initialSearch);
  const [sort, setSort] = useState(sortOptions[0]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const availableLeagues = useMemo(() => Array.from(new Set(products.map((product) => product.league))).sort(), []);
  const availableTeams = useMemo(() => {
    const source = selectedLeagues.length ? products.filter((product) => selectedLeagues.includes(product.league)) : products;
    return Array.from(new Set(source.map((product) => product.team))).sort();
  }, [selectedLeagues]);
  const availableSeasons = useMemo(() => {
    let source = products;
    if (selectedLeagues.length) source = source.filter((product) => selectedLeagues.includes(product.league));
    if (selectedTeams.length) source = source.filter((product) => selectedTeams.includes(product.team));
    return Array.from(new Set(source.map((product) => product.season))).sort().reverse();
  }, [selectedLeagues, selectedTeams]);

  const filtered = useMemo(() => {
    const normalized = search.trim().toLocaleLowerCase("es");
    let list = products.filter((product) => {
      if (selectedLeagues.length && !selectedLeagues.includes(product.league)) return false;
      if (selectedTeams.length && !selectedTeams.includes(product.team)) return false;
      if (selectedSeasons.length && !selectedSeasons.includes(product.season)) return false;
      if (selectedTypes.length && !selectedTypes.includes(product.kitType)) return false;
      if (selectedVersions.length && !selectedVersions.some((version) => product.versions.includes(version))) return false;
      if (selectedSizes.length && !selectedSizes.some((size) => product.sizes.includes(size))) return false;
      if (normalized) {
        const haystack = `${product.team} ${product.league} ${product.season} ${product.kitType} ${product.versions.join(" ")}`.toLocaleLowerCase("es");
        if (!haystack.includes(normalized)) return false;
      }
      return true;
    });

    switch (sort) {
      case "Precio: menor a mayor": list = [...list].sort((a, b) => a.priceFrom - b.priceFrom); break;
      case "Precio: mayor a menor": list = [...list].sort((a, b) => b.priceFrom - a.priceFrom); break;
      case "Equipo A-Z": list = [...list].sort((a, b) => a.team.localeCompare(b.team)); break;
      case "Novedades": list = [...list].sort((a, b) => Number(b.isNew) - Number(a.isNew)); break;
      default: list = [...list].sort((a, b) => Number(b.featured) - Number(a.featured));
    }
    return list;
  }, [search, selectedLeagues, selectedTeams, selectedSeasons, selectedTypes, selectedVersions, selectedSizes, sort]);

  const toggle = <T,>(list: T[], value: T, setter: (value: T[]) => void) => setter(list.includes(value) ? list.filter((item) => item !== value) : [...list, value]);
  const clearAll = () => {
    setSelectedLeagues([]); setSelectedTeams([]); setSelectedSeasons([]); setSelectedTypes([]); setSelectedVersions([]); setSelectedSizes([]); setSearch("");
  };
  const activeCount = selectedLeagues.length + selectedTeams.length + selectedSeasons.length + selectedTypes.length + selectedVersions.length + selectedSizes.length + Number(Boolean(search.trim()));

  const filters = (
    <div className="space-y-7">
      <div className="flex items-center justify-between">
        <div><p className="font-display text-xl tracking-wide">Filtrar catálogo</p><p className="text-xs text-ink/45">Liga → equipo → temporada</p></div>
        {activeCount > 0 && <button onClick={clearAll} className="text-[11px] font-bold uppercase tracking-wide text-flame hover:underline">Limpiar</button>}
      </div>
      <div>
        <label htmlFor="catalog-search" className="mb-2 block text-[11px] font-bold uppercase tracking-[0.12em] text-ink/45">Buscar</label>
        <input id="catalog-search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Betis 2000…" className="input-field" />
      </div>
      <FilterGroup title="Liga" options={availableLeagues} selected={selectedLeagues} onToggle={(value) => { toggle(selectedLeagues, value, setSelectedLeagues); setSelectedTeams([]); setSelectedSeasons([]); }} />
      <FilterGroup title="Equipo" options={availableTeams} selected={selectedTeams} onToggle={(value) => { toggle(selectedTeams, value, setSelectedTeams); setSelectedSeasons([]); }} />
      <FilterGroup title="Temporada" options={availableSeasons} selected={selectedSeasons} onToggle={(value) => toggle(selectedSeasons, value, setSelectedSeasons)} />
      <FilterGroup title="Equipación" options={kitTypes} selected={selectedTypes} onToggle={(value) => toggle(selectedTypes, value, setSelectedTypes)} />
      <FilterGroup title="Versión" options={versions} selected={selectedVersions} onToggle={(value) => toggle(selectedVersions, value, setSelectedVersions)} />
      <FilterGroup title="Talla" options={adultSizes} selected={selectedSizes} onToggle={(value) => toggle(selectedSizes, value, setSelectedSizes)} compact />
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
      <div className="mb-8 grid gap-5 border-b border-ink/10 pb-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-flame">Catálogo GOLTRA</p>
          <h1 className="mt-2 max-w-3xl font-display text-5xl leading-[0.95] tracking-wide text-ink sm:text-6xl">Encuentra la camiseta exacta</h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/58">Filtra por liga, equipo y temporada. Después afina por tipo de equipación, versión y talla.</p>
        </div>
        <button type="button" onClick={() => setMobileFiltersOpen(true)} className="flex w-fit items-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wide lg:hidden">Filtros {activeCount > 0 && <span className="grid h-5 w-5 place-items-center rounded-full bg-volt text-[10px]">{activeCount}</span>}</button>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[250px_1fr]">
        <aside className="hidden lg:block"><div className="sticky top-36 rounded-2xl border border-ink/10 bg-white p-5">{filters}</div></aside>
        {mobileFiltersOpen && <div className="fixed inset-0 z-[70] flex lg:hidden"><button aria-label="Cerrar filtros" className="absolute inset-0 bg-ink/60" onClick={() => setMobileFiltersOpen(false)} /><div className="relative ml-auto h-full w-[88%] max-w-sm overflow-y-auto bg-paper p-6"><div className="mb-6 flex items-center justify-between"><h2 className="font-display text-3xl">Filtros</h2><button onClick={() => setMobileFiltersOpen(false)} className="text-2xl">×</button></div>{filters}<button onClick={() => setMobileFiltersOpen(false)} className="mt-8 w-full rounded-full bg-ink py-3.5 text-xs font-bold uppercase tracking-wide text-white">Ver {filtered.length} resultados</button></div></div>}

        <div>
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-ink/55"><span className="font-bold text-ink">{filtered.length}</span> camisetas</p>
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-full border border-ink/15 bg-white px-4 py-2.5 text-xs font-semibold text-ink focus:outline-none">{sortOptions.map((option) => <option key={option}>{option}</option>)}</select>
          </div>

          {activeCount > 0 && <div className="mb-5 flex flex-wrap gap-2"><span className="rounded-full bg-ink px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white">{activeCount} filtros activos</span><button onClick={clearAll} className="rounded-full border border-ink/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-ink/60">Restablecer</button></div>}

          {filtered.length ? <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">{filtered.map((product) => <ProductCard key={product.slug} product={product} />)}</div> : <div className="rounded-3xl border border-dashed border-ink/20 bg-white p-14 text-center"><p className="font-display text-3xl tracking-wide">No encontramos esa camiseta</p><p className="mx-auto mt-2 max-w-md text-sm text-ink/50">Prueba con otra temporada, elimina algún filtro o busca solamente el nombre del equipo.</p><button onClick={clearAll} className="mt-5 rounded-full bg-ink px-6 py-3 text-xs font-bold uppercase tracking-wide text-white">Ver todo el catálogo</button></div>}
        </div>
      </div>
    </div>
  );
}

function FilterGroup<T extends string>({ title, options, selected, onToggle, compact = false }: { title: string; options: readonly T[]; selected: T[]; onToggle: (value: T) => void; compact?: boolean }) {
  if (!options.length) return null;
  return (
    <div className="border-t border-ink/8 pt-5">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-ink/45">{title}</p>
      <div className={compact ? "flex flex-wrap gap-2" : "space-y-2"}>
        {options.map((option) => compact ? (
          <button key={option} onClick={() => onToggle(option)} className={`rounded-lg border px-2.5 py-2 text-xs font-bold transition ${selected.includes(option) ? "border-ink bg-ink text-white" : "border-ink/12 bg-white text-ink/65 hover:border-ink/35"}`}>{option}</button>
        ) : (
          <label key={option} className="flex cursor-pointer items-center gap-2.5 text-sm text-ink/65 hover:text-ink"><input type="checkbox" checked={selected.includes(option)} onChange={() => onToggle(option)} className="h-4 w-4 accent-ink" /><span>{option}</span></label>
        ))}
      </div>
    </div>
  );
}
