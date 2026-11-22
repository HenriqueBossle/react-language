import { useTranslation } from 'react-i18next'

function Home() {
  const { t, i18n } = useTranslation()

  return (
    <main>
      <button onClick={() => i18n.changeLanguage('pt')}>Português</button>
      <button onClick={() => i18n.changeLanguage('en')}>English</button>

      <h1>{t('title')}</h1>

      <h2>{t('characters.blackheart.name')}</h2>
      <p>{t('characters.blackheart.description')}</p>

      <h2>{t('characters.mrFreeze.name')}</h2>
      <p>{t('characters.mrFreeze.description')}</p>
    </main>
  )
}

export default Home