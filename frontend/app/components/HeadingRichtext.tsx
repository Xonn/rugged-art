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
  return (
    <div className="flex flex-row items-start gap-40">
      {/* <h2 className="uppercase text-[80px] leading-[0.8] font-normal font-fraunces">{data.title}</h2> */}
      <Image alt='Directeur Artistique & Designer' width="434" height="190" src="/directeur-artistique-designer.svg" />
      <div className="text-xs whitespace-pre-wrap max-w-[210px]">
        <ReactMarkdown children={data.content} remarkPlugins={[remarkGfm]} />
      </div>
    </div>
  )
}

export default HeadingRichtext