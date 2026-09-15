import Link from "next/link";

export default function Newsletter() {
  return (
    <section className="bg-ink py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-8 rounded-[2rem] border border-paper/10 bg-ink-soft p-8 sm:p-12 md:grid-cols-[1.2fr_.8fr]">
          <div><span className="text-xs font-bold uppercase tracking-[0.2em] text-volt">GOLTRA</span><h3 className="mt-3 font-display text-4xl leading-tight tracking-wide text-white sm:text-5xl">Novedades, encargos y camisetas que van llegando</h3><p className="mt-3 max-w-2xl text-sm leading-relaxed text-paper/55">La web queda preparada para conectar newsletter más adelante. De momento, el canal principal puede seguir siendo Instagram.</p></div>
          <div className="md:text-right"><Link href="https://instagram.com/goltra_shop" target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-volt px-7 py-3.5 text-xs font-extrabold uppercase tracking-[0.1em] text-ink transition hover:bg-white">@goltra_shop ↗</Link></div>
        </div>
      </div>
    </section>
  );
}
