import Link from "next/link";
import Logo from "./Logo";

const columns = [
  {
    title: "Comprar",
    links: [
      { label: "Ligas Top", href: "/tienda?liga=ligas-top" },
      { label: "Selecciones", href: "/tienda?liga=selecciones" },
      { label: "Colección Retro", href: "/tienda?categoria=Retro" },
      { label: "Niños", href: "/tienda?liga=ninos" },
      { label: "Ofertas", href: "/tienda?ofertas=1" },
    ],
  },
  {
    title: "Ayuda",
    links: [
      { label: "Guía de tallas", href: "#" },
      { label: "Envíos y plazos", href: "#" },
      { label: "Devoluciones", href: "#" },
      { label: "Preguntas frecuentes", href: "#" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  {
    title: "Goltra",
    links: [
      { label: "Sobre nosotros", href: "/nosotros" },
      { label: "Calidad y materiales", href: "/nosotros#calidad" },
      { label: "Blog", href: "#" },
      { label: "Trabaja con nosotros", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-paper/10 pb-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">
              Réplicas premium de camisetas de fútbol de clubes, selecciones y colecciones retro.
              Pasión por el fútbol, obsesión por el detalle.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {["IG", "TW", "TT", "FB"].map((s) => (
                <span
                  key={s}
                  className="grid h-9 w-9 place-items-center rounded-full border border-paper/15 text-xs font-semibold text-paper/70 transition hover:border-volt hover:text-volt"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-lg tracking-wide text-volt">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-paper/65 transition hover:text-paper">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-xs text-paper/45 sm:flex-row">
          <p>© {new Date().getFullYear()} Goltra Sports S.L. Todos los derechos reservados.</p>
          <p>Producto de diseño — camisetas réplica no oficiales de uso demostrativo.</p>
        </div>
      </div>
    </footer>
  );
}
