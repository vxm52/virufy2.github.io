// Mobile Navigation
const menuIcon = document.querySelector("#menu-icon");
const closeIcon = document.querySelector("#close-icon");
const mobileNav = document.querySelector("#mobile-nav");

menuIcon.addEventListener("click", () => {
  closeIcon.classList.remove("hidden");
  menuIcon.classList.add("hidden");
  mobileNav.classList.remove("hidden");
});

closeIcon.addEventListener("click", () => {
  menuIcon.classList.remove("hidden");
  closeIcon.classList.add("hidden");
  mobileNav.classList.add("hidden");
});

// Desktop Navigation 'About' Dropdown
const aboutLink = document.querySelector("#about-link");
const aboutDropdown = document.querySelector("#about-dropdown");

aboutLink.addEventListener("click", () => {
  aboutDropdown.classList.toggle("hidden");
});

aboutDropdown.addEventListener("mouseout", () => {
  aboutDropdown.classList.toggle("hidden");
});
