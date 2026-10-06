// Site language is decided once, from the first URL segment:
//   /...      -> English (default, unprefixed)
//   /es/...   -> Spanish
//   /ru/...   -> Russian
// The router runs with basename "/es" or "/ru", so every <Link> and navigate()
// stays inside the chosen language without touching the page components.
// Switching language is a full page load (see switchLanguageUrl).

export type Lang = "en" | "es" | "ru";

export const LANGS: Lang[] = ["en", "es", "ru"];
export const NON_DEFAULT_LANGS: Lang[] = ["es", "ru"];

export const LANG_HTML: Record<Lang, string> = { en: "en", es: "es", ru: "ru" };

function detectLang(pathname: string): Lang {
  const seg = pathname.split("/")[1];
  return seg === "es" || seg === "ru" ? seg : "en";
}

export const LANG: Lang =
  typeof window === "undefined" ? "en" : detectLang(window.location.pathname);

export const BASENAME = LANG === "en" ? "" : `/${LANG}`;

/** Path for `pathname` (router path, no language prefix) in language `lang`. */
export function localizedPath(pathname: string, lang: Lang): string {
  const clean = pathname === "/" ? "" : pathname;
  return lang === "en" ? clean || "/" : `/${lang}${clean}`;
}

/** Absolute URL of the current page in another language (keeps query + hash). */
export function switchLanguageUrl(lang: Lang): string {
  const { pathname, search, hash } = window.location;
  const routerPath = BASENAME && pathname.startsWith(BASENAME)
    ? pathname.slice(BASENAME.length) || "/"
    : pathname;
  return `${localizedPath(routerPath, lang)}${search}${hash}`;
}
