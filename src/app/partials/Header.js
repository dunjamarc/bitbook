import React, { Component } from "react";
import { Link } from 'react-router-dom';


class Header extends Component {

    getLocation = () => {
        if (window.location.href.search('feed') !== -1) {
            return 'feed';
        } else if (window.location.href.search('people') !== -1) {
            return 'people';
        } else {
            return 'profile'
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper container">
                    <a className="brand-logo">Bitbook</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li className={this.getLocation() === 'feed' ? 'active' : ''}><Link to='/'>Feed</Link></li>
                        <li className={this.getLocation() === 'people' ? 'active' : ''}><Link to='/people'>People</Link></li>
                        <li className={this.getLocation() === 'profile' ? 'active' : ''}><Link to='/profile'>Profile</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;