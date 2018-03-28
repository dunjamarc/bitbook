import React from 'react'
import {Link} from 'react-router-dom'

const FeedListVideo = () => {
    return (
        <Link to={`/feeds/${1}`}>
            <div className='col s12 m7'>
                <div className="video-container">
                    <iframe width="853" height="480" src="https://www.youtube.com/embed/tgbNymZ7vqY" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className="row">
                    <p className="col s6 m3 center-align">Text post</p>
                    <p className="col s6 m3 offset-m6 center-align">15 Comments</p>
                </div>
            </div>
            </Link>
        )

}

export default FeedListVideo