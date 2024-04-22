import { addNewPost } from "./api.js";

export async function handleAddNewPost() {
    const picToAdd = document.getElementById('previewPic').childNodes[0];
    const posterToAdd = localStorage.getItem('username');
  
    const payload = {
      imageUrl: picToAdd.src,
      poster: localStorage.getItem('username'),
      //poster: "Nam",
    };
    
    await addNewPost(payload);
  }