<?php
// Fetching Values From URL
// $name2 = $_POST['a0'];
// $email2 = $_POST['a1'];
// $password2 = $_POST['a2'];
// $contact2 = $_POST['a3'];

$DNA = [$_POST['a0'],$_POST['a1'],$_POST['a2'],$_POST['a3']];

// $DNA = [];

// array_push($DNA, 14);


$servername = "localhost:8889";
$username = "root";
$password = "root";
$dbname = "genetic";

$bar = isset($_POST['bar']) ? $_POST['bar'] : null;

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// if (isset($_POST['a1'])) {

	$sql = "INSERT INTO initDNAtest (a0, a1, a2, a3)
	VALUES ('$DNA[0]', '$DNA[1]', '$DNA[2]', '$DNA[3]')";

	if ($conn->query($sql) === TRUE) {
	    echo "New record created successfully";
	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}

// }

$conn->close();