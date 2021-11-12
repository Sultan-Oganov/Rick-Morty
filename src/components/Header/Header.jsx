import React from 'react';
import '../../styles/Header/Header.scss';
import logo from '../../images/R&M_logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <NavLink className="header__logo" exact to="/">
                <img className="header__logo-img" width="200" src={logo} alt="Logo" />
            </NavLink>
            <nav className="header__nav menu">
                <li className="menu__item">
                    <NavLink className="menu__link" exact to="/characters">Characters</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink className="menu__link" exact to="/episodes">Episodes</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink className="menu__link" exact to="/locations">Locations</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink className="menu__link" exact to="/mywatchList">My watch list</NavLink>
                </li>
            </nav>
        </header>
    );
};

export default Header;