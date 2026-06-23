import { useLanguage } from '../contexts/LanguageContext';
import { es } from './es';
import { en } from './en';
import { pt } from './pt';

export type { Translations } from './es';

export function useT() {
  const { lang } = useLanguage();
  if (lang === 'en') return en;
  if (lang === 'pt') return pt;
  return es;
}
