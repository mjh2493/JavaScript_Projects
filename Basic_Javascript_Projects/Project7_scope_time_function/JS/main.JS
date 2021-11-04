// global variable
x=10
function add_num() {
    document.write(34 + x +"<br>");
}

// local variable
function add_num2() {
    y=12;
    document.write(y +113);
}
// running both
add_num();
add_num2();

// if statements 
function date_function() {
    if (new Date().getHours() >20) {
        document.getElementById("date").innerHTML= "Goodnight, sleep tight!";
    }
}
document.write("<br>");
if (12>6) {
    document.write("The number on the left is higher than the number on the right.");
}

// else statements
function Alcohol() {
    Age= document.getElementById("Age").value;
    if (Age >=21) {
        Message = "You can drink a beer! Yay!";
    }
    else {
        Message = "You cannot drink a beer. We are sorry.";
    }
    document.getElementById("your_age").innerHTML=Message;
}

// else if statements
function Time_function() {
    var Time=new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time <18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply="It is evening time!";
    }
    document.getElementById("Time_of_day").innerHTML=Reply;
}