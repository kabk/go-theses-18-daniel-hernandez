<?php
// Fetching Values From URL
// $name2 = $_POST['a0'];
// $email2 = $_POST['a1'];
// $password2 = $_POST['a2'];
// $contact2 = $_POST['a3'];

// $DNA = [$_POST['a0'],$_POST['a1'],$_POST['a2'],$_POST['a3']];

// $DNA = [];
// $aDNA = [];

// // array_push($DNA, $_POST['a0']);

// for ($x = 0; $x <= 34; $x++) {
//     array_push($DNA, $_POST['a' . $x]);
//     array_push($aDNA, $_POST['b' . $x]);
// }

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

	$sql = "INSERT INTO activeSpTest (gen, sp)
	VALUES ('1', '1')";

	if ($conn->query($sql) === TRUE) {
	    echo "New record created successfully";
	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}

// }

$conn->close();

?>