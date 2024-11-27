// JavaScript to toggle the responsive navbar on small screens
const hamburgerMenu = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("navbar");

hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});