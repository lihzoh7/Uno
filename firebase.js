<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBqJTLjxhZBCsvjrTH_cG0fkXlElG6BqTg",
  authDomain: "tose-ccf8f.firebaseapp.com",
  databaseURL: "https://tose-ccf8f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tose-ccf8f",
  storageBucket: "tose-ccf8f.firebasestorage.app",
  messagingSenderId: "475447495901",
  appId: "1:475447495901:web:9189276a162a3680afdf34"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
</script>
