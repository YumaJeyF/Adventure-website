import * as app from './modules/index_functions.js'

// Управление модальными окнами

const btnsOpen = document.querySelectorAll('.m-op');
const btnsClose = document.querySelectorAll('.m-cl');

if (btnsOpen.length > 0) {
    btnsOpen.forEach(btn => {
        btn.addEventListener('click', event => {
            let attribute = btn.dataset.modal;
            let modal = document.querySelector(attribute);
            app.openModal(modal);
            if (modal.classList.contains('open')) app.closeWindow(modal);
        });
    })
}

if (btnsClose.length > 0) {
    btnsClose.forEach(btn => {
        btn.addEventListener('click', event => app.closeModal(btn.parentNode));
    });
}

// Показ скрытого текста по нажатию на кнопку second-block

const aboutUsBtn = document.querySelector('.about-us-next');
const aboutUsinf = document.querySelector('.about-us-next-inf ');
const btnHide = document.querySelector('.btn-hidden');

if (aboutUsBtn) {
    aboutUsBtn.addEventListener('click', event => {
        aboutUsBtn.style.display = 'none';
        if (!aboutUsinf.style.maxHeight) aboutUsinf.style.maxHeight = aboutUsinf.scrollHeight + 'px';
    });

}

if (btnHide) {
    btnHide.addEventListener('click', event => {
        aboutUsBtn.style.display = '';
        if (aboutUsinf.style.maxHeight) aboutUsinf.style.maxHeight = null;
    });
}

// Настройка видеоплеера

const mainVideoBlock = document.querySelector('.video-back');
const btnPlayVideo = document.querySelector('.play-video');
const btnCloseVideo = document.querySelector('.close-video');
const thirdBlockInf = document.querySelector('.third-block-inf');

if (thirdBlockInf) {
    btnPlayVideo.addEventListener('click', app.openVideo);
    btnCloseVideo.addEventListener('click', app.closeVideo);

    document.querySelector('.video-box').addEventListener('click', event => {
        event._isVideoOpen = true;
    });

    mainVideoBlock.addEventListener('click', event => {
        if (!event._isVideoOpen) app.closeVideo();
    });
}

// Показ скрытого текста по нажатию на кнопку fifth-block

const chooseHideBtn = document.querySelector('.btn-choose-hide');
const chooseInf = document.querySelector('.choose-us-hide ')
const nextChooseBtn = document.querySelector('.choose-next');

if (nextChooseBtn) {
    nextChooseBtn.addEventListener('click', event => {
        nextChooseBtn.style.display = 'none';
        if (!chooseInf.style.maxHeight) chooseInf.style.maxHeight = chooseInf.scrollHeight + 'px';
    });
}

if (chooseHideBtn) {
    chooseHideBtn.addEventListener('click', event => {
        nextChooseBtn.style.display = '';
        if (chooseInf.style.maxHeight) chooseInf.style.maxHeight = null;
    });
}

// Аккордеон

const title = document.querySelectorAll('.accordeon-title');

if (title) {
    title.forEach(el => {
        el.addEventListener('click', app.toggleContent)
    });
}

export { thirdBlockInf, btnPlayVideo, mainVideoBlock }