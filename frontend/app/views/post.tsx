"use client";

import { getStrapiMedia } from '../utils/api-helpers';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface Category {
    id: number;
    attributes: {
        name: string;
        slug: string;
    };
}

interface Picture {
    id: string;
    attributes: {
        url: string;
        name: string;
        alternativeText: string;
    };
}

interface Project {
    id: number;
    attributes: {
        name: string;
        slug: string;
        categories: Category[];
        cover: {
            data: {
                attributes: {
                    url: string;
                };
            };
        };
        pictures: {data: Picture[]};
        publishedAt: string;
    };
}

export default function Post({ data }: { data: Project }) {
    return (
        <article className="w-full">
            {data.attributes.pictures.data?.map((picture: Picture) => {
                var picUrl = getStrapiMedia(picture.attributes.url);

                return (picUrl &&
                    <LazyLoadImage
                        key={picture.id}
                        src={picUrl}
                        alt={picture.attributes.alternativeText}
                        effect="opacity"
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }} // optional
                        className="object-cover w-full"
                    />
                )
            })}
        </article>
    );
}
