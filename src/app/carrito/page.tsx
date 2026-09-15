import type { Metadata } from "next";
import CartView from "@/components/cart/CartView";

export const metadata: Metadata = { title: "Carrito — GOLTRA" };

export default function CarritoPage() {
  return <main className="bg-paper"><CartView /></main>;
}
