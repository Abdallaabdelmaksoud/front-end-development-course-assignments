$(document).ready(function(){

        $('#btnShow').click(function(){
        $('.display-basic').show();
    });
        $('#btnHide').click(function(){
        $('.display-basic').hide();
    });
        $('#btnToggle').click(function(){
        $('.display-basic').toggle();
    });

        $('#btnFadeOut').click(function(){
        $('.display-fade').fadeOut('slow');
    });

        $('#btnFadeIn').click(function(){
        $('.display-fade').fadeIn('fast');
    });

        $('#btnFadeToggle').click(function(){
        $('.display-fade').fadeToggle();
    });

        $('#btnSlideDown').click(function(){
        $('.display-slide').slideDown('1000');
    });

        $('#btnSlideUp').click(function(){
        $('.display-slide').slideUp('500');
    });

        $('#btnSlideToggle').click(function(){
        $('.display-slide').slideToggle();
    });
    });