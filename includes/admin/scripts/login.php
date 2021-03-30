<?php
function login($username, $password) {
    
    $pdo = Database::getInstance()->getConnection();
    
    // get user with given username and password
    $get_user_query = "SELECT * FROM tbl_user WHERE user_name = :username AND user_pass = :password";
    $user_set = $pdo->prepare($get_user_query);
    $user_set->execute(
        array(
            ":username" => $username,
            ":password" => $password
        )
    );
    
    if($found_user = $user_set->fetch(PDO::FETCH_ASSOC)) {
        // We found user in the DB, get him in!
        $found_user_id = $found_user["user_id"];

        $user = array(
            "user_id" => $found_user_id,
            "user_name" => $found_user["user_name"]
        );
        
        return $user;
    } else {
        // This is invalid attempt, reject it!
        return "The username or password is not correct. Please try again"; 
    }  
}
