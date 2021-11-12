function Animal_Function() {
    var Animal_Output;
    var Animals=document.getElementById("Animal_Input").value;
    var Animal_String= " is a really cool animal!";
    switch (Animals) {
        case "Dog":
            Animal_Output= "Dog" + Animal_String;
        break;
        case "Cat":
            Animal_Output= "Cat" + Animal_String;
        break;
        case "Rabbit":
            Animal_Output= "Rabbit" + Animal_String;
        break;
        case "Monkey":
            Animal_Output= "Monkey" + Animal_String;
        break;
        case "Giraffe":
            Animal_Output= "Giraffe" + Animal_String;
        break;
        case "Lion":
            Animal_Output= "Lion" + Animal_String;
        break;
        default:
            Animal_Output= "Please enter an animal exactly as written in the above list!";
    }
    document.getElementById("Output").innerHTML= Animal_Output;
}

function Hello_World_Function() {
    var A= document.getElementsByClassName("Click");
    A[0].innerHTML= "This text has changed!";
}


var m=document.getElementById("ID_Name");
var mtx= m.getContext("2d");
var grd= mtx.createLinearGradient(0,0,170,0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");
mtx.fillStyle=grd;
mtx.fillRect(20,20,150,100);

var c=document.getElementById("ID_Name");
var ctx= c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();

