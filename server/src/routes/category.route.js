const express = require('express');
const Category = require("../schemas/category.schema");

const router = express.Router();

router.post("/", async (req, res) =>{
    try {
        const newCategory = await new CategoryModel(req.body).save();
        console.log(newCategory.title);
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
        const category = await Category.findByIdAndDelete(req.params.id);
        res.send(category);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;