import { errors } from "../form.js";

// Валидация

function validForm(input) {
    if (input.hasAttribute('data-reg')) validReg(input);
    else validNotReg(input);
}

// Валидация инпутов с регулярными выражениями

function validReg(input) {
    const attribute = input.dataset.reg;
    let regex;
    if (input.type === 'email' || input.type === 'text') {
        regex = new RegExp(attribute, 'i');
    } else {
        regex = new RegExp(attribute);
    }
    
    if (!regex.test(input.value)) {
        input.offsetParent.nextElementSibling.innerHTML = errors.empty;
        input.style.borderBottom = '2x solid red';
        input.setAttribute('is-valid', 0)
    } else {
        input.offsetParent.nextElementSibling.innerHTML = '';
        input.style.borderBottom = '';
        input.setAttribute('is-valid', 1)
    }
}

// Валидация инпутов без регулярного выражения

function validNotReg(input) {
    if (input.type === 'checkbox') validCheck(input);
    else if (input.nodeName === 'SELECT') validSelect(input);
    else validEmpty(input);
}

// Проверка чекбокса

function validCheck(input) {
    if (!input.checked) {
        input.parentNode.lastElementChild.innerHTML = errors.check;
        input.setAttribute('is-valid', 0);
    } else {
        input.parentNode.lastElementChild.innerHTML = '';
        input.setAttribute('is-valid', 1);
    }
}

// Проверка селекта

function validSelect(input) {
    if (input[0].selected) {
        input.setAttribute('is-valid', 0);
        input.nextElementSibling.innerHTML = errors.select;
    } else {
        input.setAttribute('is-valid', 1);
        input.nextElementSibling.innerHTML = '';
    }
}

// Проверка инпутов с пустым значением

function validEmpty(input) {
    if (input.value !== '') {
        input.setAttribute('is-valid', 1);
        if (input.type === 'text') {
            input.offsetParent.nextElementSibling.innerHTML = '';
            input.style.borderBottom = '';
        } 
        else input.nextElementSibling.innerHTML = '';
    } 
    else {
        input.setAttribute('is-valid', 0);
        if (input.type === 'text') {
            input.offsetParent.nextElementSibling.innerHTML = errors.empty;
            input.style.borderBottom = '2px solid red';
        } 
        else input.nextElementSibling.innerHTML = errors.empty;
    }
}

// Проверка на заполненность формы при отправке (если у инпутов пустые значения то будет ошибка)

function errorsActive(inputs) {
    inputs.forEach(input => {
        if (input.getAttribute('is-valid') === '0') {
            if (input.type === 'checkbox') {
                input.nextElementSibling.innerHTML = errors.check;
            }
            else if (input.nodeName === 'SELECT') {
                input.nextElementSibling.innerHTML = errors.select;
            }
            else if (input.nodeName === 'TEXTAREA') {
                input.nextElementSibling.innerHTML = errors.empty;
            }
            else {
                input.offsetParent.nextElementSibling.innerHTML = errors.empty
                input.style.borderBottom = '2px solid red';
            }
        }
    });
}

// Отправка формы на почту

async function sendData(form) {
    const formData = new FormData(form);

    let response = await fetch('mail.php', {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        let result = await response.json();
        alert('Форма отправлена');
        form.reset();
    } else {
        alert('Произошла непредвиденная ошибка');
    }
}

export {
    validForm,
    errorsActive,
    sendData
}