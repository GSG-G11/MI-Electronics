const loginBtn = document.getElementById('login-btn');
const password = document.getElementById('password');
const username = document.getElementById('username');

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (password.value !== '' && username.value !== '') {
    window.location.href = '/html/app.html';
  }
});
