<?php


require_once "../../load.php";

if (isset($_POST["user_id"])) {
    $id = $_POST["user_id"];
    $result = deleteUserById($id);
    echo json_encode($result);
} else {
    echo json_encode("Sth wrong when posting data.");
}