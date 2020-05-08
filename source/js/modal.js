var btnOpen = document.querySelector(".review__btn");
var modalAll = document.querySelectorAll(".booking");
var btnCloseAll = document.querySelectorAll(".booking__btn");
//var rand = Math.random();
//rand = (rand*10).toFixed(0);
btnOpen.addEventListener("click", function (e) {
  modalAll.forEach(element => {
    element.classList.remove("modal-disnone");
  });
});

btnCloseAll.forEach(button => {
  button.addEventListener("click", function () {
    if (button.classList.contains("booking__btn--success")){
      document.querySelector(".booking--success").classList.add("modal-disnone");
    }
    else{
      document.querySelector(".booking--failure").classList.add("modal-disnone");
    }
  })
});
