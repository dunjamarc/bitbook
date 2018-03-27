import React from 'react'

const FeedListVideo = () => {
    return (
        <React.Fragment>
            <div className='col-sm-12'>
                <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
                    <div></div>
                <div className="row">
                <p className="col-sm-3 text-center" ><small className="text-muted">Video post</small></p>
                <p className="col-sm-3 offset-sm-6 text-center"><small className="text-muted">15 Comments</small></p>
            </div></div>
    
        </React.Fragment>)
}

export default FeedListVideo