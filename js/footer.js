
$(".aboutFooter").on("click",function(event){
    event.preventDefault();
    $(".aboutDiv").slideToggle();
    $(event.target).toggleClass("abo");
    
});