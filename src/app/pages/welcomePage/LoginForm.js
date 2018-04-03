import React from 'react';


const LoginForm = props => {

    return (
        <div className="row">

            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email-log" type="email" className="validate" />
                        <label htmlFor="email-log">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password-log" type="password" className="validate" />
                        <label htmlFor="password-log">Password</label>
                    </div>
                </div>
                <button className="btn" onClick={this.register}>Login</button>
            </form>
        </div>
    )

}

export default LoginForm;