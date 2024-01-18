"use client";
import Logo from "./Logo";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import Markdown from "react-markdown";
import { fetchAPI } from "../utils/fetch-api";

interface ProjectProps {
  data: {
    id: number;
    attributes: {
      name: string;
      slug: string;
    }
  }
}

export interface SideLinkProps {
  id: number;
  text: string;
  url: string;
  projects: Array<ProjectProps>;
}

function SideLink({url, text, projects }: SideLinkProps) {
  console.log(projects.data);
  return (
    <li>
      <Button size="sm" variant="link" asChild>
        <Link href={url}>
          {text}
        </Link>
      </Button>
      {projects.data.map((project) => (
        <Button className="text-xs font-normal" size="sm" variant="link" asChild>
          <Link href={`portfolio/${project.attributes.slug}`}>
            {project.attributes.name}
          </Link>
        </Button>
      ))}
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
  console.log(links)
  return (
    <div className="flex flex-col h-full p-5 max-xl:items-center">
      <Logo src={logoUrl} size={84} />

      <Markdown children={shortDescription} className="py-6 pb-12 text-xs uppercase" />
      <div className="flex flex-col items-center justify-between xl:items-stretch h-3/4">
        <ul className="flex flex-col gap-y-9">
          {links.map((item: SideLinkProps) => (
            <SideLink key={item.id} {...item} />
          ))}
        </ul>
        <ul className="text-xs mb-9">
          {socialLinks.map((item: SideLinkProps) => (
            <SocialSideLink key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
