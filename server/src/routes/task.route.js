const express = require('express');
const Task = require("../schemas/task.schema");

const router = express.Router();

router.post("/", async (req, res) =>{
    try {
        const newTask = await new Task(req.body).save();
        res.send(newTask);
    } catch (error) {
        res.send(error);
    }
});

router.get("/", async (req, res) =>{
    try {
        const taskList = await Task.find();
        res.send(taskList);
    } catch (error) {
        res.send(error);
    }
});

router.get("/today", async (req, res) =>{
    try {
        const tempTaskList = await Task.find();
        const taskList = [];
        for(let i =0; i < tempTaskList.length; i++){
            if(tempTaskList[i].today){
                taskList.push(tempTaskList[i]);
            }
        }
        res.send(taskList);
    } catch (error) {
        res.send(error);
    }
});

router.put("/:id", async (req, res) =>{
    try {
        const task = await Task.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
        );
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});

router.delete("/:id", async (req, res) =>{
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});
module.exports = router;