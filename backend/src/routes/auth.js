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
          const user = await newUser.save();
          console.log(user)
          res.status(200).json(user);
        }else{
          console.log("already have user");
          res.status(200).json({ username : "erruser" });
        }
          
    }else{
      console.log("psw err");
      res.status(200).json({ username : "erruser" });
    }
    
  } catch (err) {
    //res.status(400).json("cant create acc");
    console.log("other")
    res.status(500).json({ username : "erruser" })
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json({ username : null })
    if (user.password == req.body.password){
        res.status(200).json(user)
    }
    else{
        res.status(200).json({ username : null })
    }
    
  } catch (err) {
    
    res.status(500).json({ username : null })
    
  }
});

export default router;