let menuOpenBtn = document.querySelector(".header__hamburguer");
let menuCloseBtn = document.querySelector(".menu__btn");
let menuComponent = document.querySelector(".menu");

menuOpenBtn.addEventListener("click", (e) => {
  e.preventDefault();

  menuComponent.classList.remove("menu--hidden");
});

menuCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();

  menuComponent.classList.add("menu--hidden");
});
