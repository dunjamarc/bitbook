import React, { Component } from 'react'


class AddComment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    componentDidMount() {

    }

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    render() {
        return (
            <form className="col s12">
                <div className="row align-center">
                    <div className="input-field col s9">
                        <input id="icon_prefix" type="text" className="validate" onChange={this.handleChange} value={this.state.inputValue}/>
                        <label htmlFor="icon_prefix">Add your comment</label>
                    </div>
                    <div className="input-field col s3 ">
                        <button className="btn waves-effect waves-light col s12 align-center" type="submit" name="action">
                            <i className="large material-icons">send</i>
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default AddComment;