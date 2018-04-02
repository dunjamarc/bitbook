import React, { Component } from 'react';
import FeedListImage from './FeedListItem/FeedListImage';
import FeedListVideo from './FeedListItem/FeedListVideo';
import FeedListPost from './FeedListItem/FeedListPost';
import ModalNewPost from './ModalNewPost';
import postsData from '../../../services/postService';
import Filter from './Filter.js';


class FeedPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allPosts: [],
            videoPosts: [],
            textPosts: [],
            imagePosts: [],
            error: false
        }
    }

    componentDidMount() {
        this.fetchPosts();

    }

    fetchPosts = () => {
        postsData.allData()
            .then(data => {
                this.setState({
                    allPosts: data.slice(0, 10),
                    videoPosts: data.filter(el => {
                        return el.type === 'video';
                    }),
                    textPosts: data.filter(el => {
                        return el.type === 'text';
                    }),
                    imagePosts: data.filter(el => {
                        return el.type === 'image';
                    })
                })
            })
            .catch(error => {
                this.setState({
                    error: error.message
                })
            })
    }

    handleChange = (event) => {

        if (event.target.value === 'video') {
            //this.fetchPosts()
            this.setState({
                allPosts: this.state.videoPosts
            })
        } else if(event.target.value === 'image') {
            this.setState({
                allPosts: this.state.imagePosts
            })
        } else if(event.target.value === 'text') {
            this.setState({
                allPosts: this.state.textPosts
            })
        } else {
            this.fetchPosts();
        }

    }

    render() {
        return (
            <React.Fragment>
                {this.state.error
                    ? <p className="error-message">{this.state.error}</p>
                    : <div><Filter value={this.handleChange} />
                <div className="container">
                    {this.state.allPosts.map(el => {
                        if (el.type === 'video') {
                            return <FeedListVideo value={el} key={el.id} commentsNum={el.commentsNum} />
                        } else if (el.type === 'image') {
                            return <FeedListImage value={el} key={el.id} commentsNum={el.commentsNum} />
                        } else {
                            return <FeedListPost value={el} key={el.id} commentsNum={el.commentsNum} />
                        }
                    })}
                </div>

                <ModalNewPost value={this.fetchPosts} />

                <div className="fixed-action-btn">
                    <a className="btn-floating btn-large red">
                        <i className="large material-icons">add</i>
                    </a>
                    <ul>
                        <li><a className="btn-floating blue modal-trigger" href="#modal2">

                            <i className="material-icons">text_fields</i>
                        </a></li>
                        <li><a className="btn-floating green modal-trigger" href="#modal3">
                            <i className="material-icons">image</i>
                        </a></li>
                        <li><a className="btn-floating red modal-trigger" href="#modal4">
                            <i className="material-icons">videocam</i>

                        </a></li>
                    </ul>
                </div>
                </div>}
            </React.Fragment>

        );
    }
}

export default FeedPage;