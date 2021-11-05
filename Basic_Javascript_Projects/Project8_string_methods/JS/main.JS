// concat method
function full_sentence() {
    var part_1= "My name ";
    var part_2= "is Mallory and ";
    var part_3= "I live in NYC.";
    var whole_sentence= part_1.concat (part_2, part_3);
    document.getElementById("Combine").innerHTML=whole_sentence;
}

// slice method
function slice_method() {
    var Sentence= "Atlanta Braves won the World Series!";
    var Section= Sentence.slice(0,14);
    document.getElementById("slice").innerHTML= Section;
}

// to UpperCase
function upper_case() {
    var text= "This will become capitalized.";
    var capital= text.toUpperCase();
    document.getElementById("upper").innerHTML= capital;
}

// search method
function search_method() {
    var Statement= "Atlanta Braves won the World Series!";
    var pull= Statement.search("World Series");
    document.getElementById("searching").innerHTML= pull;
}

// string method
function string_method() {
    var X=183849;
    document.getElementById("num_to_string").innerHTML= X.toString();
}

// precision method
function precision_Method() {
    var Y=4567.92874619283;
    document.getElementById("Precision").innerHTML= Y.toPrecision(7);
}

// fixed method
function fixed_method() {
    var num= 9.456789;
    var result= num.toFixed(3);
    document.getElementById("fixed").innerHTML= result;
}

// value method
function value_method() {
    var num1= 9.456789;
    var result1= num1.valueOf();
    document.getElementById("value").innerHTML= result1;
}