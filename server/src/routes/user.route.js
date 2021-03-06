const express = require('express');
const User = require("../schemas/user.schema");

const router = express.Router();
router.post("/register", async (req, res) =>{
    try {
        const listUser = await User.find();
        for(let i =0; i< listUser.length; i++){
            if(req.body.userName == listUser[i].userName){
                res.send({message: "This name is already in use!"});
                return;
            }
        }
        if(req.body.password != req.body.confirmPassword){
            res.send({message: "Your password and confirmation password do not match!"});
            return;
        }
        const newUser = await new User(req.body).save();
        res.send({
            user: newUser,
            message: "Register successfully!"
        });
    } catch (error) {
        res.send(error);
    }
});

router.post("/login", async (req, res) => {
    try {
        const listUser = await User.find();
        for(let i =0; i< listUser.length; i++){
            if(req.body.userName == listUser[i].userName && req.body.password == listUser[i].password){
                res.send({
                    user: listUser[i],
                    message: "Login successfully!",
                });
                return;
            }
        }
        res.send({message: "Username or password is incorrect!"});
    } catch (error) {
        res.send(error);
    }
});

router.get("/", async (req, res) =>{
    try {
        const allUsers = await User.find();
        res.send({
            allUsers: allUsers,
        })
    } catch (error) {
        res.send(error);
        
    }
})


module.exports = router;
