$(document).ready(function () {

    $('img').animate({top:'0' },2000)

    $('#submit').click(function(){
        var name = $('#name').val();
        var text = $('#text').val();
        var error1 = $('.error1');
        var error2 = $('.error2');
        var footer = $('.footer');
        var another = $('.another');
         if (name == ''){
          error1.fadeIn(2000);
          $('#name').css("border-color", "red");
         }
         else{
             error1.fadeOut(200);
             $('#name').css("border-color", "#80aaff");
            }
          if (text == ''){
            error2.fadeIn(2000);
           $('#text').css("border-color", "red");
          
         }
         else { 
              $('#text').css("border-color", "#80aaff");
                error2.fadeOut(200);
                footer.fadeOut(1000);
                another.fadeIn(2000);
             };
    });

    $("#ad").click(function(){

            var footer = $('.footer');
            var another = $('.another');
            another.fadeOut();
            $("input, textarea").val("");
            footer.fadeIn("slow");
            
        });

    $("#reset").bind("click", function() {
    $("input, textarea").val("");
});

});