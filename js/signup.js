// START-- Sign up form validation

function signup() {
    let fnameInput = document.getElementById('fname-input');
    let lnameInput = document.getElementById('lname-input');
    let emailInput = document.getElementById('email-input');
    let passwordInput = document.getElementById('password-input');
    let confirmPasswordInput = document.getElementById('confirm-password-input');
    let phoneInput = document.getElementById('phone-input');
    let emailValidation = document.getElementById('email_validation');
    let passwordValidation = document.getElementById('password_validation');
    let confirmPasswordValidation = document.getElementById('confirm_password_validation');
    let fnameValidation = document.getElementById('fname_validation');
    let lnameValidation = document.getElementById('name_validation');
    let phoneValidation = document.getElementById('phone_validation');
    
    fnameValidation.textContent = "";
    lnameValidation.textContent = "";
    emailValidation.textContent = "";
    passwordValidation.textContent = "";
    confirmPasswordValidation.textContent = "";
    phoneValidation.textContent = "";
    let users = JSON.parse(localStorage.getItem("Users")) || [];
    // Validate first name
    if (!fnameInput.value) {
        fnameValidation.textContent = "*Please enter your first name.";
        return false;
    }

    // Validate last name
    if (!lnameInput.value) {
        lnameValidation.textContent = "*Please enter your last name.";
        return false;
    }

    //Validate email
    if (!validateEmail(emailInput.value)) {
        emailValidation.textContent = "*Please enter a valid email address.";
        return false;
    }
    // Check if email already exists
    if(users.some((user) => user.email === emailInput.value)){
        emailValidation.textContent = "*Email already exists";
        return false;
    }
    //Validate password
    if (!validatePassword(passwordInput.value)) {
        passwordValidation.textContent = "*Password must be at least 8 characters, contains at least one number, capital and small letters";
        return false;
    }

    // Confirm password
    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordValidation.textContent = "*Passwords do not match.";
        return false;
    }

    // Validate phone
    if (!validatePhone(phoneInput.value)) {
        phoneValidation.textContent = "*Please enter a valid phone number.";
        return false;
    }
    let user = {
        fname: fnameInput.value,
        lname: lnameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        phone: phoneInput.value
    };
    users.push(user);
    localStorage.setItem("Users", JSON.stringify(users));
    window.history.pushState({}, "", "../index.html");


}


function validatePassword(passwordInput) {
    var passRegex = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    return passRegex.test(passwordInput);
}

function validateEmail(emailInput) {
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(emailInput);
}
function validatePhone(phoneInput) {
    var phoneRegex = /^01[0125][0-9]{8}$/gm;
    return phoneRegex.test(phoneInput);
}
// eye icon
document.getElementById('togglePassword').addEventListener('click', function () {
    togglePasswordVisibility('password-input', 'togglePassword');
});

document.getElementById('togglePassword2').addEventListener('click', function () {
    togglePasswordVisibility('confirm-password-input', 'togglePassword2');
});

function togglePasswordVisibility(passwordFieldId, toggleIconId) {
    var passwordField = document.getElementById(passwordFieldId);
    var toggleIcon = document.getElementById(toggleIconId);

      if (passwordField.type === 'password') {
                passwordField.type = 'text';
                toggleIcon.classList.remove('far', 'fa-eye-slash');
                toggleIcon.classList.add('far', 'fa-eye');
            } else {
                passwordField.type = 'password';
                toggleIcon.classList.remove('far', 'fa-eye');
                toggleIcon.classList.add('far', 'fa-eye-slash');
            }
        } 

// END-- Sign up form validation

