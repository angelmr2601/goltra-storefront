"use client";

import { useState } from "react";
import JerseyVisual from "@/components/JerseyVisual";
import type { Product } from "@/lib/products";

const views = ["Frontal", "Detalle", "Trasera"];

export default function Gallery({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  return (
    <div className="flex flex-col-reverse gap-4 sm:flex-row">
      <div className="flex shrink-0 gap-3 sm:flex-col">
        {views.map((view, index) => (
          <button key={view} onClick={() => setActive(index)} className={`h-20 w-20 overflow-hidden rounded-xl border-2 transition ${active === index ? "border-ink" : "border-transparent opacity-60 hover:opacity-100"}`} aria-label={`Ver ${view.toLowerCase()}`}>
            <JerseyVisual product={product} variant={index} compact />
          </button>
        ))}
      </div>
      <div className="aspect-square w-full overflow-hidden rounded-3xl bg-white"><JerseyVisual product={product} variant={active} /></div>
    </div>
  );
}
