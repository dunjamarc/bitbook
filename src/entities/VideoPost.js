import React, { Component } from 'react';
import Post from './Post'

class VideoPost extends Post {
    constructor(Obj) {
        super(Obj)
        this.videoUrl = Obj.videoUrl
    }
}

export default VideoPost;