import { login } from "./api.js"


export async function handleLogin(){
    const usertologin = document.getElementById("username").value;
    const pswtologin = document.getElementById("password").value;
    const user = {
        username : usertologin,
        password : pswtologin,
    };
    const userloggedin = await login(user);
    //if(userloggedin.username != null){
        if(await userloggedin.username == "erruser"){
            localStorage.setItem('username',"null");
        }else{
            localStorage.setItem('username',await userloggedin.username);
        }
    //}
    
}