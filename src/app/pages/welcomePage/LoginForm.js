import React from 'react';
import userService from '../../../services/userService.js';

class LoginForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }

    }

    login = () => {
        let dataObj = {
            username: this.state.username,
            password: this.state.password,
          }
        userService.sendLoginData(dataObj);
    }

    handleChange = (event) => {
        event.target.id === "email-log" ? this.setState({username: event.target.value}) 
        : this.setState({password: event.target.value});
    }

    render() {
        return (
            <div className="row">

                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email-log" type="email" className="validate" onChange={this.handleChange}/>
                            <label htmlFor="email-log">Email</label>                  {/*??????????*/}
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password-log" type="password" className="validate"  onChange={this.handleChange}/>
                            <label htmlFor="password-log">Password</label>
                        </div>
                    </div>
                    <button className="btn" onClick={this.login}>Login</button>
                </form>
            </div>
        )
    }
}

export default LoginForm;