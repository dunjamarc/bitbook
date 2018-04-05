import React, { Component } from "react";
import ModalUpdateProfile from "./ModalUpdateProfile.js";
import userService from '../../../services/userService.js';
import M from "materialize-css";


class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {},
            profileId: this.props.match.params.id
        }
    }

    componentDidMount() {
        var elem = document.querySelector('.modal');
        M.Modal.init(elem);
        this.fetchData();
    }

    fetchData = (whichData) => {
        if (whichData === 'myProfile' || this.props.match.params.id === undefined) {
            userService.getProfile()
                .then(data => {
                    this.setState({
                        profile: data,
                        myProfile: true,
                    })
                })
                .catch(error => {
                    this.setState({
                        error: error.message
                    })
                })
        } else {
            userService.getUserDetail(this.state.profileId)
                .then(data => {
                    this.setState({
                        profile: data,
                        myProfile: false,
                    })
                })
                .catch(error => {
                    this.setState({
                        error: error.message
                    })
                })
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id === undefined) {
            this.fetchData('myProfile');
        } else {
            this.fetchData();
        }
    }

    logout = (event) => {
        sessionStorage.removeItem('loginData');
        this.props.history.push('/')
    }

    render() {
        return (

            this.state.error
                ? <p className="error-message">{this.state.error}</p>
                : <React.Fragment>
                    <div id="modal1" className="modal">
                        <ModalUpdateProfile value={this.fetchData} profile={this.state.profile} />
                    </div>
                    <div className='container center-align'>

                        <img id="avatar" alt="avatar" src={this.state.profile.avatarUrl === '' ? 'https://findd.com.my/include/img/user_dashboard/profile.png' : this.state.profile.avatarUrl} />
                        <h2>{this.state.profile.name}</h2>
                        {this.state.myProfile ? <a className="modal-trigger" href="#modal1">Edit profile</a> : ''}
                        <p className='user-description'>{this.state.profile.about}</p>
                        <div className="chip">
                            <img src="https://www.shareicon.net/data/512x512/2017/02/09/878601_check_512x512.png" alt="Contact Person" />
                            {this.state.profile.postsCount} Posts
                            </div>
                        <div className="chip">
                            <img src="https://www.shareicon.net/data/512x512/2017/02/09/878601_check_512x512.png" alt="Contact Person" />
                            {this.state.profile.commentsCount} Comments
                            </div><br/>
                            {this.state.myProfile ? <input type="button" className="btn logout" onClick={this.logout} value="Logout"/> : ''}

                    </div>
                </React.Fragment>

        )
    }

}

export default ProfilePage;