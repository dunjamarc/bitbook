import Post from './Post'

class VideoPost extends Post {
    constructor(Obj) {
        super(Obj)
        this.videoUrl = Obj.videoUrl.replace('watch?v=', 'embed/');
    }
}

export default VideoPost;