$(document).ready(function() {
    var website = $(window);
    var page = $('html, body');

    $('.menu_toggle').on('click',function(){
        $('#mobile_menu_container').addClass('show');
    })

    $('.menu_close').on('click',function(){
      $('#mobile_menu_container').removeClass('show');
    })

    


    
});