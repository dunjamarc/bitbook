import React, { Component } from "react";
import M from "materialize-css"

class ModalNewPost extends Component {

    componentDidMount() {
        var elem = document.querySelector('#modal2');
        var instance = M.Modal.init(elem);
    }

    render() {
        return (
            <React.Fragment>
             <div id="modal2" className="modal">
                <div className="modal-content">
                    <h4>New post</h4>
                    <textarea name="info" id="" cols="30" rows="10" placeholder="Post content"></textarea>
                </div>
                <div className="modal-footer">
                    <a href="#/" className="modal-action modal-close waves-effect waves-green btn-flat">POST</a>
                </div>
            </div>
            </React.Fragment >
        )
    }
}

export default ModalNewPost;