import type { Metadata } from "next";
import ShopView from "@/components/shop/ShopView";

export const metadata: Metadata = {
  title: "Tienda — GOLTRA",
  description: "Explora todas las camisetas de fútbol réplica: ligas, selecciones y colección retro.",
};

const leagueBySlug: Record<string, string> = {
  "ligas-top": "Liga Dorada",
  selecciones: "Selecciones",
  retro: "Colección Retro",
  ninos: "Liga Costa",
};

export default async function TiendaPage({
  searchParams,
}: {
  searchParams: Promise<{ liga?: string; categoria?: string; ofertas?: string }>;
}) {
  const params = await searchParams;
  const initialLeague = params.liga ? leagueBySlug[params.liga] : undefined;

  return (
    <main className="bg-paper">
      <ShopView
        initialLeague={initialLeague}
        initialCategory={params.categoria}
        initialOnSale={params.ofertas === "1"}
      />
    </main>
  );
}
