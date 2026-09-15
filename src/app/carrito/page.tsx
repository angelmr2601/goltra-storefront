import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Carrito — GOLTRA" };

export default function CarritoPage() {
  return (
    <main className="bg-paper">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8">
        <span className="inline-flex rounded-full bg-volt px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-ink">Siguiente fase</span>
        <h1 className="mt-5 font-display text-6xl leading-none tracking-wide text-ink">El carrito lo dejamos para el final</h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ink/55">El catálogo y la ficha de producto ya están preparados para enviar una configuración completa al carrito. Antes de conectarlo conviene cerrar stock, pedidos, método de pago y backend.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3"><Link href="/tienda" className="rounded-full bg-ink px-7 py-3.5 text-xs font-bold uppercase tracking-wide text-white">Volver al catálogo</Link><Link href="/" className="rounded-full border border-ink/15 bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-wide text-ink">Ir al inicio</Link></div>
      </div>
    </main>
  );
}
