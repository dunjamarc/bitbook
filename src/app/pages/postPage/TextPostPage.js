import React, { Component } from 'react'
import CommentsListItem from './CommentsListItem';
import postsData from '../../../services/GetData';

class TextPostPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postId: 0,
            postInfo: {}
        }


    }
    componentDidMount() {
        
        this.setState({
            postId: this.props.match.params.id
        })
        this.fetchData();
    } 

    fetchData = () => {
        postsData.getTextPost(this.state.postId)
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
            <p>{this.state.postInfo.text}</p>
            </div>
            <div class="row">
                <form className="col s12">
                    <div className="row align-center">
                        <div className="input-field col s9">
                            <input id="icon_prefix" type="text" className="validate" />
                            <label htmlFor="icon_prefix">First Name</label>
                        </div>
                        <div className="input-field col s3 ">
                            <button className="btn waves-effect waves-light col s12 align-center" type="submit" name="action">
                                <i className="large material-icons">send</i>
                            </button>
                        </div>
                    </div>
                </form>

            </div>
            <CommentsListItem />
            <CommentsListItem />
        </div>

    )}
}

export default TextPostPage;