import userUtil from "./user.js"

const sidebarPfp = document.querySelector(".sidebar__pfp");
const sidebarName = document.querySelector(".sidebar__name");
const sidebarBtn = document.querySelector(".sidebar__btn ");

sidebarPfp.style.backgroundImage = `url("https://github.com/${userUtil.user.username}.png")`;
sidebarName.textContent = userUtil.user.username;

sidebarBtn.addEventListener("click", (e) => {
  e.preventDefault();

  userUtil.logoff();
});
