var myName;
myName = "AbdallaAbdelmaksoud";
document.getElementById('partOne').innerHTML = (myName);

var foo;
foo = "This Not An Integer";
document.getElementById('partTwo').innerHTML =(foo);

var partThree;
partThree = 5;
partThree = partThree + 10;
partThree = partThree * 14;
partThree = partThree - 25;
document.getElementById('partThree').innerHTML =(partThree);


var fName = "Abdalla";
var lName = "Abdelmaksoud";
var fullName = fName + " " + lName;
document.getElementById('partFour').innerHTML =(fullName);



var myHtml = "<h2>Title</h2><p>Lorem ipsum dolor</p><h3>Pellentesque habitant morbi</h3><p>Morbi in sem quis dui placerat ornare.</p>";
document.getElementById('partFive').innerHTML =(myHtml);

var part6Number =60;
var part6Result
if (part6Number > 50){
   document.getElementById('part6Number').innerHTML = "Above 50";} else {
document.getElementById('part6Result').innerHTML = "Below or equal to 50";}



var part7Number =75;
var part7Result
if (part7Number <25){document.getElementById('part7Result').innerHTML ="Below 25";
}
else if (part7Number >= 25 < 50) {
  document.getElementById('part7Result').innerHTML ="Between 25 and 50";
}
else if (part7Number >= 50 < 75) { document.getElementById('part7Result').innerHTML ="Between 50 and 75";
}
else {
  document.getElementById('part7Result').innerHTML ="above 75";
}







var part6Number =getRandomNumber();

/**
 *      Part 7
 */
var part7Number = getRandomNumber();




////////////////////////////////////////////////////////////////
//////Ignore everything below this line////////////////////////

function getRandomNumber() {
  return Math.floor(Math.random() * (100 - 1)) + 1;
}
