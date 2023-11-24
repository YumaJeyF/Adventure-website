import * as flsFunctions from './modules/webp_support.js';
import * as head from './modules/head_functions.js';

flsFunctions.isWebp();

const mobileMenu = document.querySelector('.nav-burger-box');

// Управление бургер меню для мобилок

document.querySelector('.burger-open').addEventListener('click', head.openBurgerMenu);
document.querySelector('.burger-close').addEventListener('click', head.closeBurgerMenu);

mobileMenu.addEventListener('click', event => {
    if (event.target.offsetParent !== document.querySelector('.burger-open') && event.target !== document.querySelector('.nav-burger-box-menu') ) {
        head.closeBurgerMenu();
    }
});

// Навигационное меню сверху

window.addEventListener('scroll', head.topLine);
