(function () {
    let plus = document.querySelector("#plus");
    let min = document.querySelector("#min");
    let count = document.querySelector("#count");
    let sal = document.querySelector("#sal");
    let add = document.querySelector("#add");
    let title = document.querySelector("#title");
    let imgPro = document.querySelector("#imgPro");
    let box = document.querySelectorAll(".box");
    let parseSal = parseFloat(sal.textContent);
    let finalSal = parseSal;
    let x = 1;
    let arr = [];
    
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
            imgSrc:imgPro.getAttribute("src")
        }
        arr.push(opj);
        console.log(arr);
        finalSal = parseSal;
        sal.innerHTML = finalSal;
        x=1
        count.innerHTML = x;
    });
})();

