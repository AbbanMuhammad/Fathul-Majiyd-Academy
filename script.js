// Responsive Navbar Toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".header nav");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
});