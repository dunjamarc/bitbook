import React, { Component } from 'react';


const LoginForm = props => {

    return (
        <div className="row">
            <button>Login</button>
            <button>Register</button>
            <form className="col s12">
                <div clasName="row">
                    <div class="input-field col s12">
                        <input id="email" type="email" className="validate" />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password" type="password" className="validate" />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
            </form>
        </div>
    )

}

export default LoginForm;