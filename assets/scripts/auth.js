import cipherUtil from "./cipher.js";

const token = localStorage.getItem("user");

if (!token) {
  if (window.location.pathname != "/") {
    window.location.replace("/");
  }
} else {
  window.location.pathname = "/pages/overview.html";
}

const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let user = document.querySelector("#user").value;
  let password = document.querySelector("#password").value;

  if (cipherUtil.checkMatch(password, "wssrpoda4220")) {
    let data = {
      username: user,
      password: cipherUtil.cipher(password),
    };

    localStorage.setItem("user", JSON.stringify(data));
    window.location.replace("/pages/overview.html");
  } else {
    alert("Senha ou usuário incorretos.");
  }
});
