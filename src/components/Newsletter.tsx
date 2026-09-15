"use client";

export default function Newsletter() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid items-center gap-8 rounded-3xl bg-ink-soft p-8 sm:p-12 md:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-volt">Únete al equipo</span>
            <h3 className="mt-3 font-display text-3xl leading-tight tracking-wide text-white sm:text-4xl">
              10% de descuento en tu primer pedido
            </h3>
            <p className="mt-3 max-w-md text-sm text-paper/60">
              Suscríbete y sé el primero en enterarte de nuevas colecciones, lanzamientos retro y ofertas
              exclusivas para socios.
            </p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="tu@email.com"
              className="w-full rounded-full border border-paper/15 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-paper/40 focus:border-volt focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-volt px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-ink transition hover:bg-white"
            >
              Suscribirme
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
