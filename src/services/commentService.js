import { Component } from 'react';

class commentsService extends Component {

    getCommentByPostId(postId) {
        return fetch(`http://bitbookapi.azurewebsites.net/api/Comments?postId=${postId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            method: 'GET'
        })
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                return response
            })

    }

    postComment(postId, commentText) {
        return fetch('http://bitbookapi.azurewebsites.net/api/Comments', {
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
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