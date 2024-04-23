import Post from "../models/postModel.js";

export const addNewPost = async (req, res) => {
  try {
    const newPost = new Post();

    const img = req.body.imageBase64;

    // const data = img['$ngfDataUrl'];
    // console.log(data);
    const split = img.split(',');
    //get Base64String
    const base64String = split[1];
    //get contentType
    const splitForType = split[0].split('/');
    const splitForImgType = splitForType[1].split(';');
    const imageDataType = splitForImgType[0];
    

    newPost.imageUrl.data = Buffer.from(base64String, 'base64');
    newPost.imageUrl.contentType = imageDataType;
    newPost.poster = req.body.poster;
    // console.log(newPost.imageUrl.data);

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

export const likeDisLikePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      post.likeNumber = post.likes.length;
      res.status(200).json("The post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      post.likeNumber = post.likes.length;
      res.status(200).json("The post has been disliked");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
