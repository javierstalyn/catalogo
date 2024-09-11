import { login, logout } from "./helpers.js";
document.addEventListener("DOMContentLoaded", ()=>{
    login()
  });
  
  
  const logoutButton = document.getElementById("logOut"); 
  logoutButton.addEventListener("click", ()=>{
    logout()
  });