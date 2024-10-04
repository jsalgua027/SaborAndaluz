$(document).ready(function(){
    $('.nav-link').on('click', function(event) {
        event.preventDefault(); 
        var target = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: target.offset().top - 100 
        }, 350);
    });
});
