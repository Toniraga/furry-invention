const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show Error Message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show Success Message
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

// Validate Email Address
function checkEmail(input) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regEx.test(input.value.trim())) {
        showSuccess(input)
    } else {
        showError(input, 'Enter a valid Email');
    }
}

// Check input field
function checkRequired(inputArr) {
    inputArr.forEach(input => {
        if (input.value.trim() === '') {
            showError(input, `Please ${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// Check Passwords
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    } else {
        showSuccess(input);
    }
}

// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} should be at least ${min} characters`)
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} should not be more than ${max} characters`)
    } else {
        showSuccess(input)
    }
}


// Get fieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}



form.addEventListener('submit', e => {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkEmail(email);
    checkLength(password, 5, 9)
    checkLength(username, 3, 7);
    checkPasswordsMatch(password, password2);
})


