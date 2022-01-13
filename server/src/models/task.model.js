class TaskModel{
    /**
     * @param {String} taskName
     * @param {String} category
     * @param {String} userId
     * @param {Boolean} today
     * @param {Boolean} pinned
     * @param {Date} date
     * @param {Boolean} completed
     */
    constructor(taskName, category, userId, today, pinned, date, completed){
        this.taskName = taskName;
        this.category = category;
        this.userId = userId;
        this.today = today;
        this.pinned = pinned;
        this.date = date;
        this.completed = completed;
    }
}