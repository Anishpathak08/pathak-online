import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import ne from "./locales/ne.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ne: { translation: ne }
    },
    lng: "en", // default
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;
