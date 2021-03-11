<?php
require_once "../load.php";
// echo $_SESSION["user_name"];
confirm_logged_in();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Account Page</title>
</head>
<body>
    <h1> Account Page</h1>
    <h2>Welcome to the dashboard page, <?php echo $_SESSION["user_name"]; ?>!</h2>

    <p> content ...... whatever </p>

    <a href="admin_createuser.php">Create User</a>
    <a href="admin_edituser.php">Edit User</a>
    <a href="admin_logout.php">Sign Out</a>
    
</body>
</html>