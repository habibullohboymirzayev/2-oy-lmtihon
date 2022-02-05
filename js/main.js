var burgerBtn = document.querySelector(".header__btn")
var menu = document.querySelector(".header")


burgerBtn.addEventListener("click", (evt) => {
    menu.classList.toggle("header--open")
}) 
