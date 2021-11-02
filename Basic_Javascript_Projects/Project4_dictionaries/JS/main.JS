function my_Dictionary() { //defining my dictionary
    var Animal= { //my animal is a cat
        Species:"Cat",
        Color: "Orange",
        Breed: "Tabby",
        Age: 3,
        Sound: "Meow",
    };
    delete Animal.Age; // deleted age from dictionary so it could not be called
    document.getElementById("Animal1").innerHTML= Animal.Sound; // called animal sound when clicking the paragaph element
}