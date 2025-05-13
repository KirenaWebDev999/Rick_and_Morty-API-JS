import logo from '../../../assets/img/logo.png'
import {NavLink} from "react-router";

export const Header = () => {
    return (
        <>
            <NavLink to="/">
                <img src={logo} alt="logotype"/>
            </NavLink>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/characters">Characters</NavLink>
            <NavLink to="/locations">Locations</NavLink>
            <NavLink to="/episodes">Episodes</NavLink>
        </>
    );
};

