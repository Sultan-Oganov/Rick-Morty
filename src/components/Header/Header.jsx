import React from 'react';
import './Header.scss'
import logo from '../../images/R&M_logo.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <NavLink exact to="/">
                <img width="200" src={logo} alt="Logo" />
            </NavLink>
            <nav>
                <li>
                    <NavLink exact to="/characters">Characters</NavLink>
                </li>
                <li>
                    <NavLink exact to="/episodes">Episodes</NavLink>
                </li>
                <li>
                    <NavLink exact to="/locations">Locations</NavLink>
                </li>
                <li>
                    <NavLink exact to="/myWatchList">My watch list</NavLink>
                </li>
            </nav>
        </header>
    );
};

export default Header;