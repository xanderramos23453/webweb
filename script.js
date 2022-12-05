//Navigation Bar 
$(document).ready(function(){
    $(window).scroll(function(){
    if(this.scrollY > 20){
        $('.navbar').addClass("sticky");
    }else{
        $('.navbar').removeClass("sticky");
    }
    });
});
// Typing Text
var typed = new Typed('.typing', {
    strings: ['Developer', 'Designer','Programmer'],
    typeSpeed:140,
    backSpeed:90,
    loop:true,
  });



