import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { characters } from './data/data'

const characterTranslations = {
  pt: {
    blackheart: {
      name: 'Blackheart',
      description:
        "Blackheart é um demônio criado por Mefisto a partir do acúmulo dos pecados cometidos na cidade de Christ's Crown, que começou com o assassinato de Abigail Housman. Ele logo começou a questionar seu pai e sua maneira antiquada de personificar o mal. Às vezes ele é seu aliado, às vezes seu rival, tentando destroná-lo como rei do Inferno. Blackheart é frequentemente o antagonista do Motoqueiro Fantasma, mas também já enfrentou outros heróis, como o Quarteto Fantástico e os Campeões.",
    },
    mrFreeze: {
      name: 'Senhor Frio',
      description:
        'O Senhor Frio, cujo nome real é Dr. Victor Fries, é um supervilão da DC Comics e um dos inimigos do Batman. Ele é um cientista especialista em criogenia que precisa viver em temperaturas abaixo de zero e usar um traje refrigerado para sobreviver.',
    },
    blackMask: {
      name: 'Mascara Negra',
      description:
        "O Máscara Negra é um supervilão da DC Comics e um dos principais chefões do crime de Gotham City, rival frequente do Batman. Sua identidade mais conhecida é Roman Sionis,",
    },
    mojo: {
      name: 'Mojo',
      description:
        'Mojo é um supervilão alienígena e interdimensional da Marvel Comics, conhecido como o tirano do Mojoverso e um dos adversários mais excêntricos dos X-Men'
    },
    reiDoCrime: {
      name: 'Rei do Crime',
      description: 'Retratado como um dos mais temidos e influentes chefes do crime do Universo Marvel, geralmente associado ao submundo de Nova Iorque.'
    }
  },
  en: {
    blackheart: {
      name: 'Blackheart',
      description:
        "Blackheart is a demon created by Mephisto from the accumulated sins committed in the town of Christ's Crown, beginning with the murder of Abigail Housman. He soon began questioning his father and his old-fashioned way of embodying evil. Sometimes he is Mephisto's ally, sometimes his rival, seeking to dethrone him as King of Hell. Blackheart is often an antagonist of Ghost Rider, but has also faced other heroes, including the Fantastic Four and the Champions.",
    },
    mrFreeze: {
      name: 'Mr. Freeze',
      description:
        'Mr. Freeze, whose real name is Dr. Victor Fries, is a DC Comics supervillain and one of Batman’s enemies. He is a cryogenics expert who must live in subzero temperatures and wear a refrigerated suit to survive.',
    },
    blackMask: {
      name: 'Black Mask',
      description:
        'Black Mask is a DC Comics supervillain and one of the main crime bosses of Gotham City, a frequent rival of Batman. His best-known identity is Roman Sionis.'
    },
    mojo: {
      name: 'Mojo',
      description:
        'Mojo is an alien, interdimensional supervillain from Marvel Comics, known as the tyrant of the Mojoverse and one of the X-Mens most eccentric adversaries.'
    },
    reiDoCrime: {
      name: 'Kingpin',
      description:
        'Portrayed as one of the most feared and influential crime bosses in the Marvel Universe, typically associated with the New York City underworld.'
    },

  },
}

const makeCharacterTranslations = (language) =>
  Object.fromEntries(
    characters.map(({ translationKey }) => [
      translationKey,
      characterTranslations[language][translationKey],
    ]),
  )

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      translation: {
        title: 'Personagens - Vilões',
        characters: makeCharacterTranslations('pt'),
      },
    },
    en: {
      translation: {
        title: 'Characters - Villains',
        characters: makeCharacterTranslations('en'),
      },
    },
  },
  lng: 'pt',
  fallbackLng: 'pt',
  interpolation: { escapeValue: false },
})

export default i18n
