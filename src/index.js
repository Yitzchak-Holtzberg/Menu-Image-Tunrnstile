import './style.css';

document.getElementById("dropdown").addEventListener("click", function () {
    document.querySelector(".dropdown-content").classList.toggle("dropdown-content-show");
});