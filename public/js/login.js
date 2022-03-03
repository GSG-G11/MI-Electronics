/* eslint-disable no-undef */
const loginBtn = getElement('#login-btn');
const password = getElement('#password');
const username = getElement('#username');
const errorInput = getElement('#error-input');
const errorPassword = getElement('#error-password');

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (password.value.length === 0 && username.value.length === 0) {
    errorInput.textContent = 'name must not be empty';
    errorPassword.textContent = 'password must not be empty';
  } else if (!containsUppercase(username.value)) {
    errorInput.textContent = 'name must be uppercase letter';
  } else if (!containsUppercase(password.value) || !containsNumber(password.value)) {
    errorInput.textContent = '';
    errorPassword.textContent = 'Must at least contain one number and uppercase letter';
  } else {
    errorPassword.textContent = '';
    localStorage.setItem('username', username.value);
    window.location.href = '/html/app.html';
  }
});
