import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { ENGLISH } from "@/locales/en/translation";
import { ARABIC } from "@/locales/ar/translation";

const resources = {
  en: {
    translation: ENGLISH,
  },
  ar: {
    translation: ARABIC,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
});

export default i18n;
