import React from 'react'
import {Link} from 'react-router-dom'

const FeedListImage = () => {
    return (
        <React.Fragment>
            <Link to={`/feeds/${1}`}>
            <div className='col s12 m7'>
                <img width='100%' alt='' src='http://www.medias.rs/images/19/1905/plava_reka_f1.jpg' />
                <div className="row">
                <p className="col s6 m3 center-align">Text post</p>
                <p className="col s6 m3 offset-m6 center-align">15 Comments</p>
            </div>
        </div>
        </Link>
        </React.Fragment >)
}

export default FeedListImage