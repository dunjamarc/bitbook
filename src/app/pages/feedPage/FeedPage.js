import React, { Component } from 'react';
import FeedListImage from './FeedListItem/FeedListImage';
import FeedListVideo from './FeedListItem/FeedListVideo';
import FeedListPost from './FeedListItem/FeedListPost';

class FeedPage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">

                    <FeedListImage />
                    <FeedListVideo />
                    <FeedListPost />


                </div>
                <div className="fixed-action-btn direction-top">
                    <a className="btn-floating btn-large red">
                        <i className="material-icons">+</i>
                    </a>

                </div>
            </React.Fragment>

        );
    }
}

export default FeedPage;