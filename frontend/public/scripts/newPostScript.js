import { handleAddNewPost } from "./post.js";

document.getElementById('photo_file').addEventListener('change', function(event) {
    var file = event.target.files;
    var preview = document.getElementById('previewPic');
    
    // Clear any existing content
    preview.innerHTML = '';
    
    var img = document.createElement('img');
    img.src = URL.createObjectURL(file[0]);
    img.style.width = '100%';
    img.style.height = 'auto';
    img.style.maxHeight = '430px'
    img.style.alignSelf = 'center';
    img.style.verticalAlign = 'middle';

    // Append the container to the preview div
    preview.appendChild(img);
})

const username_box = document.getElementById('username');
username_box.innerText = "account-user";

const addNewPostButton = document.getElementById("add-new-post-btn");
    addNewPostButton.addEventListener("click", async () => {
        if(document.getElementById('previewPic').querySelector('img') !== null){
            await handleAddNewPost();
            location.href = "feed.html";
        }
    });
