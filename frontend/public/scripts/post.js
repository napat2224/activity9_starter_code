import { addComment, addNewPost } from "./api.js";

export async function handleAddNewPost() {
  const picToAdd = document.getElementById('previewPic').childNodes[0];
  const payload = {
    imageUrl: picToAdd.src,
    poster: localStorage.getItem('username'),
    //poster: "Nam",
  };
  
  await addNewPost(payload);
}

export async function handleAddComment(id, index, username) {
  const commentTextToAdd = document.getElementById(`commentText_${index}`);
  const payload = {
    commenter: username,
    commentText: commentTextToAdd.value,
  };
  
  await addComment(id, payload);
}