<?php
$generalCount = $_POST['generalCount'];
$gen = $_POST['gen'];
$sp = $_POST['sp'];
$rating = $_POST['rating'];

// $idPad = 237;

// $newId = $idPad . $sp;

// $newId = $idPad . $generalCount;

$servername = "localhost:8889";
$username = "root";
$password = "root";
$dbname = "genetic";

$bar = isset($_POST['bar']) ? $_POST['bar'] : null;

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE activeSp SET rating = '$rating' WHERE id = '$generalCount'";

if ($conn->query($sql) === TRUE) {
    // echo "New record created successfully";
} else {
    // echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>