let img_slider = document.getElementsByClassName('img_slider');

let step = 0;

let nbr_img = img_slider.length;

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

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
})
prev.addEventListener('click',function(){
    step--;
    if(step < 0){
        step = nbr_img -1;
    }
    deleteActiveImages();
    img_slider[step].classList.add('active');
})
setInterval(function(){
    step++;
    if(step >= nbr_img){
        step = 0;
    }
    deleteActiveImages();
    img_slider[step].classList.add('active');

}, 3000)