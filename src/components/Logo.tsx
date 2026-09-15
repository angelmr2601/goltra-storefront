import Image from "next/image";

type LogoProps = {
  className?: string;
  iconOnly?: boolean;
  variant?: "dark" | "light";
};

export default function Logo({ className = "", iconOnly = false, variant = "light" }: LogoProps) {
  const src = iconOnly ? "/brand/goltra-mark.svg" : "/brand/goltra-wordmark.svg";

  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src={src}
        alt="GOLTRA"
        width={iconOnly ? 100 : 1243}
        height={iconOnly ? 70 : 186}
        className={`${iconOnly ? "h-7 w-auto" : "h-[22px] w-auto"} ${variant === "light" ? "brightness-0 invert" : "brightness-0"}`}
        priority
      />
    </span>
  );
}
