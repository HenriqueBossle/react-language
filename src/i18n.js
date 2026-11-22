import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      translation: {
        title: 'Personagens - Vilões',
        characters: {
          blackheart: {
            name: 'Blackheart',
            description: 'Um demônio criado por Mefisto.',
          },
          mrFreeze: {
            name: 'Senhor Frio',
            description: 'Um cientista especialista em criogenia.',
          },
        },
      },
    },
    en: {
      translation: {
        title: 'Characters - Villains',
        characters: {
          blackheart: {
            name: 'Blackheart',
            description: 'A demon created by Mephisto.',
          },
          mrFreeze: {
            name: 'Mr. Freeze',
            description: 'A scientist specializing in cryogenics.',
          },
        },
      },
    },
  },
  lng: 'pt',
  fallbackLng: 'pt',
  interpolation: { escapeValue: false },
})

export default i18n