const express = require('express');
const User = require("../schemas/user.schema");

const router = express.Router();
router.post("/", async (req, res) =>{
    try {
        const newUser = await new User(req.body).save();
        res.send(newUser);
    } catch (error) {
        res.send(error);
    }
});


module.exports = router;
