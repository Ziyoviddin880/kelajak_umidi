import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import uzTranslation from "./locales/uz.json";
import ruTranslation from "./locales/ru.json";
import enTranslation from "./locales/en.json";
import krilTranslation from "./locales/kril.json";

const language = localStorage.getItem("i18nextLng") || "uz";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uz",
    lng: language,
    debug: true,
    resources: {
      uz: { translation: uzTranslation },
      уз: { translation: krilTranslation },
      en: { translation: enTranslation },
      ru: { translation: ruTranslation },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
