class Category{
    /**
     * @param {String} title
     * @param {String} userId
     */
    constructor(title, userId){
        this.title = title;
        this.userId = userId;
        this.taskList = [];
    }
}