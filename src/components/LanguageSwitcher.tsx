import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { LANG, LANGS, switchLanguageUrl, type Lang } from "@/i18n/lang";
import { cn } from "@/lib/utils";

const LANG_NAMES: Record<Lang, string> = { en: "English", es: "Español", ru: "Русский" };

// Lowercase code + blue chevron trigger, white dropdown list (en / es / ru).
// Switching is a full page load: the router basename is fixed per language.
const LanguageSwitcher = ({ className }: { className?: string }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={cn("relative", className)} data-no-translate>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Language: ${LANG_NAMES[LANG]}`}
        className="flex items-center gap-2 px-3 py-2 text-[17px] font-medium text-foreground lowercase"
      >
        {LANG}
        <ChevronDown
          className={cn("h-5 w-5 text-accent transition-transform", open && "rotate-180")}
          strokeWidth={2}
        />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full mt-1 min-w-[96px] bg-white py-2 shadow-lg z-[110]"
        >
          {LANGS.map((l) => (
            <li key={l} role="option" aria-selected={l === LANG}>
              <a
                href={switchLanguageUrl(l)}
                hrefLang={l}
                lang={l}
                title={LANG_NAMES[l]}
                className={cn(
                  "block px-5 py-2 text-[17px] lowercase text-gray-900 hover:bg-gray-100",
                  l === LANG && "font-semibold",
                )}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
