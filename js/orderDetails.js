let firstNameInput =document.getElementById('fname');
let lastNameInput=document.getElementById('lname');
let emailInput =document.getElementById('userEmail');
let PhoneInput=document.getElementById('phoneNumber');
let cityNameInput =document.getElementById('cityName');
let streetNameInput =document.getElementById('streetName');
let BuildingDescriptionInput =document.getElementById('BuildingDescription');
let secPhoneInput =document.getElementById('secPhoneNumber');
let paymentMethodInput =document.getElementById('paymentmethod');
let creditCardInfo =document.getElementById('creditCardInfo');
let CardNumberInput =document.getElementById('CardNumber');
let CVVInput =document.getElementById('CVV');
let checkOutBtn =document.getElementById('checkOutBtn');
let logoDisplay =document.getElementById('logoDisplay');
// ! display Order Details from Local Storage
let users =JSON.parse(localStorage.getItem('Users'));
let order =JSON.parse(localStorage.getItem('order'));
firstNameInput.value=users[0].fname;
lastNameInput.value=users[0].lname;
emailInput.value=users[0].email;
PhoneInput.value=users[0].phone;
secPhoneInput.value=order[0].secPhone;
BuildingDescriptionInput.value=order[0].building;
cityNameInput.value=order[0].city;
streetNameInput.value=order[0].street;
paymentMethodInput.value=order[0].payMentMethod;
// ! check on the payment method
// ! because if it is creditcard show the creditcardNum & CVV
if(paymentMethodInput.value=='CreditCard'){
    creditCardInfo.className='d-block'; 
    CardNumberInput.value=order[0].CreditCard;
    CVVInput.value=order[0].Cvv ;
}else{
    creditCardInfo.className='d-none';  
}
// ! Add Event to Check Out Btn To Display Logo Confirm
checkOutBtn.addEventListener('click',function(){
    logoDisplay.className='d-block';
    // console.log("hello");
    clear();
})

// ! function to clear form after confirm order
function clear(){
firstNameInput.value='';
lastNameInput.value='';
emailInput.value='';
PhoneInput.value='';
secPhoneInput.value='';
BuildingDescriptionInput.value='';
cityNameInput.value='';
streetNameInput.value='';
if(paymentMethodInput.value=='CreditCard'){
    CardNumberInput.value='';
    CVVInput.value='' ;
}
}