import { Storage } from './storage.js';
import { generateId } from './utils.js';

const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');

if (registerForm) {

  registerForm.addEventListener('submit', event => {

    event.preventDefault();

    const users = Storage.get('users');

    const userExists = users.find(
      user => user.email === email.value
    );

    if (userExists) {
      alert('El usuario ya existe');
      return;
    }

    const newUser = {

      id: generateId(),

      fullname: fullname.value,
      identification: identification.value,
      nationality: nationality.value,
      phone: phone.value,

      email: email.value,
      password: password.value,

      isAdmin: false
    };

    users.push(newUser);

    Storage.save('users', users);

    alert('Usuario registrado');

    window.location.href = 'login.html';
  });
}

if (loginForm) {

  loginForm.addEventListener('submit', event => {

    event.preventDefault();

    const users = Storage.get('users');

    const user = users.find(user =>
      user.email === email.value &&
      user.password === password.value
    );

    if (!user) {
      alert('Credenciales inválidas');
      return;
    }

    localStorage.setItem(
      'session',
      JSON.stringify(user)
    );

    alert('Bienvenido');

    window.location.href = 'index.html';
  });
}