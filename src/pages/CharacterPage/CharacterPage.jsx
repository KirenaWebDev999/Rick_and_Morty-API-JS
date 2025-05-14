import {useEffect, useState} from "react";
import axios from "axios";
import s from './CharacterPage.module.css'


export const CharacterPage = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        //  side effect
        axios.get("https://rickandmortyapi.com/api/character").then((res) => {
            console.log(res.data);
            setCharacters(res.data.results);
        })
    }, [])  // TODO пустой массив чтобы делать только 1 запрос на сервер


    return (
        <div>
            <h1 className={'pageTitle'}>CharacterPage</h1>
            {characters.length && (
                <div className={s.character}>
                    <div className={s.characterLink}>{characters[0].name}</div>
                    <img src={characters[0].image} alt={`${characters[0].name} avatar`} />
                </div>
            )}
        </div>
    );
};

