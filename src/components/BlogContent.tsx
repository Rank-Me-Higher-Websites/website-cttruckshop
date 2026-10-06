import { useEffect, useMemo, useState } from "react";
import { replaceContentImages } from "@/lib/blogImageMap";
import { LANG } from "@/i18n/lang";

interface BlogContentProps {
  html: string;
  slug?: string;
}

// Whole-article translations live in src/i18n/blog/<lang>/<slug>.json
// ({ content }) and are code-split per post. Titles, excerpts and meta come
// through the page dictionary like the rest of the site.
const translatedBodies = import.meta.glob<{ content: string }>("../i18n/blog/*/*.json", {
  import: "default",
});

const BlogContent = ({ html, slug }: BlogContentProps) => {
  const loader =
    LANG !== "en" && slug ? translatedBodies[`../i18n/blog/${LANG}/${slug}.json`] : undefined;
  const [translated, setTranslated] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    setTranslated(null);
    loader?.()
      .then((t) => alive && setTranslated(t.content))
      .catch((err) => console.error(`Blog translation failed to load for ${slug}`, err));
    return () => {
      alive = false;
    };
  }, [loader, slug]);

  const source = loader ? translated : html;
  const processedHtml = useMemo(
    () => (source === null ? "" : replaceContentImages(source)),
    [source],
  );

  if (loader && translated === null) {
    // Brief wait for the translated chunk; avoids flashing the English article.
    return <div className="blog-content min-h-[60vh]" aria-busy="true" />;
  }

  return (
    <div
      className="blog-content"
      // Articles are translated whole (or shown in English until translated);
      // keep the snippet-level DOM translator out.
      data-no-translate=""
      dangerouslySetInnerHTML={{ __html: processedHtml }}
    />
  );
};

export default BlogContent;
