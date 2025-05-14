import {useEffect, useState} from "react";
import axios from "axios";


export const EpisodePage = () => {

    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/episode').then((res) => {
            console.log(res.data);
            setEpisodes(res.data.results);
        })
    })

    return (
        <div>
            <h1 className={'pageTitle'}>EpisodePage</h1>
        </div>
    );
};

