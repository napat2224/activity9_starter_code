import { handleAddNewPost } from "./post.js";




document.getElementById('photo_file').addEventListener('change', function(event) {
    // var file = event.target.files;
    var preview = document.getElementById('previewPic');

    // const input = document.getElementById("photo_file");
    // const avatar = document.getElementById("pre-img");

    const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
        resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
        reject(error);
        };
    });
    };

    const uploadImage = async (event) => {
        const file = event.target.files[0];
        const base64 = await convertBase64(file);
        preview.innerHTML = '';
    
        const img = document.createElement('img');
        // img.setAttribute('id',"pre-img");
        img.src = base64;
        img.style.width = '100%';
        img.style.height = 'auto';
        img.style.maxHeight = '430px'
        img.style.alignSelf = 'center';
        img.style.verticalAlign = 'middle';
        // console.log(img.src);

    // Append the container to the preview div
        preview.appendChild(img);
        // textArea.innerText = base64;
      };

    uploadImage(event);
    // Clear any existing content
    
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