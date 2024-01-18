import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export interface RichTextProps {
  data: {
    body: string;
  };
}

export default function RichText({ data }: RichTextProps) {
  // TODO: STYLE THE MARKDOWN
  return (
    <section className="py-6 whitespace-pre-wrap rich-text dark:bg-black dark:text-gray-50 ">
      <Markdown children={data.body} remarkPlugins={[remarkGfm]} />
    </section>
  );
}
