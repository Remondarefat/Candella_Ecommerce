(function () {
    let plus = document.querySelector("#plus");
    let min = document.querySelector("#min");
    let count = document.querySelector("#count");
    let sal = document.querySelector("#sal");
    let add = document.querySelector("#add");
    let title = document.querySelector("#title");
    let descc = document.querySelector(".descc");
    let imgPro = document.querySelector("#imgPro");
    let similer_box = document.querySelector(".similer_box");
    let bt_more = document.querySelector(".bt-more");
    let product_object = JSON.parse(localStorage.getItem("product"));
    imgPro.setAttribute("src",product_object.img)
    title.innerHTML=product_object.tit;
    descc.innerHTML=product_object.desc;
    sal.innerHTML = product_object.sal;
    let parseSal = parseInt(sal.textContent);
    let finalSal = parseSal;
    let x = 1;
    let arr = [];
    let similer_item = JSON.parse(localStorage.getItem("similer_item"));
    let cartona = "";
    for (let i = 0; i < 3; i++){
        cartona += `
                    <div class="col-md-4">
                        <div class="text-center box shadow rounded-4 ms-auto pr_box">
                            <img src="${similer_item[i].img}" class="box-image " alt="">
                            <h5 class="w-100 similer-t fa-1x">${similer_item[i].title}</h5>
                            <h5 class="colBT w-50 ms-auto pb-2 similer-pt"><p class="d-inline similer-p">${similer_item[i].price}</p> $</h5>
                            <h5 class="colBT w-50 similer-d ms-auto pb-2 d-none">${similer_item[i].describtion} $</h5>
                        </div>
                        
                    </div>
        `;
    }
    for (let i = 3; i < similer_item.length; i++){
        cartona += `
        <div class="col-md-4 addition-item mt-5">
                        <div class="text-center box shadow rounded-4 ms-auto pr_box">
                            <img src="${similer_item[i].img}" class="box-image " alt="">
                            <h5 class="w-100 similer-t fa-1x">${similer_item[i].title}</h5>
                            <h5 class="colBT w-50 ms-auto pb-2 similer-pt"><p class="d-inline similer-p">${similer_item[i].price}</p> $</h5>
                            <h5 class="colBT w-50 similer-d ms-auto pb-2 d-none">${similer_item[i].describtion} $</h5>
                        </div>
                    </div>
        `;
    }
    similer_box.innerHTML = cartona;
    $(".bt-more").on("click", function () {
        $(".addition-item").slideToggle(1000);
        if (bt_more.innerHTML == "More") {
            bt_more.textContent = "Less";

        }
        else {
            bt_more.innerHTML = "More"
        }
    })
    let box = document.querySelectorAll(".box");
    for (let i = 0; i < box.length; i++){
        box[i].addEventListener("click", function (evntInfo) {
            let div = evntInfo.target;
            let img = imgPro.getAttribute("src");
            let ti = title.textContent;
            let dec = evntInfo.target.parentElement.querySelector(".similer-d");
            let pri = evntInfo.target.parentElement.querySelector(".similer-p");
            imgPro.setAttribute("src", div.children[0].getAttribute("src"));
            title.innerHTML = div.children[1].textContent;
            descc.innerHTML = dec.innerHTML;
            sal.innerHTML = pri.innerHTML;
            parseSal = parseInt(sal.textContent);
            finalSal = parseSal;
            div.children[0].setAttribute("src",img) ;
            div.children[1].innerHTML = ti;
            x=1
            count.innerHTML = x;
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
        }
        finalSal = parseSal;
        sal.innerHTML = finalSal;
        x=1
        count.innerHTML = x;
    });




 })();

