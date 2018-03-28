import React from 'react';
import PeopleListItem from './PeopleListItem';
import { Link } from 'react-router-dom';

const PeoplePage = () => {
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
};

export default PeoplePage;