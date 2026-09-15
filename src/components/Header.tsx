"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "./Logo";

const nav = [
  { label: "LaLiga", href: "/camisetas/laliga" },
  { label: "Premier", href: "/camisetas/premier-league" },
  { label: "Retro", href: "/tienda?tipo=Retro" },
  { label: "Todos los equipos", href: "/tienda" },
  { label: "Goltra", href: "/nosotros" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [mobileSearch, setMobileSearch] = useState(false);
  const router = useRouter();

  const submitSearch = (event: FormEvent) => {
    event.preventDefault();
    const query = search.trim();
    router.push(query ? `/tienda?q=${encodeURIComponent(query)}` : "/tienda");
    setOpen(false);
    setMobileSearch(false);
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="overflow-hidden bg-volt py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-ink">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="flex items-center gap-10">
              <span>GOLTRA · el hogar de todas las camisetas de fútbol</span><span>✦</span>
              <span>Busca por liga · equipo · temporada</span><span>✦</span>
              <span>Personalización y parches disponibles</span><span>✦</span>
            </div>
          ))}
        </div>
      </div>

      <header className="border-b border-paper/10 bg-ink/96 text-paper backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-3.5 sm:px-8">
          <Link href="/" aria-label="Ir al inicio de GOLTRA" className="shrink-0">
            <span className="sm:hidden"><Logo iconOnly priority /></span>
            <span className="hidden sm:block"><Logo priority /></span>
          </Link>

          <nav className="hidden items-center gap-6 xl:flex">
            {nav.map((item) => (
              <Link key={item.label} href={item.href} className="text-xs font-bold uppercase tracking-[0.1em] text-paper/70 transition hover:text-volt">
                {item.label}
              </Link>
            ))}
          </nav>

          <form onSubmit={submitSearch} className="ml-auto hidden w-full max-w-[310px] items-center gap-2 rounded-full border border-paper/15 bg-white/[0.06] px-4 py-2.5 md:flex">
            <svg className="h-4 w-4 shrink-0 text-paper/45" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-4.35-4.35M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" /></svg>
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Betis 2000, Arsenal, Bundesliga…" className="w-full bg-transparent text-xs text-paper placeholder:text-paper/35 focus:outline-none" />
          </form>

          <div className="ml-auto flex items-center gap-2 md:ml-0">
            <button onClick={() => setMobileSearch((value) => !value)} aria-label="Buscar" className="grid h-9 w-9 place-items-center rounded-full text-paper/75 hover:bg-paper/10 hover:text-volt md:hidden">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-4.35-4.35M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" /></svg>
            </button>
            <Link href="/carrito" aria-label="Carrito" className="grid h-9 w-9 place-items-center rounded-full text-paper/75 hover:bg-paper/10 hover:text-volt">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h1.5l1.7 9.1a2 2 0 0 0 2 1.65h8.9a2 2 0 0 0 1.95-1.55L20.5 6H5.05M9 19.25h.01M17 19.25h.01" /></svg>
            </Link>
            <button onClick={() => setOpen((value) => !value)} aria-label="Abrir menú" className="grid h-9 w-9 place-items-center rounded-full text-paper/75 hover:bg-paper/10 hover:text-volt xl:hidden">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">{open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />}</svg>
            </button>
          </div>
        </div>

        {mobileSearch && (
          <form onSubmit={submitSearch} className="border-t border-paper/10 px-5 py-3 md:hidden">
            <div className="flex items-center rounded-full bg-white/10 px-4 py-2.5">
              <input autoFocus value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Busca equipo, liga o temporada" className="w-full bg-transparent text-sm text-white placeholder:text-paper/40 focus:outline-none" />
              <button className="text-xs font-bold uppercase text-volt">Buscar</button>
            </div>
          </form>
        )}

        {open && (
          <nav className="grid border-t border-paper/10 px-5 py-4 xl:hidden">
            {nav.map((item) => <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm font-bold uppercase tracking-wide text-paper/80 hover:bg-paper/10 hover:text-volt">{item.label}</Link>)}
          </nav>
        )}
      </header>
    </div>
  );
}
