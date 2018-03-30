import React, { Component } from 'react';
import PeopleListItem from './PeopleListItem';
import { Link } from 'react-router-dom';
import userService from '../../../services/userService'

class PeoplePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usersData: [],
            inputValue: '',
            findUsers: [],
        }
    }
    componentDidMount() {
        userService.getUsers().then((response) => {
            this.setState({
                usersData: response,
                findUsers : response,
            })
        })
    }

    searchUsers = (event) => {
        this.setState({
            inputValue: event.target.value,
            findUsers : this.state.usersData.filter((el) => {
                return el.name.toLowerCase().search(event.target.value.toLowerCase()) != -1
        })
    
        
        })
       
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="input-field col s9">
                        <i className="material-icons prefix">search</i><input id="icon_prefix" onChange={this.searchUsers} type="text" value={this.state.inputValue} placeholder="Search" className="validate" />
                    </div>
                    {this.state.findUsers.map((el) => {
                        return <Link to={`/people/${el.id}`}><PeopleListItem name={el.name} avatarUrl={el.avatarUrl} aboutShort={el.aboutShort} lastPostDate={el.lastPostDate} key={el.id} /></Link>
                    })
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default PeoplePage;