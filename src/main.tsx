import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { LANG, LANG_HTML } from "./i18n/lang";

async function boot() {
  document.documentElement.lang = LANG_HTML[LANG];
  if (LANG !== "en") {
    // Load the dictionary before the first render so English never shows.
    const [{ default: dict }, { startDomTranslation }] = await Promise.all([
      import(`./i18n/dict/${LANG}.json`),
      import("./i18n/domTranslator"),
    ]);
    startDomTranslation(dict as Record<string, string>);
  }
  createRoot(document.getElementById("root")!).render(<App />);
}

boot();
