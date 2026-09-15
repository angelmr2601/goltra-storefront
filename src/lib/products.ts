export type KitType = "Local" | "Visitante" | "Tercera" | "Retro";
export type ProductVersion = "Fan" | "Player" | "Retro" | "Infantil" | "Manga larga";
export type VisualStyle = "stripes" | "solid" | "hoops" | "sash" | "graphic";

export type Product = {
  slug: string;
  name: string;
  team: string;
  teamSlug: string;
  league: string;
  leagueSlug: string;
  kitType: KitType;
  season: string;
  seasonSlug: string;
  priceFrom: number;
  versions: ProductVersion[];
  sizes: string[];
  personalization: boolean;
  patches: boolean;
  isNew?: boolean;
  featured?: boolean;
  badge?: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  visualStyle: VisualStyle;
  description: string;
  features: string[];
};

export const VERSION_PRICES: Record<ProductVersion, number> = {
  Fan: 15.99,
  Player: 18.99,
  Retro: 18.99,
  Infantil: 18.99,
  "Manga larga": 18.99,
};

export const PERSONALIZATION_PRICE = 2;
export const PATCH_PRICE = 2;

export const adultSizes = ["S", "M", "L", "XL", "2XL", "3XL", "4XL"];
export const kidsSizes = ["3-4", "5-6", "7-8", "9-10", "11-12", "12-14"];

export const products: Product[] = [
  {
    slug: "real-betis-local-26-27",
    name: "Real Betis · Local 26/27",
    team: "Real Betis",
    teamSlug: "real-betis",
    league: "LaLiga",
    leagueSlug: "laliga",
    kitType: "Local",
    season: "2026/27",
    seasonSlug: "2026-27",
    priceFrom: VERSION_PRICES.Fan,
    versions: ["Fan", "Player", "Infantil"],
    sizes: adultSizes,
    personalization: true,
    patches: true,
    isNew: true,
    featured: true,
    primaryColor: "#159447",
    secondaryColor: "#ffffff",
    accentColor: "#0b5f31",
    visualStyle: "stripes",
    description: "La primera equipación del Real Betis para la temporada 2026/27, preparada en distintas versiones y con opciones de personalización.",
    features: ["Versiones Fan, Player e Infantil", "Personalización opcional", "Parches opcionales", "Tallaje adulto hasta 4XL"],
  },
  {
    slug: "real-betis-visitante-26-27",
    name: "Real Betis · Visitante 26/27",
    team: "Real Betis",
    teamSlug: "real-betis",
    league: "LaLiga",
    leagueSlug: "laliga",
    kitType: "Visitante",
    season: "2026/27",
    seasonSlug: "2026-27",
    priceFrom: VERSION_PRICES.Fan,
    versions: ["Fan", "Player", "Infantil"],
    sizes: adultSizes,
    personalization: true,
    patches: true,
    isNew: true,
    featured: true,
    primaryColor: "#efe8d9",
    secondaryColor: "#173f31",
    accentColor: "#d8cbb2",
    visualStyle: "solid",
    description: "Segunda equipación del Real Betis 2026/27 con acabado limpio y opciones de nombre, dorsal y parches.",
    features: ["Disponible en varias versiones", "Personalización opcional", "Parches opcionales", "Selector de talla"],
  },
  {
    slug: "real-betis-retro-99-00",
    name: "Real Betis · Retro 99/00",
    team: "Real Betis",
    teamSlug: "real-betis",
    league: "LaLiga",
    leagueSlug: "laliga",
    kitType: "Retro",
    season: "1999/00",
    seasonSlug: "1999-00",
    priceFrom: VERSION_PRICES.Retro,
    versions: ["Retro", "Manga larga"],
    sizes: adultSizes,
    personalization: true,
    patches: false,
    featured: true,
    badge: "Retro",
    primaryColor: "#168f49",
    secondaryColor: "#ffffff",
    accentColor: "#111111",
    visualStyle: "stripes",
    description: "Una camiseta para volver a una de las épocas más reconocibles del Betis, con estética retro y opción de manga larga.",
    features: ["Versión Retro", "Opción manga larga", "Personalización opcional", "Estética clásica"],
  },
  {
    slug: "sevilla-fc-visitante-26-27",
    name: "Sevilla FC · Visitante 26/27",
    team: "Sevilla FC",
    teamSlug: "sevilla-fc",
    league: "LaLiga",
    leagueSlug: "laliga",
    kitType: "Visitante",
    season: "2026/27",
    seasonSlug: "2026-27",
    priceFrom: VERSION_PRICES.Fan,
    versions: ["Fan", "Player", "Infantil"],
    sizes: adultSizes,
    personalization: true,
    patches: true,
    isNew: true,
    featured: true,
    primaryColor: "#b9162e",
    secondaryColor: "#121212",
    accentColor: "#f1eee7",
    visualStyle: "graphic",
    description: "Equipación visitante del Sevilla FC 2026/27 con versiones para adulto, jugador e infantil.",
    features: ["Versiones Fan, Player e Infantil", "Personalización opcional", "Parches opcionales", "Tallaje amplio"],
  },
  {
    slug: "malaga-cf-local-26-27",
    name: "Málaga CF · Local 26/27",
    team: "Málaga CF",
    teamSlug: "malaga-cf",
    league: "LaLiga",
    leagueSlug: "laliga",
    kitType: "Local",
    season: "2026/27",
    seasonSlug: "2026-27",
    priceFrom: VERSION_PRICES.Fan,
    versions: ["Fan", "Player", "Infantil"],
    sizes: adultSizes,
    personalization: true,
    patches: true,
    isNew: true,
    primaryColor: "#56b8df",
    secondaryColor: "#ffffff",
    accentColor: "#143a67",
    visualStyle: "stripes",
    description: "Primera equipación del Málaga CF 2026/27 con la combinación blanquiazul como protagonista.",
    features: ["Versiones Fan, Player e Infantil", "Personalización opcional", "Parches opcionales", "Selector de talla"],
  },
  {
    slug: "deportivo-local-26-27",
    name: "Deportivo · Local 26/27",
    team: "Deportivo",
    teamSlug: "deportivo",
    league: "LaLiga",
    leagueSlug: "laliga",
    kitType: "Local",
    season: "2026/27",
    seasonSlug: "2026-27",
    priceFrom: VERSION_PRICES.Fan,
    versions: ["Fan", "Player", "Infantil"],
    sizes: adultSizes,
    personalization: true,
    patches: true,
    isNew: true,
    primaryColor: "#1f56a6",
    secondaryColor: "#ffffff",
    accentColor: "#101f47",
    visualStyle: "stripes",
    description: "Camiseta local del Deportivo para la 2026/27, pensada para encontrarla fácilmente por liga, club y temporada.",
    features: ["Versiones Fan, Player e Infantil", "Personalización opcional", "Parches opcionales", "Tallaje adulto"],
  },
  {
    slug: "chelsea-local-26-27",
    name: "Chelsea · Local 26/27",
    team: "Chelsea",
    teamSlug: "chelsea",
    league: "Premier League",
    leagueSlug: "premier-league",
    kitType: "Local",
    season: "2026/27",
    seasonSlug: "2026-27",
    priceFrom: VERSION_PRICES.Fan,
    versions: ["Fan", "Player", "Infantil"],
    sizes: adultSizes,
    personalization: true,
    patches: true,
    isNew: true,
    primaryColor: "#1648a8",
    secondaryColor: "#f4f4f4",
    accentColor: "#f2c83e",
    visualStyle: "graphic",
    description: "Camiseta local del Chelsea 2026/27, disponible en varias versiones y con extras configurables.",
    features: ["Versiones Fan, Player e Infantil", "Personalización opcional", "Parches opcionales", "Tallaje amplio"],
  },
  {
    slug: "arsenal-tercera-26-27",
    name: "Arsenal · Tercera 26/27",
    team: "Arsenal",
    teamSlug: "arsenal",
    league: "Premier League",
    leagueSlug: "premier-league",
    kitType: "Tercera",
    season: "2026/27",
    seasonSlug: "2026-27",
    priceFrom: VERSION_PRICES.Fan,
    versions: ["Fan", "Player", "Infantil"],
    sizes: adultSizes,
    personalization: true,
    patches: true,
    isNew: true,
    primaryColor: "#1d2130",
    secondaryColor: "#d2f246",
    accentColor: "#efefef",
    visualStyle: "graphic",
    description: "Tercera equipación del Arsenal 2026/27 con una estética más atrevida y opciones de personalización.",
    features: ["Versiones Fan, Player e Infantil", "Personalización opcional", "Parches opcionales", "Selector de talla"],
  },
  {
    slug: "borussia-dortmund-local-26-27",
    name: "Borussia Dortmund · Local 26/27",
    team: "Borussia Dortmund",
    teamSlug: "borussia-dortmund",
    league: "Bundesliga",
    leagueSlug: "bundesliga",
    kitType: "Local",
    season: "2026/27",
    seasonSlug: "2026-27",
    priceFrom: VERSION_PRICES.Fan,
    versions: ["Fan", "Player", "Infantil"],
    sizes: adultSizes,
    personalization: true,
    patches: true,
    featured: true,
    primaryColor: "#f4df12",
    secondaryColor: "#111111",
    accentColor: "#ffffff",
    visualStyle: "graphic",
    description: "Primera equipación del Borussia Dortmund 2026/27 con el amarillo y negro como identidad principal.",
    features: ["Versiones Fan, Player e Infantil", "Personalización opcional", "Parches opcionales", "Tallaje adulto"],
  },
  {
    slug: "psg-local-26-27",
    name: "PSG · Local 26/27",
    team: "Paris Saint-Germain",
    teamSlug: "psg",
    league: "Ligue 1",
    leagueSlug: "ligue-1",
    kitType: "Local",
    season: "2026/27",
    seasonSlug: "2026-27",
    priceFrom: VERSION_PRICES.Fan,
    versions: ["Fan", "Player", "Infantil"],
    sizes: adultSizes,
    personalization: true,
    patches: true,
    isNew: true,
    primaryColor: "#152b58",
    secondaryColor: "#e6293f",
    accentColor: "#ffffff",
    visualStyle: "sash",
    description: "Primera equipación del Paris Saint-Germain 2026/27 con configurador de versión, talla y extras.",
    features: ["Versiones Fan, Player e Infantil", "Personalización opcional", "Parches opcionales", "Tallaje amplio"],
  },
  {
    slug: "sporting-cp-local-26-27",
    name: "Sporting CP · Local 26/27",
    team: "Sporting CP",
    teamSlug: "sporting-cp",
    league: "Liga Portugal",
    leagueSlug: "liga-portugal",
    kitType: "Local",
    season: "2026/27",
    seasonSlug: "2026-27",
    priceFrom: VERSION_PRICES.Fan,
    versions: ["Fan", "Player", "Infantil"],
    sizes: adultSizes,
    personalization: true,
    patches: true,
    primaryColor: "#14844e",
    secondaryColor: "#ffffff",
    accentColor: "#111111",
    visualStyle: "hoops",
    description: "Equipación local del Sporting CP 2026/27 con sus franjas horizontales como elemento principal.",
    features: ["Versiones Fan, Player e Infantil", "Personalización opcional", "Parches opcionales", "Selector de talla"],
  },
  {
    slug: "al-nassr-local-26-27",
    name: "Al Nassr · Local 26/27",
    team: "Al Nassr",
    teamSlug: "al-nassr",
    league: "Saudi Pro League",
    leagueSlug: "saudi-pro-league",
    kitType: "Local",
    season: "2026/27",
    seasonSlug: "2026-27",
    priceFrom: VERSION_PRICES.Fan,
    versions: ["Fan", "Player", "Infantil"],
    sizes: adultSizes,
    personalization: true,
    patches: true,
    primaryColor: "#f5d20d",
    secondaryColor: "#1d5db8",
    accentColor: "#ffffff",
    visualStyle: "solid",
    description: "Camiseta local del Al Nassr 2026/27 con opciones de versión, talla, nombre, dorsal y parches.",
    features: ["Versiones Fan, Player e Infantil", "Personalización opcional", "Parches opcionales", "Tallaje adulto"],
  },
];

export const leagues = Array.from(
  new Map(products.map((product) => [product.leagueSlug, { name: product.league, slug: product.leagueSlug }])).values(),
);

export const popularTeams = ["real-betis", "sevilla-fc", "malaga-cf", "borussia-dortmund", "arsenal", "psg"]
  .map((slug) => products.find((product) => product.teamSlug === slug))
  .filter((product): product is Product => Boolean(product));

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(slug: string, limit = 4) {
  const current = getProductBySlug(slug);
  if (!current) return products.slice(0, limit);

  return products
    .filter((product) => product.slug !== slug)
    .sort((a, b) => {
      const aScore = Number(a.teamSlug === current.teamSlug) * 3 + Number(a.leagueSlug === current.leagueSlug) * 2 + Number(a.season === current.season);
      const bScore = Number(b.teamSlug === current.teamSlug) * 3 + Number(b.leagueSlug === current.leagueSlug) * 2 + Number(b.season === current.season);
      return bScore - aScore;
    })
    .slice(0, limit);
}

export function getLeagueBySlug(slug: string) {
  return leagues.find((league) => league.slug === slug);
}

export function getTeamBySlug(slug: string) {
  const product = products.find((item) => item.teamSlug === slug);
  return product ? { name: product.team, slug: product.teamSlug } : undefined;
}

export function getSeasonBySlug(slug: string) {
  const product = products.find((item) => item.seasonSlug === slug);
  return product?.season;
}
