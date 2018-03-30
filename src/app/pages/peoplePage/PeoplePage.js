import React, { Component } from 'react';
import PeopleListItem from './PeopleListItem';
import { Link } from 'react-router-dom';
import userService from '../../../services/userService'

class PeoplePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usersData: [],
        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="input-field col s9">
                        <i class="material-icons prefix">search</i><input id="icon_prefix" type="text" placeholder="Search" className="validate" />
                    </div>
                    <Link to='/profile'><PeopleListItem /></Link>
                    <Link to='/profile'><PeopleListItem /></Link>
                    <Link to='/profile'><PeopleListItem /></Link>
                </div>
            </React.Fragment>
        );
    }
}

export default PeoplePage;