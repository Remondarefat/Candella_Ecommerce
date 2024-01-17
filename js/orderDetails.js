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
let ItemsBody=document.getElementById('ItemsBody');
let totalItemsPrice


let isLog = localStorage.getItem("isLogin");
  
  let signupIcon = document.querySelector('#signupIcon');
  let signoutIcon = document.querySelector('#signoutIcon');
   if (isLog == "1"){
    signupIcon.classList.add("hiddenIcon");
    signoutIcon.classList.remove("hiddenIcon");
   }
   else{
    signupIcon.classList.remove("hiddenIcon");
    signoutIcon.classList.add("hiddenIcon");
   }
   signoutIcon.addEventListener("click",function(){
    localStorage.setItem("isLogin","0");
   })
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
creditCardInfo.value="";
if(paymentMethodInput.value=='CreditCard'){
    CardNumberInput.value='';
    CVVInput.value='' ;
}
localStorage.removeItem("order");
localStorage.removeItem("checkout_cart");
localStorage.removeItem("card_to_product");
let cartCount = document.getElementById("cart-count");
let products = JSON.parse(localStorage.getItem("card_to_product")) || [];
let currentCount= products.length;
    cartCount.innerText = currentCount;
    $("#cart-count").hide(10);
    
}

// ! function to display cart Items from Local storage 
let checkout_cart =JSON.parse(localStorage.getItem('checkout_cart'));
console.log(checkout_cart);
let cartona='';
for(let i=0 ; i<checkout_cart.items.length;i++){
    cartona+=`
    <div class="row text-center ">  
    <div class="col-6 mt-5 pe-0">
        <p class="text-start">product</p>
        <hr >
        <div class="d-flex ImageOrder ">
            <img src=${checkout_cart.items[i].imgSrc} class="rounded-3 w-50 itemImage" alt="">
            <div class="ms-5">
                <h5 class="itemDesc">${checkout_cart.items[i].title}</h5>
            </div>
        </div>
    </div>
    <div class="col-6 mt-5 ps-0">
        <div class="d-flex justify-content-around">
            <p class="text-start m-0">price</p>
            <p class="text-start m-0">Quantity</p>
            <p class="text-start m-0">Total</p>
        </div>
        <hr>
        
        <div class="d-flex justify-content-around h-50  align-items-center mb-2 ">
            <p class="text-start itemPrice del">${checkout_cart.items[i].Salary} $</p>
                <span class=" ms-2 fw-bolder ">${checkout_cart.items[i].Quantity}</span>
            <p class="text-start ">${checkout_cart.items[i].Total} $</p>
        </div>

        </div>
</div>
    `
    document.getElementById('ItemsBody').innerHTML=cartona;
}
document.getElementById('totalItemsPrice').innerHTML=`
<p class="text-start mt-4 fw-bold text-danger d-flex justify-content-end fs-5 ">Total due : ${checkout_cart.totalCartPrice} $</p>
`;

let cartCount = document.getElementById("cart-count");
let products = JSON.parse(localStorage.getItem("card_to_product")) || [];
let currentCount= products.length;
cartCount.innerText = currentCount;