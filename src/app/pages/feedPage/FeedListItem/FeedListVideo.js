import React from 'react'
import { Link } from 'react-router-dom'

const FeedListVideo = (props) => {

    return (
        <Link to={`/feeds/video/${props.value.id}`}>


            <div className="row">
                <div className="col s12 m12">
                    <div className="card">
                        <div className="card-content white-text center-align">

                            <div className="video-container">
                                <iframe title='video' width="853" height="480" src={props.value.videoUrl} frameBorder="0" allowFullScreen allow="autoplay; encrypted-media"></iframe>
                            </div>
                            <div className="row">
                                <p className="col s6 m3 center-align">Video post</p>
                                <p className="col s6 m3 offset-m6 center-align">{props.commentsNum} comments</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )

}

export default FeedListVideo;