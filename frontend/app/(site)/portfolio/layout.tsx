import React from 'react'
import { getStrapiMedia, getGlobal } from "../../utils/api-helpers";
import { MobileToggle } from '@/components/mobile-toggle';
import Footer from '../../components/Footer';
import ScrollToTopButton from '../../components/ScrollToTopButton';

export default async function layout({children} : {children: React.ReactNode}) {
  const global = await getGlobal();
  // TODO: CREATE A CUSTOM ERROR PAGE
  if (!global.data) return null;

  const { navbar, footer } = global.data.attributes;
  const navbarLogoUrl = getStrapiMedia(
    navbar.navbarLogo.logoImg.data.attributes.url
  );

  return (
    <div className="h-full">
      <main className="text-gray-800 p-0 bg-[#FCEEE4]">
          <div className="container block pt-7 xl:hidden">
            <MobileToggle
              links={navbar.links}
              socialLinks={navbar.socialLinks}
              logoUrl={navbarLogoUrl}
              shortDescription={navbar.shortDescription}
            />
          </div>
          {children}
          <Footer
            title={footer.title}
            content={footer.content}
          />
      </main>
      <ScrollToTopButton />
    </div>
  )
}
