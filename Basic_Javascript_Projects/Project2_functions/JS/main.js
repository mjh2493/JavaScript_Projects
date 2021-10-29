function displaySum() {
    document.getElementById("solution").innerHTML= sum;
}

function add(num1, num2) {
    return num1 + num2;
}

var sum= add(5,7);

function myFunction() {
    var sentence= "I am learning";
    sentence += " a lot from this program!";
    document.getElementById("Concatenate").innerHTML=sentence;
}