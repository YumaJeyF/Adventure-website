import { body } from './modules/global_vars.js';

const pictures = document.querySelectorAll('.box-galery-png');
const arrPictures = Array.from(pictures);
const galeryBack = document.querySelector('.galery-background');
const galeryContent = document.querySelector('.box-galery-content');

if (pictures.length > 0) {
    pictures.forEach(pic => {
        pic.addEventListener('click', openPicture)
    });
}

let picOpen;
let indexPic;

// Открытие картинки

function openPicture() {
    indexPic = arrPictures.indexOf(this);
    galeryBack.classList.add('active');
    let scrollY = window.scrollY;
    body.classList.add('active');
    body.style.top = -scrollY + 'px'; 

    picOpen = this.cloneNode();
    picOpen.style.objectFit = 'contain';
    galeryContent.append(picOpen);
}

// Закрытие картинки

function closeGalery() {
    galeryBack.classList.remove('active');
    body.classList.remove('active');
    window.scrollTo(0, parseInt(body.style.top) * -1);
    body.style.top = '';
    picOpen.remove();
}

const btnNext = document.querySelector('.next');
const btnPrevious = document.querySelector('.previous');

const btnRightMob = document.querySelector('.btn-right');
const btnLeftMob = document.querySelector('.btn-left');

if (galeryBack) {
    btnNext.addEventListener('click', nextPicture);
    btnPrevious.addEventListener('click', previousPicture);

    btnRightMob.addEventListener('click', nextPicture);
    btnLeftMob.addEventListener('click', previousPicture);

    window.addEventListener('keydown', event => {
        if (galeryBack.classList.contains('active')) {
            if (event.key === 'ArrowLeft') previousPicture();
            if (event.key === 'ArrowRight') nextPicture();
            if (event.key == 'Escape') closeGalery();
        }
    });
    
    galeryContent.addEventListener('click', event => {
        event._isGaleryContent = true;
    });

    galeryBack.addEventListener('click', event => {
        if (event._isGaleryContent ||
            event.target === btnNext ||
            event.target === btnPrevious) return;
        closeGalery();
    });
}

let newPicture;

// Следующая картинка

function nextPicture() {
    picOpen.remove();
    if (indexPic < pictures.length - 1) {
        indexPic++
    } else {
        indexPic = 0;
    }
    newPicture = pictures[indexPic].cloneNode();
    newPicture.style.objectFit = 'contain';
    galeryContent.append(newPicture);
    picOpen = newPicture;
}

// Предыдущая картинка

function previousPicture() {
    picOpen.remove();
    if (indexPic > 0) {
        indexPic--
    } else {
        indexPic = pictures.length - 1;
    }
    newPicture = pictures[indexPic].cloneNode();
    newPicture.style.objectFit = 'contain';
    galeryContent.append(newPicture);
    picOpen = newPicture;
}
