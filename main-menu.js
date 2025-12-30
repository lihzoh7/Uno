// Navigation buttons
document.getElementById("logout").onclick = () => {
  window.location.href = "index.html";
};

document.getElementById("profile").onclick = () => {
  window.location.href = "profile.html";
};

document.getElementById("messages").onclick = () => {
  window.location.href = "messages.html";
};

document.getElementById("prizes").onclick = () => {
  window.location.href = "prizes.html";
};

document.getElementById("scores").onclick = () => {
  window.location.href = "scores.html";
};

document.getElementById("play").onclick = () => {
  // Example check: only allow play if user has signed up
  if (localStorage.getItem("signupComplete") === "yes") {
    window.location.href = "game.html";
  } else {
    alert("Please SIGN UP first");
  }
};

document.getElementById("wallet").onclick = () => {
  window.location.href = "wallet.html";
};
