<?php

function redirect_to($location=null) {
    if($location!=null) {
        header("Location: ".$location);
        exit;
    }
}

function getAllClasses(){

        $pdo = Database::getInstance()->getConnection();
    
        $queryAll = "SELECT * FROM tbl_class";
        $runAll = $pdo->query($queryAll);
        $classes = $runAll->fetchAll(PDO::FETCH_ASSOC);
    
        if ($classes){
            return $classes;
        } else {
            return "Sth wrong when grab classes information. Refresh...";
        }
}

function getAllTasks(){

    $pdo = Database::getInstance()->getConnection();

    $queryAll = "SELECT * FROM tbl_task";
    $runAll = $pdo->query($queryAll);
    $tasks = $runAll->fetchAll(PDO::FETCH_ASSOC);

    if ($tasks){
        return $tasks;
    } else {
        return "Sth wrong when grab classes information. Refresh...";
    }
}