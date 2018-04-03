import React from 'react';
import userService from '../../../services/userService.js';


class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            name: '',
            email: ''
        }
    }

    // register = () => {
    //     let dataObj = {
    //         username: this.state.username,
    //         password: this.state.password,
    //         name: this.state.name,
    //         email: this.state.email
    //       }
    //     userService.sendRegistrationData(dataObj);
    // }

    handleChange = (event) => {
        switch (event.target.id){
            case "text name" : this.setState({name: event.target.value});
            break;
            case "text username" : this.setState({username: event.target.value});
            break;
            case "email" : this.setState({email: event.target.value});
            break;
            default : this.setState({password: event.target.value});
        }
    } 

    render() {

        return (
            <div className="row">

                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="text name" type="text" className="validate" value={this.state.name} onChange={this.handleChange}/>
                            <label htmlFor="text name">Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="text username" type="text" className="validate" value={this.state.username} onChange={this.handleChange}/>
                            <label htmlFor="text username">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email-reg" type="email" className="validate" value={this.state.email} onChange={this.handleChange}/>
                            <label htmlFor="email-reg">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password-reg" type="password" className="validate" value={this.state.password} onChange={this.handleChange}/>
                            <label htmlFor="password-reg">Password</label>
                        </div>
                    </div>
                    <button className="btn" onClick={this.register}>Register</button>
                </form>
            </div>
        )

    }

}

export default RegisterForm;