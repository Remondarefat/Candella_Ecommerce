let plusItem = document.querySelector(".plusItem");
let minusItem = document.querySelector(".minusItem");
let numberOfItem = document.querySelector(".numberOfItem");

let removeItem = document.querySelector(".removeItem");
let totalItemprice = document.querySelector(".totalItemprice");

let totalCartPrice = document.querySelector(".totalCartPrice");
let itemImage = document.querySelector(".itemImage");
let itemDesc = document.querySelector(".itemDesc");

var numberOfItemElement = document.querySelector('.numberOfItem');


// -----End of declaration ----------

var cartItems = JSON.parse(localStorage.getItem("card_to_product")) || [];

function displayCartItems() {
    var container = document.querySelector(".container");
    container.innerHTML = ""; // Clear the container before displaying items

    for (var i = 0; i < cartItems.length; i++) {
        var product = cartItems[i];

        var cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("col-6", "mt-5", "pe-0");

        cartItemDiv.innerHTML = `
        <div class="d-flex">
            <div class="col-12">
                <p class="text-start">product</p>
                <hr>
                <div class="d-flex del">
                    <img src="${product.imgSrc}" class="rounded-3 w-50 itemImage" alt="">
                    <div class="ms-5">
                        <h5 class="itemDesc">${product.title}</h5>
                        <p class="rem removeItem text-start" onclick="removeProduct(${i})">remove</p>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="d-flex justify-content-around">
                    <p class="text-start m-0">price</p>
                    <p class="text-start m-0">Quantity</p>
                    <p class="text-start m-0">Total</p>
                </div>
                <hr>
                <div class="d-flex justify-content-around h-50  align-items-center ">
                    <p class="text-start itemPrice del">${product.Salary.toFixed(2)} $</p>
                    <p class="text-start quan del">
                        <span class="rem fw-bolder plusItem" onclick="updateQuantity(${i}, 'increase')">+</span>
                        <span class="rem ms-2 fw-bolder numberOfItem">${product.Quantity}</span>
                        <span class="rem ms-2 fw-bolder minusItem" onclick="updateQuantity(${i}, 'decrease')">-</span>
                    </p>
                    <p class="text-start totalItemprice del">${(product.Salary * product.Quantity).toFixed(2)} $</p>
                </div>
            </div>
        </div>
    `;
    


        container.appendChild(cartItemDiv);
    }

    // Update the total cart price after displaying all items
    updateTotalCartPrice();
}

function updateQuantity(index, action) {
    var product = cartItems[index];

    // Convert Quantity to a numeric type
    product.Quantity = parseInt(product.Quantity);

    if (isNaN(product.Quantity)) {
        // Handle the case where Quantity is not a valid number
        console.error(`Quantity is not a valid number for product at index ${index}`);
        return;
    }

    if (action === 'increase') {
        product.Quantity++;
    } else if (action === 'decrease' && product.Quantity > 1) {
        product.Quantity--;
    }

    // Update the local storage with the modified cart items
    localStorage.setItem("card_to_product", JSON.stringify(cartItems));

    // Display the updated cart items
    displayCartItems();
}

function removeProduct(index) {
    cartItems.splice(index, 1);
    localStorage.setItem("card_to_product", JSON.stringify(cartItems));
    displayCartItems();
}

function updateTotalCartPrice() {
    var totalCartPriceElements = document.querySelectorAll(".totalCartPrice");
    var totalCartPrice = cartItems.reduce((total, product) => {
        var quantity = parseInt(product.Quantity);

        if (!isNaN(quantity)) {
            total += product.Salary * quantity;
        }

        return total;
    }, 0).toFixed(2);

    // Update all instances of totalCartPrice with the calculated value
    totalCartPriceElements.forEach(element => {
        element.textContent = totalCartPrice + ' $';
    });
}


function checkout() {
    // Store cart items with numeric values as integers
    var numericCartItems = cartItems.map(item => ({
        ...item,
        Quantity: parseInt(item.Quantity),
        Salary: parseFloat(item.Salary),
        TotalPrice: parseFloat(item.Salary * item.Quantity)
    }));

    // Calculate the total cart price
    var totalCartPrice = numericCartItems.reduce((total, item) => total + item.TotalPrice, 0).toFixed(2);

    // Save the cart items and total cart price in local storage
    var checkoutData = {
        items: numericCartItems,
        totalCartPrice: totalCartPrice
    };

    localStorage.setItem("checkout_cart", JSON.stringify(checkoutData));

    // Optional: Clear the current cart items after checkout
    localStorage.removeItem("card_to_product");

    // Notify the user or redirect to the checkout page
    // alert("Checkout successful!");
}



// Call the function to display cart items when the page loads
displayCartItems();
