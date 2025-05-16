import {useEffect, useState} from "react";
import axios from "axios";
import s from './CharacterPage.module.css'


export const CharacterPage = () => {

    const [characters, setCharacters] = useState([]);

    const [info, setInfo] = useState({
        count: 0,
        pages: 0,
        next: null,
        prev: null,
    })

    const fetchData = (url) => {
        axios.get(url).then((res) => {
            setCharacters(res.data.results);
            setInfo(res.data.info);
        })
    }

    useEffect(() => {
        fetchData("https://rickandmortyapi.com/api/character");
    }, [])  // TODO пустой массив чтобы делать только 1 запрос на сервер
    
    const previousPageHandler = () => {
        fetchData(info.prev)
    }

    const nextPageHandler = () => {
        fetchData(info.next)
    }

    const searchHandler = (event) => {
        const value =  event.currentTarget.value
        fetchData(`https://rickandmortyapi.com/api/character?name=${value}`)
        fetchData(`https://rickandmortyapi.com/api/character?status=${value}`)
        fetchData(`https://rickandmortyapi.com/api/character?species=${value}`)
        fetchData(`https://rickandmortyapi.com/api/character?type=${value}`)
        fetchData(`https://rickandmortyapi.com/api/character?gender=${value}`)

        // const status = 'alive' | 'dead' | 'unknown'
        // const gender = 'female' | 'male' | 'genderless' | 'unknown'
    }


    return (
        <div className={"pageContainer"}>
            <h1 className={"pageTitle"}>CharacterPage</h1>
            <input type="search" className={s.search} onChange={searchHandler} placeholder="Search..." />
            {characters.length && (
                <>
                    {
                        <div className={s.characters}>
                            {characters.map((character) => {
                                return (
                                    <div key={character.id} className={s.character}>
                                        <div className={s.characterLink}>{character.name}</div>
                                        <img src={character.image} alt={`${character.name} avatar`} />
                                    </div>
                                )
                            })}
                        </div>
                    }
                    <div className={s.buttonContainer}>
                        <button className="linkButton" disabled={info.prev === null} onClick={previousPageHandler}>
                            Previous
                        </button>
                        <button className="linkButton" disabled={info.next === null} onClick={nextPageHandler}>
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

