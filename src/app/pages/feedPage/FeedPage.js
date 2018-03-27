import React, { Component } from 'react';
import FeedListImage from './FeedListItem/FeedListImage';
import FeedListVideo from './FeedListItem/FeedListVideo';
import FeedListPost from './FeedListItem/FeedListPost';

class FeedPage extends Component {
    render() {
        return (
            <div>
<FeedListImage/>
<FeedListVideo/>
<FeedListPost/>
            </div>
        );
    }
}

export default FeedPage;