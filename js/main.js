(function(){
  let img_slider = document.getElementsByClassName('img_slider');
  let step = 0;
  let nbr_img = img_slider.length;
  let prev = document.querySelector('.prev');
  let next = document.querySelector('.next');
  // moataz code

  
  
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


  var allItems = [];

(function () {
     
    async function getProducts(category) {
      var res = await fetch(`https://dummyjson.com/products/${category}`);
      var data = await res.json();
      var productsArray = data.products;
      allItems = productsArray;
      displayProduct(allItems);
    }
  
    window.onload = function () {
      getProducts("");
    };
    var category = document.querySelectorAll(".category");
    for (var i = 0; i < category.length; i++) {
      category[i].addEventListener("click", function (eventInfo) {
        getProducts(eventInfo.target.getAttribute("data-category"));
        eventInfo.preventDefault();
      });
    }
    function displayProduct() {
      var container = "";
      for (var i = 0; i < allItems.length; i++) {
        container += `
          <div  class=" col-md-3 card pr_box">
            <img class="w-25 product_box_img" src="${allItems[i].thumbnail}"/>
            <div class="col-md-8">
            <div class="item">
                <h2 class="title">${allItems[i].title}</h2>
                <p class="product_salary">${allItems[i].price} $</p>
                <p class="d-none product_category">${allItems[i].category}</p>
                <p class="d-none describtion">${allItems[i].description}</p>

                
            </div>
            </div>
            </div>`;
      }
      document.getElementById("rowData").innerHTML = container;
      let card = document.querySelectorAll(".pr_box");
      for (let i = 0; card.length; i++){
        card[i].addEventListener("click", function (e) {
          console.log(e.target);
          let cat=e.target.nextElementSibling.querySelector(".product_category").innerHTML;
          let sim_item_arr = [];
          for (let i = 0; i < allItems.length; i++) {
            if (allItems[i].category==cat) {
              let im = allItems[i].thumbnail;
              let ti = allItems[i].title;
              let pri = allItems[i].price;
              let des = allItems[i].description;
              let sim_item_obj = {
                img: im,
                title: ti,
                price: pri,
                describtion:des
              }
              sim_item_arr.push(sim_item_obj); 
            }
          }
          
          localStorage.setItem("similer_item", JSON.stringify(sim_item_arr));
          let img_src = e.target.querySelector(".product_box_img").getAttribute("src");
          let title = e.target.nextElementSibling.querySelector(".title").innerHTML;
          let describtion = e.target.nextElementSibling.querySelector(".describtion").innerHTML;
          let product_salary = e.target.nextElementSibling.querySelector(".product_salary").innerHTML;
          let final_sal = parseFloat(product_salary)
          let obj = {
            img: img_src,
            tit: title,
            desc: describtion,
            sal:final_sal
          }
          localStorage.setItem("product",JSON.stringify(obj))
          location.assign("../productDetails.html")
        })
      }

      
      
  }

  // end moataz codee
  
    var links = document.querySelectorAll(".category");
  
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function () {
        var activeLink = document.querySelector(".category.Active");
        if (activeLink) {
          activeLink.classList.remove("Active");
        }
        this.classList.add("Active");
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
(function () {
 
})();