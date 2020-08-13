// Mobile Navigation
const menuIcon = document.querySelector("#menu-icon");
const closeIcon = document.querySelector("#close-icon");
const mobileNav = document.querySelector("#mobile-nav");

// Mobile Language Navigation
const languageBtn = document.querySelector("#mobile-lng-btn");
const languageNav = document.querySelector("#mobile-lng-menu");
const saveBtn = document.querySelector("#mobile-save-btn");

menuIcon.addEventListener("click", () => {
  closeIcon.classList.remove("hidden");
  menuIcon.classList.add("hidden");
  mobileNav.classList.remove("hidden");
  languageBtn.classList.add("hidden");
});

closeIcon.addEventListener("click", () => {
  menuIcon.classList.remove("hidden");
  languageBtn.classList.remove("hidden");
  languageNav.classList.add("hidden");
  closeIcon.classList.add("hidden");
  mobileNav.classList.add("hidden");
});

languageBtn.addEventListener("click", () => {
  languageNav.classList.remove("hidden");
  closeIcon.classList.remove("hidden");
  languageBtn.classList.add("hidden");
  menuIcon.classList.add("hidden");
});

saveBtn.addEventListener("click", () => {
  // TODO: If we enable cookies to save user's language preferences
  // we would handle it here
});
