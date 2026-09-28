"use client";
import Logo from "./Logo";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import Markdown from "react-markdown";
import Image from "next/image";
import { usePathname } from "next/navigation";

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


export function SideLink({ url, text, projects }: SideLinkProps) {
  const pathname = usePathname();

  const isMainActive = pathname === url;

  return (
    <li>
      <Button size="sm" variant="link" asChild>
        <Link
          href={url}
          className={`inline-flex relative items-center transition-colors duration-200 group ${
            isMainActive ? "text-white" : "text-black hover:text-white hover:delay-250"
          }`}
        >
          {/* Fond animé / Fixe si actif */}
          <span
            className={`absolute -mx-2 inset-0 bg-black -z-10 ${
              isMainActive ? "opacity-100" : "animate-fill-hover"
            }`}
            aria-hidden="true"
          />
          <span className="relative z-10">{text}</span>
        </Link>
      </Button>

      <div className="flex flex-col gap-y-3 items-center pt-3 xl:items-baseline">
        {projects?.data?.map((project) => {
          const projectUrl = `/portfolio/${project.attributes.slug}`;
          const isProjectActive = pathname === projectUrl;

          return (
            <Button key={project.id} className="h-4 text-xs font-normal" size="sm" variant="link" asChild>
              <Link
                href={projectUrl}
                className={`inline-flex relative items-center transition-transform ease-out duration-800 group ${
                  isProjectActive ? "translate-x-1" : "hover:translate-x-1"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full bg-current transition-all duration-400 ${
                    isProjectActive
                      ? "opacity-100 mr-1"
                      : "opacity-0 group-hover:opacity-100 group-hover:mr-1"
                  }`}
                />
                <span>{project.attributes.name}</span>
              </Link>
            </Button>
          );
        })}
      </div>
    </li>
  );
}

function SocialSideLink({url, text }: SideLinkProps) {
  return (
    <li>
      <Button className="h-5 font-normal group" size="sm" variant="link" asChild>
        <Link href={url}>
          <span>{text}</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 opacity-0 transition-opacity duration-300 size-4 group-hover:opacity-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
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
    <div className="flex relative flex-col p-5 h-full xl:border-r-2 border-[#F5F5F5] xl:w-[190px] xl:fixed max-xl:items-center">
      <Logo src={logoUrl} size={84} />

      <div className="pt-7 pb-12 text-xs font-medium uppercase">
        <Markdown>{shortDescription}</Markdown>
      </div>
      <div className="flex flex-col justify-between items-center h-3/4 text-center xl:text-left xl:items-stretch">
        <ul className="flex relative flex-col gap-y-9">
          {links.map((item: SideLinkProps) => (
            <SideLink key={item.id} {...item} />
          ))}
          <Image className="animate-spin-slow absolute w-[71px] h-[71px] top-28 -left-36 xl:hidden" alt='Smiley' width="100" height="100" src="/smiley-b-3.png" />
          <Image className="animate-spin-slow absolute w-[71px] h-[71px] bottom-6 -right-36 xl:bottom-4 xl:right-0 xl:w-7 xl:h-7" alt='Smiley' width="100" height="100" src="/smiley-b-2.png" />
        </ul>
        <ul className="my-9 text-xs">
          {socialLinks.map((item: SideLinkProps) => (
            <SocialSideLink key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
