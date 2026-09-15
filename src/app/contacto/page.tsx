import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Contacto — GOLTRA", description: "Canales de contacto de GOLTRA." };

export default function ContactoPage() {
  return (
    <main className="bg-paper"><div className="mx-auto max-w-5xl px-5 py-20 sm:px-8"><div className="rounded-[2rem] bg-ink p-8 text-white sm:p-12"><span className="text-xs font-bold uppercase tracking-[0.2em] text-volt">Contacto</span><h1 className="mt-3 font-display text-6xl tracking-wide">¿Buscas una camiseta concreta?</h1><p className="mt-4 max-w-xl text-sm leading-relaxed text-paper/58">Hasta conectar el formulario y el sistema de pedidos, centralizamos el contacto en Instagram para no mostrar teléfonos, direcciones o correos ficticios.</p><Link href="https://instagram.com/goltra_shop" target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-volt px-7 py-3.5 text-xs font-extrabold uppercase tracking-wide text-ink">Escribir a @goltra_shop ↗</Link></div></div></main>
  );
}
