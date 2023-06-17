export type language = "en"|"ru";

export const languages = {
  en: 'English',
  ru: 'Russian'
}

export const defaultLang: language = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.CV': 'CV',
    'nav.about': 'About me',
    'nav.twitter': 'Twitter',
  },
  ru: {
    'nav.home': 'Главная',
    'nav.blog': 'Блог',
    'nav.CV': 'Резюме',
    'nav.about': 'Обо мне',
  },
 } as const;