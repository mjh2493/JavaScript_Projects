function validateForm() {
    var x=document.forms["myForm"]["fname", "lname", "email"].value;
    if (x== "") {
        alert("All fields must be filled out");
        return false;
    }
}