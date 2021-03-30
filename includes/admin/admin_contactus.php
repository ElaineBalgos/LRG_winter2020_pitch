<?php
require_once "../../load.php";

if (isset($_POST["fname"]) && isset($_POST["lname"]) && 
    isset($_POST["email"]) && isset($_POST["message"])) {
    if (!trim($_POST["message"])) {
        echo json_encode("Your message cannot be empty...");
        return;
    }
    $data = array(
        "fname"=>trim($_POST["fname"]),
        "lname"=>trim($_POST["lname"]),
        "email"=>trim($_POST["email"]),
        "message" => trim($_POST["message"])
    );

    //Sending email to our group
    $email_to = "lrg@londonrefereesgroup.com";
    $email_from = $data["email"];
    $email_subject = "Question Enquiry";
    $email_message = sprintf("<html> <h2>Question Enquiry from %s %s</h2>", $data["fname"], $data["lname"]);
    $email_message .= sprintf("%s <br><br><br> </html>", $data["message"]);

    $email_headers = array(
        "Content-type" => "text/html; charset=iso-8859-1",
        "From" => $email_from,
        "Reply-To" => $email_to
    );
        
    $email_result = mail($email_to, $email_subject, $email_message, $email_headers);
    
    $feedback = "";
    if (!($email_result)) {
        $feedback = "Your enquiry COULD NOT be sent to us.";
    } else {
        $feedback = "Your enquiry is SUCCESSFULLY sent to our team. We will get back to you soon.";
    }

    echo json_encode($feedback);
} else if (!isset($_POST["message"])) {
    echo json_encode("Your message cannot be empty when you have questions enquiry...");
} else {
    echo json_encode("No post data.");
}