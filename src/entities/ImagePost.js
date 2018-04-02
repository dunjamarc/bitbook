import Post from './Post'

class ImagePost extends Post {
    constructor(Obj) {
        super(Obj)
        this.imageUrl = Obj.imageUrl
    }

}
export default ImagePost;