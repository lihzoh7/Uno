import { db } from "./firebase.js";
import { ref, set, get } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

function validSAID(id) {
  return /^\d{13}$/.test(id);
}

document.getElementById("submit").onclick = async () => {
  const id = document.getElementById("id").value;
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  if (!validSAID(id)) return alert("Invalid SA ID");
  if (password.length < 8) return alert("Password too short");
  if (password !== confirm) return alert("Passwords do not match");

  const idRef = ref(db, "users/" + id);
  const snapshot = await get(idRef);
  if (snapshot.exists()) return alert("ID already exists");

  await set(idRef, {
    name: name.value,
    surname: surname.value,
    email: email.value,
    bank: bank.value,
    account: account.value
  });

  localStorage.setItem("signupComplete", "yes");
  alert("SUBMITTED");
  window.location.href = "index.html";
};
