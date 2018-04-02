class UserDetail  {
    constructor (Obj){
        this.userId = Obj.userId
        this.name = Obj.name
        this.email = Obj.email
        this.aboutShort = Obj.aboutShort
        this.about = Obj.about
        this.avatarUrl = Obj.avatarUrl
        this.postsCount = Obj.postsCount
        this.commentsCount = Obj.commentsCount
    }
}

export default UserDetail