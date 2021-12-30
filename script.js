import { registerUser } from './controller.js'
import { User } from './module.js';

const name = document.querySelector('#username');
const email = document.querySelector('#email');
const number = document.querySelector('#number');
const picture = document.querySelector('#picture');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const btn = document.getElementById('#btn');




btn.addEventListener('click', event => {
    event.preventDefault()
    if (name.value !== "" && email.value !== "" && number.value !== "" && picture.value !== "" && password.value !== "" && password.value === password2.value) {
        registerUser({
            username: name.value,
            email: email.value,
            number: number.value,
            avatar: picture.value,
            password: password.value
        }) 
        alert("Registered!")
        location.href = './login.html';
    } else {
        alert("Not all input is filled or the password is not matching!")
    }
    name.value ="";
    email.value = "";
    number.value = "";
    picture.value = "";
    password.value = "";
    password2.value = "";
});


