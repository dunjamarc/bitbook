import React, { Component } from "react";
import M from "materialize-css";
import postsData from '../../../services/GetData';

class ModalNewPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postValue: ''
        }
    }

    componentDidMount() {        
        var modal2 = document.querySelector('#modal2');
        var instance = M.Modal.init(modal2);

        var modal3 = document.querySelector('#modal3');
        var instance = M.Modal.init(modal3);

        var modal4 = document.querySelector('#modal4');
        var instance = M.Modal.init(modal4);
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
                postValue: ''
            })
        })
    }

    handleClickText = (event) => {
        const obj = {text: this.state.postValue};
        this.handleClick('Text', obj);
    }

    handleClickImage = (event) => {
        const obj = {imageUrl: this.state.postValue};
        this.handleClick('Image', obj);
    }

    handleClickVideo = (event) => {
        const obj = {videoUrl: this.state.postValue};
        this.handleClick('Video', obj);
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
                    <input type='text' value={this.state.postValue} onChange={this.handleChange} placeholder="Image url"/>
                </div>
                <div className="modal-footer">
                    <a href="#/" className="modal-action modal-close waves-effect waves-green btn-flat"  onClick={this.handleClickImage}>POST</a>
                </div>
            </div>

            <div id="modal4" className="modal">
                <div className="modal-content">
                    <h4>New video post</h4>
                    <input type='text' value={this.state.postValue} onChange={this.handleChange} placeholder="YouTube video link"/>
                </div>
                <div className="modal-footer">
                    <a href="#/" className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this.handleClickVideo}>POST</a>
                </div>
            </div>
            </React.Fragment >
        )
    }
}

export default ModalNewPost;