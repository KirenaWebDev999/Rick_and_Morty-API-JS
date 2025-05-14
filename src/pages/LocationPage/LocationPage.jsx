import {useEffect, useState} from "react";
import axios from "axios";


export const LocationPage = () => {

    const [locations, setLocations] = useState({})

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/location").then((res) => {
            console.log(res.data);
            setLocations(res.data.results);
        })
    })

    return (
        <div>
            <h1 className={'pageTitle'}>LocationPage</h1>
            <div>{locations.length && locations[0].name}</div>
        </div>
    );
};

