import Navbar from "../components/Navbar";
import { getStrapiMedia, getGlobal } from "../utils/api-helpers";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const global = await getGlobal();
  // TODO: CREATE A CUSTOM ERROR PAGE
  if (!global.data) return null;
  
  const { navbar } = global.data.attributes;

  const navbarLogoUrl = getStrapiMedia(
    navbar.navbarLogo.logoImg.data.attributes.url
  );

  return (
    <div className="h-full text-gray-100 bg-black">
      <Navbar
          links={navbar.links}
          logoUrl={navbarLogoUrl}
          logoText={navbar.navbarLogo.logoText}
        />
      <main>
        {children}
      </main>
    </div>
  );
}
