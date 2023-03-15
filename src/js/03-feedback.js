import _throttle from 'lodash.throttle';

const form = document.querySelector('form');
const emailInput = document.querySelector('input');
const textareaInput = document.querySelector('textarea');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

let inputData = {};

form.addEventListener('submit', handleSubmit);
form.addEventListener('input', _throttle(handleInput, 500));

getLocalStorageData();

function getLocalStorageData() {
  const savedLocalStorageData = localStorage.getItem(LOCAL_STORAGE_KEY)
    ? localStorage.getItem(LOCAL_STORAGE_KEY)
    : 0;

  if (savedLocalStorageData) {
    const object = JSON.parse(savedLocalStorageData);
    emailInput.value = object.email || '';
    textareaInput.value = object.message || '';

    // console.log(object);
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const alertMessage = 'All fields must be filled!';
  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value === '' || message.value === '') {
    return alert(alertMessage);
  }

  let result = {};
  result[email.name] = email.value;
  result[message.name] = message.value;
  console.log(result);
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  event.currentTarget.reset();
}

function handleInput(event) {
  inputData[event.target.name] = event.target.value;

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(inputData));
  // console.log(inputData);
}
