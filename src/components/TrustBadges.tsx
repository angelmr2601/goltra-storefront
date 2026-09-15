const items = [
  { title: "Catálogo ordenado", desc: "Liga, equipo y temporada", icon: "01" },
  { title: "Varias versiones", desc: "Fan, Player, Retro e Infantil", icon: "02" },
  { title: "Personalizable", desc: "Nombre, dorsal y parches", icon: "03" },
  { title: "Pensada para móvil", desc: "Filtros y compra responsive", icon: "04" },
];

export default function TrustBadges() {
  return <section className="border-y border-ink/10 bg-white"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-5 gap-y-7 px-5 py-8 sm:px-8 md:grid-cols-4">{items.map((item) => <div key={item.title} className="flex items-center gap-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-paper font-display text-sm text-ink">{item.icon}</span><div><p className="text-xs font-bold text-ink sm:text-sm">{item.title}</p><p className="mt-0.5 text-[10px] text-ink/45 sm:text-xs">{item.desc}</p></div></div>)}</div></section>;
}
