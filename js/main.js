const menuToggle = document.getElementById("menuToggle");
const navButtons = document.getElementById("navButtons");

menuToggle.addEventListener("click", function () {
    navButtons.classList.toggle("active");
});