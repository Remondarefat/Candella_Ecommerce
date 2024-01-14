(function () {
    let plus = document.querySelector("#plus");
    let min = document.querySelector("#min");
    let count = document.querySelector("#count");
    let sal = document.querySelector("#sal");
    let add = document.querySelector("#add");
    let title = document.querySelector("#title");
    let descc = document.querySelector(".descc");
    let imgPro = document.querySelector("#imgPro");
    let box = document.querySelectorAll(".box");
    let product_object = JSON.parse(localStorage.getItem("product"));
    imgPro.setAttribute("src",product_object.img)
    title.innerHTML=product_object.tit;
    descc.innerHTML=product_object.desc;
    sal.innerHTML = product_object.sal;
    let parseSal = parseInt(sal.textContent);
    console.log(parseSal);
    let finalSal = parseSal;
    let x = 1;
    let arr = [];
    // let img_src = e.target.getAttribute("src");
    // let tit = e.target.nextElementSibling.querySelector(".title").innerHTML;
    // let describtion = e.target.nextElementSibling.querySelector(".describtion").innerHTML;
    
    for (let i = 0; i < box.length; i++){
        box[i].addEventListener("click", function (evntInfo) {
            let div = evntInfo.target.parentElement;
            let img = imgPro.getAttribute("src");
            let ti = title.textContent;
            imgPro.setAttribute("src", div.children[0].getAttribute("src"));
            title.innerHTML = div.children[1].textContent;
            console.log(imgPro.getAttribute("src"));
            div.children[0].setAttribute("src",img) ;
            div.children[1].innerHTML = ti;
        })
    }
    plus.addEventListener("click", function () {
        x++;
        count.innerHTML = x;
        finalSal += parseSal;
        sal.innerHTML = finalSal.toFixed(2);
    });
    min.addEventListener("click", function () {
        x--;
        if (x < 1) {
            x=1
        }
        count.innerHTML = x;
        finalSal -= parseSal;
        if (finalSal < 9) {
            finalSal = parseSal;
        }
        sal.innerHTML = finalSal.toFixed(2);
    });
    add.addEventListener("click", function () {
        let opj = {
            title: title.textContent,
            Quantity: count.textContent,
            Salary: parseSal,
            Total: finalSal,
            imgSrc:imgPro.getAttribute("src"),
        }
        
        let card_product = localStorage.getItem("card_to_product");
        if (card_product == null) {
            arr.push(opj);
            localStorage.setItem("card_to_product", JSON.stringify(arr));
        }
        else {
            arr = JSON.parse(card_product);
            arr.push(opj);
            localStorage.setItem("card_to_product", JSON.stringify(arr));
            console.log(JSON.parse(localStorage.getItem("card_to_product")));
        }
        finalSal = parseSal;
        sal.innerHTML = finalSal;
        x=1
        count.innerHTML = x;
    });




 })();

