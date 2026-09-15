import { notFound } from "next/navigation";
import ShopView from "@/components/shop/ShopView";
import { getLeagueBySlug, getTeamBySlug, getSeasonBySlug, products } from "@/lib/products";

export default async function SeasonPage({ params }: { params: Promise<{ league: string; team: string; season: string }> }) {
  const { league, team, season } = await params;
  const currentLeague = getLeagueBySlug(league);
  const currentTeam = getTeamBySlug(team);
  const currentSeason = getSeasonBySlug(season);
  if (!currentLeague || !currentTeam || !currentSeason || !products.some((item) => item.leagueSlug === league && item.teamSlug === team && item.seasonSlug === season)) notFound();
  return <main className="bg-paper"><ShopView initialLeague={currentLeague.name} initialTeam={currentTeam.name} initialSeason={currentSeason} /></main>;
}
