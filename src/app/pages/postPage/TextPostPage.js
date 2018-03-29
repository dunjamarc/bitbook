import React, { Component } from 'react'
import CommentsListItem from './CommentsListItem';
import postsData from '../../../services/GetData';
import AddComment from './AddComment';

class TextPostPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postInfo: {},
            commentInfo: [],
        }

    }

    componentDidMount() {

        postsData.getTextPost(this.props.match.params.id)
            .then(data => {
                this.setState({
                    postInfo: data
                })
            })
        postsData.getCommentByPostId(this.props.match.params.id)
            .then((response) => {
                this.setState({
                    commentInfo: response,
                })
            })
    }

    render() {
        console.log(this.state.commentInfo)
        return (

        <div className="container">
            <div className='col s12 m7'>
              <p>{this.state.postInfo.text}</p>
            </div>
            <div class="row">
              <AddComment />

         

             </div>
                {
                    this.state.commentInfo.map((el, i) => {
                        return <CommentsListItem authorName={el.authorName} body={el.body} key={el.id} />
                    })
                }

         </div>

        )
    }
}

export default TextPostPage;