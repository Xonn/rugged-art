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
    <section className="whitespace-pre-wrap rich-text">
      <Markdown children={data.body} remarkPlugins={[remarkGfm]} />
    </section>
  );
}
