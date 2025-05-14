import {useEffect} from "react";
import axios from "axios";


export const CharacterPage = () => {

    useEffect(() => {
        //  side effect
        axios.get("https://rickandmortyapi.com/api/character")
    }, [])

    return (
        <div>
            <h1 className={'pageTitle'}>CharacterPage</h1>
        </div>
    );
};

