const express = require('express');
const Category = require("../schemas/category.schema");
const Task = require("../schemas/task.schema");

const router = express.Router();

router.post("/", async (req, res) =>{
    try {
        const newCategory = await new Category(req.body).save();
        res.send(newCategory);
    } catch (error) {
        res.send(error);
    }
});

router.get("/", async (req, res) =>{
    try {
        const categories = await Category.find();
        res.send(categories);
    } catch (error) {
        res.send(error);
    }
});

router.put("/:id", async (req, res) =>{
    try {
        const category = await Category.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
        );
        res.send(category);
    } catch (error) {
        res.send(error);
    }
});

router.delete("/:id", async (req, res) =>{
    try {
        var task;
        const tempCategory = await Category.findById(req.params.id);

        for(let i = 0; i< tempCategory.taskList.length; i++){
            task = await Task.findByIdAndDelete(tempCategory.taskList[i]);
        }
        const category = await Category.findByIdAndDelete(req.params.id);
        res.send(category);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;