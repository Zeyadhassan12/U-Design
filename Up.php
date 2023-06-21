<!DOCTYPE html>
<html>

<head>

    <title>Sign up</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="U icon" href="favicon.png" type="image/x-icon" sizes="any">
    <link rel="stylesheet" href="style-up.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Mukta&display=swap"
        rel="stylesheet">
    <script src="up.js"></script>

</head>

<body>
    <header class="head">
        <a href="U.html" class="logo">U design</a>
    </header>
    <section>
        <div class="left">
            <p class="sign">Create Your Account</p>
            <hr>
            <form class="form" onsubmit="return haha()" name="upform" method="POST" action="Udesign_insert.php">

                <p id="fname"></p>
                <input type="text" id="first_name" name="firstname" placeholder="First name" class="text-input">
                <p id="lname"></p>
                <input type="text" id="last_name" name="lastname" placeholder="Last name" class="text-input">
                <p id="demo"></p>
                <input type="email" id="email" name="email" placeholder="Email" class="text-input">
                <p id="sheel"></p>
                <input type="password" name="password" id="pass" placeholder="Password" class="text-input">
                <p id="sheel2"></p>
                <input type="password" name="passwordconfirm" id="pass_confirm" placeholder="Confirm your password"
                    class="text-input">
                <input type="submit" value="Sign up" class="sign-up">
            </form>
        </div>
        <div class="right">
            <div class="up">
                <p>U</p>
                <hr>
                <div>Already on U design</div>
                <a href="In.html" class="sign-in">Sign In</a>
            </div>

        </div>
    </section>

</body>




</html>