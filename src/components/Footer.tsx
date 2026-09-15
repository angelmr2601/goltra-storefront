import Link from "next/link";
import Logo from "./Logo";

const columns = [
  { title: "Comprar", links: [{ label: "LaLiga", href: "/camisetas/laliga" }, { label: "Premier League", href: "/camisetas/premier-league" }, { label: "Bundesliga", href: "/camisetas/bundesliga" }, { label: "Retro", href: "/tienda?tipo=Retro" }] },
  { title: "Explorar", links: [{ label: "Todos los equipos", href: "/tienda" }, { label: "GOLTRA", href: "/nosotros" }, { label: "Contacto", href: "/contacto" }] },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper"><div className="mx-auto max-w-7xl px-5 py-14 sm:px-8"><div className="grid gap-10 border-b border-paper/10 pb-12 md:grid-cols-[1.5fr_1fr_1fr]"><div><Logo /><p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/52">El hogar de todas las camisetas de fútbol. Catálogo actual y retro organizado por liga, equipo y temporada.</p><Link href="https://instagram.com/goltra_shop" target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-full border border-paper/15 px-4 py-2 text-xs font-bold text-paper/65 transition hover:border-volt hover:text-volt">Instagram · @goltra_shop ↗</Link></div>{columns.map((column) => <div key={column.title}><h3 className="font-display text-lg tracking-wide text-volt">{column.title}</h3><ul className="mt-4 space-y-2.5">{column.links.map((link) => <li key={link.label}><Link href={link.href} className="text-sm text-paper/58 transition hover:text-white">{link.label}</Link></li>)}</ul></div>)}</div><div className="flex flex-col gap-2 pt-6 text-[11px] text-paper/35 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} GOLTRA.</p><p>Storefront en desarrollo · catálogo demo preparado para conectar backend.</p></div></div></footer>
  );
}
