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
        userService.getUsers()
        .then((response) => {
            this.setState({
                usersData: response,
                findUsers: response,
            })
        })
        .catch(error => {
            this.setState({
                error: error.message
            })
        })
    }

    searchUsers = (event) => {
        this.setState({
            inputValue: event.target.value,
            findUsers: this.state.usersData.filter((el) => {
                return el.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
            })

        })

    }
    
    render() {
        return (
            this.state.error
            ? <p className="error-message">{this.state.error}</p>
            : <React.Fragment>
                <div className="container">
                    <div className="input-field col s9">
                        <i className="material-icons prefix">search</i><input id="icon_prefix" onChange={this.searchUsers} type="text" value={this.state.inputValue} placeholder="Search" className="validate" />
                    </div>
                    {this.state.findUsers.map((el, i) => {
                        return <Link key={i} to={`/people/${el.id}`}><PeopleListItem value={el} key={el.id}/></Link>
                    })
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default PeoplePage;