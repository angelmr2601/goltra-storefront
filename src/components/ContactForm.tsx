"use client";

export default function ContactForm() {
  return <form onSubmit={(e) => e.preventDefault()} className="space-y-4 rounded-2xl border border-ink/10 bg-white p-7"><div className="grid gap-4 sm:grid-cols-2"><input required placeholder="Nombre" className="input-field" /><input required type="email" placeholder="Email" className="input-field" /></div><input placeholder="Número de pedido (opcional)" className="input-field" /><textarea required placeholder="¿En qué podemos ayudarte?" rows={5} className="input-field resize-none" /><button type="submit" className="w-full rounded-full bg-ink py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-ink-soft sm:w-fit sm:px-10">Enviar mensaje</button></form>;
}
