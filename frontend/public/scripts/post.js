import { addNewPost } from "./api.js";

export async function handleAddNewPost() {
    const picToAdd = document.getElementById('previewPic').childNodes[0];
    //const posterToAdd = document.getElementById('username');
  
    const payload = {
      imageUrl: picToAdd.src,
      //poster: posterToAdd.value,
      poster: "Nam",
    };
    
    await addNewPost(payload);
  }