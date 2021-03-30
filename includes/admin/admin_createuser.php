<?php

require_once "../../load.php";

if (isset($_POST["fname"]) && isset($_POST["lname"]) && isset($_POST["email"])) {
    $data = array(
        "fname"=>trim($_POST["fname"]),
        "lname"=>trim($_POST["lname"]),
        "email"=>trim($_POST["email"])
    );
    $message = createUser($data);
    echo json_encode($message);
} else {
    echo json_encode("no post data");
}
    
 