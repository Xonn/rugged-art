import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Logo({
  src,
  className,
  size,
}: {
  src: string | null;
  className?: string;
  size: number;
}) {
  return (
    <Link
      href="/"
      aria-label="Retour à la page d'accueil"
      className="flex items-center justify-center p-2 fill-white"
    >
      {src && <Image src={src} className={className} alt="logo" width={size} height={size} />}
    </Link>
  );
}
