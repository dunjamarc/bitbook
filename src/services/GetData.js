import React from 'react'
import VideoPost from '../entities/VideoPost'
import ImagePost from '../entities/ImagePost'
import TextPost from '../entities/TextPost'


class GetData {

    allData() {
        return fetch('http://bitbookapi.azurewebsites.net/api/Posts').then((response) => {
            return response.json()
        })

            .then((response) => {
                response.map((el) => {
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

export default GetData
