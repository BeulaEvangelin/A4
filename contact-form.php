<?php
//process-contact-form.php
//receives user-submitted data

$name = $_POST["name"];
$email = $_POST["email"];
$category_Interest = implode(', ', $_POST["categoryInterests"]);
$role = $_POST["role"];

//saves the user data to the database table

$dsn = "mysql:host=localhost;dbname=immnewsnetwork;charset=utf8mb4";
$dbusername = "root";  
$dbpassword = "";

//connect
$pdo = new PDO($dsn, $dbusername, $dbpassword);

//prepare
$stmt = $pdo->prepare("INSERT INTO `contact_form`
(`Submission_id`, `name`, `email`, `category_Interest`, `role`) 
VALUES 
(NULL,'$name','$email','$category_Interest','$role') ;");

//execute
$stmt->execute();

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo(json_encode($results));

?>