<?php

require_once "../../load.php";

if (isset($_POST["username"]) && isset($_POST["password"])) {
    $username = trim($_POST["username"]);
    $password = trim($_POST["password"]);
    if(!empty ($username) && !empty($password)) {
        $result = login($username, $password);
        $message = $result;
    } else {
        $message = "Please fill out the required fields.";
    }

    echo json_encode($message);
} else {
    echo json_encode("No post data.");
}