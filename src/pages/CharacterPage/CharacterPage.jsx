import {useEffect} from "react";
import axios from "axios";


export const CharacterPage = () => {

    useEffect(() => {
        //  side effect
        axios.get("https://rickandmortyapi.com/api/character").then((res) => {
            console.log(res.data);
        })


    }, [])  // TODO пустой массив чтобы делать только 1 запрос на сервер

    return (
        <div>
            <h1 className={'pageTitle'}>CharacterPage</h1>
        </div>
    );
};

