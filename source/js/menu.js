var btnOpen = document.querySelector(".header__btn--menu");
var btnClose = document.querySelector(".menu-list__item-btn--close");
btnClose.classList.remove("no-js");
var menu = document.querySelector(".header__navigation");
btnOpen.addEventListener("click", function () {
  console.log("open");
  menu.classList.remove("modal-disnone");
  btnOpen.classList.add("modal-disnone");
});
btnClose.addEventListener("click", function () {
  console.log(btnOpen);
  btnOpen.classList.remove("modal-disnone");
  menu.classList.add("modal-disnone");
});
