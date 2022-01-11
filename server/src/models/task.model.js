class TaskModel{
    /**
     * @param {String} taskName
     * @param {String} category
     * @param {Boolean} today
     * @param {Boolean} pinned
     * @param {Date} date
     * @param {Boolean} completed
     */
    constructor(taskName, category, today, pinned, date, completed){
        this.taskName = taskName;
        this.category = category;
        this.category = today;
        this.pinned = pinned;
        this.date = date;
        this.completed = completed;
        this.userId = "";
    }
}