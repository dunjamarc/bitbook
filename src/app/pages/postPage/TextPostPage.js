import React, { Component } from 'react'
import CommentsListItem from './CommentsListItem';
import postsData from '../../../services/postService';
import commentService from '../../../services/commentService';


class TextPostPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postInfo: {},
            commentInfo: [],
            commentText: '',
        }

    }

    componentDidMount() {

        postsData.getTextPost(this.props.match.params.id)

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
                    window.location = '/'
                }
            })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className='col s12 m7 text-post'>
                            <h5 className='col s10 center'>{this.state.postInfo.text}</h5>
                    </div>
                    <div className='col s12 m7'>
                            <i onClick={this.deletePost} className="col s2 material-icons right medium red-text text-darken-2 dp48">delete</i>
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
                            return <CommentsListItem authorName={el.authorName} body={el.body} key={el.id} />
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default TextPostPage;