import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contacto — GOLTRA", description: "Ponte en contacto con el equipo de GOLTRA para dudas sobre pedidos, tallas o envíos." };
const info = [{ title: "Email", value: "hola@goltra.com" }, { title: "Teléfono", value: "+34 900 123 456" }, { title: "Horario", value: "Lun–Vie, 9:00–18:00" }, { title: "Dirección", value: "Calle del Deporte 24, Madrid" }];

export default function ContactoPage() {
  return <main className="bg-paper"><div className="mx-auto max-w-6xl px-5 py-16 sm:px-8"><div className="text-center"><span className="text-xs font-bold uppercase tracking-[0.2em] text-flame">Contacto</span><h1 className="mt-2 font-display text-5xl tracking-wide text-ink">¿Hablamos?</h1><p className="mx-auto mt-3 max-w-xl text-sm text-ink/60">Escríbenos si tienes dudas sobre un pedido, una talla o cualquier otra consulta. Te respondemos en menos de 24h.</p></div><div className="mt-12 grid gap-10 md:grid-cols-[1fr_1.2fr]"><div className="space-y-4">{info.map((item) => <div key={item.title} className="rounded-2xl border border-ink/10 bg-white p-5"><p className="text-xs font-bold uppercase tracking-wide text-ink/45">{item.title}</p><p className="mt-1 font-display text-xl tracking-wide text-ink">{item.value}</p></div>)}</div><ContactForm /></div></div></main>;
}
