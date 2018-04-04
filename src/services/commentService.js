import { Component } from 'react';

class commentsService extends Component {

    getCommentByPostId(postId) {
        return fetch(`http://bitbookapi.azurewebsites.net/api/Comments?postId=${postId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Key': 'C863071',
                'SessionId': JSON.parse(sessionStorage.getItem('loginData'))
                    ? JSON.parse(sessionStorage.getItem('loginData')).sessionId
                    : ''
            },
            method: 'GET'
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('SOMETHING WENT WRONG :(');
                }
            })
            .then((response) => {
                return response
            })

    }

    postComment(postId, commentText) {
        return fetch('http://bitbookapi.azurewebsites.net/api/Comments', {
            headers: {
                'Content-Type': 'application/json',
                'Key': 'C863071',
                'SessionId': JSON.parse(sessionStorage.getItem('loginData'))
                    ? JSON.parse(sessionStorage.getItem('loginData')).sessionId
                    : ''
            },
            method: 'POST',
            body: JSON.stringify({
                "id": 0,
                "body": commentText,
                "postId": postId,
                "authorName": "string",
                "authorId": 0
            })
        })
    }
}


const commentService = new commentsService();
export default commentService;