import React from 'react'
import {Link} from 'react-router-dom'

const FeedListPost = (props) => {
    return (
        <React.Fragment>
            <Link to={`/feeds/text/${props.value.id}`}>
            <div className="row">
                <div className="col s12 m12">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text center-align">
                            <p>{props.value.text}</p>
                            <p className="col s6 m3 center-align">Text post</p>
                            <p className="col s6 m3 offset-m6 center-align">{props.commentsNum} comments</p>
                        </div>
                    </div>
                </div>
            </div>
            </Link>
        </React.Fragment>)
}

export default FeedListPost