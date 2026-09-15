"use client";

import Image from "next/image";
import { useState } from "react";

export default function Gallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col-reverse gap-4 sm:flex-row">
      <div className="flex shrink-0 gap-3 overflow-x-auto sm:flex-col">
        {images.map((img, i) => (
          <button key={i} onClick={() => setActive(i)} className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition ${active === i ? "border-ink" : "border-transparent opacity-60 hover:opacity-100"}`}>
            <Image src={img} alt={`${name} vista ${i + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>
      <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-white">
        <Image src={images[active]} alt={name} fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
      </div>
    </div>
  );
}
