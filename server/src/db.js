const mongoose = require('mongoose');

class Database{
    
    /**
     * @type {Database}
     */
     static _cache = null;
     
    constructor(){}

    /**
     * @returns {Database}
     */
     static get instance() {
        if (this._cache == null) {
            this._cache = new Database("");
        }
        return this._cache;
    }


    /**
     * @returns {Promise<mongoose.Connection>}
     */
    async connect(connectionString){
        return new Promise( (resolve, reject) =>{
            mongoose.connect(connectionString, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            const connection = mongoose.connection;
            connection.on("error", (err) => {
                reject(err);
            });
            connection.once("open", () => {
                console.log("Connect to database successfully")
                resolve(connection);
            });
        });
    }
}

module.exports = Database;