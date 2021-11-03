document.write(typeof "word");

document.write("<br>");
// type of
document.write("10" + 7);
//NaN
function my_Function() {
    document.getElementById("Test").innerHTML=0/0;
}

function my_Function2() {
    document.getElementById("Test2").innerHTML=isNaN('Waffle');
}

function my_Function3() {
    document.getElementById("Test3").innerHTML=isNaN(394734);
}
// testing out boolean statements
document.write("<br>");
document.write(2E310);
document.write("<br>");
document.write(-3E310);
document.write("<br>");
document.write(27>7);
document.write("<br>");
document.write(27<7);
console.log(2+2);
console.log(10>23);
document.write("<br>");
document.write(12==12);
document.write("<br>");
document.write(12==11);
document.write("<br>");
X=10;
Y=10;
document.write(X===Y);
document.write("<br>");
Q=23;
T=27;
document.write(Q===T);
document.write("<br>");
W=23;
E="cat";
document.write(W===E);
document.write("<br>");
U="23";
I=23;
document.write(U===I);
document.write("<br>");
document.write(7>2 && 11>7);
document.write("<br>");
document.write(5>10 && 10 >4);
document.write("<br>");
document.write(5 >10 || 10 >4);
document.write("<br>");
document.write(5>10 || 10>20);

function not_Function() {
    document.getElementById("Not").innerHTML= !(20>10);
}

function not_Function2() {
    document.getElementById("Not2").innerHTML= !(5>10);
}