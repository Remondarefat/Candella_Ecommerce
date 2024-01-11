(function(){
    let img_slider = document.getElementsByClassName('img_slider');
    let step = 0;
    let nbr_img = img_slider.length;
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');
    
    function deleteActiveImages(){
        for(let i = 0 ; i < nbr_img ; i++){
            img_slider[i].classList.remove('active');
        }
    }
    
    next.addEventListener('click',function(){
        step++;
        if(step >= nbr_img){
            step = 0;
        }
        deleteActiveImages();
        img_slider[step].classList.add('active');
    });
    prev.addEventListener('click',function(){
        step--;
        if(step < 0){
            step = nbr_img -1;
        }
        deleteActiveImages();
        img_slider[step].classList.add('active');
    });
    setInterval(function(){
        step++;
        if(step >= nbr_img){
            step = 0;
        }
        deleteActiveImages();
        img_slider[step].classList.add('active');
    
    }, 3000);
})();

// START-- Sign up form validation

// let signupForm = function signup() {
//     let fnameInput = document.getElementById('fname-input');
//     let lnameInput = document.getElementById('lname-input');
//     let emailInput = document.getElementById('email-input');
//     let passwordInput = document.getElementById('password-input');
//     let confirmPasswordInput = document.getElementById('confirm-password-input');
//     let phoneInput = document.getElementById('phone-input');
//     let emailValidation = document.getElementById('email_validation');
//     let passwordValidation = document.getElementById('password_validation');
//     let confirmPasswordValidation = document.getElementById('confirm_password_validation');
//     let fnameValidation = document.getElementById('fname_validation');
//     let lnameValidation = document.getElementById('name_validation');
//     let phoneValidation = document.getElementById('phone_validation');
    
//     fnameValidation.textContent = "";
//     lnameValidation.textContent = "";
//     emailValidation.textContent = "";
//     passwordValidation.textContent = "";
//     confirmPasswordValidation.textContent = "";
//     phoneValidation.textContent = "";
//     let users = JSON.parse(localStorage.getItem("Users")) || [];
//     // Validate first name
//     if (!fnameInput.value) {
//         fnameValidation.textContent = "*Please enter your first name.";
//         return false;
//     }

//     // Validate last name
//     if (!lnameInput.value) {
//         lnameValidation.textContent = "*Please enter your last name.";
//         return false;
//     }

//     //Validate email
//     if (!validateEmail(emailInput.value)) {
//         emailValidation.textContent = "*Please enter a valid email address.";
//         return false;
//     }

//     //Validate password
//     if (!validatePassword(passwordInput.value)) {
//         passwordValidation.textContent = "*Password must be at least 8 characters, contains at least one number, capital and small letters";
//         return false;
//     }

//     // Confirm password
//     if (passwordInput.value !== confirmPasswordInput.value) {
//         confirmPasswordValidation.textContent = "*Passwords do not match.";
//         return false;
//     }

//     // Validate phone
//     if (!validatePhone(phoneInput.value)) {
//         phoneValidation.textContent = "*Please enter a valid phone number.";
//         return false;
//     }
//     let user = {
//         fname: fnameInput.value,
//         lname: lnameInput.value,
//         email: emailInput.value,
//         password: passwordInput.value,
//         phone: phoneInput.value
//     };
//     users.push(user);
//     localStorage.setItem("Users", JSON.stringify(users));

 
// }


// function validatePassword(passwordInput) {
//     var passRegex = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
//     return passRegex.test(passwordInput);
// }

// function validateEmail(emailInput) {
//     var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     return emailRegex.test(emailInput);
// }
//  function validatePhone(phoneInput) {
//     var phoneRegex = /^01[0125][0-9]{8}$/gm;
//     return phoneRegex.test(phoneInput);
// }

//    // eye icon
//    document.getElementById('togglePassword').addEventListener('click', function () {
//     togglePasswordVisibility('password-input', 'togglePassword');
//     });

// document.getElementById('togglePassword2').addEventListener('click', function () {
//     togglePasswordVisibility('confirm-password-input', 'togglePassword2');
//     });


// function togglePasswordVisibility(passwordFieldId, toggleIconId) {
    
//     var passwordField = document.getElementById(passwordFieldId);
//     var toggleIcon = document.getElementById(toggleIconId);

//       if (passwordField.type === 'password') {
//                 passwordField.type = 'text';
//                 toggleIcon.classList.remove('far', 'fa-eye-slash');
//                 toggleIcon.classList.add('far', 'fa-eye');
//             } else {
//                 passwordField.type = 'password';
//                 toggleIcon.classList.remove('far', 'fa-eye');
//                 toggleIcon.classList.add('far', 'fa-eye-slash');
//             }
//         } 
   
// // END-- Sign up form validation

// // Contact required fields validation

// let contactSubmitForm= function submitForm() {
//     var contactFname = document.getElementById("contact-fname").value;
//     var contactLname = document.getElementById("contact-lname").value;
//     var contactEmail = document.getElementById("contact-email").value;
//     var contactMessage = document.getElementById("contact-textarea").value;
//     if (!contactFname || !contactLname || !contactEmail || !contactMessage) {
//         alert("Please fill in all required fields.");
//         return false;
//     }
//     console.log("Your message has been sent successfully.");
// }

// END -- contact required fields validation





// START-- Sign up form validation
// (function () {
    
// function signup() {
//     // let fnameInput = document.getElementById('fname-input');
//     // let lnameInput = document.getElementById('lname-input');
//     // let emailInput = document.getElementById('email-input');
//     // let passwordInput = document.getElementById('password-input');
//     // let confirmPasswordInput = document.getElementById('confirm-password-input');
//     // let phoneInput = document.getElementById('phone-input');
//     // let emailValidation = document.getElementById('email_validation');
//     // let passwordValidation = document.getElementById('password_validation');
//     // let confirmPasswordValidation = document.getElementById('confirm_password_validation');
//     // let fnameValidation = document.getElementById('fname_validation');
//     // let lnameValidation = document.getElementById('name_validation');
//     // let phoneValidation = document.getElementById('phone_validation');
    
//     // fnameValidation.textContent = "";
//     // lnameValidation.textContent = "";
//     // emailValidation.textContent = "";
//     // passwordValidation.textContent = "";
//     // confirmPasswordValidation.textContent = "";
//     // phoneValidation.textContent = "";
//     // let users = JSON.parse(localStorage.getItem("Users")) || [];
//     // // Validate first name
//     // if (!fnameInput.value) {
//     //     fnameValidation.textContent = "*Please enter your first name.";
//     //     return false;
//     // }

//     // // Validate last name
//     // if (!lnameInput.value) {
//     //     lnameValidation.textContent = "*Please enter your last name.";
//     //     return false;
//     // }

//     // //Validate email
//     // if (!validateEmail(emailInput.value)) {
//     //     emailValidation.textContent = "*Please enter a valid email address.";
//     //     return false;
//     // }

//     // //Validate password
//     // if (!validatePassword(passwordInput.value)) {
//     //     passwordValidation.textContent = "*Password must be at least 8 characters, contains at least one number, capital and small letters";
//     //     return false;
//     // }

//     // // Confirm password
//     // if (passwordInput.value !== confirmPasswordInput.value) {
//     //     confirmPasswordValidation.textContent = "*Passwords do not match.";
//     //     return false;
//     // }

//     // Validate phone
//     // if (!validatePhone(phoneInput.value)) {
//     //     phoneValidation.textContent = "*Please enter a valid phone number.";
//     //     return false;
//     // }
//     // let user = {
//     //     fname: fnameInput.value,
//     //     lname: lnameInput.value,
//     //     email: emailInput.value,
//     //     password: passwordInput.value,
//     //     phone: phoneInput.value
//     // };
//     // users.push(user);
//     // localStorage.setItem("Users", JSON.stringify(users));

// }


// function validatePassword(passwordInput) {
//     var passRegex = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
//     return passRegex.test(passwordInput);
// }

// function validateEmail(emailInput) {
//     var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     return emailRegex.test(emailInput);
// }
// function validatePhone(phoneInput) {
//     var phoneRegex = /^01[0125][0-9]{8}$/gm;
//     return phoneRegex.test(phoneInput);
// }
// eye icon
// document.getElementById('togglePassword').addEventListener('click', function () {
//     togglePasswordVisibility('password-input', 'togglePassword');
// });

// document.getElementById('togglePassword2').addEventListener('click', function () {
//     togglePasswordVisibility('confirm-password-input', 'togglePassword2');
// });

// function togglePasswordVisibility(passwordFieldId, toggleIconId) {
//     var passwordField = document.getElementById(passwordFieldId);
//     var toggleIcon = document.getElementById(toggleIconId);

//       if (passwordField.type === 'password') {
//                 passwordField.type = 'text';
//                 toggleIcon.classList.remove('far', 'fa-eye-slash');
//                 toggleIcon.classList.add('far', 'fa-eye');
//             } else {
//                 passwordField.type = 'password';
//                 toggleIcon.classList.remove('far', 'fa-eye');
//                 toggleIcon.classList.add('far', 'fa-eye-slash');
//             }
//         } 

// END-- Sign up form validation

// Contact required fields validation

// function submitForm() {
//     var contactFname = document.getElementById("contact-fname").value;
//     var contactLname = document.getElementById("contact-lname").value;
//     var contactEmail = document.getElementById("contact-email").value;
//     var contactMessage = document.getElementById("contact-textarea").value;
//     if (!contactFname || !contactLname || !contactEmail || !contactMessage) {
//         alert("Please fill in all required fields.");
//         return false;
//     }
//     alert("Your message has been sent successfully.");
// }
// })();
// END -- contact required fields validation