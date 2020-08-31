import React from 'react';
import { Link } from 'react-router-dom'
import logoimg from '../images/logoimg.png'
import './Nav.css'

function Nav() {
    return (
        <nav className="navBar">
            <Link to="/main" className="main_link">
                <img className="main_link_logo" src={logoimg} alt="logo"></img>
            </Link>
        </nav>
    )
}

export default Nav;