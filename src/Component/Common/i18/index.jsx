// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import Backend from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";
// import translationEN from "../../../translationEn.json";
// import translationDE from "../../../translationbf.json";

// // const availableLanguages = ["en","gj","hi","ka","ma","pu","ta","te","ur"];
// // don't want to use this?
// // have a look at the Quick start guide
// // for passing in lng and translations on init
// const resources = {
//     en: {
//       translation: translationEN
//     },
//     ur: {
//       translation: translationDE
//     }
//   };
// const option ={
//   order:['navigator','htmlTag','path','subdmail'],
//   checkWhiteList:true
// }
// i18n
//   // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
//   // learn more: https://github.com/i18next/i18next-http-backend
//   // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
//   .use(Backend)
//   // detect user language
//   // learn more: https://github.com/i18next/i18next-browser-languageDetector
//   .use(LanguageDetector)
//   // pass the i18n instance to react-i18next.
//   .use(initReactI18next)
//   // init i18next
//   // for all options read: https://www.i18next.com/overview/configuration-options
//   .init({
//     // fallbackLng: "en",
//     // debug: true,
//     // whitelist: resources,
//     // detectio:option,
//     // interpolation: {
//     //   escapeValue: false, // not needed for react as it escapes by default
//     // },
//     resources,
//         fallbackLng: "en",
//         debug: true,
//         // lng: "en",
//         interpolation: {
//           escapeValue: false // not needed for react as it escapes by default
//         }
//   });

// export default i18n;

import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import English from "../../../assets/Locales/en/translation.json";
import Gujarati from "../../../assets/Locales/gj/translation.json";
import Hindi from "../../../assets/Locales/hi/translation.json";
import Kannada from "../../../assets/Locales/ka/translation.json";
import Marathi from "../../../assets/Locales/ma/translation.json";
import Punjabi from "../../../assets/Locales/pu/translation.json";
import Tamil from "../../../assets/Locales/ta/translation.json";
import Teluge from "../../../assets/Locales/te/translation.json";
import Urdu from "../../../assets/Locales/ur/translation.json";
// {/* Rumeno farm  */}
// {/* Rumeno */}
// {/* Veterinary */}
const resources = {
  en: {
    translation: English,
  },
  gj: {
    translation: Gujarati,
  },
  hi: {
    translation: Hindi,
  },
  ka: {
    translation: Kannada,
  },
  ma: {
    translation: Marathi,
  },
  pu: {
    translation: Punjabi,
  },
  ta: {
    translation: Tamil,
  },
  te: {
    translation: Teluge,
  },
  ur: {
    translation: Urdu,
  },
};
// const option = {
//   order: ["navigator", "htmlTag", "path", "subdmail"],
//   checkWhiteList: true,
// };
i18n
  .use(Backend)

  .use(LanguageDetector)

  .use(initReactI18next)

  .init({
    resources,
    fallbackLng: "en",
    debug: true,
    // detectio: option,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
      // {/* Rumeno farm  */}
      // {/* Rumeno */}
      // {/* Veterinary */}
    
  });

export default i18n;
