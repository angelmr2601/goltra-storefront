import type { Metadata } from "next";
import CheckoutView from "@/components/checkout/CheckoutView";

export const metadata: Metadata = { title: "Checkout — GOLTRA" };

export default function CheckoutPage() {
  return <main className="bg-paper"><CheckoutView /></main>;
}
