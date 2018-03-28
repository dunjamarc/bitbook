import React from 'react'

const FeedListVideo = () => {
    return (
        <React.Fragment>
            <div className='col s12 m7'>
                <div class="video-container">
                    <iframe width="853" height="480" src="https://www.youtube.com/embed/tgbNymZ7vqY" frameborder="0" allowfullscreen></iframe>
                </div>
                <div className="row">
                    <p className="col s6 m3 center-align">Text post</p>
                    <p className="col s6 m3 offset-m6 center-align">15 Comments</p>
                </div>
            </div>
        </React.Fragment>)
}

export default FeedListVideo