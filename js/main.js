var allItems = [];

(function () {
  async function getProducts(category) {
    var res = await fetch(`https://dummyjson.com/products/${category}`);
    var data = await res.json();
    var productsArray = data.products;
    allItems = productsArray;
    console.log(productsArray);
    displayProduct(allItems);
  }

  window.onload = function () {
    getProducts("");
  };
  var category = document.querySelectorAll(".category");
  for (var i = 0; i < category.length; i++) {
    category[i].addEventListener("click", function (eventInfo) {
      getProducts(eventInfo.target.getAttribute("data-category"));
    });
  }
  function displayProduct() {
    var container = "";
    for (var i = 0; i < allItems.length; i++) {
      container += `
        <div  class=" col-md-3 card ">
          <img class="w-25" src="${allItems[i].thumbnail}"/>
          <div class="col-md-8">
          <div class="item">
              <h2>${allItems[i].title}</h2>
              <p>${allItems[i].price} $</p>
              <p class="d-none">${allItems[i].category}</p>
              
          </div>
          </div>
          </div>`;
    }
    document.getElementById("rowData").innerHTML = container;
  }

  var links = document.querySelectorAll(".category");

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      var activeLink = document.querySelector(".category.active");
      if (activeLink) {
        activeLink.classList.remove("active");
      }
      this.classList.add("active");
    });
  }
  function scrollToTop() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
  var button = document.querySelector(".top-button");
  button.addEventListener("click", scrollToTop);
  function toggleButton() {
    let scrollPos =
      document.documentElement.scrollTop || document.body.scrollTop;
    let threshold = 100;
    if (scrollPos > threshold) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  }

  window.addEventListener("scroll", toggleButton);
})();
