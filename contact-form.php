<?php
//process-contact-form.php
//receives user-submitted data

$name = isset($_POST["name"]) ? $_POST["name"] : '';
$email = isset($_POST["email"]) ? $_POST["email"] : '';
$category_Interest = isset($_POST["categoryInterests"]) ? implode(', ', $_POST["categoryInterests"]) : '';
$role = isset($_POST["role"]) ? $_POST["role"] : '';

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
(NULL, :name, :email, :category_Interest, :role)");

// execute
if ($stmt->execute([
    ':name' => $name,
    ':email' => $email,
    ':category_Interest' => $category_Interest,
    ':role' => $role
])) {
    echo json_encode(array("success" => true));
} else {
    echo json_encode(array("success" => false));
}