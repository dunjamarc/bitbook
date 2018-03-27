import React, { Component } from 'react';


const RegisterForm = props => {

    return (
        <div className="row">
            <button>Login</button>
            <button>Register</button>
            <form className="col s12">
            <div clasNames="row">
                    <div class="input-field col s12">
                        <input id="text" type="email" className="validate" />
                        <label for="email">Name</label>
                    </div>
                </div>
                <div clasNames="row">
                    <div class="input-field col s12">
                        <input id="email" type="email" className="validate" />
                        <label for="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password" type="password" className="validate" />
                        <label for="password">Password</label>
                    </div>
                </div>
            </form>
        </div>
    )

}

export default RegisterForm;