<?php

require_once "../../load.php";

// if (isset($_POST["fname"]) && isset($_POST["lname"]) && isset($_POST["email"])) {
//     $data = array(
//         "fname"=>trim($_POST["fname"]),
//         "lname"=>trim($_POST["lname"]),
//         "email"=>trim($_POST["email"])
//     );
//     $message = createUser($data);
//     echo json_encode($message);
// } else {
//     echo json_encode("no post data");
// }

if (isset($_POST["editor"])) {

    if ($_POST["editor"] === "admin") {
        if(isset($_POST["user_name"]) && isset($_POST["user_email"]) && 
           isset($_POST["user_fname"]) && isset($_POST["user_lname"]) && 
           isset($_POST["user_level"])) {
            $data = array (
                "username" =>trim($_POST["user_name"]),
                "email" =>trim($_POST["user_email"]),
                "fname" => trim($_POST["user_fname"]),
                "lname" => trim($_POST["user_lname"]),
                "level" => trim($_POST["user_level"])
            );
            $message = createUserByAdmin($data);
            echo json_encode($message);
        } else {
            echo json_encode("no post data");
        }
    } else { // visitor
        // echo json_encode("temp");
        if (isset($_POST["fname"]) && isset($_POST["lname"]) && isset($_POST["email"])) {
            $data = array(
                "fname"=>trim($_POST["fname"]),
                "lname"=>trim($_POST["lname"]),
                "email"=>trim($_POST["email"])
            );
            $message = createUserByVisitor($data);
            echo json_encode($message);
        } else {
            echo json_encode("no post data");
        }
    }
} else {
    echo json_encode("Unknown editor...");
}
 