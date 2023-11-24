import { body } from './global_vars.js';

// Открытие бургей меню

function openBurgerMenu() {
    mobileMenu.classList.add('open');
    let scrollY = window.scrollY;
    body.style.position = 'fixed';
    body.style.top = -scrollY + 'px';
}

// Закрытие бургер меню

function closeBurgerMenu() {
    mobileMenu.classList.remove('open');
    body.style.position = '';
    window.scrollTo(0, parseInt(mainVars.body.style.top) * -1);
    body.style.top = '';
}

// Зафиксированный сверху навигационный блок

function topLine() {
    const topMenuNav = document.querySelector('.top-line-nav');
    const logo = document.querySelector('.logo');
    const navMenu = document.querySelector('.nav');

    let headHeight = document.querySelector('.head').clientHeight;
    if (this.scrollY > headHeight) {
        topMenuNav.classList.add('active');
        if (body.clientWidth >= 769) {
            logo.style.display = 'none';
            navMenu.classList.add('top-menu');
        }
        if (body.clientWidth <= 768) {
            logo.style.display = 'block';
        }
    } else {
        topMenuNav.classList.remove('active');
        logo.style.display = '';
        navMenu.classList.remove('top-menu');
    }
}

export { 
    openBurgerMenu,
    closeBurgerMenu,
    topLine
}