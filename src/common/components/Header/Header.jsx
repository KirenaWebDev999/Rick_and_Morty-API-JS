import logo from '../../../assets/img/logo.png'
import {NavLink} from "react-router";
import s from './Header.module.css'

export const Header = () => {
    return (
        <div className={s.container}>
            <NavLink to="/">
                <img className={s.logo} src={logo} alt="logotype"/>
            </NavLink>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/characters">Characters</NavLink>
            <NavLink to="/locations">Locations</NavLink>
            <NavLink to="/episodes">Episodes</NavLink>
        </div>
    );
};

