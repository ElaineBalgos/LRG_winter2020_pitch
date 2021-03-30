<?php

require_once "../../load.php";

$classes = getAllClasses();

echo json_encode($classes);