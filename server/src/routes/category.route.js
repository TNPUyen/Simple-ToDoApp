const express = require('express');
const Category = require("../schemas/category.schema");
const Task = require("../schemas/task.schema");
const User = require("../schemas/user.schema");


const router = express.Router();

//---- create category -----//
router.post("/", async (req, res) =>{
    try {
        const newCategory = await new Category(req.body).save();
        res.send(newCategory);
    } catch (error) {
        res.send(error);
    }
});

//------share ------
router.post("/share", async (req, res) =>{
    try {
        const tempCategory = await Category.findById({_id: req.body.categoryId});
        for(let i = 0; i < tempCategory.userSharedList.length; i++){
            if(req.body.sharedId == tempCategory.userSharedList[i]){
                res.send({message: "Already shared with this person!"});
                return;
            }
        }
        console.log('ji')
        const category = await Category.findByIdAndUpdate({
            _id: req.body.categoryId
        }, {
            $push: {
                userSharedList: [req.body.sharedId]
            }
        });
        const sharedUser = await User.findByIdAndUpdate({
            _id: req.body.sharedId
        },{
            $push: {
                sharedList: [req.body.categoryId]
            }
        })
        res.send({
            category: category,
            sharedUser: sharedUser
        });
    } catch (error) {
        res.send({error: error});
    }
});

// ------get all user categories list------//
router.get("/", async (req, res) =>{
    try {
        const categories = await Category.find();
        res.send(categories);
    } catch (error) {
        res.send(error);
    }
});

// ------get all user categories share list------//
router.get("/sharedList", async (req, res) =>{
    try {
        const {userId} = req.query;
        const tempSharedList = [];
        const sharedList = await User.findById({_id: userId});
        for(let i = 0; i < sharedList.sharedList.length; i++){
            var shared = await Category.findById({_id: sharedList.sharedList[i]});
            tempSharedList.push(shared);
        }

        res.send({sharedList: tempSharedList});
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