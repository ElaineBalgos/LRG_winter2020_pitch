<?php
    require_once "../load.php";
    confirm_logged_in(true);

    if(isset($_POST["submit"])) {
        $data = array(
            "fname"=>trim($_POST["fname"]),
            "sname"=>trim($_POST["sname"]),
            "username"=>trim($_POST["username"]),
            "password"=>trim($_POST["password"]),
            "email"=>trim($_POST["email"])
        );

        $message = createUser($data);
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create User</title>
</head>
<body>
    <h2>Create User</h2>
    <?php echo !empty($message)?$message:"";?>
    <form action="admin_createuser.php" method="post">
        <label for="first_name">First Name</label>
        <input id="first_name" type="text" name="fname" value="">

        <label for="second_name">Second Name</label>
        <input id="second_name" type="text" name="sname" value="">

        <label for="username">Username</label>
        <input id="username" type="text" name="username" value="">

        <label for="password">Password</label>
        <input id="password" type="text" name="password" value="">

        <label for="email">Email</label>
        <input id="email" type="text" name="email" value="">

        <button type="submit" name="submit">Create User</button>
    </form>
</body>
</html>