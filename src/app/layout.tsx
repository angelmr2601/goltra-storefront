import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "GOLTRA — Camisetas de fútbol", template: "%s | GOLTRA" },
  description: "Encuentra camisetas de fútbol actuales y retro por liga, equipo y temporada.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="es"><body className="bg-paper font-sans text-ink antialiased"><Header />{children}<Footer /></body></html>;
}
