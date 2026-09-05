"use client";
import { replaceBracedCharacters } from "@/lib/utils";
import RichText from "./RichText";

interface RichTextProps {
  body: string;
}

export default function Footer({
  title,
  content,
}: {
  title: string;
  content: RichTextProps[];
}) {
  return (
    <footer className="p-2 xl:p-16 h-[136px] md:h-[187px] w-full xl:h-[370px] bg-black text-white text-center">
      <div className="container max-w-[990px]">
        <h3 className="uppercase text-[29px] md:text-[50px] xl:text-[80px] font-fraunces" dangerouslySetInnerHTML={{__html: replaceBracedCharacters(title)}}></h3>
        <div className="flex flex-row items-center justify-between pt-10 text-[8px] md:text-sm text-left xl:text-base font-baskervville">
          {content.map((row, i) => (
            <RichText key={i} data={row} />
          ))}
        </div>
      </div>
    </footer>
  );
}
