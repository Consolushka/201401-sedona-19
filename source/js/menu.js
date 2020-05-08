var btnOpen = document.querySelector(".header__btn--menu");
var btnClose = document.querySelector(".menu-list__item-btn--close");
var menu = document.querySelector(".header__navigation");
btnOpen.addEventListener("click", function () {
  menu.classList.remove("modal-disnone");
});
btnClose.addEventListener("click", function () {
  menu.classList.add("modal-disnone");
});
