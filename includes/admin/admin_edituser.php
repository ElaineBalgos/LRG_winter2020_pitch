<?php

require_once "../../load.php";

// $data = array(
//     "editor" => "admin",
//     "id"=> "2",
//     "username" =>"test",
//     "email" =>"whatever",
//     "fname" => "fname",
//     "lname" => "lname",
//     "level" => "0"
// );

// $message = editUser($data);
// echo json_encode($message);
// exit;
if (isset($_POST["editor"])) {

    if ($_POST["editor"] === "admin") {
        if(isset($_POST["user_id"]) && isset($_POST["user_name"]) && 
        isset($_POST["user_email"]) && isset($_POST["user_fname"]) &&
        isset($_POST["user_lname"]) && isset($_POST["user_level"])) {
            $data = array (
                "id"=> trim($_POST["user_id"]),
                "username" =>trim($_POST["user_name"]),
                "email" =>trim($_POST["user_email"]),
                "fname" => trim($_POST["user_fname"]),
                "lname" => trim($_POST["user_lname"]),
                "level" => trim($_POST["user_level"])
            );
            // $self = ($_POST["self"] === "true" ? TRUE : FALSE);
            $message = editUserByAdmin($data);
            echo json_encode($message);
        } else {
            echo json_encode("Sth wrong when posting data.");
        }

    } else { // member

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

            $message = editUserByMember($data);
            echo json_encode($message);

        } else {
            echo json_encode("Sth wrong when posting data.");
        }
    }
} else {
    echo json_encode("Unknown editor...");
}

