import React from 'react'
import {Link} from 'react-router-dom'

const FeedListImage = () => {
    return (
        <React.Fragment>
            <Link to={`/feeds/${props.value.id}`}>
            <div className='col s12 m7'>
                <img width='100%' alt='' src={props.value.image.Url} />
                <div className="row">
                <p className="col s6 m3 center-align">Image post</p>
                <p className="col s6 m3 offset-m6 center-align">15 Comments</p>
            </div>
        </div>
        </Link>
        </React.Fragment >)
}

export default FeedListImage