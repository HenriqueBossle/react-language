import { useEffect, useState } from "react"
import charactersData from "../data/data.js"
import { useTranslation } from 'react-i18next';


function Home(){
    const[characters, setCharacters] = useState(charactersData)
    const { t, i18n } = useTranslation();

    return(
        <>
            <div>
                <h1>{t('Personagens - Vilões')}</h1>
                {characters.map(character => {
                    return(<li key={character.id}> 
                            <img src={character.image} alt={character.name} style={{
                                    width: '620px',
                                    height: '380px',
                                    objectFit: 'cover',
                                    borderRadius: '8px'
                                }} />
                                <h1>{character.name}</h1>
                                <h2>{character.franchise}</h2>
                                <h3>{character.description}</h3>
                            </li>)
                })}
            </div>
        </>
    )
}

export default Home