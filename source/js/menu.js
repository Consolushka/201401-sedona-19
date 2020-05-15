var btnOpen = document.querySelector(".header__btn");
console.log(btnOpen);
btnOpen.classList.remove("no-js");
var menu = document.querySelector(".header__navigation");
btnOpen.addEventListener("click", function () {
  if(btnOpen.classList.contains("header__btn--close")){
    console.log("click");
    btnOpen.classList.remove("header__btn--close");
    menu.classList.add("modal-disnone");
  }
  else{
    btnOpen.classList.add("header__btn--close");
    menu.classList.remove("modal-disnone");
  }
});
