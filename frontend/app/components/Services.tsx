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
  return (
    <div>
      <div className="flex flex-row justify-between mr-10">
        <h2 className="uppercase text-[80px] font-normal font-fraunces">{data.title}</h2>
        <Image className="w-24 h-24 animate-spin-slow" alt='Smiley' width="100" height="100" src="/smiley-b-1.png" />
      </div>
      <div className="flex flex-row gap-16 py-8 text-xs">
        {data.content.map((content, i) => (
          <div key={i} className={cn("min-w-[160px] max-w-[230px]", i === 2 && "ml-[100px]")}>
            <RichText data={content} />
          </div>
        ))}
      </div>
    </div>
  )
}