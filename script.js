window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
setTimeout(() => {
    loader.classList.add("loader--hidden");
}, 4000);
    
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.ri-user-fill');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

function validateLogin() {
    const hardcodedEmail = "seanollero@gmail.com";
    const hardcodedPassword = "password123";

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === hardcodedEmail && password === hardcodedPassword) {
        alert("Login successful!");
        return true;
    } else {
        alert("Invalid email or password!");
        return false; 
    }
}

function register() {
    alert("Registration Unavailable");
}


