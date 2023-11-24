import { body } from './global_vars.js';
import { thirdBlockInf, btnPlayVideo, mainVideoBlock } from "../app.js";

// Функция на открытие модального окна

function openModal(modal) {
    modal.classList.add('open');
    let scrollY = window.scrollY;
    body.classList.add('active');
    body.style.top = -scrollY + 'px';
}

// Функция на закрытие модального окна

function closeModal(modal) {
    modal.classList.remove('open');
    body.classList.remove('active');
    window.scrollTo(0, parseInt(body.style.top) * -1);
}

// Функция на закрытие модального окна по клику в тёмную область

function closeWindow(modal) {
    modal.lastElementChild.addEventListener('click', event => {
        event._isClicked = true;
    });

    modal.addEventListener('click', event => {
        if (event._isClicked) return;
        closeModal(modal);
    });

    window.addEventListener('keydown', event => {
        if (event.key === 'Escape') closeModal(modal);
    });
}

// Открытие видео по клику

function openVideo() {
    mainVideoBlock.classList.add('open-video');
    thirdBlockInf.style.display = 'none';
    btnPlayVideo.style.display = 'none';
}

// Закрытие видео по клику

function closeVideo() {
    const video = document.querySelector('.video');
    mainVideoBlock.classList.remove('open-video');
    thirdBlockInf.style.display = '';
    btnPlayVideo.style.display = '';
    video.pause();
}

// Аккордеон

function toggleContent() {
    let content = this.nextElementSibling;
    let verticalLine = this.firstElementChild.lastElementChild;
    if (!content.style.maxHeight) {
        content.style.maxHeight = content.scrollHeight + 'px';
        verticalLine.classList.add('hidden');
        content.classList.add('open');
    } else {
        content.style.maxHeight = '';
        verticalLine.classList.remove('hidden');
        content.classList.remove('open');
    }
}

export {
    openModal,
    closeModal,
    closeWindow,
    openVideo,
    closeVideo,
    toggleContent
}

