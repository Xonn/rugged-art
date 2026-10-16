import Link from "next/link";
import Image from "next/image";
import { Download } from "lucide-react";
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
          />
          <Image
            src={imgMobileUrl || ""}
            alt={
              data.pictureMobile.data.attributes.alternativeText || "none provided"
            }
            className="block object-contain lg:hidden"
            width={540}
            height={883}
          />
      </div>
      <div className="container flex flex-col items-end justify-center w-7/12 p-6 mx-auto font-medium font-bertioga lg:flex-row lg:justify-between">
          <div className="text-3xl text-center uppercase lg:text-left">
            <Markdown>{data.textLeft}</Markdown>
          </div>
          <Image
            src="/smiley.svg"
            alt="Smiley"
            width={27}
            height={27}
            className="relative bottom-1"
          />
          <div className="text-3xl text-center uppercase lg:text-right">
            <Markdown>{data.textRight}</Markdown>
          </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 mt-16 lg:flex-row">
        {data.buttons.map((button: Button) => {
          const isPrimary = button.type === "primary";

          return (
            <Button
              key={button.id || button.url}
              size="lg"
              variant={isPrimary ? "primary" : "secondary"}
              asChild
            >
              <Link
                href={button.url}
                target={button.newTab ? "_blank" : "_self"}
                className={`group relative overflow-hidden transition-colors duration-300 ease-out motion-reduce:transition-none ${
                  isPrimary ? "hover:text-black focus-visible:text-black" : ""
                }`}
              >
                {isPrimary && (
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-white transition-transform duration-500 ease-out group-hover:scale-100 group-focus-visible:scale-100 motion-reduce:transition-none"
                  />
                )}
                <span className="relative z-10 inline-flex items-center">
                  {button.text}
                  {!isPrimary && (
                    <Download
                      aria-hidden="true"
                      className="absolute top-1/2 left-full ml-2 h-[18px] w-[18px] -translate-y-1/2 -translate-x-1.5 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 motion-reduce:transition-none"
                    />
                  )}
                </span>
              </Link>
            </Button>
          );
        })}
      </div>
    </section>
  );
}
