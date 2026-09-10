import type { Metadata } from "next";
import "./globals.css";
import { getStrapiURL, getGlobal } from "./utils/api-helpers";

import {FALLBACK_SEO} from "./utils/constants";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getGlobal();

  if (!meta.data?.attributes?.metadata) return FALLBACK_SEO;

  const { metadata, favicon } = meta.data.attributes;

  return {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    ...(favicon?.data?.attributes?.url
      ? { icons: { icon: [new URL(favicon.data.attributes.url, getStrapiURL())] } }
      : {}),
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
