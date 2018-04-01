import React, { Component } from 'react'
import CommentsListItem from './CommentsListItem';
import postsData from '../../../services/postService';
import commentService from '../../../services/commentService';

class ImagePostPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postInfo: {},
            commentInfo: [],
            commentText: '',
        }

    }

    componentDidMount() {

        postsData.getImagePost(this.props.match.params.id)
            .then(data => {
                this.setState({
                    postInfo: data
                })
            })
        commentService.getCommentByPostId(this.props.match.params.id)
            .then((response) => {
                this.setState({
                    commentInfo: response,
                })
            })
    }

    commentBody = (event) => {
        this.setState({
            commentText: event.target.value
        })
    }

    sendComment = () => {
        commentService.postComment(this.props.match.params.id, this.state.commentText)
            .then(response => {
                if (response) {
                    this.previewComments();
                    this.setState({
                        commentText: '',
                    })
                }
            })
    }

    sendCommentOnEnter = (event) => {
        if (event.keyCode == 13) {
            this.sendComment();
        }
    }

    previewComments = () => {
        return commentService.getCommentByPostId(this.props.match.params.id).then((response) => {
            this.setState({
                commentInfo: response
            })
        })
    }

    render() {
        return (

            <React.Fragment>
                <div className="container">
                    <div className='col s12 m7'>
                        <img className="image-post" src={this.state.postInfo.imageUrl} alt='post-image' />
                    </div>
                    <div class="row">
                        <div className="col s12">
                            <div className="row align-center">
                                <div className="input-field col s9">
                                    <input onKeyUp={this.sendCommentOnEnter} id="icon_prefix" type="text" onChange={this.commentBody} value={this.state.commentText} className="validate" />
                                    <label htmlFor="icon_prefix">Add comment</label>
                                </div>
                                <div className="input-field col s3 ">
                                    <button onClick={this.sendComment} className="btn waves-effect waves-light col s12 align-center" type="submit" name="action">
                                        <i className="large material-icons">send</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {
                        this.state.commentInfo.map((el, i) => {
                            return <CommentsListItem authorName={el.authorName} body={el.body} key={el.id} />
                        })
                    }
                </div>
            </React.Fragment>
        )
    }

}

export default ImagePostPage;