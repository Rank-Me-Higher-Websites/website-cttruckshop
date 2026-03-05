import { useMemo } from "react";
import { replaceContentImages } from "@/lib/blogImageMap";

interface BlogContentProps {
  html: string;
}

const BlogContent = ({ html }: BlogContentProps) => {
  const processedHtml = useMemo(() => replaceContentImages(html), [html]);

  return (
    <div
      className="blog-content"
      dangerouslySetInnerHTML={{ __html: processedHtml }}
    />
  );
};

export default BlogContent;
