"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const nav = [
  { label: "Inicio", href: "/" },
  { label: "Ligas Top", href: "/tienda?liga=ligas-top" },
  { label: "Selecciones", href: "/tienda?liga=selecciones" },
  { label: "Retro", href: "/tienda?categoria=Retro" },
  { label: "Ofertas", href: "/tienda?ofertas=1" },
  { label: "Nosotros", href: "/nosotros" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      <div className="marquee-wrap overflow-hidden bg-ink py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-paper/80">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-10">
              <span>Envío 24–48h a toda la península</span>
              <span className="text-volt">•</span>
              <span>2ª camiseta con 20% dto.</span>
              <span className="text-volt">•</span>
              <span>Personalización de nombre y dorsal</span>
              <span className="text-volt">•</span>
              <span>Devoluciones gratuitas en 30 días</span>
              <span className="text-volt">•</span>
            </div>
          ))}
        </div>
      </div>

      <header className="border-b border-ink/10 bg-ink text-paper">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link href="/" aria-label="Ir al inicio de GOLTRA">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-semibold uppercase tracking-[0.08em] text-paper/80 transition hover:text-volt"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden flex-1 items-center md:flex md:max-w-xs lg:mx-6">
            <div className="flex w-full items-center gap-2 rounded-full border border-paper/15 bg-paper/5 px-4 py-2">
              <svg className="h-4 w-4 text-paper/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-4.34-4.34M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
              </svg>
              <input
                type="text"
                placeholder="Busca tu equipo, liga o jugador"
                className="w-full bg-transparent text-sm text-paper placeholder:text-paper/40 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button aria-label="Buscar" className="text-paper/80 hover:text-volt md:hidden">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-4.34-4.34M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
              </svg>
            </button>
            <Link href="#" aria-label="Favoritos" className="hidden text-paper/80 hover:text-volt sm:block">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </Link>
            <Link href="#" aria-label="Mi cuenta" className="hidden text-paper/80 hover:text-volt sm:block">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.964 0a9 9 0 1 0-11.964 0m11.964 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </Link>
            <Link href="/carrito" aria-label="Carrito" className="relative text-paper/80 hover:text-volt">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 3h1.386c.51 0 .955.343 1.087.836l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 1.895-4.706 2.286-7.183.075-.478-.276-.917-.76-.917H5.106m2.394 8.1L5.106 5.25m2.394 8.1-.845 2.437m0 0a.75.75 0 1 0-1.499.001.75.75 0 0 0 1.5 0Zm10.5 0a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
              </svg>
              <span className="absolute -top-2 -right-2 grid h-4 w-4 place-items-center rounded-full bg-volt text-[10px] font-bold text-ink">
                3
              </span>
            </Link>
            <button
              aria-label="Abrir menú"
              onClick={() => setOpen((v) => !v)}
              className="text-paper/80 hover:text-volt lg:hidden"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <nav className="flex flex-col gap-1 border-t border-paper/10 px-5 py-4 lg:hidden">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold uppercase tracking-wide text-paper/85 hover:bg-paper/10 hover:text-volt"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </div>
  );
}
