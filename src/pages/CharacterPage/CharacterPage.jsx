import {useEffect, useState} from "react";
import axios from "axios";


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
            <div>{characters.length && characters[0].name}</div>
        </div>
    );
};

