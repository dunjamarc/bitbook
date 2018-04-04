import VideoPost from '../entities/VideoPost'
import ImagePost from '../entities/ImagePost'
import TextPost from '../entities/TextPost'


class PostService {

    generateHeaders() {
        return {
            'Content-Type': 'application/json',
            'Key': 'C863071',
            'SessionId': JSON.parse(sessionStorage.getItem('loginData'))
            ? JSON.parse(sessionStorage.getItem('loginData')).sessionId
            : ''
        }
    }

    allData(query) {
        
        return fetch(`http://bitbookapi.azurewebsites.net/api/Posts${query}`, {
            headers: this.generateHeaders(),
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
                return response.map((el) => {
                    if (el.type === 'video') {
                        return new VideoPost(el);
                    }
                    if (el.type === 'image') {
                        return new ImagePost(el)
                    }
                    return new TextPost(el)
                })
            })
    }

    getTextPost(id) {
        return fetch(`http://bitbookapi.azurewebsites.net/api/TextPosts/${id}`, {
            headers: this.generateHeaders(),
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
                return new TextPost(response);
            })
    }

    getImagePost(id) {
        return fetch(`http://bitbookapi.azurewebsites.net/api/ImagePosts/${id}`, {
            headers: this.generateHeaders(),
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
                return new ImagePost(response);
            })
    }

    getVideoPost(id) {
        return fetch(`http://bitbookapi.azurewebsites.net/api/VideoPosts/${id}`, {
            headers: this.generateHeaders(),
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
                return new VideoPost(response);
            })
    }



    sendPost(url, data) { // text/image/video
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: this.generateHeaders(),
        })
    }

    deletePost(id) {
        return fetch(`http://bitbookapi.azurewebsites.net/api/posts/${id}`, {
            headers: this.generateHeaders(),
            method: 'DELETE'
        })
    }

}

const postsData = new PostService();

export default postsData;
