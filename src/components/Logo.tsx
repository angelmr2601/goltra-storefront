import Image from "next/image";

type LogoProps = {
  className?: string;
  imageClassName?: string;
  iconOnly?: boolean;
  framed?: boolean;
  variant?: "dark" | "light";
  priority?: boolean;
};

export default function Logo({
  className = "",
  imageClassName = "",
  iconOnly = false,
  framed = false,
  variant = "light",
  priority = false,
}: LogoProps) {
  const src = framed
    ? "/brand/goltra-framed.svg"
    : iconOnly
      ? "/brand/goltra-mark.svg"
      : "/brand/goltra-wordmark.svg";

  const dimensions = framed
    ? { width: 300, height: 304 }
    : iconOnly
      ? { width: 61, height: 40 }
      : { width: 214, height: 32 };

  const defaultSize = framed
    ? "w-full h-auto"
    : iconOnly
      ? "h-7 w-auto"
      : "h-7 w-auto sm:h-8";

  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src={src}
        alt="GOLTRA"
        width={dimensions.width}
        height={dimensions.height}
        priority={priority}
        className={`${defaultSize} ${
          variant === "light" ? "brightness-0 invert" : "brightness-0"
        } ${imageClassName}`}
      />
    </span>
  );
}
