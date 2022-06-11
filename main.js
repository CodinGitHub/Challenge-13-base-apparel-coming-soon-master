const form = document.querySelector('.container__content__form');
const input = document.querySelector('.container__content__form__text');
const error = document.querySelector('.container__content__form__error');

form.addEventListener('submit', (event)=>{
    const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if(regExp.test(input.value)){
        input.style.border = '1px solid hsl(0, 36%, 70%)';
        input.style.backgroundImage = 'url("")'
        error.innerHTML = '';
    }else{
        event.preventDefault();
        input.style.border = '1px solid red';
        input.style.backgroundImage = 'url("./images/icon-error.svg")';
        error.innerHTML = 'Please provide a valid email';
    }
});