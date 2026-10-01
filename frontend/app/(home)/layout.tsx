import { getStrapiMedia, getGlobal } from "../utils/api-helpers";
import Navbar from "../components/Navbar";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const global = await getGlobal();
  // TODO: CREATE A CUSTOM ERROR PAGE
  if (!global.data) return null;
  
  const { navbar } = global.data.attributes;

  const navbarLogoUrl = getStrapiMedia(navbar.navbarLogo.logoImg.data.attributes.url);

  return (
    <div className="h-screen text-gray-100 bg-black">
      <Navbar
        logoUrl={navbarLogoUrl}
      />
      <main>{children}</main>
    </div>
  );
}
