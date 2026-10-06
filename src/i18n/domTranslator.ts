// Translates the rendered page in place for /es and /ru.
//
// The page components hold their English copy inline (≈10k lines of JSX), so
// instead of rewriting every component around t() keys, this walks the DOM and
// swaps every text node / translatable attribute whose English text is in the
// language dictionary (src/i18n/dict/<lang>.json, keyed by whitespace-collapsed
// English). A MutationObserver re-applies it on every React render. Observer
// callbacks run as microtasks before paint, so English never flashes.
//
// Opt out of translation with data-no-translate (or translate="no") on an
// element — used for blog bodies, which ship as whole translated documents.
//
// Untranslated strings are collected on window.__i18nMissing so a crawl of the
// site in /es or /ru lists exactly what the dictionary still lacks.

import { BASENAME } from "./lang";

type Dict = Record<string, string>;

const ATTRS = ["placeholder", "alt", "title", "aria-label"] as const;
const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "CODE", "PRE"]);
const HAS_LETTER = /\p{L}/u;
const ASSET_PATH = /\.[a-z0-9]{2,5}($|\?)/i;
const SITE_SUFFIX = " | CT Truck & Trailer Shop";
const MIXED_SEP = " ⟦|⟧ ";
const INLINE_TAGS = new Set(["SPAN", "STRONG", "EM", "B", "I", "A", "U", "MARK", "SMALL", "SUP", "SUB", "ABBR", "CODE"]);

declare global {
  interface Window {
    __i18nMissing?: Set<string>;
  }
}

export function normalize(s: string): string {
  return s.replace(/\s+/g, " ").trim();
}

export function startDomTranslation(dict: Dict): void {
  const missing = (window.__i18nMissing = new Set<string>());

  const lookup = (raw: string): string | null => {
    const key = normalize(raw);
    if (!key || !HAS_LETTER.test(key)) return null;
    const hit = dict[key];
    if (hit !== undefined) return hit;
    // Values already translated (or deliberately identical) are not "missing".
    missing.add(key);
    return null;
  };

  const translatedSet = new Set<string>();
  for (const v of Object.values(dict)) {
    if (v.includes(MIXED_SEP)) v.split(MIXED_SEP).forEach((p) => translatedSet.add(normalize(p)));
    else translatedSet.add(normalize(v));
  }

  const translateString = (raw: string): string | null => {
    const key = normalize(raw);
    if (translatedSet.has(key)) return null;
    const hit = lookup(raw);
    if (hit === null || hit === key) return null;
    const lead = raw.match(/^\s*/)?.[0] ?? "";
    const trail = raw.match(/\s*$/)?.[0] ?? "";
    return lead + hit + trail;
  };

  const blocked = (el: Element | null): boolean =>
    !!el && (SKIP_TAGS.has(el.tagName) || !!el.closest("[data-no-translate],[translate='no']"));

  // Sentences split by inline highlights ("Phoenix's Premier <span>Truck &
  // Trailer</span> Repair Shop") are translated as a whole: the dictionary key is
  // the slot texts joined by MIXED_SEP, the value has the same number of slots
  // in the same order. Only text node contents change, never the node structure
  // React owns.
  const mixedSlots = (el: Element): Text[] | null => {
    const slots: Text[] = [];
    let direct = false;
    let inline = false;
    for (const n of Array.from(el.childNodes)) {
      if (n.nodeType === Node.TEXT_NODE) {
        const t = n as Text;
        if (normalize(t.data)) {
          slots.push(t);
          if (HAS_LETTER.test(t.data)) direct = true;
        }
      } else if (n.nodeType === Node.ELEMENT_NODE) {
        const c = n as Element;
        if (c.tagName === "BR") continue;
        const only = c.firstChild;
        if (INLINE_TAGS.has(c.tagName) && c.childNodes.length === 1 && only?.nodeType === Node.TEXT_NODE) {
          if (normalize((only as Text).data)) {
            slots.push(only as Text);
            inline = true;
          }
        } else if (c.tagName.toLowerCase() === "svg" || !c.textContent?.trim()) {
          continue;
        } else {
          return null;
        }
      }
    }
    return direct && inline && slots.length > 1 ? slots : null;
  };

  const translateMixed = (el: Element | null): boolean => {
    if (!el || blocked(el)) return false;
    const slots = mixedSlots(el);
    if (!slots) return false;
    const key = slots.map((t) => normalize(t.data)).join(MIXED_SEP);
    const hit = dict[key];
    if (hit === undefined) {
      if (!slots.every((t) => translatedSet.has(normalize(t.data)))) missing.add(key);
      return false;
    }
    const parts = hit.split(MIXED_SEP);
    if (parts.length !== slots.length) return false;
    slots.forEach((t, i) => {
      const part = parts[i];
      const lead = t.data.match(/^\s*/)?.[0] ?? "";
      const trail = t.data.match(/\s*$/)?.[0] ?? "";
      const next = part ? lead + part + trail : "";
      if (t.data !== next) t.data = next;
    });
    return true;
  };

  const translateTextNode = (node: Text) => {
    if (blocked(node.parentElement)) return;
    const next = translateString(node.data);
    if (next !== null && next !== node.data) node.data = next;
  };

  const translateElementAttrs = (el: Element) => {
    if (blocked(el)) return;
    for (const attr of ATTRS) {
      const v = el.getAttribute(attr);
      if (!v) continue;
      const next = translateString(v);
      if (next !== null && next !== v) el.setAttribute(attr, next);
    }
    // Plain <a href="/x"> (not router <Link>, which already carries the
    // basename) would drop back to English; keep it in this language.
    if (el.tagName === "A") {
      const href = el.getAttribute("href");
      if (
        href && href.startsWith("/") && !href.startsWith("//") &&
        !href.startsWith(BASENAME + "/") && href !== BASENAME &&
        !ASSET_PATH.test(href)
      ) {
        el.setAttribute("href", BASENAME + (href === "/" ? "" : href));
      }
    }
  };

  const translateTree = (root: Node) => {
    if (root.nodeType === Node.TEXT_NODE) {
      translateTextNode(root as Text);
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE) return;
    const el = root as Element;
    translateMixed(el);
    el.querySelectorAll("*").forEach(translateMixed);
    translateElementAttrs(el);
    el.querySelectorAll("[placeholder],[alt],[title],[aria-label],a[href]").forEach(translateElementAttrs);
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    for (let n = walker.nextNode(); n; n = walker.nextNode()) translateTextNode(n as Text);
  };

  const translateHead = () => {
    const title = document.title;
    if (title) {
      // Page titles are "<page> | CT Truck & Trailer Shop"; translate the page part.
      const base = title.endsWith(SITE_SUFFIX) ? title.slice(0, -SITE_SUFFIX.length) : title;
      const next = translateString(base);
      if (next !== null) document.title = title.endsWith(SITE_SUFFIX) ? next + SITE_SUFFIX : next;
    }
    document
      .querySelectorAll<HTMLMetaElement>(
        'meta[name="description"],meta[property="og:description"],meta[property="twitter:description"]',
      )
      .forEach((m) => {
        const next = translateString(m.content);
        if (next !== null) m.content = next;
      });
  };

  translateTree(document.body);
  translateHead();

  new MutationObserver((records) => {
    for (const r of records) {
      if (r.type === "characterData") {
        const parent = r.target.parentElement;
        if (!translateMixed(parent) && !translateMixed(parent?.parentElement ?? null)) {
          translateTextNode(r.target as Text);
        }
      }
      else if (r.type === "attributes") translateElementAttrs(r.target as Element);
      else r.addedNodes.forEach(translateTree);
    }
  }).observe(document.body, {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: true,
    attributeFilter: [...ATTRS, "href"],
  });

  new MutationObserver(translateHead).observe(document.head, {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: true,
    attributeFilter: ["content"],
  });
}
