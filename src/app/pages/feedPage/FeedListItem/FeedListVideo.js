import React from 'react'

const FeedListVideo = () => {
    return (
        <React.Fragment>
            <div className='col s12 m7'>
                <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
                <div className="row">
                    <p className="col s6 m3 center-align">Text post</p>
                    <p className="col s6 m3 offset-m6 center-align">15 Comments</p>
                </div>
            </div>
        </React.Fragment>)
}

export default FeedListVideo