import Post from './Post'

class TextPost extends Post {
    constructor(Obj) {
        super(Obj)
        this.text = Obj.text
    }

}
export default TextPost;