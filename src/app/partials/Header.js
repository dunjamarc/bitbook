import React, { Component } from "react";
import { Link } from 'react-router-dom';


const Header = (props) => {

    return (
        <nav>
            <div className="nav-wrapper">
                <a className="brand-logo">Logo</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a >Feed</a></li>
                    <li><a >People</a></li>
                    <li><a >Profile</a></li>
                </ul>
            </div>
        </nav>
    )

}

export default Header;