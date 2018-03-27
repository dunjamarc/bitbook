import React, { Component } from 'react';
import FeedListImage from './FeedListItem/FeedListImage';
import FeedListVideo from './FeedListItem/FeedListVideo';
import FeedListPost from './FeedListItem/FeedListPost';
import Header from '../../partials/Header';
import Footer from '../../partials/Footer';

class FeedPage extends Component {
    render() {
        return (
            <div className="container">
<Header/>    
<FeedListImage/>
<FeedListVideo/>
<FeedListPost/>
<Footer/>

            </div>
        );
    }
}

export default FeedPage;