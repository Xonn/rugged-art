import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Email from "../components/Email";
import Introduction from "../components/Introduction";
import Services from "../components/Services";
import HeadingRichtext from "../components/HeadingRichtext";
import LocationContact from "../components/LocationContact";

export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case "sections.hero":
      return <Hero key={index} data={section} />;
    case "sections.introduction":
      return <Introduction key={index} data={section} />;
    case "sections.features":
      return <Features key={index} data={section} />;
    case "sections.testimonials-group":
      return <Testimonials key={index} data={section} />;
    case "sections.pricing":
      return <Pricing key={index} data={section} />;
    case "sections.lead-form":
      return <Email key={index} data={section} />;
    case "sections.services":
      return <Services key={index} data={section} />;
    case "sections.heading-rich-text":
      return <HeadingRichtext key={index} data={section} />;
    case "sections.location-contact":
      return <LocationContact key={index} data={section} />;
    default:
      return null;
  }
}
