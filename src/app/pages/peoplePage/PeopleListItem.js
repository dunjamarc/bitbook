import React from 'react';

const PeopleListItem = () => {
    return (
        <div className="col s12 m8 offset-m2 l6 offset-l3">
            <div className="card-panel grey lighten-5 z-depth-1">
                <div className="row align-wrapper">
                    <div className="col s2">
                        <img src="http://materializecss.com/images/yuna.jpg" alt="" className="circle responsive-img" />
                    </div>
                    <div className="col s10">
                <h5 className="align-center">Jane</h5>
                        <span className="black-text">
                            This is a square image. Add the "circle" className to it to make it appear circular.
              </span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PeopleListItem;