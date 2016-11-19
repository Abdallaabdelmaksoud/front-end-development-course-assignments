document.getElementById('btnSubmit').addEventListener('click', submit);

function submit() {
    var x = document.getElementById('fname').value;
    if (x === "") {
        fname.style.border = "1px solid red";
        fname.placeholder = "First Name Is Required";
    } else {
        
        fname.style.border = "1px solid black";
    }

var x = document.getElementById('lname').value;
    if (x === "") {
        lname.style.border = "1px solid red";
        lname.placeholder = "Last Name Is Required";
    } else {
        
        lname.style.border = "1px solid black";
    }

var x = document.getElementById('email').value;
    if (x === "") {
        email.style.border = "1px solid red";
        email.placeholder = "E-mail Address Is Required";
        
    } else if (x.indexOf('@') == -1 ||
        x.indexOf('.com') == -1) {
        email.style.border = "1px solid red";
        email.placeholder = "E-mail Address Is Required";
    } else{
        email.style.border = "1px solid black";
        
        
    }

var x = document.getElementById('cl').value;
    if (x === "1") {
        cl.style.border = "1px solid red";
        
    }else {
       
        cl.style.border = "1px solid black";
        
    }

var x = document.getElementById('tex').value;
    if (x === "") {
        tex.style.border = "1px solid red";
        tex.placeholder = "This Filed Is Required";
    }  else {
        
        tex.style.border = "1px solid black";
        
    }

}

function reset() {
  document.getElementById('myform').reset;
}