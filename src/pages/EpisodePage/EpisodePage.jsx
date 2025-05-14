import {useEffect} from "react";
import axios from "axios";


export const EpisodePage = () => {

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/episode').then((res) => {
            console.log(res.data);
        })
    })

    return (
        <div>
            <h1 className={'pageTitle'}>EpisodePage</h1>
        </div>
    );
};

