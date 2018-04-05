import React, { Component } from 'react';
import FeedListImage from './FeedListItem/FeedListImage';
import FeedListVideo from './FeedListItem/FeedListVideo';
import FeedListPost from './FeedListItem/FeedListPost';
import ModalNewPost from './ModalNewPost';
import postsData from '../../../services/postService';
import Filter from './Filter.js';
import M from "materialize-css";
// import Pagination from './Pagination';


class FeedPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allPosts: [],
            videoPosts: [],
            textPosts: [],
            imagePosts: [],
            error: false,
            pages: [],
            modalInstance: ""
        };
        this.counter = 1;
    }

    componentDidMount() {
        var elem = document.querySelector('.fixed-action-btn');
        M.FloatingActionButton.init(elem);
       
        // var elem = document.querySelectorAll('.modal1');
        // console.log(elem)
        // var instance = M.Modal.init(elem);
        // console.log(instance)
        // this.setState({
        //     modalInstance: instance
        // })
        
        this.fetchPosts();
        window.addEventListener('scroll', this.scrollLoad);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollLoad);
    }

    fetchPosts = () => {
        postsData.allData('')
            .then(data => {
                this.setState({
                    allPosts: data.slice(0, 5),
                    videoPosts: data.filter(el => {
                        return el.type === 'video';
                    }),
                    textPosts: data.filter(el => {
                        return el.type === 'text';
                    }),
                    imagePosts: data.filter(el => {
                        return el.type === 'image';
                    }),
                    pages: Array(Math.ceil(data.length / 5)).fill(1)
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
        } else if (event.target.value === 'image') {
            this.setState({
                allPosts: this.state.imagePosts
            })
        } else if (event.target.value === 'text') {
            this.setState({
                allPosts: this.state.textPosts
            })
        } else {
            this.fetchPosts();
        }

    }

    loadPage = (query) => {
        postsData.allData(query)
            .then(data => {
                this.setState({
                    allPosts: data
                })
            })
    }

    scrollLoad = () => {        
        let feedBox = document.querySelector('html');
        if (feedBox.scrollTop === (feedBox.scrollHeight - feedBox.clientHeight)) {
            ++this.counter;
            this.loadPage(`?$top=${10 * this.counter}&$orderby=DateCreated desc`);

        }   
    }

    render() {
        return (
            <React.Fragment>
                {this.state.error
                    ? <p className="error-message">{this.state.error}</p>
                    : <div id="feed-box"><Filter value={this.handleChange} />
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

                        {/* <Pagination value={this.state.pages} action={this.loadPage} /> */}
                    </div>}
            </React.Fragment>

        );
    }
}

export default FeedPage;