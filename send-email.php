<style>
  .success-message {
    background-color: #4CAF50;
    color: white;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
  }
  
  .error-message {
    background-color: #f44336;
    color: white;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
  }
  </style>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $to = "w0800287@myscc.ca";
  $subject = "New Contact Form Submission";
  $body = "Name: $name\nEmail: $email\nMessage: $message";
  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
    echo "<div class='success-message'>Message sent successfully!</div>";
  } else {
    echo "<div class='error-message'>Failed to send the message. Please try again.</div>";
  } 
}
?>
