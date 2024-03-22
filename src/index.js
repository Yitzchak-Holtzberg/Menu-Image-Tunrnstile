import './style.scss';

const dropdown = document.getElementById("dropdown");
const dropdownContent = document.querySelector(".dropdown-content");
const overlay = document.querySelector('.overlay');
const closeOverlay = document.getElementById("closeOverlay");

dropdown.addEventListener("click", function (event) {
    dropdownContent.classList.toggle("dropdown-content-show");
    event.stopPropagation();
    if (window.innerWidth <= 600) {
        overlay.style.display = "block";
        closeOverlay.style.display = "block";
    }
});

document.addEventListener('click', function (event) {
    if (dropdownContent.contains(event.target)) {
        dropdownContent.classList.remove('dropdown-content-show');
    }
});

closeOverlay.addEventListener("click", function () {
    overlay.style.display = "none";
    closeOverlay.style.display = "none";
    dropdownContent.classList.toggle("dropdown-content-show");
});