import React from "react";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import M from "materialize-css";
import { withRouter } from "react-router-dom"

class WelcomePage extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        M.Tabs.init(document.getElementById('tabs-swipe-demo'));
    }

    render() {

        return (
            <React.Fragment>
                <div className='container row login'>
                    <div className="col m6">
                        <h2>BitBook Login</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a lorem pharetra sapien finibus faucibus. Sed sollicitudin ex et diam feugiat, ac facilisis tortor ultricies. Pellentesque purus dolor, gravida eget nisl in, faucibus gravida massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut nec enim tempor massa ultricies fermentum. Integer ut scelerisque quam. Mauris eu tempus diam. Nulla euismod mattis purus, nec tempor dolor luctus eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, nisi tempor aliquam tempor, eros felis eleifend tortor, nec convallis neque metus et libero. Sed nec magna gravida, tempor augue non, dapibus purus.</p>
                    </div>

                    <div className="col m6">

                        <ul id="tabs-swipe-demo" className="tabs">
                            <li className="tab col s6"><a className="active" href="#loginUser">Login</a></li>
                            <li className="tab col s6"><a href="#registerUser">Register</a></li>
                        </ul>
                        <div id="loginUser" className="col s12"><LoginForm /></div>
                        <div id="registerUser" className="col s12"><RegisterForm /></div>

                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(WelcomePage);