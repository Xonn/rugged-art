"use client";
import Logo from "./Logo";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import Markdown from "react-markdown";
import Image from "next/image";

interface ProjectProps {
    id: number;
    attributes: {
      name: string;
      slug: string;
    }
}

export interface SideLinkProps {
  id: number;
  text: string;
  url: string;
  projects: { data : [ProjectProps] };
}

function SideLink({url, text, projects }: SideLinkProps) {
  return (
    <li>
      <Button size="sm" variant="link" asChild>
        <Link href={url}>
          {text}
        </Link>
      </Button>
      <div className="flex flex-col items-center xl:items-baseline">
        {projects.data.map((project) => (
          <Button key={project.id} className="h-8 text-xs font-normal" size="sm" variant="link" asChild>
            <Link href={`/portfolio/${project.attributes.slug}`}>
              {project.attributes.name}
            </Link>
          </Button>
        ))}
      </div>
    </li>
  );
}

function SocialSideLink({url, text }: SideLinkProps) {
  return (
    <li>
      <Button className="h-5 font-normal" size="sm" variant="link" asChild>
        <Link href={url}>
          {text}
        </Link>
      </Button>
    </li>
  );
}

export default function Sidebar({
  links,
  socialLinks,
  logoUrl,
  shortDescription,
}: {
  links: Array<SideLinkProps>;
  socialLinks: Array<SideLinkProps>;
  logoUrl: string | null;
  shortDescription: string;
}) {
  return (
    <div className="relative flex flex-col h-full p-5 xl:fixed max-xl:items-center">
      <Logo src={logoUrl} size={84} />

      <Markdown children={shortDescription} className="py-6 pb-12 text-xs uppercase" />
      <div className="flex flex-col items-center justify-between text-center xl:text-left xl:items-stretch h-3/4">
        <ul className="relative flex flex-col gap-y-9">
          {links.map((item: SideLinkProps) => (
            <SideLink key={item.id} {...item} />
          ))}
          <Image className="animate-spin-slow absolute w-[71px] h-[71px] top-28 -left-36 xl:hidden" alt='Smiley' width="100" height="100" src="/smiley-b-3.png" />
          <Image className="animate-spin-slow absolute w-[71px] h-[71px] bottom-6 -right-36 xl:bottom-4 xl:right-0 xl:w-7 xl:h-7" alt='Smiley' width="100" height="100" src="/smiley-b-2.png" />
        </ul>
        <ul className="text-xs my-9">
          {socialLinks.map((item: SideLinkProps) => (
            <SocialSideLink key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
