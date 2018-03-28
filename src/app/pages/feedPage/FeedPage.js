import React, { Component } from 'react';
import FeedListImage from './FeedListItem/FeedListImage';
import FeedListVideo from './FeedListItem/FeedListVideo';
import FeedListPost from './FeedListItem/FeedListPost';
import ModalNewPost from './ModalNewPost';
import M, { Modal } from "materialize-css";


class FeedPage extends Component {

    componentDidMount() {
        var elem = document.querySelector('.fixed-action-btn');
        var instance = M.FloatingActionButton.init(elem);

    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <FeedListImage />
                    <FeedListVideo />
                    <FeedListPost />
                </div>


                <ModalNewPost />

                <div className="fixed-action-btn">
                    <a className="btn-floating btn-large red">
                        <i className="large material-icons">+</i>
                    </a>
                    <ul>
                        <li><a className="btn-floating yellow modal-trigger" href="#modal2">
                            <i className="material-icons">Text</i>
                        </a></li>
                        <li><a className="btn-floating red modal-trigger" href="#modal3">
                            <i className="material-icons">Image</i>
                        </a></li>
                        <li><a className="btn-floating yellow modal-trigger" href="#modal4">
                            <i className="material-icons">Video</i>
                        </a></li>
                    </ul>
                </div>
            </React.Fragment>

        );
    }
}

export default FeedPage;