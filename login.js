import { db } from "./firebase.js";
import { ref, get } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const loginBtn = document.getElementById("loginBtn");

// Check if signup happened
if (localStorage.getItem("signupComplete") === "yes") {
  loginBtn.className = "yellow";
}

loginBtn.onclick = () => {
  if (loginBtn.className === "yellow") {
    window.location.href = "main-menu.html";
  } else {
    alert("Please SIGN UP first");
  }
};
