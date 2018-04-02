import React, { Component } from "react";
import M from "materialize-css";
import postsData from '../../../services/postService';

class ModalNewPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postValue: '',
            errorClass: 'hidden',
            modalClose: 'modal-close'
        }
    }

    initModal = modal => M.Modal.init(document.querySelector(modal));

    componentDidMount() {

        this.initModal('#modal2');
        this.initModal('#modal3');
        this.initModal('#modal4');
    }

    imageLinkValidation = (url) => {
        let p = /(?:([^:/?#]+):)?(?:\/\/([^/?#]*))?([^?#]*\.(?:jpg|gif|png))(?:\?([^#]*))?(?:#(.*))?/;
        return (url.match(p)) ? true : false;
    }

    videoLinkValidation = (url) => {
        let p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
        return (url.match(p)) ? true : false;
    }

    handleChange = (event) => {
        this.setState({
            postValue: event.target.value
        })
    }

    handleClick = (urlType, obj) => {
        postsData.sendPost(`http://bitbookapi.azurewebsites.net/api/${urlType}Posts`, obj)
            .then(() => {
                this.props.value();
                this.setState({
                    postValue: '',
                    modalClose: 'modal-close'
                })
            })
    }

    handleClickText = (event) => {
        const obj = { text: this.state.postValue };
        this.handleClick('Text', obj);
    }

    handleClickImage = (event) => {
        if (this.imageLinkValidation(this.state.postValue)) {
            const obj = { imageUrl: this.state.postValue };
            this.handleClick('Image', obj);
            this.setState({
                errorClass: 'hidden'
            })
            let modalImage = document.querySelector('#modal3');
            let instance = M.Modal.getInstance(modalImage);
            instance.close();
        } else {
            this.setState({
                errorClass: 'error',
                modalClose: ''
            })
        }
    }

    handleClickVideo = (event) => {
        if (this.videoLinkValidation(this.state.postValue)) {
            const obj = { videoUrl: this.state.postValue };
            this.handleClick('Video', obj);
            this.setState({
                errorClass: 'hidden',
            })
            let modalVideo = document.querySelector('#modal4');
            let instance = M.Modal.getInstance(modalVideo);
            instance.close();
        } else {
            this.setState({
                errorClass: 'error',
                modalClose: ''
            })
        }
    }


    render() {
        return (
            <React.Fragment>
                
                <div id="modal2" className="modal">  
                    <div className="modal-content">
                        <h4>New text post</h4>
                        <textarea value={this.state.postValue} onChange={this.handleChange} name="info" id="" cols="30" rows="10" placeholder="Post content"></textarea>
                    </div>
                    <div className="modal-footer">
                        <a className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this.handleClickText} >POST</a>
                    </div>
                </div>

                <div id="modal3" className="modal">
                    <div className="modal-content">
                        <h4>New image post</h4>
                        <input type='text' value={this.state.postValue} onChange={this.handleChange} placeholder="Image url" />
                        <p className={this.state.errorClass}>Input must be valid image url</p>

                    </div>
                    <div className="modal-footer">
                        <a className={`${this.state.modalClose} modal-action waves-effect waves-green btn-flat`} onClick={this.handleClickImage}>POST</a>
                    </div>
                </div>

                <div id="modal4" className="modal">
                    <div className="modal-content">
                        <h4>New video post</h4>
                        <input type='text' value={this.state.postValue} onChange={this.handleChange} placeholder="YouTube video link" />
                        <p className={this.state.errorClass}>Input must be YouTube video url</p>
                    </div>
                    <div className="modal-footer">
                        <a className={`${this.state.modalClose} modal-action waves-effect waves-green btn-flat`} onClick={this.handleClickVideo}>POST</a>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default ModalNewPost;