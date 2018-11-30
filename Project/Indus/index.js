$(window).scroll(function(){
    if ($(window).scrollTop() >=50) {
        $('header').addClass('fixed-header');
    }
    else {
        $('header').removeClass('fixed-header');
 
    }
 
 });
 $(document).ready(function() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
        $(".images2").css({"opacity" : "1"});


    } else {
        $(".images2").css({"opacity" : "0"});
        }
})
})