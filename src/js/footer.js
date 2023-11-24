// footer menu валидация поля для email адреса

const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
const email = document.querySelector('.em');
const searchBar = document.querySelector('.search-bar');
const subBtn = document.querySelector('.btn-sub');

if (document.querySelector('footer')) {
    let trueValueEmail;
    let result = false;

    email.addEventListener('input', event => {
        if (!regEmail.test(email.value)) {
            searchBar.classList.add('error');
            result = false;
        } else {
            searchBar.classList.remove('error');
            result = true;
        }
    });

    subBtn.addEventListener('click', event => {
        if (!result) event.preventDefault();
        let valueEmail;
        if (email.type === 'email') {
            valueEmail = email.name + '=' + encodeURIComponent(email.value);
        }
    });
}

// По клику скролл вверх

const btnScrollToTop = document.querySelector('.scroll-top');
const scrollBox = document.querySelector('.scroll-to-top-box');

if (scrollBox) { 
    window.addEventListener('scroll', event => {
        let scrollWindow = window.scrollY;
    
        if (scrollWindow >= 500) {
            scrollBox.classList.add('active');
        } else {
            scrollBox.classList.remove('active');
        }
    });
    
    btnScrollToTop.addEventListener('click', event => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
    
}