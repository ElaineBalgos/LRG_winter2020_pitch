<?php
require_once "../load.php";
confirm_logged_in();

$id = $_SESSION["user_id"];
$current_user = getSingleUser($id);

if(empty($current_user)) {
    $message = "Failed to get user info";
}

if(isset($_POST["submit"])) {
    $data = array (
        "fname"=>trim($_POST["fname"]),
        "sname"=>trim($_POST["sname"]),
        "username"=>trim($_POST["username"]),
        "password"=>trim($_POST["password"]),
        "email"=>trim($_POST["email"]),
        "id"=> $id,
    );

    $message = editUser($data);

}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit User</title>
</head>
<body>
    <h2>Edit User</h2>
    <?php echo !empty($message) ? $message : ""; ?>
    <?php if (!empty($current_user)): ?>
    <form action="admin_edituser.php" method="post">
        <?php while($user_info = $current_user->fetch(PDO::FETCH_ASSOC)): ?>
            <label for="first_name">First Name</label>
            <input id="first_name" type="text" name="fname" value="<?php echo $user_info["user_fname"]; ?>">

            <label for="second_name">Second Name</label>
            <input id="second_name" type="text" name="sname" value="<?php echo $user_info["user_sname"]; ?>">

            <label for="username">Username</label>
            <input id="username" type="text" name="username" value="<?php echo $user_info["user_name"]; ?>">

            <label for="password">Password</label>
            <input id="password" type="text" name="password" value="<?php echo $user_info["user_pass"]; ?>">

            <label for="email">Email</label>
            <input id="email" type="text" name="email" value="<?php echo $user_info["user_email"]; ?>">

            <button type="submit" name="submit">Update User</button>
        <?php endwhile;?>  
    </form>
    <?php endif;?>   
</body>
</html>