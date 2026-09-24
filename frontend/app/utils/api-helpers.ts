import { fetchAPI } from "./fetch-api";

export function getStrapiURL(path = '') {
    const baseUrl = (process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://127.0.0.1:1337').replace(/\/$/, '');
    return `${baseUrl}${path}`;
}

export function getStrapiMedia(url: string | null) {
    if (url == null) {
        return null;
    }

    // Return the full URL if the media is hosted on an external provider
    if (url.startsWith('http') || url.startsWith('//')) {
        return url;
    }

    // Otherwise prepend the URL path with the Strapi URL
    return new URL(url, `${getStrapiURL()}/`).toString();
}

export async function getGlobal(): Promise<any> {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

    if (!token) throw new Error("The Strapi API Token environment variable is not set.");

    const path = `/global`;
    const options = { headers: { Authorization: `Bearer ${token}` } };

    const urlParamsObject = {
        populate: {
            metadata: true,
            favicon: true,
            navbar: {
                populate: {
                    links: { populate: { projects: true } },
                    socialLinks: true,
                    navbarLogo: { populate: { logoImg: true } },
                },
            },
            footer: { populate: { content: true } },
        },
    };
    return await fetchAPI(path, urlParamsObject, options);
}

export async function getProjects(): Promise<any> {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

    if (!token) throw new Error("The Strapi API Token environment variable is not set.");

    const path = `/projects`;
    const options = { headers: { Authorization: `Bearer ${token}` } };

    return await fetchAPI(path, {
        populate: '*',
        pagination: { pageSize: 100 },
    }, options);
}

export function formatDate(dateString: string) {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// ADDS DELAY TO SIMULATE SLOW API REMOVE FOR PRODUCTION
export const delay = (time: number) => new Promise((resolve) => setTimeout(() => resolve(1), time));
