import React, { Component } from "react";
import { Link } from 'react-router-dom';

const getLocation = () => {
    if (window.location.href.search('feed') !== -1) {
        return 'feed';
    } else if (window.location.href.search('people') !== -1) {
        return 'people';
    } else if (window.location.href.search('profile') !== -1) {
        return 'profile'
    }
}

const Header = () => {

       return (
            <nav>
                <div className="nav-wrapper container">
                    <a className="brand-logo">Bitbook</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li className={getLocation() === 'feed' ? 'active' : ''}><Link to='/'>Feed</Link></li>
                        <li className={getLocation() === 'people' ? 'active' : ''}><Link to='/people'>People</Link></li>
                        <li className={getLocation() === 'profile' ? 'active' : ''}><Link to='/profile'>Profile</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }

export default Header;