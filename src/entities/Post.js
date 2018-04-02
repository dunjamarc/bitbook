
class Post  {
    constructor(Obj){
        this.id = Obj.id
        this.dataCreated = Obj.dataCreated
        this.userId = Obj.userId
        this.userDisplayName = Obj.userDisplayName
        this.type = Obj.type
        this.commentsNum = Obj.commentsNum
    }
    
}

export default Post