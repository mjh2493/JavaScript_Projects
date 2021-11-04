// determines if someone is tall enough to ride
function Ride_Function() {
    var Height, Can_ride;
    Height= document.getElementById("Height").value;
    Can_ride= (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML= Can_ride + " to ride.";
}

// determines if someone can vote (older than 18)
function Age_Function() {
    var Age, Can_vote;
    Age= document.getElementById("Age").value;
    Can_vote=(Age<18) ? "You are too young":"You are able";
    document.getElementById("Vote").innerHTML= Can_vote + " to vote today.";
}

// utilizes the this and new keywords
function Dog(Breed, Color, Age) {
    this.Dog_Breed=Breed;
    this.Dog_Color=Color;
    this.Dog_Age=Age;
}

var Jack=new Dog("Corgi", "White", 4);
var Waffle=new Dog("Chiweenie", "Light Brown", 3);
function myFunction() {
    document.getElementById("New_and_This").innerHTML= "Waffle is a " + Waffle.Dog_Breed + " and is "
    + Waffle.Dog_Color + " and " + Waffle.Dog_Age + " years old.";
}

// shows nested functions
function count_Function() {
    document.getElementById("Nested_Function").innerHTML=Count();
    function Count() {
        var Starting_point=9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}