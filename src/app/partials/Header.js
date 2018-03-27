import React, {Component} from "react";
import {Link} from 'react-router-dom';


const Header = (props) => {

    return (
        <nav className="navbar navbar-expand-rg navbar-light bg-light">
            <a className="navbar-brand" href="#">BitBook</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to='/feeds' className="nav-item nav-link active" href="#">Feed <span class="sr-only">(current)</span></Link>
                    <Link to='/people' className="nav-item nav-link">People</Link>
                    <Link to='/profile' className="nav-item nav-link">Profile</Link>
                </div>
            </div>
        </nav>
    )

}

export default Header;