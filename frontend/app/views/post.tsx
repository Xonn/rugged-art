"use client";

import { getStrapiMedia } from '../utils/api-helpers';
import Image from 'next/image';

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
                const picUrl = getStrapiMedia(picture.attributes.url);

                return (picUrl &&
                    <Image
                        key={picture.id}
                        src={picUrl}
                        alt={picture.attributes.alternativeText}
                        width={1200}
                        height={800}
                        sizes="100vw"
                        className="inline-block object-cover w-full h-auto"
                    />
                )
            })}
        </article>
    );
}
