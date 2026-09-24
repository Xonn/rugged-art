"use client";

import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia, formatDate } from "../utils/api-helpers";
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface Category {
  id: number;
  attributes: {
    name: string;
    slug: string;
  };
}

interface Project {
  id: number;
  attributes: {
    name: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    cover: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        };
      };
    };
    categories: {data: Category[]};
  };
}

export default function PostList({
  data: projects,
  children,
}: {
  data: Project[];
  children?: React.ReactNode;
}) {
  return (
    <section>
      <div className="grid grid-cols-1 gap-x-10 gap-y-14 justify-center p-10 md:grid-cols-2 2xl:grid-cols-3 md:px-9">
        {projects.map((project) => {
          const imageUrl = getStrapiMedia(project.attributes.cover.data?.attributes.url);
          const categories = project.attributes.categories.data;
        
          return (
            <Link
              href={`/portfolio/${project.attributes.slug}`}
              key={project.id}
              className="overflow-hidden mx-auto w-full group hover:no-underline focus:no-underline"
            >
              {imageUrl && (
                <LazyLoadImage
                  alt={project.attributes.cover.data.attributes.alternativeText}
                  // width="492"
                  // height="397"
                  effect="opacity"
                  wrapperClassName="w-full"
                  className="object-cover w-full aspect-[4/3]"
                  src={imageUrl}
                />
              )}
              <div className="flex flex-row gap-4 items-center mt-4">
                <h3 className="flex-none text-xs font-medium uppercase md:text-sm xl:text-lg">
                  {project.attributes.name}
                </h3>

                <div key={project.id} className="flex flex-1 items-center">
                  {categories.map((category: Category, index: number) => (
                    <span key={category.id} className="text-[10px] md:text-xs xl:text-[15px] font-normal text-[#474747]">
                        {category.attributes.name}
                        {index === categories.length -1 ? '' : ', '}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      {children && children}
    </section>
  );
}
