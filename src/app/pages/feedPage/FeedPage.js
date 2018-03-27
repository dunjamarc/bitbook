import React, { Component } from 'react';
import FeedListImage from './FeedListItem/FeedListImage';
import FeedListVideo from './FeedListItem/FeedListVideo';
import FeedListPost from './FeedListItem/FeedListPost';
import Header from '../../partials/Header';
import Footer from '../../partials/Footer';

class FeedPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
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
                <Footer />
            </React.Fragment>

        );
    }
}

export default FeedPage;