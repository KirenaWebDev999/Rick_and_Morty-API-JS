import {useEffect} from "react";
import axios from "axios";


export const LocationPage = () => {

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/location").then((res) => {
            console.log(res.data);
        })
    })

    return (
        <div>
            <h1 className={'pageTitle'}>LocationPage</h1>
        </div>
    );
};

