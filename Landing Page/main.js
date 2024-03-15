const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

const scriptURL=""
const form= document.forms['contact.form']

form.addEventListener('submit' , e=>{
  e.preventDefault();
  fetch(scriptURL , {method:'POST' , body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully."))
  .then (() =>{window.location.reload(); })
  .catch(error => console.error('Error!',error.message))
});

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container form", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__container a", {
  ...scrollRevealOption,
  delay: 1500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

