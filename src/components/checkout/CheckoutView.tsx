"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { products } from "@/lib/products";

const steps = ["Carrito", "Envío", "Pago", "Confirmación"];
const order = [{ product: products[0], size: "L", qty: 1 }, { product: products[2], size: "M", qty: 2 }, { product: products[5], size: "XL", qty: 1 }];
const paymentMethods = [{ id: "card", label: "Tarjeta", desc: "Visa, Mastercard, Amex" }, { id: "paypal", label: "PayPal", desc: "Pago rápido y seguro" }, { id: "transfer", label: "Transferencia", desc: "Bizum o transferencia bancaria" }];

export default function CheckoutView() {
  const [payment, setPayment] = useState("card");
  const subtotal = order.reduce((sum, l) => sum + l.product.price * l.qty, 0);
  const shipping = subtotal >= 60 ? 0 : 4.95;
  const total = subtotal + shipping;
  return (
    <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
      <h1 className="mb-8 font-display text-4xl tracking-wide text-ink sm:text-5xl">Finalizar compra</h1>
      <div className="mb-10 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wide">{steps.map((step, i) => <div key={step} className="flex items-center gap-2"><div className={`flex items-center gap-2 rounded-full px-4 py-2 ${i <= 2 ? "bg-ink text-white" : "border border-ink/15 text-ink/40"}`}><span className={`grid h-5 w-5 place-items-center rounded-full text-[10px] ${i <= 2 ? "bg-volt text-ink" : "bg-ink/10 text-ink/40"}`}>{i + 1}</span>{step}</div>{i < steps.length - 1 && <span className="text-ink/20">—</span>}</div>)}</div>
      <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_380px]">
        <div className="space-y-8">
          <section className="rounded-2xl border border-ink/10 bg-white p-6"><h2 className="font-display text-2xl tracking-wide text-ink">1. Contacto</h2><div className="mt-4 grid gap-4 sm:grid-cols-2"><input required type="email" placeholder="Correo electrónico" className="input-field sm:col-span-2" /><input required type="tel" placeholder="Teléfono" className="input-field sm:col-span-2" /></div></section>
          <section className="rounded-2xl border border-ink/10 bg-white p-6"><h2 className="font-display text-2xl tracking-wide text-ink">2. Dirección de envío</h2><div className="mt-4 grid gap-4 sm:grid-cols-2"><input required placeholder="Nombre" className="input-field" /><input required placeholder="Apellidos" className="input-field" /><input required placeholder="Dirección" className="input-field sm:col-span-2" /><input required placeholder="Ciudad" className="input-field" /><input required placeholder="Código postal" className="input-field" /><select required defaultValue="" className="input-field sm:col-span-2"><option value="" disabled>País</option><option>España</option><option>Portugal</option><option>Francia</option><option>Italia</option></select></div><label className="mt-4 flex items-center gap-2 text-sm text-ink/65"><input type="checkbox" className="h-4 w-4 accent-ink" />Guardar esta dirección para próximos pedidos</label></section>
          <section className="rounded-2xl border border-ink/10 bg-white p-6"><h2 className="font-display text-2xl tracking-wide text-ink">3. Método de pago</h2><div className="mt-4 grid gap-3 sm:grid-cols-3">{paymentMethods.map((m) => <button type="button" key={m.id} onClick={() => setPayment(m.id)} className={`rounded-xl border p-4 text-left transition ${payment === m.id ? "border-ink bg-paper" : "border-ink/10 hover:border-ink/30"}`}><p className="text-sm font-bold text-ink">{m.label}</p><p className="mt-1 text-xs text-ink/55">{m.desc}</p></button>)}</div>{payment === "card" && <div className="mt-5 grid gap-4 sm:grid-cols-2"><input placeholder="Número de tarjeta" className="input-field sm:col-span-2" /><input placeholder="Nombre en la tarjeta" className="input-field sm:col-span-2" /><input placeholder="MM/AA" className="input-field" /><input placeholder="CVC" className="input-field" /></div>}{payment === "paypal" && <p className="mt-5 rounded-xl bg-paper p-4 text-sm text-ink/60">Serás redirigido a PayPal para completar tu pago de forma segura.</p>}{payment === "transfer" && <p className="mt-5 rounded-xl bg-paper p-4 text-sm text-ink/60">Recibirás los datos bancarios o el número Bizum por correo electrónico tras confirmar el pedido.</p>}</section>
          <button type="submit" className="w-full rounded-full bg-volt py-4 text-sm font-bold uppercase tracking-wide text-ink transition hover:bg-volt-dark lg:hidden">Confirmar y pagar · {total.toFixed(2)}€</button>
        </div>
        <aside className="h-fit space-y-5 rounded-2xl border border-ink/10 bg-white p-6"><h3 className="font-display text-xl tracking-wide text-ink">Tu pedido</h3><div className="space-y-4">{order.map((line) => <div key={line.product.slug + line.size} className="flex gap-3"><div className="relative h-16 w-14 shrink-0 overflow-hidden rounded-lg bg-paper-dark"><Image src={line.product.image} alt={line.product.name} fill className="object-cover" /><span className="absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full bg-ink text-[10px] font-bold text-white">{line.qty}</span></div><div className="flex-1"><p className="text-sm font-semibold leading-tight text-ink">{line.product.name}</p><p className="text-xs text-ink/50">Talla {line.size}</p></div><span className="text-sm font-bold text-ink">{(line.product.price * line.qty).toFixed(2)}€</span></div>)}</div><div className="space-y-2 border-t border-ink/10 pt-4 text-sm"><div className="flex justify-between text-ink/65"><span>Subtotal</span><span>{subtotal.toFixed(2)}€</span></div><div className="flex justify-between text-ink/65"><span>Envío</span><span>{shipping === 0 ? "Gratis" : `${shipping.toFixed(2)}€`}</span></div><div className="flex justify-between border-t border-ink/10 pt-3 font-display text-lg tracking-wide text-ink"><span>Total</span><span>{total.toFixed(2)}€</span></div></div><button type="submit" className="hidden w-full rounded-full bg-volt py-4 text-sm font-bold uppercase tracking-wide text-ink transition hover:bg-volt-dark lg:block">Confirmar y pagar</button><Link href="/carrito" className="block text-center text-xs font-semibold text-ink/50 hover:text-ink">← Volver al carrito</Link></aside>
      </form>
    </div>
  );
}
