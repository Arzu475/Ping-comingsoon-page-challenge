# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot

![](/Screenshot/Frontend-Mentor-Ping-coming-soon-page.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox


### What I learned

```CSS 

input:-webkit-autofill, 
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus {
    -webkit-text-fill-color: var(--paragraph);
    transition: background-color 5000s ease-in-out 0s ;
}

```

```JS

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

```

### Continued development

I learned a lot about what email validation is using javascript. for my learning in the future I will focus more on email validation.


### Useful resources

- [Resource 1](https://www.w3resource.com/javascript/form/non-empty-field.php) - This helped me for validation email with javascript. I really liked this pattern and will use it going forward.

## Author

- Frontend Mentor - [@Arzu475](https://www.frontendmentor.io/profile/Arzu475)
- Twitter - [@Akhund_Zuu](https://www.twitter.com/Akhund_Zuu)


