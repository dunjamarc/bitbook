import React from 'react'
import {Link} from 'react-router-dom'

const FeedListVideo = (props) => {
    return (
        <Link to={`/feeds/${props.value.id}`}>
            <div className='col s12 m7'>
                <div className="video-container">
                    <iframe width="853" height="480" src={props.value.videoUrl} frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className="row">
                    <p className="col s6 m3 center-align">Video post</p>
                    <p className="col s6 m3 offset-m6 center-align">15 Comments</p>
                </div>
            </div>
            </Link>
        )

}

export default FeedListVideo