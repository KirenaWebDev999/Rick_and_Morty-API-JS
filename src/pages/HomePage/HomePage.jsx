import {NavLink, Route} from "react-router";
import {CharacterPage} from "../CharacterPage/CharacterPage.jsx";
import {LocationPage} from "../LocationPage/LocationPage.jsx";
import {EpisodePage} from "../EpisodePage/EpisodePage.jsx";


export const HomePage = () => {
    return (
        <>
            <NavLink to="/characters">Characters</NavLink>
            <NavLink to="/locations">Locations</NavLink>
            <NavLink to="/episodes">Episodes</NavLink>
        </>
    );
};
