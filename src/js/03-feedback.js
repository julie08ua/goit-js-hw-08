import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const { email, message } = formEl.elements;


formEl.addEventListener('input', throttle((e) => {
    localStorage.setItem('feedback-form-state', JSON.stringify({
        email: email.value,
        message: message.value,
    }))
}, 500))


const dataUserForm = JSON.parse(localStorage.getItem('feedback-form-state'));

if (dataUserForm) {
    email.value = dataUserForm.email;
    message.value = dataUserForm.message;
}

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.clear();
    formEl.reset();
})