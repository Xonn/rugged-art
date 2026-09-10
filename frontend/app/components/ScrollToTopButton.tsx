"use client";

import ScrollToTop from "react-scroll-to-top";
import { ChevronUp } from "lucide-react";

export default function ScrollToTopButton() {
  return (
    <ScrollToTop
      smooth
      width="32"
      height="32"
      className="!bg-black !text-white !w-8 !h-8 !rounded-full"
      component={<ChevronUp className="!inline" />}
    />
  );
}
