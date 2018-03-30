import React, { Component } from "react";
import userService from '../../../services/userService.js';

class ModalUpdateProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nameInput: '',
            descriptionInput: '',
            avatarUrl: ''
        };
    }

    // fetchData()

    // componentDidMount() {

    // }

    handleImageChange = (event) => {
        this.setState({
            avatarUrl: event.target.value
        })
    }

    handleNameChange = (event) => {
        this.setState({
            nameInput: event.target.value
        })
    }

    handleDescriptionChange = (event) => {
        this.setState({
            descriptionInput: event.target.value
        })
    }

    handleClick = (event) => {
        const obj = {
            name: this.state.nameInput,
            about: this.state.descriptionInput,
            avatarUrl: this.state.avatarUrl,
            // email: 'nesto@gmail.com',
            // aboutShort: 'about',
            // userId: 391
        };
        userService.updateProfile(`http://bitbookapi.azurewebsites.net/api/Profiles`, obj)
            .then((data) => {
                this.props.value();
                this.setState({
                    nameInput: '',
                    descriptionInput: '',
                    avatarUrl: ''
                })
            })
    }


    render() {
        return (
            <form action="#">
                <div className="modal-content">
                    <h4>Update profile</h4>
                    <img src="https://findd.com.my/include/img/user_dashboard/profile.png" alt="profile-image" />

                    <div className="file-field input-field">
                        <div className="btn">
                            <span>UPLOAD PHOTO</span>
                            <input type="file"/>
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path" type="text" onChange={this.handleImageChange}/>
                        </div>
                    </div>

                    <input type="text" placeholder="Full Name" onChange={this.handleNameChange} value={this.state.nameInput} />

                    <textarea name="info" id="" cols="30" rows="10" placeholder="User description and all text that0 describes user" onChange={this.handleDescriptionChange} value={this.state.descriptionInput}></textarea>
                </div>

                <div className="modal-footer">
                    <a className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
                    <a onClick={this.handleClick} className="modal-action modal-close waves-effect waves-green btn-flat">Update</a>
                </div>
            </form>
        )
    }
}

export default ModalUpdateProfile;