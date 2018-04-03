import React from "react";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import M from "materialize-css";


const WelcomePage = (props) => {

    M.Tabs.init();

    return (
        <React.Fragment>
            <div className='container row login'>
                <div className="col m6">
                    <h1>BitBook Login</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a lorem pharetra sapien finibus faucibus. Sed sollicitudin ex et diam feugiat, ac facilisis tortor ultricies. Pellentesque purus dolor, gravida eget nisl in, faucibus gravida massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut nec enim tempor massa ultricies fermentum. Integer ut scelerisque quam. Mauris eu tempus diam. Nulla euismod mattis purus, nec tempor dolor luctus eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, nisi tempor aliquam tempor, eros felis eleifend tortor, nec convallis neque metus et libero. Sed nec magna gravida, tempor augue non, dapibus purus.</p>
                </div>

                <div className="col m6">

                    <ul id="tabs-swipe-demo" className="tabs">
                        <li className="tab col s6"><a  className="active" href="#login">Login</a></li>
                        <li className="tab col s6"><a href="#register">Register</a></li>
                    </ul>
                    <div id="login" className="col s12"><LoginForm /></div>
                    <div id="register" className="col s12"><RegisterForm /></div>
                    
                </div>

            </div>
        </React.Fragment>
    )

}

export default WelcomePage;