import React from 'react';

const PeopleListItem = (props) => {
    let postDate = new Date(props.value.lastPostDate + "z");
    return (
        <div className="col s12 m8 offset-m2 l6 offset-l3">
            <div className="card-panel grey lighten-5 z-depth-1">
                <div className="row align-wrapper">
                    <div className="col s2">
                        <img src={props.value.avatarUrl} alt="" className="circle responsive-img" />
                    </div>
                    <div className="col s8">
                        <h5 className="align-center">{props.value.name}</h5>
                        <span className="black-text">
                            {props.value.aboutShort}
                        </span>
                    </div>
                    <div className="col s2">
                        
                        <div className="">{props.value.lastPostDate === null ? "No posts yet" : (new Date()).toDateString() === postDate.toDateString() ? "Last post at:" + postDate.getHours()+ ":" + postDate.getMinutes() : "Last post at:" + postDate.getHours()+ ":" + postDate.getMinutes() + " " + postDate.getDate() + "." + (postDate.getMonth()+1) + "." + postDate.getFullYear()}</div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default PeopleListItem;