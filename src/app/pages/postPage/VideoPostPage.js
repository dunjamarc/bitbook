import React, { Component } from 'react'
import CommentsListItem from './CommentsListItem';
import postsData from '../../../services/GetData';
import AddComment from './AddComment';

class VideoPostPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postInfo: {}
        }

    }

    componentDidMount() {

        postsData.getVideoPost(this.props.match.params.id)
            .then(data => {
                this.setState({
                    postInfo: data
                })
            })
    }

    render() {
        return (
            <div className="container">
                <div className='col s12 m7'>
                    <div className="video-container">
                        <iframe width="853" height="480" src={this.state.postInfo.videoUrl} frameBorder="0" allowFullScreen allow="autoplay; encrypted-media"></iframe>
                    </div>
                </div>
                <div className="row">
                    <AddComment />
                </div>
                <CommentsListItem />
                <CommentsListItem />
            </div>

        )
    }
}

export default VideoPostPage;