import { useTranslation } from 'react-i18next'
import { characters } from '../data/data'

function Home() {
  const { t, i18n } = useTranslation()

  return (
    <main>
      <button onClick={() => i18n.changeLanguage('pt')}>Português</button>
      <button onClick={() => i18n.changeLanguage('en')}>English</button>

      <h1>{t('title')}</h1>

      {characters.map((character) => (
        <article key={character.id}>
          <h2>{t(`characters.${character.translationKey}.name`)}</h2>
          <p>{t(`characters.${character.translationKey}.description`)}</p>
          <p>{character.franchise}</p>
          <img src={character.image} alt={t(`characters.${character.translationKey}.name`)} />
        </article>
      ))}
    </main>
  )
}

export default Home
