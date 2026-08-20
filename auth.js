const form = document.getElementById('auth-form');
const message = document.getElementById('auth-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  message.textContent = 'Demo sign-in captured. Connect this form to your authentication service next.';
});