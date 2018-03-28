import React, { Component } from "react";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";
import { Link } from 'react-router-dom';
import M, { Modal } from "materialize-css";
import ModalUpdateProfile from "./ModalUpdateProfile.js";

class ProfilePage extends Component {

    componentDidMount() {
        var elem = document.querySelector('.modal');
        var instance = M.Modal.init(elem);
    }


    render() {
        return (
            <React.Fragment>


                <div id="modal1" className="modal">
                    <ModalUpdateProfile />
                </div>


                <div className='container center-align'>
                    <img src='https://findd.com.my/include/img/user_dashboard/profile.png' />
                    <h2>Name Surname</h2>
                    <a className="modal-trigger" href="#modal1">Edit profile</a>
                    <p className='user-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae omnis quod, similique dolor vitae iste quae quisquam, expedita dolorem quo laborum ad unde odio sint nam harum, sed corporis possimus iusto! Explicabo illum eius sed veritatis reprehenderit architecto aperiam, fugiat quisquam odit perspiciatis velit ducimus at voluptates labore numquam earum?</p>
                    <div className="chip">
                        <img src="https://www.shareicon.net/data/256x256/2015/08/20/87930_circular-modern-o-orkut-red_512x512.png" alt="Contact Person" />
                        Comments
                </div>
                    <div className="chip">
                        <img src="https://www.shareicon.net/data/256x256/2015/08/20/87930_circular-modern-o-orkut-red_512x512.png" alt="Contact Person" />
                        Posts
                </div>
                </div>
            </React.Fragment>
        )

    }
}

export default ProfilePage;