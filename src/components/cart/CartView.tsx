"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

type CartLine = { slug: string; size: string; qty: number };
const initialCart: CartLine[] = [
  { slug: products[0].slug, size: "L", qty: 1 },
  { slug: products[2].slug, size: "M", qty: 2 },
  { slug: products[5].slug, size: "XL", qty: 1 },
];

export default function CartView() {
  const [cart, setCart] = useState<CartLine[]>(initialCart);
  const [promo, setPromo] = useState("");
  const lines = cart.map((line) => ({ ...line, product: products.find((p) => p.slug === line.slug) })).filter((line) => line.product);
  const subtotal = useMemo(() => lines.reduce((sum, line) => sum + (line.product?.price ?? 0) * line.qty, 0), [lines]);
  const shipping = subtotal >= 60 || subtotal === 0 ? 0 : 4.95;
  const total = subtotal + shipping;
  const updateQty = (slug: string, size: string, delta: number) => setCart((prev) => prev.map((line) => line.slug === slug && line.size === size ? { ...line, qty: Math.max(1, Math.min(10, line.qty + delta)) } : line));
  const removeLine = (slug: string, size: string) => setCart((prev) => prev.filter((line) => !(line.slug === slug && line.size === size)));
  const suggestions = products.slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
      <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ink/45"><Link href="/" className="hover:text-ink">Inicio</Link><span>/</span><span className="text-ink">Carrito</span></div>
      <h1 className="mb-8 font-display text-4xl tracking-wide text-ink sm:text-5xl">Tu carrito</h1>
      {lines.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-ink/20 p-16 text-center"><p className="font-display text-3xl tracking-wide text-ink">Tu carrito está vacío</p><p className="mt-2 text-sm text-ink/55">Descubre nuestra colección y encuentra tu próxima camiseta.</p><Link href="/tienda" className="mt-6 inline-block rounded-full bg-ink px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white">Ir a la tienda</Link></div>
      ) : (
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
          <div className="space-y-4">
            {lines.map(({ product, size, qty }) => <div key={`${product!.slug}-${size}`} className="flex gap-4 rounded-2xl border border-ink/10 bg-white p-4"><div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-xl bg-paper-dark"><Image src={product!.image} alt={product!.name} fill className="object-cover" /></div><div className="flex flex-1 flex-col justify-between"><div className="flex items-start justify-between gap-2"><div><p className="text-xs font-semibold uppercase tracking-wide text-ink/45">{product!.league}</p><Link href={`/producto/${product!.slug}`} className="font-display text-lg tracking-wide text-ink hover:underline">{product!.name}</Link><p className="mt-1 text-xs text-ink/55">Talla: {size}</p></div><button onClick={() => removeLine(product!.slug, size)} aria-label="Eliminar producto" className="text-ink/40 hover:text-flame">×</button></div><div className="flex items-center justify-between"><div className="inline-flex items-center rounded-full border border-ink/15"><button onClick={() => updateQty(product!.slug, size, -1)} className="grid h-9 w-9 place-items-center text-base font-bold text-ink/70">−</button><span className="w-6 text-center text-sm font-bold">{qty}</span><button onClick={() => updateQty(product!.slug, size, 1)} className="grid h-9 w-9 place-items-center text-base font-bold text-ink/70">+</button></div><span className="font-display text-xl tracking-wide text-ink">{(product!.price * qty).toFixed(2)}€</span></div></div></div>)}
            <Link href="/tienda" className="inline-flex items-center gap-2 pt-2 text-sm font-bold text-ink hover:underline">← Seguir comprando</Link>
          </div>
          <div className="h-fit rounded-2xl border border-ink/10 bg-white p-6"><h3 className="font-display text-xl tracking-wide text-ink">Resumen del pedido</h3><div className="mt-4 flex gap-2"><input type="text" value={promo} onChange={(e) => setPromo(e.target.value)} placeholder="Código promocional" className="w-full rounded-full border border-ink/15 px-4 py-2.5 text-sm focus:border-ink focus:outline-none" /><button className="shrink-0 rounded-full bg-ink px-4 py-2.5 text-xs font-bold uppercase text-white">Aplicar</button></div><div className="mt-5 space-y-2.5 border-t border-ink/10 pt-5 text-sm"><div className="flex justify-between text-ink/65"><span>Subtotal</span><span>{subtotal.toFixed(2)}€</span></div><div className="flex justify-between text-ink/65"><span>Envío</span><span>{shipping === 0 ? "Gratis" : `${shipping.toFixed(2)}€`}</span></div>{shipping > 0 && <p className="text-xs text-flame">Añade {(60 - subtotal).toFixed(2)}€ más para envío gratis</p>}<div className="flex justify-between border-t border-ink/10 pt-3 font-display text-lg tracking-wide text-ink"><span>Total</span><span>{total.toFixed(2)}€</span></div></div><Link href="/checkout" className="mt-6 block rounded-full bg-volt py-4 text-center text-sm font-bold uppercase tracking-wide text-ink transition hover:bg-volt-dark">Tramitar pedido</Link><p className="mt-3 text-center text-xs text-ink/45">Pago seguro con cifrado SSL</p></div>
        </div>
      )}
      <div className="mt-16"><h2 className="mb-6 font-display text-3xl tracking-wide text-ink">Completa tu equipación</h2><div className="grid grid-cols-2 gap-4 sm:grid-cols-4">{suggestions.map((p) => <ProductCard key={p.slug} product={p} />)}</div></div>
    </div>
  );
}
