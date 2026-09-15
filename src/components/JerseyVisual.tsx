import type { Product } from "@/lib/products";

type Props = {
  product: Product;
  variant?: number;
  className?: string;
  compact?: boolean;
};

function Pattern({ product, variant }: { product: Product; variant: number }) {
  if (product.visualStyle === "stripes") {
    return (
      <>
        {[42, 58, 74, 90, 106, 122].map((x) => (
          <rect key={x} x={x} y="54" width="8" height="114" rx="2" fill={product.secondaryColor} opacity={variant === 1 ? 0.55 : 0.92} />
        ))}
      </>
    );
  }

  if (product.visualStyle === "hoops") {
    return (
      <>
        {[68, 90, 112, 134, 156].map((y) => (
          <rect key={y} x="40" y={y} width="100" height="10" fill={product.secondaryColor} opacity="0.92" />
        ))}
      </>
    );
  }

  if (product.visualStyle === "sash") {
    return <path d="M54 54 124 168h-22L38 66Z" fill={product.secondaryColor} opacity="0.92" />;
  }

  if (product.visualStyle === "graphic") {
    return (
      <>
        <path d="M41 78 84 54l31 20-75 52Z" fill={product.secondaryColor} opacity="0.22" />
        <path d="m68 168 72-58v28l-38 30Z" fill={product.accentColor} opacity="0.38" />
        <path d="m40 124 55-46 45 25v18l-66 47H40Z" fill={product.secondaryColor} opacity="0.14" />
      </>
    );
  }

  return <rect x="40" y="54" width="100" height="114" fill={product.secondaryColor} opacity="0.08" />;
}

export default function JerseyVisual({ product, variant = 0, className = "", compact = false }: Props) {
  const initials = product.team
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

  return (
    <div
      className={`relative grid h-full w-full place-items-center overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(circle at ${variant === 2 ? "70% 25%" : "30% 20%"}, ${product.secondaryColor}33, transparent 34%), linear-gradient(145deg, #f8f7f2 0%, #e8e4d8 100%)`,
      }}
    >
      <div className="absolute inset-0 opacity-35" style={{ backgroundImage: "linear-gradient(rgba(12,15,20,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(12,15,20,.06) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
      <svg viewBox="0 0 180 210" className={compact ? "relative h-[78%] w-[78%] drop-shadow-xl" : "relative h-[82%] w-[82%] drop-shadow-2xl"} aria-hidden="true">
        <defs>
          <clipPath id={`shirt-${product.slug}-${variant}`}>
            <path d="M58 35c8 9 18 13 32 13s24-4 32-13l31 17-13 35-17-7v88H57V80l-17 7-13-35Z" />
          </clipPath>
        </defs>
        <path d="M58 35c8 9 18 13 32 13s24-4 32-13l31 17-13 35-17-7v88H57V80l-17 7-13-35Z" fill={product.primaryColor} stroke="#0c0f14" strokeWidth="2.5" strokeLinejoin="round" />
        <g clipPath={`url(#shirt-${product.slug}-${variant})`}>
          <Pattern product={product} variant={variant} />
          {variant === 2 && <rect x="57" y="145" width="66" height="23" fill="#0c0f14" opacity="0.14" />}
        </g>
        <path d="M72 39c4 9 10 13 18 13s14-4 18-13" fill="none" stroke={product.accentColor} strokeWidth="5" strokeLinecap="round" />
        <circle cx="76" cy="84" r="10" fill="#ffffff" opacity="0.94" />
        <text x="76" y="88" textAnchor="middle" fontSize="9" fontWeight="800" fill="#0c0f14">{initials}</text>
        <rect x="91" y="80" width="22" height="7" rx="3.5" fill={product.accentColor} opacity="0.94" />
        {variant === 2 && <text x="90" y="130" textAnchor="middle" fontSize="34" fontWeight="900" fill={product.accentColor}>10</text>}
      </svg>
      {!compact && (
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink/45">{product.team}</p>
            <p className="font-display text-xl tracking-wide text-ink">{product.season}</p>
          </div>
          <span className="rounded-full bg-white/75 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-ink/60 backdrop-blur">Vista demo</span>
        </div>
      )}
    </div>
  );
}
