import { db } from "./firebase.js";
import { push, ref } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

document.getElementById("send").onclick = async () => {
  await push(ref(db, "queries"), {
    name: name.value,
    surname: surname.value,
    id: id.value,
    message: query.value,
    time: new Date().toISOString()
  });

  alert("Query sent");
  window.location.href = "index.html";
};
