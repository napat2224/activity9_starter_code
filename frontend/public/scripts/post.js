import { addNewPost, likeDisLikePost } from "./api.js";

export async function handleAddNewPost() {
    const picToAdd = document.getElementById('previewPic').childNodes[0];
  
    const payload = {
      imageUrl: picToAdd.src,
      poster: localStorage.getItem('username'),
      //poster: "Nam",
    };
    
    await addNewPost(payload);
  }

  // export async function handleLikeDisLikePost(id) {
  //   const userId =  localStorage.getItem('username');
    
  //   await likeDisLikePost(id, userId);
  // }