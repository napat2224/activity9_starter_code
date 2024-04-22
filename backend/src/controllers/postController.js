import Post from "../models/postModel.js";

export const addNewPost = async (req, res) => {
    try {
      const newPost = new Post(req.body);
      await newPost.save();
  
      res.status(200).json({ message: "Post Saved" });
    } catch (err) {
      if (err.name === "ValidationError") {
        res.status(400).json({ error: "Bad Request" });
      } else {
        res.status(500).json({ error: "Internal server error." });
      }
    }
  };

export const getPosts = async (req, res) => {
    const posts = await Post.find();
  
    res.status(200).json(posts);
  };