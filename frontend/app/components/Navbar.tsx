"use client";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  id: number;
  url: string;
  newTab?: boolean;
  text: string;
}

function NavLink({ url, text }: NavLink) {
  const path = usePathname();

  return (
    <li className="flex">
      <Link
        href={url}
        className={`flex items-center mx-4 -mb-1 border-b-2 dark:border-transparent ${
          path === url && "dark:text-violet-400 dark:border-violet-400"
        }}`}
      >
        {text}
      </Link>
    </li>
  );
}

export default function Navbar({ logoUrl }: { logoUrl: string | null }) {
  return (
    <div className="p-4 dark:bg-black dark:text-gray-100">
      <div className="container flex justify-between px-0 mx-auto h-16 sm:px-6">
        <Logo src={logoUrl} size={60} className="invert" />
      </div>
    </div>
  );
}
