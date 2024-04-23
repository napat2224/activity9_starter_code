import { login } from "./api.js"
// import { current_User } from "./config.js"

export async function handleLogin(){
    const usertologin = document.getElementById("username");
    const pswtologin = document.getElementById("password");
    const user = {
        username : usertologin,
        password : pswtologin,
    };
    const userloggedin = await login(user);
    if(userloggedin != "user not found" && userloggedin != "wrong password"){
        localStorage.setItem('username',userloggedin.username);
    }
    
}