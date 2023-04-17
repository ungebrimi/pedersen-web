import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import enHomepage from "@/locales/en/homepage";
import frHomepage from "@/locales/fr/homepage";
import noHomepage from "@/locales/no/homepage";
import enCompany from "@/locales/en/company";
import frCompany from "@/locales/fr/company";
import noCompany from "@/locales/no/company";
import enContact from "@/locales/en/contact";
import frContact from "@/locales/fr/contact";
import noContact from "@/locales/no/contact";
import enNavigation from "@/locales/en/navigation";
import frNavigation from "@/locales/fr/navigation";
import noNavigation from "@/locales/no/navigation";
import enPricing from "@/locales/en/pricing";
import frPricing from "@/locales/fr/pricing";
import noPricing from "@/locales/no/pricing";

const resources = {
  en: {
    homepage: enHomepage,
    company: enCompany,
    contact: enContact,
    navigation: enNavigation,
    pricing: enPricing,
  },
  fr: {
    homepage: frHomepage,
    company: frCompany,
    contact: frContact,
    navigation: frNavigation,
    pricing: frPricing,
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
