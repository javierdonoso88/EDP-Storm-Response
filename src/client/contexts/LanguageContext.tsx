import { createContext, useContext, useState } from 'react';

export type Lang = 'es' | 'en' | 'pt';

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  cycleLang: () => void;
}

export const LanguageContext = createContext<LangCtx>({ lang: 'es', setLang: () => {}, cycleLang: () => {} });

const CYCLE: Lang[] = ['es', 'en', 'pt'];

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('src-lang') as Lang;
    return CYCLE.includes(saved) ? saved : 'es';
  });

  function setLang(l: Lang) {
    setLangState(l);
    localStorage.setItem('src-lang', l);
  }

  function cycleLang() {
    const next = CYCLE[(CYCLE.indexOf(lang) + 1) % CYCLE.length];
    setLang(next);
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, cycleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
