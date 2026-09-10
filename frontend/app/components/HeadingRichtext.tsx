import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { replaceBracedCharacters } from '@/lib/utils';

interface HeadingRichtextProps {
  data: {
    title: string;
    content: string;
  }
}

function HeadingRichtext({ data }: HeadingRichtextProps) {
  let content = data.content.replaceAll(' \n', ' ');

  return (
    <div className="flex relative flex-col gap-6 items-center md:gap-[54px] xl:mx-0 xl:gap-44 xl:items-start md:flex-row">
      <h2 className="uppercase text-[54px] md:text-[78px] xl:text-[80px] max-w-[460px] leading-[0.9] font-fraunces" dangerouslySetInnerHTML={{__html: replaceBracedCharacters(data.title)}}></h2>
      <Image className="absolute right-0 w-24 h-24 max-sm:-top-44 md:-bottom-40 md:left-0 xl:hidden xl:relative animate-spin-slow" alt='Smiley' width="100" height="100" src="/smiley-b-1.png" />
      <div className="text-xs whitespace-pre-wrap xl:max-w-[210px]">
        <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
      </div>
    </div>
  )
}

export default HeadingRichtext
