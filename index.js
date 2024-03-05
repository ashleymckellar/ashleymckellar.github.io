(function() {
    emailjs.init("-NQgEqOLnfGRZRLS7");
})();

const form = document.getElementById('contact_form');
const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userMessage = document.getElementById('message');
const subject = document.getElementById('subject')

let isValid = false

function validateForm() {
    // Using Contraint API
    isValid = form.checkValidity();
    // Style main message for an error
    if(isValid === false) {
        message.textContent ="Please fill out all the fields";
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
    } else if(isValid === true) {
        message.textContent ="Your message is being sent";
        message.style.color = 'Orange';
        messageContainer.style.borderColor = 'Orange';
    }
}



