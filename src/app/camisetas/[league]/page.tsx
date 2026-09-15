import { notFound } from "next/navigation";
import ShopView from "@/components/shop/ShopView";
import { getLeagueBySlug } from "@/lib/products";

export default async function LeaguePage({ params }: { params: Promise<{ league: string }> }) {
  const { league } = await params;
  const current = getLeagueBySlug(league);
  if (!current) notFound();
  return <main className="bg-paper"><ShopView initialLeague={current.name} /></main>;
}
