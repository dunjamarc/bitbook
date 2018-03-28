import React, { Component } from "react";

class ModalUpdateProfile extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <form action="#">
                <div className="modal-content">
                    <h4>Update profile</h4>
                    <img src="https://findd.com.my/include/img/user_dashboard/profile.png" alt="profile-image" />

                    
                        <div class="file-field input-field">
                            <div class="btn">
                                <span>UPLOAD PHOTO</span>
                                <input type="file" />
                            </div>
                            <div class="file-path-wrapper">
                                <input class="file-path" type="text"/>
                            </div>
                        </div>
                    
                    <input type="text" placeholder="Full Name" />
                    <textarea name="info" id="" cols="30" rows="10" placeholder="User description and all text that describes user"></textarea>
                </div>
                <div className="modal-footer">
                    <a href="#/profile" className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
                    <a href="#/profile" className="modal-action modal-close waves-effect waves-green btn-flat">Update</a>
                </div>
            </form>
        )
    }
}

export default ModalUpdateProfile;