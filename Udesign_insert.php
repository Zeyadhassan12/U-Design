<?php
$firstname = $_POST["firstname"];
$lastname = $_POST["lastname"];
$email = $_POST["email"];
$password = $_POST["password"];


//$con = mysqli_connect("localhost", "root", "") or die("Error: Can't connect to the server");
//$db = mysqli_select_db($con, "UDesign") or die("Error: Can't connect to database");
include "config.php";


$insertAccount = "INSERT INTO Accounts (firstName,lastName,email,password) value('$firstname','$lastname','$email','$password')";
$result = mysqli_query($con, $insertAccount);
if($result==true){
    echo "<h1>Account added successfully</h1>";
    echo "<a href=\"viewuser.php\">Click here to view all user information</a>";
}
else{
    die("Error: " . mysqli_errno($con));
}
?>