import express from "express";
const router = express.Router();
import User from "../models/Users.js";


//REGISTER
router.post("/register", async (req, res) => {
  try {
    
    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    //save user and respond
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err)
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if(!user){
        res.status(400).json("user not found");
        return ;
    }

    if (user.password === req.body.password){
        res.status(200).json(user)
    }
    else{
        res.status(400).json("wrong password")
    }
    
  } catch (err) {
    
    res.status(500).json(err)
    
  }
});

export default router;