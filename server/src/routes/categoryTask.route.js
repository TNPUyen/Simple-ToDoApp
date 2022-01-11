const express = require('express');
const Category = require("../schemas/category.schema");
const Task = require("../schemas/task.schema");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const newCategoryTask = await new Task(req.body).save();
        const category = await Category.findOneAndUpdate({
            _id: req.body.category
        }, {
            $push: {
                taskList: [newCategoryTask._id]
            }
        });
        res.send(newCategoryTask);
    } catch (error) {
        res.send(error);
    }
});

router.get("/:id", async (req, res) => {
    try {
        var tempTask, categoryTaskList = [];
        const tempTaskList = await Category.findById({
            _id: req.params.id
        });
        for (let i = 0; i < tempTaskList.taskList.length; i++) {
            tempTask = await Task.findById({
                _id: tempTaskList.taskList[i]
            });
            categoryTaskList.push(tempTask);
        }
        res.send(categoryTaskList);
    } catch (error) {
        res.send(error);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate({
                _id: req.params.id
            },
            req.body,
        );
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const tempTask = await Task.findById(req.params.id);
        const category = await Category.findByIdAndUpdate({
            _id: tempTask.category
        }, {
            $pull: {
                taskList: {
                    $in: [req.params.id]
                }
            }
        });
        const task = await Task.findByIdAndDelete(req.params.id);
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;