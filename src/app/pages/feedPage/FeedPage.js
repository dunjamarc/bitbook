import React, { Component } from 'react';
import FeedListImage from './FeedListItem/FeedListImage';
import FeedListVideo from './FeedListItem/FeedListVideo';
import FeedListPost from './FeedListItem/FeedListPost';
import ModalNewPost from './ModalNewPost';
import M, { Modal } from "materialize-css";
import postsData from '../../../services/GetData';


class FeedPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allPosts: [],
            videoPosts: [],
            textPosts: [],
            imagePosts: []
        }
    }

    componentDidMount() {
        var elem = document.querySelector('.fixed-action-btn');
        var instance = M.FloatingActionButton.init(elem);

        this.fetchPosts();

    }

    fetchPosts = () => {
        postsData.allData()
            .then(data => {
                this.setState({
                    allPosts: data.slice(0,10),
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
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    {this.state.allPosts.map(el => {
                        if (el.type === 'video') {
                            return <FeedListVideo value={el} key={el.id} />
                        } else if (el.type === 'image') {
                            return <FeedListImage value={el} key={el.id} />
                        } else {
                            return <FeedListPost value={el} key={el.id} />
                        }
                    })}
                </div>

                <ModalNewPost value={this.fetchPosts} />

                <div className="fixed-action-btn">
                    <a className="btn-floating btn-large red">
                        <i className="large material-icons">+</i>
                    </a>
                    <ul>
                        <li><a className="btn-floating blue modal-trigger" href="#modal2">
                            <i className="material-icons">Text</i>
                        </a></li>
                        <li><a className="btn-floating green modal-trigger" href="#modal3">
                            <i className="material-icons">Image</i>
                        </a></li>
                        <li><a className="btn-floating red modal-trigger" href="#modal4">
                            <i className="material-icons">Video</i>
                        </a></li>
                    </ul>
                </div>
            </React.Fragment>

        );
    }
}

export default FeedPage;