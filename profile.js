import { db } from "./firebase.js";
import { ref, get, update } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// Load user details
const userID = localStorage.getItem("signupID"); // save ID after signup

const userRef = ref(db, "users/" + userID);
get(userRef).then(snapshot => {
  if(snapshot.exists()) {
    const data = snapshot.val();
    document.getElementById("name").value = data.name;
    document.getElementById("surname").value = data.surname;
    document.getElementById("id").value = userID;
    document.getElementById("email").value = data.email;
    document.getElementById("bank").value = data.bank || "";
    document.getElementById("account").value = data.account || "";
  }
});

// Update bank details only
document.getElementById("update").onclick = async () => {
  const bank = document.getElementById("bank").value;
  const account = document.getElementById("account").value;

  await update(userRef, { bank, account });
  const msg = document.getElementById("updated-msg");
  msg.classList.remove("hidden");

  setTimeout(() => msg.classList.add("hidden"), 1000);
};
