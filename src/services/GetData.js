import React from 'react'
import VideoPost from '../entities/VideoPost'
import ImagePost from '../entities/ImagePost'
import TextPost from '../entities/TextPost'


class GetData {

    allData() {
        return fetch('http://bitbookapi.azurewebsites.net/api/Posts', {
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
                return response.map((el) => {
                    if (el.type == 'video') {
                        return new VideoPost(el);
                    }
                    if (el.type == 'image') {
                        return new ImagePost(el)
                    }
                    return new TextPost(el)
                })
            })
    }

}

const postsData = new GetData();

export default postsData;
