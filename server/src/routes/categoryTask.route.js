const express = require('express');
const Category = require("../schemas/category.schema");
const Task = require("../schemas/task.schema");

const router = express.Router();

router.post("/", async (req, res) =>{
    try {
        const newCategoryTask = await new Task(req.body).save();
        const category = await Category.findOneAndUpdate( {_id: req.body.category},
            {
                $push: {
                    taskList: [newCategoryTask._id]
                }
            }
        );
        res.send(category);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;
