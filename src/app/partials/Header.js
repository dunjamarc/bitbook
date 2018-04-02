import React, { Component } from "react";
import { Link } from 'react-router-dom';


class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            linkActive1: '',
            linkActive2: '',
            linkActive3: ''
        }
    }

    handleClick1 = (event) => {
        this.setState({
            linkActive1: 'active',
            linkActive2: '',
            linkActive3: ''
        })
    }

    handleClick2 = (event) => {
        this.setState({
            linkActive1: '',
            linkActive2: 'active',
            linkActive3: ''
        })
    }

    handleClick3 = (event) => {
        this.setState({
            linkActive1: '',
            linkActive2: '',
            linkActive3: 'active'
        })
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper container">
                    <a className="brand-logo">Bitbook</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li className={this.state.linkActive1}><Link onClick={this.handleClick1} to='/'>Feed</Link></li>
                        <li className={this.state.linkActive2}><Link onClick={this.handleClick2} to='/people'>People</Link></li>
                        <li className={this.state.linkActive3}><Link onClick={this.handleClick3} to='/profile'>Profile</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;