function suiii() {
    var x = document.inform.email.value;
    var y = document.inform.password.value;
    var bool = false;
    var suii = false;
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if ( x == "" ) {
        document.getElementById("demo").innerHTML = "Write the email";
        bool = false;
    } 
    else if (!regex.test(x)) {
        document.getElementById("demo").innerHTML = "Incorrect email";
        bool = false;
        
    }
    else {
        document.getElementById("demo").innerHTML = "";
        bool = true;
    }



    if (y == "") {
        document.getElementById("sheel").innerHTML = "Write the Password";
        suii = false;
    }
    else if (y.length < 8) {
        document.getElementById("sheel").innerHTML = "Too short";
        suii = false;
        
    }
    else {
        document.getElementById("sheel").innerHTML = "";
        suii = true;
    }
     




    if (bool == true && suii == true) {
        return true;
    } else {
        return false;
    }
    

}