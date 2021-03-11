<?php

// function getUserLevelMap() {
//     return array(
//         '0'=>'Web Editor',
//         '1'=>'Web Admin', 
//         '2'=>'Web Super Admin'
//     );
// }

// function getCurrentUserLevel() {
//     $user_level_map = getUserLevelMap();

//     if(isset($_SESSION['user_level']) && array_key_exists($_SESSION['user_level'], $user_level_map)) {
//         return $user_level_map[$_SESSION['user_level']];
//     } else {
//         return "Unrecognized";
//     }
// }

function createUser($user_data) {


    if(empty($user_data["username"]) || isUsernameExists($user_data["username"])) {
        return "Username is invalid!";
    }

    if(empty($user_data["password"])) {
        return "Password cannot be empty.";
    }

    ## 1. Run the proper SQL query to insert user
    $pdo = Database::getInstance()->getConnection();

    $create_user_query = "INSERT INTO tbl_user(user_name, user_pass, user_fname, user_sname, user_email)";
    // Using placeholder can protect the code from SQL injection
    $create_user_query .= " VALUES(:username, :password, :fname, :sname, :email)";

    $create_user_set = $pdo->prepare($create_user_query);
    $create_user_result = $create_user_set->execute(
        array (
            ":username" => $user_data["username"],
            ":password" => $user_data["password"],
            ":fname" => $user_data["fname"],
            ":sname" => $user_data["sname"],
            ":email" => $user_data["email"]
        )
    );

    ## 2. Redirect to index.php if create user successfully, (*maybe with some message???),
    # otherwise, showing the error message

    if ($create_user_result) {
        redirect_to('index.php');
    } else {
        return 'The user did not go through!!!';
    }
}

function getSingleUser($user_id) {
    // echo 'You are trying to fetch user:'.$user_id;
    $pdo = Database::getInstance()->getConnection();

    $get_user_query = "SELECT * FROM tbl_user WHERE user_id = :id";
    $get_user_set = $pdo->prepare($get_user_query);
    $result = $get_user_set->execute(
        array(
            ":id" => $user_id
        )
    );

    if($result && $get_user_set->rowCount()) {
        return $get_user_set;
    } else {
        return false;
    }
}

function editUser($user_data) {
    if(empty($user_data["username"]) || isUsernameExists($user_data["username"])) {
        return "Username is invalid!";
    }

    $pdo = Database::getInstance()->getConnection();

    $update_user_query = "UPDATE tbl_user SET user_name=:username, user_pass=:password, user_fname = :fname, user_sname = :sname, user_email=:email WHERE user_id = :id";
    $update_user_set = $pdo->prepare($update_user_query);
    $update_user_result = $update_user_set->execute(
        array(
            ":username" => $user_data["username"],
            ":password" => $user_data["password"],
            ":fname" => $user_data["fname"],
            ":sname" => $user_data["sname"],
            ":email" => $user_data["email"],
            ":id" => $user_data["id"],
        )
    );

    // $update_user_set->debugDumpParams();
    // exit;

    if($update_user_result) {
        $_SESSION["user_name"] = $user_data["username"];
        redirect_to("index.php");
    }else {
        return "Guess you got canned...";
    }
}

// // naming convention start with "is" mostly return boolean value
// function isCurrentUserAdminAbove() {
//     return !empty($_SESSION['user_level']);
// }

function isUsernameExists($username) {
    $pdo = Database::getInstance()->getConnection();

    $user_exists_query = "SELECT COUNT(*) FROM tbl_user WHERE user_name = :username";
    $user_exists_set = $pdo->prepare($user_exists_query);
    $user_exists_result = $user_exists_set->execute(
        array (
            ":username"=>$username
        )
    );

    return !$user_exists_result || $user_exists_set->fetchColumn() > 0;
}