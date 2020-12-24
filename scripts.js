const hamburgerBTN = document.querySelector(".fa-bars");
const  toggleBTN = document.querySelector(".fa-times");
const navList = document.querySelector(".nav-list")

hamburgerBTN.addEventListener("click", function() {
    toggleBTN.classList.add("open");
    hamburgerBTN.classList.add("open");
    navList.classList.add("open");
})

toggleBTN.addEventListener("click", function() {
    toggleBTN.classList.remove("open");
    hamburgerBTN.classList.remove("open");
    navList.classList.remove("open");
})

$(function () {
    AOS.init({
            easing: "ease",
            duration: 1000,
        });



});
