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
        userService.getUsers().then((response) => {
            this.setState({
                usersData: response
            })
        })
    }
    render() {
        console.log(this.state.usersData)
        return (
            <React.Fragment>
                <div className="container">
                    <div className="input-field col s9">
                        <i class="material-icons prefix">search</i><input id="icon_prefix" type="text" placeholder="Search" className="validate" />
                    </div>
                    {this.state.usersData.map((el) => {
                        return <Link to='/profile'><PeopleListItem name={el.name} avatarUrl={el.avatarUrl} aboutShort={el.aboutShort} lastPostDate={el.lastPostDate} key={el.id} /></Link>
                    })
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default PeoplePage;