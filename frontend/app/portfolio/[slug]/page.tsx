import { fetchAPI } from '../../utils/fetch-api';
import Post from '../../views/post';
import type { Metadata } from 'next';

async function getPostBySlug(slug: string) {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/projects`;
    const urlParamsObject = {
        filters: { slug },
        populate: {
            cover: { fields: ['url'] },
            categories: { populate: '*' },
            pictures: { populate: '*' },
        },
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const response = await fetchAPI(path, urlParamsObject, options);
    return response;
}

async function getMetaData(slug: string) {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/projects`;
    const urlParamsObject = {
        filters: { slug },
        populate: { seo: { populate: '*' } },
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const response = await fetchAPI(path, urlParamsObject, options);
    return response.data;
}

type RouteProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
    const { slug } = await params;
    const meta = await getMetaData(slug);
    if (!meta?.[0]?.attributes?.seo) return {};
    const metadata = meta[0].attributes.seo;

    return {
        title: metadata.metaTitle,
        description: metadata.metaDescription,
    };
}

export default async function PostRoute({ params }: RouteProps) {
    const { slug } = await params;
    const data = await getPostBySlug(slug);
    if (!data.data?.length) return <h2>no post found</h2>;
    return <Post data={data.data[0]} />;
}

export async function generateStaticParams() {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/projects`;
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const projectResponse = await fetchAPI(
        path,
        {
            populate: ['categories'],
            pagination: { pageSize: 100 },
        },
        options
    );

    return projectResponse.data.map(
        (project: {
            attributes: {
                slug: string;
                // categories: {
                //     slug: string;
                // };
            };
        }) => ({ slug: project.attributes.slug })
    );
}
