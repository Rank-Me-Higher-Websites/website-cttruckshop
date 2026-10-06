import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { LANG, LANGS, localizedPath, type Lang } from "@/i18n/lang";

const OG_LOCALE: Record<Lang, string> = { en: "en_US", es: "es_US", ru: "ru_RU" };

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "product";
  structuredData?: object | object[];
}

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = "website",
  structuredData,
}: SEOProps) => {
  const siteName = "CT Truck & Trailer Shop";
  const fullTitle = `${title} | ${siteName}`;
  const defaultImage = "/og-image.jpg";
  const { pathname } = useLocation();
  const origin = "https://cttruckshop.com";
  // English URL of this page; `canonical` props are always the English URL.
  const enUrl = canonical || `${origin}${pathname === "/" ? "" : pathname}`;
  const enPath = enUrl.startsWith(origin) ? enUrl.slice(origin.length) || "/" : "/";
  const urlFor = (lang: Lang) => {
    const p = localizedPath(enPath, lang);
    return `${origin}${p === "/" ? "" : p}`;
  };
  const canonicalUrl = urlFor(LANG);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      {LANGS.map((l) => (
        <link key={l} rel="alternate" hrefLang={l} href={urlFor(l)} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={urlFor("en")} />
      <meta property="og:locale" content={OG_LOCALE[LANG]} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={canonicalUrl} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage || defaultImage} />
      
      {/* Structured Data */}
      {structuredData && (
        Array.isArray(structuredData) ? (
          structuredData.map((data, i) => (
            <script key={i} type="application/ld+json">
              {JSON.stringify(data)}
            </script>
          ))
        ) : (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )
      )}
    </Helmet>
  );
};

export default SEO;
