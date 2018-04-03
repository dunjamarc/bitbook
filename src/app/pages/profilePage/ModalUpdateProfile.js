import React, { Component } from "react";
import userService from '../../../services/userService.js';

class ModalUpdateProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nameInput: '',
            descriptionInput: '',
            avatarUrl: 'https://findd.com.my/include/img/user_dashboard/profile.png',
            newAvatarUrl : ''
        };
    }

    componentWillReceiveProps(nextProps) {

        this.setState({
            nameInput: nextProps.profile.name,
            avatarUrl: nextProps.profile.avatarUrl,
            descriptionInput: nextProps.profile.about
        });
    }

    handleChange = (event) => {
        switch (event.target.name){
            case "image" : this.setState({avatarUrl: event.target.value});
            break;
            case "fullName" : this.setState({nameInput: event.target.value});
            break;
            case "info" : this.setState({descriptionInput: event.target.value});
            break;
            default : this.setState({newAvatarUrl: event.target.value});
            break;
        }
    }

    handleClick = (event) => {
        const obj = {
            name: this.state.nameInput,
            about: this.state.descriptionInput,
            aboutShort: `${this.state.descriptionInput.slice(0, 50)}...`,
            email: 'mail',
            avatarUrl: this.state.newAvatarUrl.length > 0 ? this.state.newAvatarUrl : this.state.avatarUrl
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
                    <img className="update-pic" src={this.state.avatarUrl} alt="profile" />
                    
                    <div className="file-field input-field">
                        <div className="btn">
                            <span>UPLOAD PHOTO</span>
                            <input type="file"/>
                        </div>
                        <div className="file-path-wrapper">
                            <input name="image" className="file-path" type="text" onChange={this.handleChange}/>
                        </div>
                    </div>

                    <input name="imageUrl" type="text" placeholder="Image url" onChange={this.handleChange} value={this.state.imageUrlInput} />

                    <input name="fullName" type="text" placeholder="Full Name" onChange={this.handleChange} value={this.state.nameInput} />

                    <textarea name="info" id="" cols="30" rows="10" placeholder="User description" onChange={this.handleChange} value={this.state.descriptionInput}></textarea>
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