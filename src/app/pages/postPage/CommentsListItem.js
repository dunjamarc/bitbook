import React from 'react';
import userService from '../../../services/userService.js';

class CommentsListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imgUrl: ''
        }
    }

    componentDidMount() {
        userService.getUserDetail(this.props.authorId)
            .then((data) => {
                this.setState({
                    imgUrl: data.avatarUrl
                })
            })
    }

    render() {
        return (

            <div className="container">
                <div className="card-panel grey lighten-5 z-depth-1">
                    <div className="row align-wrapper">
                        <div className="col s2">
                            <img src={this.state.imgUrl} alt="" className="circle responsive-img comment-pic" />
                        </div>
                        <div className="col s10">
                            <span className="black-text">
                                {this.props.body}
                            </span>
                        </div>
                    </div>
                    <p className="align-left author-name">{this.props.authorName}</p>
                </div>
            </div>

        )
    }
}

export default CommentsListItem