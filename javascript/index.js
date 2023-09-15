var typed = new Typed('#element', {
  strings: ['Projects', 'Community', 'Innovation', 'Contribution'],
  typeSpeed: 50,
});

let contact = JSON.parse(localStorage.getItem('contact')) || {
  name : '',
  email: '',
  message: ''
};

document.getElementById('name').value = contact.name;
document.getElementById('email').value = contact.email;
document.getElementById('message').value = contact.message;

function handleFormSubmit(event) {
  
  event.preventDefault(); // prevents reloading of website.
  
  contact.name = document.getElementById('name').value;
  contact.email = document.getElementById('email').value;
  contact.message = document.getElementById('message').value;

  localStorage.setItem('contact', JSON.stringify(contact));

}

const formElement = document.getElementById('messageForm');

formElement.addEventListener('submit', handleFormSubmit);

const elements = document.getElementsByClassName('blur');

function toggle(x) {
  if (x) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add('blurred');
    }
    document.getElementById('popup').classList.add('active');  
    document.getElementById('contact').scrollIntoView();  
  }
  else {
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove('blurred');
    }
    document.getElementById('popup').classList.remove('active');
  }
}