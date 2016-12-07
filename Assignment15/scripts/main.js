$(document).ready(function(){

     ///// Code goes here
     $('#btnOne').on('click', function(){
         alert('hello');
     });

$("#btnOne").click(function(){
    alert  ("You CLicked Me");
    
});

<<<<<<< HEAD

$("#btnTwo").click(function(){
=======
    $('#btnOne').on('click', sayhello);
    
    function sayhello(){
        alert('hello');
    }
>>>>>>> 52adabec2f53076cb360ab511a2bf07c3991ba93

$(".update-html").replaceWith("<h3>Hello Word!</h3>");

});

$("#btnThree").click(function(){

    $("#text-update").val  ("Hello World")

});

    $("#btnCopyHtml").click(function(){


var copiedHtml = $(".copy-html").html();

$(".paste-html").html(copiedHtml);
    });


    $("#btnCopyValues").click(function(){
  var copiedValue = $("#copy-text").val();

 $('#paste-text').val(copiedValue);

    });

});