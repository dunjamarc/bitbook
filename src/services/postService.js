import VideoPost from '../entities/VideoPost'
import ImagePost from '../entities/ImagePost'
import TextPost from '../entities/TextPost'


class PostService {

    constructor() {
        this.headers = {
            'Content-Type': 'application/json',
            'Key': 'bitbook',
            'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
        }
    }

    allData(query) {
        return fetch(`http://bitbookapi.azurewebsites.net/api/Posts${query}`, {
            headers: this.headers,
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
            headers: this.headers,
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
            headers: this.headers,
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
            headers: this.headers,
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
            headers: this.headers,
        })
    }

    deletePost(id) {
        return fetch(`http://bitbookapi.azurewebsites.net/api/posts/${id}`, {
            headers: this.headers,
            method: 'DELETE'
        })
    }

}

const postsData = new PostService();

export default postsData;
