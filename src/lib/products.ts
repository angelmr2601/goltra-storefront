export type Product = {
  slug: string;
  name: string;
  team: string;
  league: string;
  category: "Local" | "Visitante" | "Tercera" | "Retro" | "Selección";
  season: string;
  price: number;
  oldPrice?: number;
  image: string;
  gallery: string[];
  rating: number;
  reviews: number;
  isNew?: boolean;
  badge?: string;
  colors: string[];
  description: string;
  features: string[];
};

export const products: Product[] = [
  {
    slug: "real-union-fc-local-24-25",
    name: "Camiseta Real Unión FC Local",
    team: "Real Unión FC",
    league: "Liga Dorada",
    category: "Local",
    season: "2024/25",
    price: 44.9,
    oldPrice: 64.9,
    image: "/images/jersey-1.jpg",
    gallery: ["/images/jersey-1.jpg", "/images/jersey-1.jpg", "/images/jersey-1.jpg"],
    rating: 4.8,
    reviews: 214,
    isNew: true,
    badge: "-30%",
    colors: ["#b3121b", "#0c0f14"],
    description:
      "Réplica oficial de la camiseta titular del Real Unión FC para la temporada 2024/25. Tejido transpirable de alto rendimiento con tecnología de secado rápido, escudo bordado y ajuste entallado tipo jugador.",
    features: [
      "Tejido 100% poliéster reciclado transpirable",
      "Escudo del club bordado en alta definición",
      "Tecnología de secado rápido",
      "Ajuste entallado tipo Player Version",
      "Personalización de nombre y dorsal disponible",
    ],
  },
  {
    slug: "atletico-norte-visitante-24-25",
    name: "Camiseta Atlético Norte Visitante",
    team: "Atlético Norte",
    league: "Liga Dorada",
    category: "Visitante",
    season: "2024/25",
    price: 44.9,
    image: "/images/jersey-2.jpg",
    gallery: ["/images/jersey-2.jpg", "/images/jersey-2.jpg", "/images/jersey-2.jpg"],
    rating: 4.6,
    reviews: 132,
    colors: ["#ffffff", "#123a7a"],
    description:
      "Segunda equipación del Atlético Norte, diseño blanco con acentos azules inspirado en la elegancia clásica del club. Confeccionada con materiales premium para máxima comodidad dentro y fuera del campo.",
    features: [
      "Malla ligera con ventilación en zonas de calor",
      "Cuello redondo con ribete a contraste",
      "Escudo termosellado de larga duración",
      "Corte regular fit unisex",
      "Personalización de nombre y dorsal disponible",
    ],
  },
  {
    slug: "estrella-azul-tercera-24-25",
    name: "Camiseta Estrella Azul Tercera Equipación",
    team: "Estrella Azul",
    league: "Liga Dorada",
    category: "Tercera",
    season: "2024/25",
    price: 49.9,
    oldPrice: 59.9,
    image: "/images/jersey-3.jpg",
    gallery: ["/images/jersey-3.jpg", "/images/jersey-3.jpg", "/images/jersey-3.jpg"],
    rating: 4.9,
    reviews: 98,
    badge: "-17%",
    colors: ["#0c0f14", "#d8b64a"],
    description:
      "Tercera equipación de edición limitada de Estrella Azul, con estampado geométrico dorado sobre base negra. Una pieza atrevida pensada para coleccionistas y aficionados exigentes.",
    features: [
      "Edición limitada numerada",
      "Tejido premium con acabado mate",
      "Detalles dorados termosellados",
      "Ajuste entallado tipo Player Version",
      "Personalización de nombre y dorsal disponible",
    ],
  },
  {
    slug: "seleccion-dorada-nacional",
    name: "Camiseta Selección Dorada Nacional",
    team: "Selección Dorada",
    league: "Selecciones",
    category: "Selección",
    season: "2024",
    price: 54.9,
    image: "/images/jersey-4.jpg",
    gallery: ["/images/jersey-4.jpg", "/images/jersey-4.jpg", "/images/jersey-4.jpg"],
    rating: 4.7,
    reviews: 176,
    isNew: true,
    colors: ["#f2c811", "#1c6b3a"],
    description:
      "Camiseta oficial de la Selección Dorada para la próxima cita internacional. Combina los colores tradicionales de la afición con un diseño moderno y un tejido ultraligero.",
    features: [
      "Tejido ultraligero de competición",
      "Escudo nacional bordado",
      "Interior con malla de ventilación",
      "Corte semi entallado",
      "Personalización de nombre y dorsal disponible",
    ],
  },
  {
    slug: "club-marino-local-24-25",
    name: "Camiseta Club Marino Local",
    team: "Club Marino",
    league: "Liga Costa",
    category: "Local",
    season: "2024/25",
    price: 42.9,
    image: "/images/jersey-5.jpg",
    gallery: ["/images/jersey-5.jpg", "/images/jersey-5.jpg", "/images/jersey-5.jpg"],
    rating: 4.5,
    reviews: 87,
    colors: ["#0b2545", "#3fa9f5"],
    description:
      "Equipación titular del Club Marino, con degradado azul marino a celeste que rinde homenaje a la costa. Comodidad y estilo para cada partido.",
    features: [
      "Degradado exclusivo de temporada",
      "Tejido transpirable antihumedad",
      "Escudo bordado de alta durabilidad",
      "Corte regular fit unisex",
      "Personalización de nombre y dorsal disponible",
    ],
  },
  {
    slug: "atletico-norte-retro-1994",
    name: "Camiseta Atlético Norte Retro 1994",
    team: "Atlético Norte",
    league: "Colección Retro",
    category: "Retro",
    season: "1994",
    price: 59.9,
    oldPrice: 69.9,
    image: "/images/jersey-6.jpg",
    gallery: ["/images/jersey-6.jpg", "/images/jersey-6.jpg", "/images/jersey-6.jpg"],
    rating: 5,
    reviews: 61,
    badge: "Icónica",
    colors: ["#6b1d2b", "#f1e4c8"],
    description:
      "Recreación fiel de la histórica camiseta de Atlético Norte de 1994. Corte clásico de algodón mixto y detalles vintage para revivir una era dorada del club.",
    features: [
      "Corte clásico vintage",
      "Mezcla algodón-poliéster",
      "Escudo bordado estilo retro",
      "Etiqueta conmemorativa interior",
      "Personalización de nombre y dorsal disponible",
    ],
  },
  {
    slug: "estrella-azul-local-24-25",
    name: "Camiseta Estrella Azul Local",
    team: "Estrella Azul",
    league: "Liga Dorada",
    category: "Local",
    season: "2024/25",
    price: 44.9,
    image: "/images/jersey-3.jpg",
    gallery: ["/images/jersey-3.jpg", "/images/jersey-3.jpg", "/images/jersey-3.jpg"],
    rating: 4.4,
    reviews: 54,
    colors: ["#123a7a", "#ffffff"],
    description:
      "Camiseta titular de Estrella Azul con el diseño clásico del club y tejido técnico de última generación pensado para el máximo rendimiento.",
    features: [
      "Tejido técnico transpirable",
      "Escudo bordado en relieve",
      "Cuello en V con ribete interior",
      "Ajuste entallado tipo Player Version",
      "Personalización de nombre y dorsal disponible",
    ],
  },
  {
    slug: "real-union-fc-retro-1990",
    name: "Camiseta Real Unión FC Retro 1990",
    team: "Real Unión FC",
    league: "Colección Retro",
    category: "Retro",
    season: "1990",
    price: 59.9,
    image: "/images/jersey-6.jpg",
    gallery: ["/images/jersey-6.jpg", "/images/jersey-6.jpg", "/images/jersey-6.jpg"],
    rating: 4.9,
    reviews: 40,
    badge: "Icónica",
    colors: ["#b3121b", "#f1e4c8"],
    description:
      "Homenaje a la mítica camiseta de Real Unión FC de la temporada 1990. Fabricada con tejido de mezcla suave para un toque auténtico de época.",
    features: [
      "Diseño fiel a la temporada original",
      "Mezcla algodón-poliéster suave",
      "Escudo bordado estilo retro",
      "Etiqueta conmemorativa interior",
      "Personalización de nombre y dorsal disponible",
    ],
  },
];

export const categories = [
  {
    name: "Ligas Top",
    slug: "ligas-top",
    image: "/images/jersey-1.jpg",
    description: "Los clubes más laureados",
  },
  {
    name: "Selecciones",
    slug: "selecciones",
    image: "/images/jersey-4.jpg",
    description: "Viste los colores de tu país",
  },
  {
    name: "Colección Retro",
    slug: "retro",
    image: "/images/category-retro.jpg",
    description: "Clásicos que marcaron época",
  },
  {
    name: "Niños",
    slug: "ninos",
    image: "/images/jersey-2.jpg",
    description: "Las mismas camisetas, talla mini",
  },
];

export const sizes = ["XS", "S", "M", "L", "XL", "XXL"] as const;

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(slug: string, limit = 4) {
  const current = getProductBySlug(slug);
  return products
    .filter((product) => product.slug !== slug && product.league === current?.league)
    .concat(products.filter((product) => product.slug !== slug))
    .filter((product, index, self) => self.findIndex((item) => item.slug === product.slug) === index)
    .slice(0, limit);
}
