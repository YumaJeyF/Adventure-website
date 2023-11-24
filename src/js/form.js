import { validForm, errorsActive,  sendData } from './modules/validate_form.js';

// Валидация формы

const form = document.forms[0];
const sub = document.querySelector('#sub');
const errors = {
    empty: 'Вы ввели неверное значение или не заполнили поле',
    select: 'Выберите один из предложенных вариантов',
    check: 'Подтвердите согласие на обработку ваших данных'
}

if (form) {
    const inputs = Array.from(form);

    inputs.forEach(input => {
        if (input.type !== 'submit') input.setAttribute('is-valid', 0);
    });

    form.addEventListener('input', event => {
        if (event.target.hasAttribute('is-valid')) validForm(event.target);
    });

    sub.addEventListener('click', event => {
        event.preventDefault();
        let indexValid = [];
        inputs.forEach(input => {
            if (input.hasAttribute('is-valid')) indexValid.push(input.getAttribute('is-valid'));
        });
        const result = indexValid.reduce((acc, item) => acc & item);
  
        if (!Boolean(Number(result))) {
            alert('Вы неверно заполнили форму');
            errorsActive(inputs);
        } else {
            alert('Форма заполнена');
            sendData(form);
        }
    });
}

// Автоматическая высота у поля для сообщения (textarea)

const textarea = document.querySelector('#yourmes');

if (textarea) textarea.addEventListener("input", OnInput);

function OnInput() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
}

export { errors }