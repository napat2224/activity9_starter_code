import express from "express";
const router = express.Router();
import User from "../models/Users.js";


//REGISTER
router.post("/register", async (req, res) => {
  try {
    //check pass
    if(req.body.password == req.body.confirmpassword){
        const user = await User.findOne({ username: req.body.username });
        if(!user){
          //create new user
          const newUser = new User({
            username: req.body.username,
            password: req.body.password,
          });
  
          //save user and respond
          user = await newUser.save();
          console.log(user)
          res.status(200).json(user);
        }else{
          res.status(400).json("username already use");
        }
          
    }else{
      res.status(400).json("password not match");
    }
    
  } catch (err) {
    //res.status(400).json("cant create acc");
    res.status(400).json(err)
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
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