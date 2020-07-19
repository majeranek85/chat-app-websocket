const loginForm = document.getElementById('welcome-form');
const messagesSection = document.getElementById('messages-section');
const messagesList = document.getElementById('messages-list');
const addMessageForm = document.getElementById('add-messages-form');
const userNameInput = document.getElementById('username');
let messageContentInput = document.getElementById('message-content');

let userName;


const login = (e) => {
  e.preventDefault();

  if (userNameInput.value == ''){
      window.alert('Please write your login');
  } else {
      userName = userNameInput.value;
      loginForm.classList.remove('show');
      messagesSection.classList.add('show');
  }
};

const addMessage = (name, message) => {
  const listElem = document.createElement('li')//
  listElem.classList.add('message', 'message--received', `${name === userName && `message--self`}`);
  console.log(listElem);
  listElem.innerHTML = `
    <h3 class='message__author'>${name === userName ? 'You' : name}</h3>
    <div class='message__content'>${message}</div>
  `;

  messagesList.appendChild(listElem);
};

const sendMessage = (e) => {
  e.preventDefault();

  if (messageContentInput.value == ''){
    window.alert('Add your message')
  } else {
    addMessage(userName, messageContentInput.value);
    messageContentInput.value = '';
  }
};

loginForm.addEventListener('submit', login);
addMessageForm.addEventListener('submit', sendMessage);