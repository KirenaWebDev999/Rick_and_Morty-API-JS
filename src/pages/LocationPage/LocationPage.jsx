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
        <div className={'pageContainer'}>
            <h1 className={'pageTitle'}>LocationPage</h1>
            {locations.length && (
                <div>
                    {locations.map((location) => {
                        return (
                            <div key={location.id}>
                                <ul>
                                    <li>Location name: <b>{location.name}</b></li>
                                    <li>Location type: <b>{location.type}</b></li>
                                    <li>Measurement where the location is: <b>{location.dimension}</b></li>
                                    <li>Number of characters seen in this location: <b>{location.residents.length}</b></li>
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

