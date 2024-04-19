function valid(){
    if(document.getElementById('username').value === '' && document.getElementById('password').value === ''){
        alert('Please input Username and Password!');
    }
    else if(document.getElementById('username').value === ''){
        alert('Please input Username!');
    }
    else if(document.getElementById('password').value === ''){
        alert('Please input Password!');
    }
    else{
        location.href = "feed.html";
    }
}