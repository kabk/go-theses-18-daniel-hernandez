<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<!-- <link rel="stylesheet" type="text/css" href="build/css/main.css"> -->
	<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> -->
	<script src="build/js/jquery-1.10.2.min.js"></script>
	<title>Please be patient, I’m still learning.</title>
	<style type="text/css">
		body{
			font-family: Akkurat-mono;
			font-size: 1.9rem;
			background-color: white;
			color: black;

			text-transform: uppercase;
		}

		.val{
			/*background-color: black;*/
			/*color: black;*/
			/*border-radius: 300px;*/
			box-shadow: box-shadow: 5px 10px 3px blue;
			color: rgba(0,0,0,0);
/*			border-right: 1px solid black;
			border-left: 1px solid black;*/

			box-sizing: content-box;
		}
	</style>
</head>
<body>
GEN/SP/DES -- Please be patient, I’m still learning. -- Use cases and implications of machine learning technology in graphic design
			<?php
				$generationSpecimens = 40;

				// $servername = "localhost:8889";
				$username = "root";
				$password = "root";
				$dbname = "genetic";
				$dbdna = "DNAdb";
				$dbActiveSp = "activeSp";

				// $servername = "thesisdb.thesis.danielh.info";
				// $username = "onions";
				// $password = "****";
				// $dbname = "genetic";

				// activeSp DNAdb

				$generalCount = 0;
				$gen = 1;
				$sp = 1;

				$ratings = [];




				///////////// Get current gen and sp
				$conn = new mysqli($servername, $username, $password, $dbname);
				// Check connection
				if ($conn->connect_error) {
				    die("Connection failed: " . $conn->connect_error);
				} 

				$sql = "SELECT ID, rating FROM activeSp";
				$result = $conn->query($sql);

				if ($result->num_rows > 0) {
				    // output data of each row
				    while($row = $result->fetch_assoc()) {

				    	$generalCount++;
				    	$sp++;

				    	if ($generalCount % $generationSpecimens === 0) {
				    		$gen++;
				    		$sp = 1;
				    	}

				    	array_push($ratings, $row['rating']);

				    }

				} else {
				    echo "0 results";
				}

				$conn->close();


				/////////////////////Get DNA data from DB

				// Create connection
				$conn = new mysqli($servername, $username, $password, $dbname);
				// Check connection
				if ($conn->connect_error) {
				    die("Connection failed: " . $conn->connect_error);
				}

				$sql = "SELECT ID, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21, a22, a23, a24, a25, a26, a27, a28, a29, a30, a31, a32, a33, a34, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34 FROM DNAdb";
				$result = $conn->query($sql);

				$allDNA = [];
				$allADNA = [];

				// $DNA = [];
				// $aDNA = [];

				$genCount = 0;

				$idPad = intval(1 + $sp - 1); // +sp   first ID from initDNA DB

				if ($result->num_rows > 0) {

					$strA = "a";
					$strB = "b";

				    // output data of each row
				    while($row = $result->fetch_assoc()) {

				    	array_push($allDNA, []);
				    	array_push($allADNA, []);


				    	for ($x = 0; $x <= 34; $x++) {
				    		array_push($allDNA[$genCount], $row[$strA . $x]);
				    		array_push($allADNA[$genCount], $row[$strB . $x]);
					    }

					    $genCount++;
				    	
				    	if ($row["ID"] == $idPad) {  ///////////////here goes the specimen ID that will be displayed

							for ($x = 0; $x <= 34; $x++) {
					        	// array_push($DNA, $row[$strA . $x]);
						    }

						    for ($x = 0; $x <= 34; $x++) {
					    		// array_push($aDNA, $row[$strB . $x]);
						    }
					    }
				    }
				} else {
				    echo "0 results";
				}

				$conn->close();

				?>

			<script type="text/javascript">
				var generationSpecimens = 40;

				var dbGeneralCount = parseInt("<?php echo $generalCount; ?>");
				var dbGen = parseInt("<?php echo $gen; ?>");
				var dbSp = parseInt("<?php echo $sp; ?>");
				var dbRatings = <?php echo json_encode( $ratings ); ?>;

				var allDNA = <?php echo json_encode( $allDNA ); ?>;
				var allADNA = <?php echo json_encode( $allADNA ); ?>;

				var activeDNA = allDNA[dbGeneralCount];
				var activeADNA = allADNA[dbGeneralCount];

				var idPadding = 1 - 1; //where DB id starts ---> db = activeSP

				for (var i = 0; i < allDNA.length; i++) {
					for (var j = 0; j < allDNA[i].length-4; j++) { //turn all into ints (exept last 4 floats)
						let intVal = parseInt(allDNA[i][j]);
						allDNA[i][j] = intVal;
					}
				}
				

				$(document).ready(function(){
					// firstGen(); // init only
					// reproduce(); // for debugging
					// pushGenSpToDB(); // on
					// landingMessage(); // off
					// showLandingOnce(); // on

					// $("body").append(" DNA ");
					// for (var i = 0; i < allDNA[0].length; i++) {
					// 	$("body").append(i+" ");
					// }


					$("body").append("<br>");

					for (var j = 0; j < allDNA.length; j++) {

						var gen = Math.floor(j/20)+1;

						var sp = j-((gen-1)*20)+1;

						$("body").append("<span class='gen'>"+pad(gen,3)+"</span>/<span class='sp'>"+pad(sp,2)+"</span>/<span class='des'>"+pad(j+1,3)+"</span> <span class='line'>");

						for (var i = 0; i < allDNA[0].length; i++) {
							$("body").append("<span class='val'>"+allDNA[j][i]+"</span> ");
						}

						$("body").append("</span><br>");

					}



					// for (var i = 0; i < ; i++) {
					// 	Things[i]
					// }
					$(".line").each(function(i){
						var $span = $(this);
						var lel = 255;
						// $span.css("color", "pink");
						for (var j = 0; j < dbRatings[i]; j++) {
							lel-=20;
							$(this).prepend("&nbsp;&nbsp;");
							// $span.css("color", "rgb(0,"+lel+","+lel+",1)");
							console.log(lel);

						}

					});

					$(".gen").each(function(i){
						var $this = $(this);
						var gen = parseInt($this.text());
						if (gen%2===0) {
							$this.css("background-color", "rgb(0,0,0)").css("color", "white");
						}
						// $this.css("color", "rgba("+invCount+","+invCount+","+invCount+",0)");

					});

					$(".sp").each(function(i){
						var $this = $(this);
						var gen = parseInt($this.text());
						if (gen%2===0) {
							$this.css("background-color", "rgb(0,0,0)").css("color", "white");
						}
						// $this.css("color", "rgba("+invCount+","+invCount+","+invCount+",0)");

					});

					$(".des").each(function(i){
						var $this = $(this);
						var gen = parseInt($this.text());
						if (gen%2===0) {
							$this.css("background-color", "rgb(0,0,0)").css("color", "white");
						}
						// $this.css("color", "rgba("+invCount+","+invCount+","+invCount+",0)");

					});

					$(".val").each(function(i){
						var $this = $(this);
						var count = 0;
						var invCount = 255;
						for (var j = 0; j < parseInt($this.text()); j++) {
							count++;
							invCount--;
						}

						$this.css("background-color", "rgb("+count+","+count+","+count+")");
						// $this.css("color", "rgba("+invCount+","+invCount+","+invCount+",0)");

					});


					$("body").append("Kabk graphic design ba thesis. daniel hernández chacon. 09.01.2018");
					
				});

				function pad(n, width, z) {
				  z = z || '0';
				  n = n + '';
				  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
				}
			</script>
</body>
</html>