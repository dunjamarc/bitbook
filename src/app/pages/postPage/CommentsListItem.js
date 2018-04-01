import React from 'react'

const CommentsListItem = (props) => {
    return (

        <div className="col s12 m8 offset-m2 l6 offset-l3">
            <div className="card-panel grey lighten-5 z-depth-1">
                <div className="row align-wrapper">
                    <div className="col s2">
                        <img src="http://materializecss.com/images/yuna.jpg" alt="" className="circle responsive-img" />
                    </div>
                    <div className="col s10">
                        <span className="black-text">
                            {props.body}
                        </span>
                    </div>
                </div>
                <p className="align-left">{props.authorName}</p>
            </div>
        </div>

    )
}

export default CommentsListItem