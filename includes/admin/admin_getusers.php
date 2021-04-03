<?php

require_once "../../load.php";

$users = getAllUsers();

echo json_encode($users);