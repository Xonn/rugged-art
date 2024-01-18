import { cn } from "@/lib/utils";
import RichText from "./RichText";

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
      <h2 className="uppercase text-[80px] font-normal font-fraunces">{data.title}</h2>
      <div className="flex flex-row gap-6 text-xs">
        {data.content.map((content, i) => (
          <div key={i} className={cn("min-w-[160px]", i === 2 && "ml-24")}>
            <RichText data={content} />
          </div>
        ))}
      </div>
    </div>
  )
}