import { register } from "./api.js"


export async function handleRegister(){
    const usertoreg = document.getElementById("username").value;
    const pswtoreg = document.getElementById("password").value;
    const cfpswtoreg = document.getElementById("confirm-password").value;
    const user = {
        username : usertoreg,
        password : pswtoreg,
        confirmpassword : cfpswtoreg,
    };
    const userloggedin = await register(user);
    if(await userloggedin.username == "erruser"){
        localStorage.setItem('username',"null");
    }else{
        localStorage.setItem('username',await userloggedin.username);
    }
}