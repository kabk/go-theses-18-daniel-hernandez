<?php
$gen = $_POST['gen'];
$sp = $_POST['sp'];
$rating = $_POST['rating'];

$servername = "localhost:8889";
$username = "root";
$password = "root";
$dbname = "genetic";

$bar = isset($_POST['bar']) ? $_POST['bar'] : null;

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

	$sql = "UPDATE activeSpTest SET rating = '$rating' WHERE ID = $sp";

	if ($conn->query($sql) === TRUE) {
	    echo "New record created successfully";
	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}

$conn->close();

?>