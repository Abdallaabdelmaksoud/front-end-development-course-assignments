$(document).ready(function(){

     ///// Code goes here

$("#btnOne").click(function(){
    alert  ("You CLicked Me");
    
});


$("#btnTwo").click(function(){

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