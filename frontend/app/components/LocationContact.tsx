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
    <div className="flex flex-row gap-12 mt-24 -mb-4 leading-tight uppercase whitespace-pre-wrap">
      <ReactMarkdown children={data.location} remarkPlugins={[remarkGfm]} />
      <Image className="relative -top-10" alt={data.picture.data.attributes.alternativeText} width="100" height="120" src={picUrl || ""} />
      <ReactMarkdown children={data.contact} remarkPlugins={[remarkGfm]} />
    </div>
  )
}