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
             {/* <div id="modal2" class="modal"> */}
                <div class="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                </div>
                <div class="modal-footer">
                    <a href="#/" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
            {/* </div> */}
            </React.Fragment >
        )
    }
}

export default ModalNewPost;