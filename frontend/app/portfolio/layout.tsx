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

  console.log(global.data.attributes.navbar.links);
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
      <main className="text-gray-800 container p-0 mx-auto bg-[#FCEEE4]">
        <div className="block xl:hidden">
          <MobileToggle
            links={navbar.links}
            socialLinks={navbar.socialLinks}
            logoUrl={navbarLogoUrl}
            shortDescription={navbar.shortDescription}
          />
        </div>
        <div className="p-10 md:p-6">
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