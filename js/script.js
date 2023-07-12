let email = document.getElementById('emails');
let message = document.getElementById('message-error');
let requiredEmail = document.getElementById('required');

var mailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

// Displaying a message error if email validation don't exist with mailRegex

function emailValidation(validation) {
    if(validation.value.match(mailRegex)) {
        email.style.border = '1px solid #c2d3ff';
        message.style.display = 'none';
        requiredEmail.style.display = 'none'
        return true;
    }

    else if(validation.value == '') {
        requiredEmail.style.display = 'block';
        requiredEmail.innerHTML = 'Whoops! It looks like you forgot to add your email';
        email.style.border = '1px solid #ff5263';

        return;
    }

    else {
        email.style.border = '1px solid #ff5263';
        message.style.display = 'block';
        message.innerHTML = 'Please provide a valid email address';
        
        return false;
    }
}

emailValidation();
