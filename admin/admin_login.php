<?php

require_once "../load.php";

if (isset($_SESSION["user_id"])) {
    redirect_to("index.php");
}

if(isset($_POST["submit"])) {
    $username = trim($_POST["username"]);
    $password = trim($_POST["password"]);
    if(!empty ($username) && !empty($password)) {
        $result = login($username, $password);
        $message = $result;
    } else {
        $message = "Please fill out the required fields.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="../css/main.css">
</head>
<body>
    <div id="page" class="login">
        <div class="top">LRG</div>
        <div class="login-box">
            <h2>Sign In</h2>

            <?php echo !empty($message)?$message:"";?>
            
            <form action="admin_login.php" method="post">
                <div class="item">
                    <p>Username</p>
                    <input type="text" name="username">
                </div>
                <div class="item">
                    <p>Password</p>
                    <input type="password" name="password">
                    <div>
                        <a href="./contact.html">Forgot your password?</a>
                    </div>
                </div>
                <div class="btn">
                    <input type="submit" value="Login" name="submit">
                </div>
            </form>
            <div class="info">
                <p>Don't have an account?</p>
                <a href="">Sign up here</a>
            </div>
        </div>
        <div></div>
    </div>
</body>
</html>