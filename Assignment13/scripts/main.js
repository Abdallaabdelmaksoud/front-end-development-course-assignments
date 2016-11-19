function myFunction() {
    var x, text;


    x = document.getElementById("firstname").value;

    if (x == "") {
        text = "*First Name Is Required*";
        firstname.style.border = "1px solid red";
    } else {
        text = "";
        firstname.style.border = "1px solid green";
    }
    document.getElementById("fn").innerHTML = text;

    var x, text;


    x = document.getElementById("lastname").value;

    if (x == "") {
        text = "*Last Name Is Required*";
        lastname.style.border = "1px solid red";
    } else {
        text = "";
        lastname.style.border = "1px solid green";
    }
    document.getElementById("ln").innerHTML = text;

    var x, text;

    x = document.getElementById("email").value;

    if (x == "") {
        text = "*E-mail Address Is Required*";
        email.style.border = "1px solid red";
    }

    else {
        text = "";
        email.style.border = "1px solid green";
    }
    document.getElementById("em").innerHTML = text;
    var x, text;


    x = document.getElementById("password").value;

    if (x == "") {
        text = "*Password Is Required*";
        password.style.border = "1px solid red";
    } else {
           text ="";

        password.style.border = "1px solid green";
    }
    document.getElementById("pa").innerHTML = text;

    var x, text;


    x = document.getElementById("cpassword").value;

    if (x == "") {
        text = "*Confirmation Password Is Required*";
        cpassword.style.border = "1px solid red";
    } else {
           text ="";

        cpassword.style.border = "1px solid green";
    }
    document.getElementById("pass").innerHTML = text;
       var x, text;

x = document.getElementById("cl").value;

if (x ==  "1") {
    text = "*Pleas Enter Your Time Zone*";

} else {
    text = "";

}
document.getElementById("ti").innerHTML = text;
var x, text;

x = document.getElementById("te").value;

if (x ==  "") {
text = "*Wait We Need To Know ABout You*";

} else {
text = "";

}
document.getElementById("tex").innerHTML = text;
}

function reset() {
  document.getElementById('myform').reset;
}
