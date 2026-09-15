import type { Metadata } from "next";
import ShopView from "@/components/shop/ShopView";
import { getLeagueBySlug, getTeamBySlug, getSeasonBySlug } from "@/lib/products";

export const metadata: Metadata = {
  title: "Catálogo de camisetas — GOLTRA",
  description: "Busca camisetas de fútbol por liga, equipo, temporada, versión y talla.",
};

export default async function TiendaPage({ searchParams }: { searchParams: Promise<{ q?: string; liga?: string; equipo?: string; temporada?: string; tipo?: string }> }) {
  const params = await searchParams;
  return <main className="bg-paper"><ShopView initialSearch={params.q} initialLeague={params.liga ? getLeagueBySlug(params.liga)?.name : undefined} initialTeam={params.equipo ? getTeamBySlug(params.equipo)?.name : undefined} initialSeason={params.temporada ? getSeasonBySlug(params.temporada) : undefined} initialType={params.tipo} /></main>;
}
