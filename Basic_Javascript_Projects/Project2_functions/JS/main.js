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

var M="Mike and" + " Mallory<br>"


function showMessage(firstName, lastName) {
    var finalMessage=("Hi " + firstName + " " + lastName);
    document.getElementById("Message").innerHTML=finalMessage;
}

showMessage('Mallory', 'Humphries');
