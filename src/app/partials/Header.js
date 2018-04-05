import React from "react";
import { Link, withRouter } from 'react-router-dom';


const Header = (props) => {

       return (
            <nav>
                <div className="nav-wrapper container">
                    <a className="brand-logo">Bitbook</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li className={props.location.pathname === '/' ? 'active' : ''}><Link to='/'>Feed</Link></li>
                        <li className={props.location.pathname === '/people' ? 'active' : ''}><Link to='/people'>People</Link></li>
                        <li className={props.location.pathname === '/profile' ? 'active' : ''}><Link to='/profile'>Profile</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }

export default withRouter(Header);