class User{
    /**
     * @param {String} userName
     * @param {String} password
     * @param {String} confirmPassword
     * @param {String} avatar
     */

     constructor(userName, password, confirmPassword, avatar){
        this.userName = userName;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.avatar = avatar;
        this.categoriesList = [];
        this.todayList = [];
        this.sharedList = [];
    }
}