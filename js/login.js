let emailInput=document.getElementById('email');
let passwordInput=document.getElementById('password');
let btnSubmit=document.getElementById('btn-submit');
let loginValidation =document.getElementById('loginValidation');
let emailValidation =document.getElementById('emailValidation');
let passwordValidation =document.getElementById('passwordValidation');
let usersContainer=[];

if (localStorage.getItem("Users") != null) {
  usersContainer = JSON.parse(localStorage.getItem("Users"));
}
btnSubmit.addEventListener('click',checkInput);
function checkInput() {

//! Check if users are stored in local storage
  if(usersContainer.length == 0){
    alert('plese signup first');
    location.assign('signup.html');
  }
  for(let i=0 ; i < usersContainer.length ;i++){
    if (passwordInput.value == usersContainer[i].password &&
      emailInput.value == usersContainer[i].email){
        location.assign('index.html')
        break;
      }
  }
  checkValidation();
  };

// ! Login Validation 
function checkValidation(){
  if(!emailInput || !passwordInput){
    loginValidation.textContent="Please Fill All Required Inputs";
    return false ;
  }
  else {
    let userFound = false;
    for(let i = 0; i < usersContainer.length; i++){
      if(emailInput.value == usersContainer[i].email && passwordInput.value == usersContainer[i].password){
        userFound = true;
        break;
      }
    }
    if(!userFound){
      emailValidation.textContent="Invalid Email";
      passwordValidation.textContent="Invalid Password";
    }
    else {
      return true ;
    }
  }
}