const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const eye = document.querySelector("#eye");
const password = document.querySelector("#password");
const type = password.getAttribute("type")

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

eye.addEventListener("click", function () {
    // toggle the type attribute
    type === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    // toggle the icon
    this.classList.toggle("bi-eye-slash-fill");
});
