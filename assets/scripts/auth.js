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

console.log(cipherUtil.cipher("admin"), cipherUtil.cipher("password2024"));

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let user = document.querySelector("#user").value;
  let password = document.querySelector("#password").value;

  if (
    cipherUtil.checkMatch(user, "nmida") &&
    cipherUtil.checkMatch(password, "wssrpoda4220")
  ) {
    let data = {
      userName: cipherUtil.cipher(user),
      password: cipherUtil.cipher(password),
    };

    localStorage.setItem("user", JSON.stringify(data));
    window.location.replace("/pages/overview.html");
  } else {
    alert("Senha ou usuário incorretos.");
  }
});
