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
            error: false
        }

    }

    componentDidMount() {
        postsData.getImagePost(this.props.match.params.id)
            .then(data => {
                this.setState({
                    postInfo: data
                })
            })
            .catch(error => {
                this.setState({
                    error: error.message
                })
            })

        commentService.getCommentByPostId(this.props.match.params.id)
            .then((response) => {
                this.setState({
                    commentInfo: response,
                })
            })
            .catch(error => {
                this.setState({
                    error: error.message
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
        if (event.keyCode === 13) {
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
    deletePost = () => {
        return postsData.deletePost(this.props.match.params.id)
            .then(response => {
                if (response) {
                    window.location.hash = '/feed'
                }
            })
    }

    render() {
        return (

            <React.Fragment>
                {this.state.error
                    ? <p className='error-message'>{this.state.error}</p>
                    : <div>
                        <div className="container">
                            <div className='col s12 m7'>
                                <img className="image-post" src={this.state.postInfo.imageUrl} alt='post' />
                            </div>
                            <div className='col s12 m7 delete-text'>
                                <i onClick={this.deletePost} className="col s2 material-icons right small text-darken-2 dp48">delete</i>
                            </div>

                            <div className="row">
                                <div className="col s12">
                                    <div className="row align-center">
                                        <div className="input-field col s9">
                                            <input onKeyUp={this.sendCommentOnEnter} id="icon_prefix" type="text" onChange={this.commentBody} value={this.state.commentText} className="validate" />
                                            <label htmlFor="icon_prefix">Add comment</label>
                                        </div>
                                        <div className="input-field col s3 ">
                                            <button onClick={this.sendComment} className={`${(this.state.commentText.length === 0) ? "disabled" : ""} btn waves-effect waves-light col s12 align-center`} type="submit" name="action">
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

                                    return <CommentsListItem authorName={el.authorName} authorId={el.authorId} body={el.body} key={el.id} />

                                })
                            }
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }

}

export default ImagePostPage;