"use client";

import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia } from "../utils/api-helpers";

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
                <div className="overflow-hidden w-full aspect-4/3">
                <Image
                  alt={project.attributes.cover.data?.attributes.alternativeText || project.attributes.name}
                  width={492}
                  height={369}
                  className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-110"
                  src={imageUrl}
                />
              </div>
              )}
              <div className="flex flex-row gap-4 items-center mt-4">
              <h3 className="inline-flex relative items-center text-xs font-medium text-black uppercase transition-colors duration-200 md:text-sm xl:text-lg group-hover:text-white group-hover:delay-250">
                  {/* Fond animé */}
                  <span className="relative z-10">{project.attributes.name}</span>
                  <span className="absolute inset-0 bg-black animate-fill-hover" aria-hidden="true" />
                </h3>

                <div key={project.id} className="flex flex-1 items-center">
                  {categories.map((category: Category, index: number) => (
                    <span key={category.id} className="text-[10px] hover:text-black md:text-xs xl:text-[15px] font-normal text-[#474747]">
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
