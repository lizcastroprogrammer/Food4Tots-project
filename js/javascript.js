$(document).ready(function(){
    $('.menu').click(function(){
        $('.nav-links').toggleClass('active');
    });
});

$(document).ready(function(){
    $('.js--section-features').waypoint(function(direction){
        if(direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '8%'
    });
});