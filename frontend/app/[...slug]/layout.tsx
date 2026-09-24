import React from 'react'
import { getStrapiMedia, getGlobal } from "../utils/api-helpers";
import Sidebar from '../components/Sidebar';
import { MobileToggle } from '@/components/mobile-toggle';
import Footer from '../components/Footer';

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
      <main className="text-gray-900 p-0 bg-[#FCFCFC]">
        <div className="container block mt-7 xl:hidden">
          <MobileToggle
            links={navbar.links}
            socialLinks={navbar.socialLinks}
            logoUrl={navbarLogoUrl}
            shortDescription={navbar.shortDescription}
          />
        </div>
        <div className="container md:px-[22px] px-[39px] md:pl-[120px] py-20 xl:px-20">
          {children}
        </div>
        <Footer
          title={footer.title}
          content={footer.content}
        />
      </main>
    </div>
  )
}
