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
  return (
    <footer className="p-16 h-[370px] bg-black text-white text-center">
      <div className="container max-w-[990px]">
        <h3 className="uppercase text-[80px] font-fraunces">{title}</h3>
        <div className="flex flex-row items-center justify-between pt-10 text-left text-white font-baskervville">
          {content.map((row, i) => (
            <RichText key={i} data={row} />
          ))}
        </div>
      </div>
    </footer>
  );
}
