const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const config = require('./config');
const database = require('./src/db');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/api/task", require('./src/routes/task.route'));
app.use("/api/category", require('./src/routes/category.route'));



const connectionString = 'mongodb+srv://admin:admin@cluster0.ufig6.mongodb.net/ToDoApp?retryWrites=true&w=majority';

async function main(){
    await database.instance.connect(connectionString);
    app.listen(config.PORT, function () {
      console.log(`Server is running ${config.PORT}...`);
    })
};

main();