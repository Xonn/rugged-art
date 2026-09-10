import {sectionRenderer} from "../utils/section-renderer";
import {Metadata} from "next";
import {getPageBySlug} from "../utils/get-page-by-slug";
import {FALLBACK_SEO} from "../utils/constants";
import {i18n} from '../../i18n-config';

type Props = {
    params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const { slug } = await params;
    const page = await getPageBySlug(slug.join('/'), i18n.defaultLocale);

    if (!page.data?.length) return FALLBACK_SEO;
    const metadata = page.data[0].attributes.seo

    return {
        title: metadata.metaTitle,
        description: metadata.metaDescription
    }
}

export default async function PageRoute({params}: Props) {
    const { slug } = await params;
    const page = await getPageBySlug(slug.join('/'), i18n.defaultLocale);
    if (!page.data || page.data.length === 0) return null;
    const contentSections = page.data[0].attributes.contentSections;
    return contentSections.map((section: any, index: number) => sectionRenderer(section, index));
}
