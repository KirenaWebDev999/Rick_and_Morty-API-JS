import {NavLink} from "react-router";
import s from './HomePage.module.css'


export const HomePage = () => {
    return (
        <>
            <h1 className={s.title}>The Rick and Morty</h1>
            <div>
                <NavLink to="/characters">Characters</NavLink>
                <NavLink to="/locations">Locations</NavLink>
                <NavLink to="/episodes">Episodes</NavLink>
            </div>
        </>
    );
};
