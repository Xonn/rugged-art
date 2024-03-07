"use client";
import React from 'react'
import { getStrapiMedia, getGlobal } from "../utils/api-helpers";
import Sidebar from '../components/Sidebar';
import { MobileToggle } from '@/components/mobile-toggle';
import Footer from '../components/Footer';
import ScrollToTop from 'react-scroll-to-top';
import { ChevronUp } from 'lucide-react';

export default async function layout({children} : {children: React.ReactNode}) {
  const global = await getGlobal();
  // TODO: CREATE A CUSTOM ERROR PAGE
  if (!global.data) return null;

  const { navbar, footer } = global.data.attributes;
  const navbarLogoUrl = getStrapiMedia(
    navbar.navbarLogo.logoImg.data.attributes.url
  );

  return (
    <div className="h-full bg-white grid grid-cols-1 xl:grid-cols-[190px_1fr]">
      <aside className="hidden xl:block">
        <Sidebar
          links={navbar.links}
          socialLinks={navbar.socialLinks}
          logoUrl={navbarLogoUrl}
          shortDescription={navbar.shortDescription}
        />
      </aside>
      <main className="text-gray-800 p-0 bg-[#FCEEE4]">
          <div className="block xl:hidden">
            <MobileToggle
              links={navbar.links}
              socialLinks={navbar.socialLinks}
              logoUrl={navbarLogoUrl}
              shortDescription={navbar.shortDescription}
            />
          </div>
          <div className="">
            {children}
          </div>
        <Footer
          title={footer.title}
          content={footer.content}
        />
      </main>
      <ScrollToTop smooth width="32" height="32" className="!bg-black !text-white !w-8 !h-8 !rounded-full" component={<ChevronUp className="!inline" />} />
    </div>
  )
}
