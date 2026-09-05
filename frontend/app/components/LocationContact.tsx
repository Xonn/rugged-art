import React from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getStrapiMedia } from '../utils/api-helpers';
import Image from 'next/image';

interface Picture {
  data: {
    id: string;
    attributes: {
      url: string;
      name: string;
      alternativeText: string;
    };
  };
}

interface LocationContactProps {
  data: {
    id: string;
    location: string;
    picture: Picture;
    contact: string;
  }
}

export default function LocationContact({ data }: LocationContactProps) {
  const picUrl = getStrapiMedia(data.picture.data.attributes.url);

  return (
    <div className="flex relative flex-row gap-9 justify-center mt-32 text-xs leading-tight uppercase whitespace-pre-wrap md:mt-24 xl:justify-start xl:text-base xl-mb-4 md:gap-16 xl:gap-12">
      <ReactMarkdown children={data.location} remarkPlugins={[remarkGfm]} />
      <Image className="absolute -top-28 w-20 h-20 md:w-28 md:h-28 md:relative md:-top-10" alt={data.picture.data.attributes.alternativeText} width="100" height="120" src={picUrl || ""} />
      <ReactMarkdown children={data.contact} remarkPlugins={[remarkGfm]} />
    </div>
  )
}