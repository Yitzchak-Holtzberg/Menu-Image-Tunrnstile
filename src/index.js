import { homeButton, menuButton, aboutButton } from "./components"; // Consolidate imports
import "./style.css";

document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('#content');
    const homeBtn = document.querySelector("#home");
    const aboutBtn = document.querySelector("#about");
    const menuBtn = document.querySelector("#menu");

    const clearContent = () => content.innerHTML = '';

    content.appendChild(homeButton()); // Initial view

    homeBtn.addEventListener('click', () => {
        clearContent();
        content.appendChild(homeButton());
    });

    menuBtn.addEventListener('click', () => {
        clearContent();
        content.appendChild(menuButton());
    });

    aboutBtn.addEventListener('click', () => {
        clearContent();
        content.appendChild(aboutButton());
    });
});
