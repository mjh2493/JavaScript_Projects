function addition_Function() {
    var addition= 4+7;
    document.getElementById("math").innerHTML="4 +7 = " + addition;
}

function subtraction_Function() {
    var Subtraction=10-4;
    document.getElementById("sub").innerHTML="10-4=" + Subtraction;
}

function multiplication() {
    var simple_Math=6*8;
    document.getElementById("multiply").innerHTML="6x8=" + simple_Math;
}

function division() {
    var simple_Division= 48/6;
    document.getElementById("division").innerHTML="48/6=" + simple_Division;
}

function all_Math() {
    var lots_math= (1+3) * 13/2 - 7;
    document.getElementById("maths").innerHTML="1 plus 3, multipled by 10, divided in half and then substracted by 7 equals " + lots_math;
}

function modulus_Operator() {
    var modulus=25%6;
    document.getElementById("mod").innerHTML="When you divide 25 by 6 you have a remainder of: " + modulus;
}

function negation_Operator() {
    var x=10;
    document.getElementById("negate").innerHTML=-x;
}

var M=6;
M++;
document.write(M);

document.write("<br>");

var Q=19;
Q--;
document.write(Q);

window.alert(Math.random() * 100);
document.write("<br>");

var T=Math.round(4.6);
document.write(T);
document.write("<br>");
var E=Math.E;
document.write(E);