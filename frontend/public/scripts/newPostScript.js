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

function photoValid() {
    if(document.getElementById('previewPic').querySelector('img') !== null){
        location.href = "feed.html";
    }
}