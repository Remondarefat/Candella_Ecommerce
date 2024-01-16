// let firstNameInput =document.getElementById('fname');
// let lastNameInput=document.getElementById('lname-input');
// let emailInput =document.getElementById('lemail-input');
// let PhoneInput=document.getElementById('phone-input');
let cityNameInput =document.getElementById('cityName');
let streetNameInput =document.getElementById('streetName');
let BuildingDescriptionInput =document.getElementById('BuildingDescription');
let secPhoneInput =document.getElementById('secPhone');
let paymentMethodInput =document.getElementsByName('payment_method');
let creditCardInfo =document.getElementById('creditCardInfo');
let CardNumberInput =document.getElementById('CardNumber');
let CVVInput =document.getElementById('CVV');
let checkOutValidation =document.getElementById('checkOutValidation');
var orderInfo=[]; 
let order={};

// !--- check Payment Method----
for (var i = 0; i < paymentMethodInput.length; i++) {
  paymentMethodInput[i].addEventListener('change', function() {
      if (this.value =="CreditCard" ) {
// !  drop down credit card inputs Used jQuery -------
          $("#creditCardInfo").slideToggle();

          order = {
          payMentMethod:this.value,
        };
        orderInfo.push(order);
        localStorage.setItem("order", JSON.stringify(orderInfo));
      }else{
        $("#creditCardInfo").slideUp();
        order={
          payMentMethod:this.value,
        };
        orderInfo.push(order);
        localStorage.setItem("order", JSON.stringify(orderInfo));
      }
  });
  }



// !--- function to submit order
function orderSubmit() {
// TODO: add payMentMethod Info to order object
      if(order.payMentMethod=='CreditCard'){
        order.CreditCard=CardNumberInput.value;
        order.Cvv = CVVInput.value;
      }
// TODO: add Inputs Value to order object
      order.city= cityNameInput.value;
      order.street= streetNameInput.value;
      order.building= BuildingDescriptionInput.value;
      order.secPhone=secPhoneInput.value;
//TODO: add order in local storage ---
    localStorage.setItem("order", JSON.stringify(orderInfo));
    checkExistValue ();
    }


// ! CheckOut Validation 
function checkExistValue (){
if(order.payMentMethod=='CreditCard'){
  if(!cityNameInput.value || !streetNameInput.value || !BuildingDescriptionInput.value || !secPhoneInput.value 
    || paymentMethodInput.value=='CreditCard' || !CardNumberInput.value || !CVVInput.value ){
      checkOutValidation.textContent="Please Fill All Required Inputs";
      return false;
  }
      location.assign('orderDetails.html');
      return true ;
  
  }else if(order.payMentMethod=='Cash'){
    if(!cityNameInput.value || !streetNameInput.value || !BuildingDescriptionInput.value || !secPhoneInput.value 
      || paymentMethodInput.value=='Cash' ){
        checkOutValidation.textContent="Please Fill All Required Inputs";
      console.log("ffffff");
        return false;
      }
      location.assign('orderDetails.html');
      return true ;
}else {
  checkOutValidation.textContent="*Please Fill All Required Inputs";
  return false;

}

}


