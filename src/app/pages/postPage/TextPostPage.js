import React, { Component } from 'react'
import CommentsListItem from './CommentsListItem';
import postsData from '../../../services/GetData';
import AddComment from './AddComment';

class TextPostPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postInfo: {}
        }

    }

    componentDidMount() {
        
        postsData.getTextPost(this.props.match.params.id)
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
            <AddComment />
            </div>
            <CommentsListItem />
            <CommentsListItem />
        </div>

    )}
}

export default TextPostPage;