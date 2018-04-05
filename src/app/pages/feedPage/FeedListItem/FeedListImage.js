import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class FeedListImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnlarged: false
        }
    }

    enlargeImage = (event) => {
        this.setState((prevState) => {
            return {
                isEnlarged: !prevState.isEnlarged
            }
        })
    }

    dismissModal = (event) => {
        console.log(event);
        
        event.stopPropagation();
        this.setState((prevState) => {
            return {
                isEnlarged: !prevState.isEnlarged
            }
        })
    }

    render() {
        return (
            <React.Fragment>

                <div className="row">
                    <div className="col s12 m12">
                        <div className="card">
                            <div className="card-content white-text center-align">
                                <img id='post'width='100%' alt='' src={this.props.value.imageUrl} onClick={this.enlargeImage} />
                                <Link to={`/feeds/image/${this.props.value.id}`}>
                                    <div className="row">
                                        <p className="col s6 m3 center-align">Image post</p>
                                        <p className="col s6 m3 offset-m6 center-align">{this.props.commentsNum} comments</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        {this.state.isEnlarged ? <div id='modal-img' onClick={this.dismissModal}><img alt='' src={this.props.value.imageUrl} /></div> : ""}
                    </div>
                </div>

            </React.Fragment >
        )
    }

}

export default FeedListImage