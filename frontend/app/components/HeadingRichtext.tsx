import Image from 'next/image';
import React from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface HeadingRichtextProps {
  data: {
    title: string;
    content: string;
  }
}

function HeadingRichtext({ data }: HeadingRichtextProps) {
  let content = data.content.replaceAll(' \n', ' ');
  return (
    <div className="relative flex flex-col items-center gap-6 mx-8 md:gap-14 xl:mx-0 xl:gap-44 xl:items-start md:flex-row">
      {/* <h2 className="uppercase text-[80px] leading-[0.8] font-normal font-fraunces">{data.title}</h2> */}
      <Image className="absolute right-0 w-24 h-24 max-sm:-top-44 md:-bottom-40 md:left-0 xl:hidden xl:relative animate-spin-slow" alt='Smiley' width="100" height="100" src="/smiley-b-1.png" />
      <Image alt="Directeur Artistique & Designer" width="434" height="190" src="/directeur-artistique-designer.svg" />
      <div className="text-xs whitespace-pre-wrap xl:max-w-[210px]">
        <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
      </div>
    </div>
  )
}

export default HeadingRichtext