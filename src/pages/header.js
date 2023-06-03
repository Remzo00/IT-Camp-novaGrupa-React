import React from "react";
import { Link, NavLink } from "react-router-dom";
import './header.css';

const Header = () => {
    return(
        <ul>
            <li><NavLink className={({isActive}) => (isActive ? 'active' : '')} to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
        </ul>
    )
}

export default Header