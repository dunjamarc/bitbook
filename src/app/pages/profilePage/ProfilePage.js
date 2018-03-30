import React, { Component } from "react";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";
import { Link } from 'react-router-dom';
import M, { Modal } from "materialize-css";
import ModalUpdateProfile from "./ModalUpdateProfile.js";
import userService from '../../../services/userService.js';

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    fetchData() {
        userService.getProfile()
            .then(data => {
                this.setState(data)
            })
    }

    componentDidMount() {
        var elem = document.querySelector('.modal');
        var instance = M.Modal.init(elem);

        this.fetchData();
    }




    render() {
        return (
            <React.Fragment>


                <div id="modal1" className="modal">
                    <ModalUpdateProfile />
                </div>


                <div className='container center-align'>
                    <img src={this.state.user.avatarUrl} />
                    <h2>{this.state.name}</h2>
                    <a className="modal-trigger" href="#modal1">Edit profile</a>
                    <p className='user-description'>{this.state.user.about}</p>
                    <div className="chip">
                        <img src="https://www.shareicon.net/data/256x256/2015/08/20/87930_circular-modern-o-orkut-red_512x512.png" alt="Contact Person" />
                        {this.stateuser.postsCount}Posts
                </div>
                    <div className="chip">
                        <img src="https://www.shareicon.net/data/256x256/2015/08/20/87930_circular-modern-o-orkut-red_512x512.png" alt="Contact Person" />
                        {this.stateuser.user.commentsCount}Comments
                </div>
                </div>
            </React.Fragment>
        )

    }
}

export default ProfilePage;