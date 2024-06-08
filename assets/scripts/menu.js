import userUtil from "./util/user.js";

const exitBtn = document.querySelector(".menu__exit");

exitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    userUtil.logoff();
});
