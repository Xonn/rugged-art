import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "../utils/api-helpers";
import Markdown from "react-markdown";
import { Button } from "../../components/ui/button";

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

interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
}

interface IntroductionProps {
  data: {
    id: string;
    textLeft: string;
    textRight: string;
    picture: Picture;
    pictureMobile: Picture;
    buttons: Button[];
  };
}

export default function Introduction({ data }: IntroductionProps) {
  const imgUrl = getStrapiMedia(data.picture.data.attributes.url);
  const imgMobileUrl = getStrapiMedia(data.pictureMobile.data.attributes.url);

  return (
    <section className="py-24 bg-black md:py-20 dark:text-gray-100">
      <div className="flex items-center justify-center w-auto h-auto">
          <Image
            src={imgUrl || ""}
            alt={
              data.picture.data.attributes.alternativeText || "none provided"
            }
            className="hidden object-contain lg:block"
            width={1042}
            height={521}
            //quality={100}
          />
          <Image
            src={imgMobileUrl || ""}
            alt={
              data.pictureMobile.data.attributes.alternativeText || "none provided"
            }
            className="block object-contain lg:hidden"
            width={540}
            height={883}
            //quality={100}
          />
      </div>
      <div className="container flex flex-col items-end justify-center w-7/12 p-6 mx-auto font-medium font-bertioga lg:flex-row lg:justify-between">
        {/* <div className="flex flex-row justify-center p-6 text-center rounded-lg lg:max-w-md xl:max-w-lg lg:text-left"> */}
          <Markdown children={data.textLeft} className="text-3xl text-center uppercase lg:text-left" />
          <Image
            src="/smiley.svg"
            alt="Smiley"
            width={27}
            height={27}
            className="relative bottom-1"
          />
          <Markdown children={data.textRight} className="text-3xl text-center uppercase lg:text-right" />
          {/* <HighlightedText
            text={data.textLeft}
            tag="p"
            className="text-3xl uppercase"
            color="dark:text-violet-400"
          />

          <HighlightedText
            text={data.textRight}
            tag="p"
            className="text-3xl uppercase"
            color="dark:text-violet-400"
          /> */}
        {/* </div> */}
        
      </div>
      <div className="flex flex-col items-center justify-center gap-8 mt-16 lg:flex-row">
        {data.buttons.map((button: Button, index: number) => (
          <Button size="lg" variant={button.type === "primary" ? "primary" : "secondary"} asChild>
            <Link
              key={index}
              href={button.url}
              target={button.newTab ? "_blank" : "_self"}
            >
              {button.text}
            </Link>
          </Button>
        ))}
      </div>
    </section>
  );
}
