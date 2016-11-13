function myFunction() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("firstname").value;
        // If x is Not a Number or less than one or greater than 10
    if (x == "") {
        text = "*First Name Is Required*";
        firstname.style.border = "1px solid red";
    } else {
        text = "Good";
        firstname.style.border = "1px solid green";
    }
    document.getElementById("fn").innerHTML = text;
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("lastname").value;
      // If x is Not a Number or less than one or greater than 10
    if (x == "") {
        text = "*Last Name Is Required*";
        lastname.style.border = "1px solid red";
    } else {
        text = "Good";
        lastname.style.border = "1px solid green";
    }
    document.getElementById("ln").innerHTML = text;
    var x, text;

    // Get the value of the input field with id="numb"

    x = document.getElementById("email").value;
        // If x is Not a Number or less than one or greater than 10
    if (x == "") {
        text = "*E-mail Address Is Required*";
        email.style.border = "1px solid red";
    }

    else {
        text = "Good";
        email.style.border = "1px solid green";
    }
    document.getElementById("em").innerHTML = text;
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("password").value;
        // If x is Not a Number or less than one or greater than 10
    if (x == "") {
        text = "*Password Is Required*";
        password.style.border = "1px solid red";
    } else {
        text = "Good";
        password.style.border = "1px solid green";
    }
    document.getElementById("pa").innerHTML = text;
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("cpassword").value;
        // If x is Not a Number or less than one or greater than 10
    if (x == "") {
        text = "*Confirmation Password Is Required*";
        cpassword.style.border = "1px solid red";
    } else {
        text = "Good";
cpassword.style.border = "1px solid green";
    }
    document.getElementById("pas").innerHTML = text;
}
