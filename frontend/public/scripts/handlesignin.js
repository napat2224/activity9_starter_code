import { register } from "./api.js"
// import { current_User } from "./config.js"

export async function handleRegister(){
    const usertoreg = document.getElementById("username");
    const pswtoreg = document.getElementById("password");
    const cfpswtoreg = document.getElementById("confirm-password");
    const user = {
        username : usertoreg,
        password : pswtoreg,
        confirmpassword : cfpswtoreg,
    };
    const userloggedin = await register(user);
    if(userloggedin != "username already use" && userloggedin != "password not match"){
        localStorage.setItem('username',userloggedin.username);
    }
}