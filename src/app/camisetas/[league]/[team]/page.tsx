import { notFound } from "next/navigation";
import ShopView from "@/components/shop/ShopView";
import { getLeagueBySlug, getTeamBySlug, products } from "@/lib/products";

export default async function TeamPage({ params }: { params: Promise<{ league: string; team: string }> }) {
  const { league, team } = await params;
  const currentLeague = getLeagueBySlug(league);
  const currentTeam = getTeamBySlug(team);
  if (!currentLeague || !currentTeam || !products.some((item) => item.leagueSlug === league && item.teamSlug === team)) notFound();
  return <main className="bg-paper"><ShopView initialLeague={currentLeague.name} initialTeam={currentTeam.name} /></main>;
}
