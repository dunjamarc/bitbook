import React, { Component } from "react";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";



const WelcomePage = (props) => {


    return (
        <React.Fragment>
            <div className='container row'>
                <div className="col m6">
                    <h1>BitBook Login</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a lorem pharetra sapien finibus faucibus. Sed sollicitudin ex et diam feugiat, ac facilisis tortor ultricies. Pellentesque purus dolor, gravida eget nisl in, faucibus gravida massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut nec enim tempor massa ultricies fermentum. Integer ut scelerisque quam. Mauris eu tempus diam. Nulla euismod mattis purus, nec tempor dolor luctus eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, nisi tempor aliquam tempor, eros felis eleifend tortor, nec convallis neque metus et libero. Sed nec magna gravida, tempor augue non, dapibus purus.</p>
                </div>
                <div className="col m6">
                    <LoginForm />
                    <RegisterForm />
                </div>

            </div>
        </React.Fragment>
    )

}

export default WelcomePage;