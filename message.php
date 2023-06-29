<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $website = $_POST['website'];
    $message = $_POST['message'];


    if(!empty($email) && !empty($message)){
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){
            $receiver = "onarigeorge013@gmail.com";
            $subject = "From: $name <$email>";
            $body = "Name: $name\nEmail: $email\Phone: $phone\nWebsite: $website\n\nMessage: $message\n\nRegards, \n$name";
            $sender = "From: $email";
            if(mail($receiver, $subject, $body, $sender)){
                echo "Your message has been sent";
            }else{
                echo "Sorry Failed to send your message!";
            }
        }else{
            echo 'Enter a valid email address';
        }
    }else{
        echo "Email and message field is required";
    }
    
// $name = $_POST['name'];
// $email = $_POST['email'];
// $phone = $_POST['phone'];
// $call = $_POST['call'];
// $website = $_POST['website'];
// $priority = $_POST['priority'];
// $type = $_POST['type'];
// $message = $_POST['message'];
// $formcontent=" From: $name \n Phone: $phone \n Call Back: $call \n Website: $website \n Priority: $priority \n Type: $type \n Message: $message";
// $recipient = "onarigeorge013@gmail.com";
// $subject = "Contact Form";
// $mailheader = "From: $email \r\n";
// mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
// echo "Thank You!";

?>