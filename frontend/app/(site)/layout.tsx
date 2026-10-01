import { getGlobal, getStrapiMedia } from "../utils/api-helpers";
import Sidebar from "../components/Sidebar";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const global = await getGlobal();
  if (!global.data) return null;

  const { navbar } = global.data.attributes;
  const navbarLogoUrl = getStrapiMedia(
    navbar.navbarLogo.logoImg.data.attributes.url,
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
      <div className="min-w-0">
        {children}
      </div>
    </div>
  );
}
