type LogoProps = {
  className?: string;
  iconOnly?: boolean;
  variant?: "dark" | "light";
};

export default function Logo({ className = "", iconOnly = false, variant = "light" }: LogoProps) {
  const fill = variant === "light" ? "#ffffff" : "#0c0f14";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 100 70"
        className="h-7 w-10 shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M2 4C2 2.9 2.9 2 4 2H24.3C27.6 2 30.6 3.7 32.3 6.4L36.8 13.7C38.5 16.4 41.5 18 44.8 18H55.2C58.5 18 61.5 16.4 63.2 13.7L67.7 6.4C69.4 3.7 72.4 2 75.7 2H96C97.1 2 98 2.9 98 4V17C98 18.1 97.1 19 96 19H80.9C79.4 19 78 19.7 77.1 20.9L67.9 32.8C66.6 34.5 64.6 35.5 62.5 35.5H37.5C35.4 35.5 33.4 34.5 32.1 32.8L22.9 20.9C22 19.7 20.6 19 19.1 19H4C2.9 19 2 18.1 2 17V4Z"
          fill={fill}
        />
        <path d="M4 27L46 52.5V68L4 42.5V27Z" fill={fill} />
        <path d="M96 27L54 52.5V68L96 42.5V27Z" fill={fill} />
      </svg>
      {!iconOnly && (
        <span
          className={`font-display text-2xl tracking-wide ${
            variant === "light" ? "text-white" : "text-ink"
          }`}
        >
          GOLTRA
        </span>
      )}
    </div>
  );
}
