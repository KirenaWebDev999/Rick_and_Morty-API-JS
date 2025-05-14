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
        <div className={'pageContainer'}>
            <h1 className={'pageTitle'}>EpisodePage</h1>
            {episodes.length && (
                <div>
                    {episodes.map((episode) => {
                        return (
                            <div key={episode.id}>
                                <ul>
                                    <li>Episode name: <b>{episode.name}</b></li>
                                    <li>Date of episode aired: <b>{episode.air_date}</b></li>
                                    <li>Episode: <b>{episode.episode}</b></li>
                                    <li>List of characters who were seen in the episode: <b>{episode.characters.length}</b></li>
                                </ul>
                                <hr/>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    );
};

