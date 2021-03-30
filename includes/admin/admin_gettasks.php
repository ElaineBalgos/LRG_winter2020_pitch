<?php

require_once "../../load.php";

$tasks = getAllTasks();

echo json_encode($tasks);