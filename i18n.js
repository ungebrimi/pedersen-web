import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import enHomepage from "@/locales/en/homepage";
import noHomepage from "@/locales/no/homepage";
import enCompany from "@/locales/en/company";
import noCompany from "@/locales/no/company";
import enContact from "@/locales/en/contact";
import noContact from "@/locales/no/contact";
import enNavigation from "@/locales/en/navigation";
import noNavigation from "@/locales/no/navigation";
import enPricing from "@/locales/en/pricing";
import noPricing from "@/locales/no/pricing";

const resources = {
  en: {
    homepage: enHomepage,
    company: enCompany,
    contact: enContact,
    navigation: enNavigation,
    pricing: enPricing,
  },
  no: {
    homepage: noHomepage,
    company: noCompany,
    contact: noContact,
    navigation: noNavigation,
    pricing: noPricing,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
