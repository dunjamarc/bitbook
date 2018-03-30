import React from 'react';

const PeopleListItem = (props) => {
    return (
        <div className="col s12 m8 offset-m2 l6 offset-l3">
            <div className="card-panel grey lighten-5 z-depth-1">
                <div className="row align-wrapper">
                    <div className="col s2">
                        <img src={props.avatarUrl} alt="" className="circle responsive-img" />
                    </div>
                    <div className="col s8">
                        <h5 className="align-center">{props.name}</h5>
                        <span className="black-text">
                            {props.aboutShort}
                        </span>
                    </div>
                    <div className="col s2">
                        <div className="">{props.lastPostDate}</div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PeopleListItem;