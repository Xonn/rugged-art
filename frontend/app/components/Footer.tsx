"use client";
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
  const newTitle = title.replace('@', '<span class="font-alex-brush">@</span>');

  return (
    <footer className="p-2 xl:p-16 h-[136px] md:h-[187px] w-full xl:h-[370px] bg-black text-white text-center">
      <div className="container max-w-[990px]">
        <h3 className="uppercase text-[29px] md:text-[50px] xl:text-[80px] font-fraunces" dangerouslySetInnerHTML={{__html: newTitle}}></h3>
        <div className="flex flex-row text-[8px] xl:text-base items-center justify-between pt-10 text-left font-baskervville">
          {content.map((row, i) => (
            <RichText key={i} data={row} />
          ))}
        </div>
      </div>
    </footer>
  );
}
