<?php

$servername = "localhost:8889";
				$username = "root";
				$password = "root";
				$dbname = "genetic";
$table = "activeSpTest"

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT ID, rating FROM '$activeSpTest'";
$result = $conn->query($sql);

$ratings = [];

// $idPad = intval(297 + $sp - 1); // +sp   first ID from initDNA DB

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
    	// if ($row["ID"] == $idPad) {  ///////////////here goes the specimen ID that will be displayed

    		// echo "DNA<br>";
			// for ($x = 0; $x <= 34; $x++) {
	  //   		$int = $x;
	  //   		$str = "a";
		        
		 //        array_push($ratings, $row[$str.$int]);
		 //        // echo $DNA[$x] . " ";
		 //        // echo $x." ";
		 //    }

    		array_push($ratings, $row['rating']);

		    // echo "<br><br>aDNA<br>";

		    // for ($x = 0; $x <= 34; $x++) {
	    	// 	$int = $x;
	    	// 	$str = "b";
		        
		    //     array_push($aDNA, $row[$str.$int]);
		    //     // echo $aDNA[$x] . " ";
		    // }
	    // }
    }
} else {
    echo "0 results";
}

$conn->close();

?>