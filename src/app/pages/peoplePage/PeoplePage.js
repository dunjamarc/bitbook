import React from 'react';
import PeopleListItem from './PeopleListItem';

const PeoplePage = () => {
    return (
        <React.Fragment>
              <div className="container">
            <div className="input-field col s9">
            <i class="material-icons prefix">search</i><input id="icon_prefix" type="text" placeholder="Search" className="validate" />
            </div>
            <PeopleListItem />
            <PeopleListItem />
            <PeopleListItem />
            </div>
        </React.Fragment>
    );
};

export default PeoplePage;