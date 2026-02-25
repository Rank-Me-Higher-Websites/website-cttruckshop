interface BlogContentProps {
  html: string;
}

const BlogContent = ({ html }: BlogContentProps) => {
  return (
    <div
      className="blog-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default BlogContent;
