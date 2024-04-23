import { handleLogin } from "./handlelogin.js";

const loginButton = document.getElementById('login-btn');
loginButton.addEventListener("click", async () => {
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
        await handleLogin();
        if(localStorage.getItem('username')!= null) location.href = "feed.html";
    }
});
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