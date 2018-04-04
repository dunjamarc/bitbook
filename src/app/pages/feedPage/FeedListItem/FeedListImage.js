import React from 'react'
import { Link } from 'react-router-dom'

const FeedListImage = (props) => {
    return (
        <React.Fragment>
            <Link to={`/feeds/image/${props.value.id}`}>

                <div className="row">
                    <div className="col s12 m12">
                        <div className="card">
                            <div className="card-content white-text center-align">
                                <img width='100%' alt='' src={props.value.imageUrl} onClick={props.openImgModal}/>
                                <div className="row">
                                    <p className="col s6 m3 center-align">Image post</p>
                                    <p className="col s6 m3 offset-m6 center-align">{props.commentsNum} comments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </React.Fragment >
    )
}

export default FeedListImage