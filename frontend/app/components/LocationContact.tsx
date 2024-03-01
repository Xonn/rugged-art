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
    <div className="relative flex flex-row justify-center mt-32 mb-16 text-xs leading-tight uppercase whitespace-pre-wrap xl:justify-start xl:text-base xl-mb-4 gap-9 md:gap-16 xl:gap-12">
      <ReactMarkdown children={data.location} remarkPlugins={[remarkGfm]} />
      <Image className="absolute w-16 h-20 md:w-24 md:h-28 md:relative -top-28 md:-top-10" alt={data.picture.data.attributes.alternativeText} width="100" height="120" src={picUrl || ""} />
      <ReactMarkdown children={data.contact} remarkPlugins={[remarkGfm]} />
    </div>
  )
}