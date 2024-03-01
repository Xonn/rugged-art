import { cn } from "@/lib/utils";
import RichText from "./RichText";
import Image from "next/image";

interface RichTextProps {
  body: string;
}

interface ServicesProps {
  data: {
    title: string;
    content: RichTextProps[];
  }
}

export default function Services({ data }: ServicesProps) {
  const leftContent = data.content.slice(0, 2);
  const rightContent = data.content.slice(2, 4);

  return (
    <div className="relative mx-8 xl:mx-auto">
      <div className="flex flex-row justify-center xl:mr-10 md:justify-between">
        <h2 className="uppercase text-[65px] xl:text-[80px] font-normal font-fraunces">{data.title}</h2>
        <Image className="absolute w-24 h-24 left-5 -bottom-16 xl:bottom-0 xl:left-0 xl:relative animate-spin-slow" alt='Smiley' width="100" height="100" src="/smiley-b-1.png" />
      </div>
      <div className="flex flex-col gap-5 py-8 text-xs xl:gap-16 xl:flex-row">
        {leftContent.map((content, i) => (
          <div key={i} className={cn("xl:max-w-[230px]", i === 2 && "xl:ml-[100px]")}>
            <RichText data={content} />
          </div>
        ))}
        <div className="flex gap-10 ml-10 uppercase">
          {rightContent.map((content, i) => (
            // <div key={i} className={cn("flex flex-col max-w-[340px] xl:max-w-[230px]", i === 2 && "xl:ml-[100px]")}>
              <RichText data={content} />
            // </div>
          ))}
        </div>
      </div>
    </div>
  )
}