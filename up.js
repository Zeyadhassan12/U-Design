function haha() {
    var x = document.upform.email.value;
    var y = document.upform.password.value;
    var z = document.upform.firstname.value;
    var f = document.upform.lastname.value;
    var r = document.upform.passwordconfirm.value;
    var bool = false;
    var suii = false;
    var ancra = false;
    var zzz = false;
    var lab = false;
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



    if (x == "") {
        document.getElementById("demo").innerHTML = "Write the email";
        bool = false;
    } else if (!regex.test(x)) {
        document.getElementById("demo").innerHTML = "Incorrect email";
        bool = false;

    } else {
        document.getElementById("demo").innerHTML = "";
        bool = true;
    }
    if (y == "") {
        document.getElementById("sheel").innerHTML = "Write the password";
        suii = false;
    }
    else if (y.length < 8) {
        document.getElementById("sheel").innerHTML = "Too short";
        suii = false;

    }else {
        document.getElementById("sheel").innerHTML = "";
        suii = true;
    }
    if (z == "") {
        document.getElementById("fname").innerHTML = "Write ur first name";
        ancra = false;
    } else if (!isNaN(z)) { 
        document.getElementById("fname").innerHTML = "Text only";
        ancra = false;
    } else {
        document.getElementById("fname").innerHTML = "";
        ancra = true;
    }
    if (f == "") {
        document.getElementById("lname").innerHTML = "Write ur last name";
        zzz = false;
    } else if (!isNaN(f)) {
        document.getElementById("lname").innerHTML = "Text only";
        ancra = false;
    } else {
        document.getElementById("lname").innerHTML = "";
        zzz = true;
    }
    if (r != y) {
        document.getElementById("sheel2").innerHTML = "Passwords is not the same";
        lab = false;
    } else if (r == "") {
        document.getElementById("sheel2").innerHTML = "Confirm password";
        lab = false;

    } else {
        document.getElementById("sheel2").innerHTML = "";
        lab = true;
    }





    if (bool == true && suii == true && ancra == true && zzz == true && lab == true) {
        return true;
    } else {
        return false;
    }


}