import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class FeedListPost extends Component {

    render() {
        return (
            <React.Fragment>
                <Link to={`/feeds/text/${this.props.value.id}`}>
                    <div className="row">
                        <div className="col s12 m12">
                            <div className="card">
                                <div className="card-content white-text center-align">
                                    <h5>{this.props.value.text}</h5>
                                    <p className="col s6 m3 center-align">Text post</p>
                                    <p className="col s6 m3 offset-m6 center-align">{this.props.commentsNum} comments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </React.Fragment>)
    }
}

export default FeedListPost