const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const eye = document.querySelector("#eye");
const password = document.querySelector("#password");
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone-number");
const confirmPassword = document.querySelector("#confirm-password");
const re = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

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

// eye icon to show password
eye.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    // toggle the icon
    this.classList.toggle("bi-eye-slash-fill");
});


// inputs Validation
form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
    const phoneValue = phoneNumber.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = confirmPassword.value.trim();
	
	if(usernameValue === '') {
		username.style.borderColor = "red";
	} else {
		username.style.borderColor = "green";
	}
	
    if (emailValue.match(re)) {
		email.style.borderColor = "green";
    } else {
        email.style.borderColor = "red";
    }

    if (emailValue === '') {
        email.style.borderColor = "red";
    } 

    if(phoneValue === '') {
		phoneNumber.style.borderColor = "red";
	} else {
		phoneNumber.style.borderColor = "green";
	}
	
	if(passwordValue === '') {
		password.style.borderColor = "red";
	} else {
		password.style.borderColor = "green";
	}
	
	if(password2Value === '') {
		confirmPassword.style.borderColor = "red";
	} else if(passwordValue !== password2Value) {
		confirmPassword.style.borderColor = "red";
	} else{
		confirmPassword.style.borderColor = "green";
	}
}
	
	
