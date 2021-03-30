<?php

require_once "../../load.php";

if (isset($_POST["user_id"])) {
    $id = $_POST["user_id"];
    $current_user = getUserById($id);
    echo json_encode($current_user);
} else {
    echo json_encode("Sth wrong when posting data.");
}