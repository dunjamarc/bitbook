import React from 'react';
import autoService from '../../../services/authenticationService.js';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '', 
            error: false
        }
    }

    login = () => {
        
        let dataObj = {
            username: this.state.email,
            password: this.state.password,
        }
        autoService.sendLoginData(dataObj)
            .then(response => {
                if (!response.error) {
                    sessionStorage.setItem('loginData', JSON.stringify(response));
                    this.props.handleLogin();
                } else {
                    this.setState({
                        error: response.error.message
                    })
                }
            })

    }

    handleChange = (event) => {
        event.target.id === "email-log" ? this.setState({ email: event.target.value })
            : this.setState({ password: event.target.value });
    }

    render() {
        return (
            <div className="row">
            
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email-log" type="email" className="validate" onChange={this.handleChange} />
                            <label htmlFor="email-log">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password-log" type="password" className="validate" onChange={this.handleChange} />
                            <label htmlFor="password-log">Password</label>
                        </div>
                    </div>
                    {this.state.error ? <p className="error">{this.state.error}</p> : ''}
                    <button className="btn" onClick={this.login}>Login</button>
                </form>
            </div>
        )
    }
}

export default LoginForm;