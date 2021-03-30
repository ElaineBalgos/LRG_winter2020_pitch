<?php

require_once "../../load.php";


if(isset($_POST["user_id"]) && isset($_POST["user_name"]) && 
   isset($_POST["user_email"]) && isset($_POST["user_gender"])) {
    
    if (isset($_POST["user_pass"])){
        $data = array (
            "id"=> trim($_POST["user_id"]),
            "username" =>trim($_POST["user_name"]),
            "password" =>trim($_POST["user_pass"]),
            "email" => trim($_POST["user_email"]),
            "gender" => trim($_POST["user_gender"])
        );
    } else {
        $data = array (
            "id"=> trim($_POST["user_id"]),
            "username" =>trim($_POST["user_name"]),
            "email" => trim($_POST["user_email"]),
            "gender" => trim($_POST["user_gender"])
        );
    }

    $message = editUser($data);
    echo json_encode($message);

} else {
    echo json_encode("Sth wrong when posting data.");
}

