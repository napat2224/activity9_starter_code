import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  commenter: {
    type: String
  },
  commentText: {
    type: String
  },
});

const PostSchema = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
      required: true,
    },
    likes: {
      type: [String],
      default: [],
    },
    likeNumber: {
      type: Number,
      default: 0,
    },
    comments: {
      type: [CommentSchema],
      default: [],
    },
  },
  {
    timestamps: {
    createdAt: 'time', // Use `time` to store the created date
    updatedAt: 'update_time' // and `updated_time` to store the last updated date
  }
}
);

const Post = mongoose.model("Post", PostSchema);
export default Post;
