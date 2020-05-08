var btnOpenModal = document.querySelector(".review__btn");
var modalAll = document.querySelectorAll(".booking");
var btnCloseAll = document.querySelectorAll(".booking__btn");
var form = document.querySelector(".review__form");
var required = form.querySelectorAll(".form__required");

btnOpenModal.addEventListener("click", function (e) {
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

form.addEventListener("submit", function(e){

});
