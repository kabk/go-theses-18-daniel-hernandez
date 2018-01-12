<?php

$DNA = [];
$aDNA = [];

for ($x = 0; $x <= 34; $x++) {
    array_push($DNA, $_POST['a' . $x]);
    array_push($aDNA, $_POST['b' . $x]);
}

$servername = "localhost:8889";
$username = "root";
$password = "root";
$dbname = "genetic";

$bar = isset($_POST['bar']) ? $_POST['bar'] : null;

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO DNAdb (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21, a22, a23, a24, a25, a26, a27, a28, a29, a30, a31, a32, a33, a34, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34)
VALUES ('$DNA[0]', '$DNA[1]', '$DNA[2]', '$DNA[3]', '$DNA[4]', '$DNA[5]', '$DNA[6]', '$DNA[7]', '$DNA[8]', '$DNA[9]', '$DNA[10]', '$DNA[11]', '$DNA[12]', '$DNA[13]', '$DNA[14]', '$DNA[15]', '$DNA[16]', '$DNA[17]', '$DNA[18]', '$DNA[19]', '$DNA[20]', '$DNA[21]', '$DNA[22]', '$DNA[23]', '$DNA[24]', '$DNA[25]', '$DNA[26]', '$DNA[27]', '$DNA[28]', '$DNA[29]', '$DNA[30]', '$DNA[31]', '$DNA[32]', '$DNA[33]', '$DNA[34]', $aDNA[0], $aDNA[1], $aDNA[2], $aDNA[3], $aDNA[4], $aDNA[5], $aDNA[6], $aDNA[7], $aDNA[8], $aDNA[9], $aDNA[10], $aDNA[11], $aDNA[12], $aDNA[13], $aDNA[14], $aDNA[15], $aDNA[16], $aDNA[17], $aDNA[18], $aDNA[19], $aDNA[20], $aDNA[21], $aDNA[22], $aDNA[23], $aDNA[24], $aDNA[25], $aDNA[26], $aDNA[27], $aDNA[28], $aDNA[29], $aDNA[30], $aDNA[31], $aDNA[32], $aDNA[33], $aDNA[34])";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();


?>