import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    // lng: 'en',  - this overwrites browser preference, and forces 'en' as language on load.
    fallBackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: {
          // text in english
          intro: {
            intro_text: 'Welcome to this page. This page was made to test localization with i18next.'
          },
          poem: {
            poem_title: 'In a Station of the Metro',
            line_1: 'The apparition of these faces in the crowd:',
            line_2: 'Petals on a wet, black bough.',
            by_line: 'By Ezra Pound'
          }
        }
      },
      da: {
        translation: {
          // text in danish
          intro: {
            intro_text: 'Velkommen til denne side. Denne side blev bygget for at teste localization med i18next'
          },
          poem: {
            poem_title: 'På en metrostation',
            line_1: 'Genfærdet af disse ansigter i mængden:',
            line_2: 'Kronblade på en våd, sort gren.',
            by_line: 'Af Ezra Pound'
          }
        }
      }
    }
  })

// Note: In terms of naming conventions of keys/identifiers (e.g. by_line),
// there are many different conventions you could follow. Here, I went with snake-case (identifier).
// Other options:
// - camelCase: byLine (identifier)
// - Write as string (key), with "": "Poem title"
// String is good if you want to use spaces or special sybols.