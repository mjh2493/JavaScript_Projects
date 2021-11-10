// while loop
function Call_Loop() {
    var text="";
    var X=0;
    while (X<10) {
        text += "<br>The number is " + X;
        X++;
    }
    document.getElementById("Loop").innerHTML=text;
}

// length property 
function call_length() {
    var word= "supercalifragilisticexpialidocious";
    document.getElementById("length").innerHTML= word.length;
}

// for loop
var Instruments=["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content="";
var Y;
function for_Loop() {
    for (Y=0; Y<Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>"; 
    }
    document.getElementById("List_of_Instruments").innerHTML=Content;
}

// array function 
function array_Function() {
    var desserts= [];
    desserts[1]= "cake";
    desserts[2]= "ice cream";
    desserts[3]= "cookies";
    desserts[4]= "candy";
    document.getElementById("Array").innerHTML= "Mallory's favorite dessert is " + desserts[2] + "!";
}

// constants
function constant_function() {
    const shoes= {type:"boots", brand:"Thursday Boot Company", color:"brown"};
    shoes.color="brown";
    shoes.price="$200";
    document.getElementById("Constant").innerHTML= "The cost of the " + shoes.type + " from " +
    shoes.brand + " was " + shoes.price + "!";
}

// let
var C= "Waffle";
document.write(C);
{
    let C="Dog";
    document.write("<br>" + C);
}
document.write("<br>" + C);

// return function
function return_function() {
    function name_return(name) {
        return "Hello " +name;
    }
document.getElementById("returning").innerHTML= name_return("Instructor");
}

// objects method
let shoe= {
    type: "boots",
    brand: "Thursday Boot Company",
    size: "9.5",
    color: "brown",
    description: function() {
        return "The shoes are " + this.type + " from " + this.brand + ". They are a size " +
        this.size + " and are " + this.color + ".";
    }
};
document.getElementById("Shoe_Object").innerHTML= shoe.description();

// break
function breaking_test() {
    let breaking="";
    for (let i=0; i <10; i++) {
        if (i===3) {break; }
        breaking += "The number is " + i + "<br>";
    }
    document.getElementById("break").innerHTML=breaking;
}

// continue
function continue_test() {
    let conttest="";
    for (let i=0; i <10; i++) {
        if (i===3) {continue; }
        conttest += "The number is " + i + "<br>";
    }
    document.getElementById("continued").innerHTML=conttest;
}