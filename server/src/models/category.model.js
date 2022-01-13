class CategoryModel{
    /**
     * @param {String} title
     * @param {String} userId
     */
    constructor(title){
        this.title = title;
        this.userId = userId;
        this.taskList = [];
        this.userSharedList = [];
    }
}