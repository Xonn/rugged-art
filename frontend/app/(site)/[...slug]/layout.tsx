import React from 'react'
import { getStrapiMedia, getGlobal } from "../../utils/api-helpers";
import { MobileToggle } from '@/components/mobile-toggle';
import Footer from '../../components/Footer';

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
      <main className="text-gray-900 p-0 bg-[#FCFCFC]">
        <div className="container block pt-7 xl:hidden">
          <MobileToggle
            links={navbar.links}
            socialLinks={navbar.socialLinks}
            logoUrl={navbarLogoUrl}
            shortDescription={navbar.shortDescription}
          />
        </div>
        <div className="container md:px-5.5 px-9.75 md:pl-30 py-20 xl:px-20">
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
