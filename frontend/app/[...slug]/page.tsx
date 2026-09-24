import {sectionRenderer} from "../utils/section-renderer";
import {Metadata} from "next";
import {getPageBySlug} from "../utils/get-page-by-slug";
import {fetchAPI} from "../utils/fetch-api";
import {FALLBACK_SEO} from "../utils/constants";
import {i18n} from '../../i18n-config';

type Props = {
    params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const pages = await fetchAPI('/pages', {
        fields: ['slug'],
        pagination: { pageSize: 100 },
    }, options);

    return pages.data
        .filter((page: { attributes: { slug: string } }) => page.attributes.slug !== 'home')
        .map((page: { attributes: { slug: string } }) => ({
            slug: page.attributes.slug.split('/').filter(Boolean),
        }));
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
