const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

let formData = {
  email: '',
  message: ''
};

const localStorageKey = 'feedback-form-state';

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(localStorageKey);
  if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email || '';
    messageInput.value = formData.message || '';
  }
});

form.addEventListener('input', (event) => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Please fill all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(localStorageKey);
  formData = { email: '', message: '' };
  form.reset();
});
