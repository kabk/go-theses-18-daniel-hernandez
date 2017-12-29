<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Please be patient, I’m still learning.</title>
	<link rel="stylesheet" type="text/css" href="build/css/main.css">
	<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> -->
	<script src="build/js/jquery-1.10.2.min.js"></script>
</head>
<body>
	<canvas id="myCanvas"></canvas>
	<div id="bg"></div>
	<header class="bottom">
		<span id="headerTitle">Title here?</span>
		<span id="genInfo">
			Design #<span id="designCounter">1</span>&nbsp;&nbsp;&nbsp;&nbsp;
			Generation #<span id="generationCounter">1</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<a id="redesign" href="#">Redesign</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			Rate this design:&nbsp;<div id="rateBar"><div id="rateBarInner"></div></div>&nbsp;
		</span>
	</header>
	<div id="mainWrap">
		<div id="textWrap">
			<section id="landing">
				<h2>
					Please be patient,<br>
					I’m still learning.
				</h2><br>
				<h4>Use cases and implications of machine<br>
					learning technology in graphic design</h4>
			</section>
			<section>
			<h3>Abstract</h3>
				<p>In an age where artificial intelligence is expanding towards more and more areas, it is essential for <span class="imgLink">graphic designers</span><span class="linkedImg"><img src="img/nickj.png" /><span class="imgCaption"><br>Caption blerp, 1923</span></span> to learn about this topic and understand its potential implications. This thesis attempts to tackle the problem of computational creativity with a focus on graphic design. This problem lies in the fact that it is very difficult to emulate a form of human creativity that is able to transform, combine and explore a vast conceptual space. This thesis examines several existing technologies, aiming to find out how they can be used to carry out the tasks that graphic designers perform. By finding out the potential capabilities of these technologies, graphic designers may know how how to adapt to the technological revolution that is rapidly approaching.</p>
				<p>Developing an artificial intelligence capable of autonomous design is a very difficult problem, because graphic design, and especially “good graphic design" is an intrinsically subjective and abstract concept which is very difficult to quantify and fully automate. This thesis aims to examine to what extent this kind of autonomous design is possible, how it might be achieved, and what this achievement would imply.</p>
				<p>The focus of this research is mostly based on practical, hands-on experimentation with existing technologies like deep neural networks, generative adversarial networks and genetic algorithms. The use of these technologies in the area of graphic design remains virtually unexplored, so by conducting several experiments, it might be possible to identify the potential of these technologies, as well as its limitations.</p>
				<p>Followed by these experiments is a reflection on the potential effect that machine learning can have on the discipline of graphic design and how designers might be able to adapt to a future of creative machines.</p>
			</section>
			<section>
			<h3>Abstract</h3>
				<p>In an age where artificial intelligence is expanding towards more and more areas, it is essential for graphic designers to learn about this topic and understand its potential implications. This thesis attempts to tackle the problem of computational creativity with a focus on graphic design. This problem lies in the fact that it is very difficult to emulate a form of human creativity that is able to transform, combine and explore a vast conceptual space. This thesis examines several existing technologies, aiming to find out how they can be used to carry out the tasks that graphic designers perform. By finding out the potential capabilities of these technologies, graphic designers may know how how to adapt to the technological revolution that is rapidly approaching.</p>
				<p>Developing an artificial intelligence capable of autonomous design is a very difficult problem, because graphic design, and especially “good graphic design" is an intrinsically subjective and abstract concept which is very difficult to quantify and fully automate. This thesis aims to examine to what extent this kind of autonomous design is possible, how it might be achieved, and what this achievement would imply.</p>
				<p>The focus of this research is mostly based on practical, hands-on experimentation with existing technologies like deep neural networks, generative adversarial networks and genetic algorithms. The use of these technologies in the area of graphic design remains virtually unexplored, so by conducting several experiments, it might be possible to identify the potential of these technologies<sup class="refLink">1</sup><span class="linkedRef">1. Hijazi, Samer, Rishi Kumar, and Chris Rowen. “Using Convolutional Neural Networks for Image Recognition.” Cadence, 2015.</span>, as well as its limitations.</p>
				<p>Followed by these experiments is a reflection on the potential effect that machine learning can have on the discipline of graphic design and how designers might be able to adapt to a future of creative machines.</p>
			</section>
			<section><h3>Introduction</h3>
				<p>Machine learning is a field in computer science which revolves around providing a computer program the capacity to learn something without direct programming. For example, one might try to get a computer to excel at chess. One way to do that would be to program all the rules, as well as what move it’s supposed to perform given a certain configuration of the board. Another possibility would be to have it calculate all the potential moves in the future and to chose from the best solution. Both of these options would be far from ideal because it would take a very long time and effort to program them manually. Furthermore, programming the computer’s moves manually would mean that all kinds of human errors would be encoded into the program, restraining it from the potential of coming up with a solution the programmer didn’t think of.</p>
				<p>An approach based on machine learning, would likely be much more efficient, effective and ultimately produce a better chess player. A machine learning model would provide the program the ability to learn the game by itself, gradually improving until reaching its goal, all with very little human intervention. There are several different kinds of models of machine learning, several of which are inspired by natural, biological processes. Some well known examples are genetic algorithms, inspired by Darwinian evolution and neural networks, largely inspired by how groups of neurons work inside the human brain. Both of these, as well as other machine learning models, will be discussed in detail below.</p>
				<p>In the past couple years, we have begun to see this area of computer science really thriving and achieving very impressive feats. This has been accomplished with methods developed over a decade ago, but that only now we can carry out because of an exponential increase in the computing power available to us, and the equally vast amount of data at our disposal.</p>
				<p>Machine learning methods can now accomplish tasks we couldn’t have deemed possible 5 years ago. In fact, without the general population’s knowledge, it is an essential component to many of the technologies we use daily, it picks the songs we listen to, the results of out internet searches, it translates our texts, verifies our identities, predicts the weather and so on. Furthermore, the range of tasks AI performs in our daily life will most probably dramatically increase in the coming years. There is no doubt that these systems can accomplish a wide range of tasks more efficiently than humans, and in many cases with much better results.</p>
				<p>Technological progress is by no means linear. As humans create tools, they can make use of that new tool to create a better one faster than what would have been possible without the initial tool. For example, after the computer was invented, inevitably computers became a tool for designing better computers much more efficiently. This better computer will subsequently allow for even better computers to be produced even faster, and so on. Because of this phenomenon, the speed in which technological innovation occurs is exponential. Many people fear this fact, especially with artificial intelligence in the picture, foreseeing a scenario where an artificial intelligence would be able design a superior version of itself, repeating this process several times and at an increasing speed, reaching some kind of super intelligence, which is regarded as a great threat by many[ref]. Whether this scenario is plausible or not, it is a fact that artificial intelligence and machine learning systems will be far, far superior in the near future.</p>
				<p>The fact that technological growth is rapidly accelerating is very relevant: while this text examines the potential of contemporary machine learning systems in the field of graphic design, the limitations that now constrain a machine’s ability to learn design will be greatly reduced in the future. This thesis apart from analyzing current machine learning models and their current capability to design, attempts to make a proposition on how these systems might be improved, allowing for new, more powerful ways to achieve this goal.</p></section>
				<section><h3>On genetic algorithms and fitness functions</h3>
				<p>Genetic algorithms are a model for machine learning inspired by biological evolution. As described by Darwin [ref], life on Earth has undergone a very long process of selection, or as it is often called, survival of the fittest. The way that this works is that the fittest specimens (individuals most suited for survival) will live longer and therefore be able to mate more often than other less fit individuals. Take primates as an example, they developed superior intelligence over millions of years, the individuals that randomly acquired higher intelligence through mutations, had a greater chance of survival and passed on their genes to the next generations, very slowly optimizing the species for their goal: survival.</p>
				<p>The same process is emulated within a genetic algorithm. There are several variants of this model, but the main premise is that a generation, consisting of several individuals is created, measured based on their goal (fitness), and reproduced accordingly, with mutations occurring randomly allowing the subject to evolve further. The main feature of genetic algorithms, as well as biological evolution, is optimization. The subjects evolve always towards a version of themselves that is more optimized to meet their goal. However, it is important to notice that since optimization is based on random mutation, the subjects will probably never reach the absolute best possible version of themselves, but rather an approximation.</p>
				<p>Genetic algorithms allow us to solve problems very efficiently. Instead of searching for all possible solutions, this model is selective and explores what it deems more valuable. For this reason it commonly used to carry out several tasks, from solving mathematical problems to developing medicines to product design. Since often this processes occur with very limited human intervention, the results are often very unexpected and seem counter intuitive, but nonetheless, perform much better than their human-designed predecessors. A good example of this is NASA’s spacecraft antenna which, despite its alien appearance, is remarkably optimized to carry out it’s task. These strange design choices are one of the reasons why it would be very interesting to</p></section>
			<section id="info">

			</section>


			<?php
				// $servername = "localhost:8889";
				// $username = "root";
				// $password = "root";
				// $dbname = "genetic";

				// $bar = isset($_POST['bar']) ? $_POST['bar'] : null;

				// // Create connection
				// $conn = new mysqli($servername, $username, $password, $dbname);
				// // Check connection
				// if ($conn->connect_error) {
				//     die("Connection failed: " . $conn->connect_error);
				// } 

				// $sql = "INSERT INTO test2 (a0, a1)
				// VALUES (32, 3)";

				// if ($conn->query($sql) === TRUE) {
				//     echo "New record created successfully";
				// } else {
				//     echo "Error: " . $sql . "<br>" . $conn->error;
				// }

				// $conn->close();

				$servername = "localhost:8889";
				$username = "root";
				$password = "root";
				$dbname = "genetic";

				$generalCount = 0;
				$gen = 1;
				$sp = 1;




				///////////// Get current gen and sp
				$conn = new mysqli($servername, $username, $password, $dbname);
				// Check connection
				if ($conn->connect_error) {
				    die("Connection failed: " . $conn->connect_error);
				} 

				$sql = "SELECT ID, rating FROM activeSpTest";
				$result = $conn->query($sql);

				if ($result->num_rows > 0) {
				    // output data of each row
				    while($row = $result->fetch_assoc()) {

				    	$generalCount++;
				    	$sp++;

				    	if ($generalCount % 20 === 0) {
				    		$gen++;
				    		$sp = 1;
				    	}
				    }

				    // echo "<br>gc " . $generalCount . "<br>gen " . $gen . "<br>sp " . $sp;

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

				$sql = "SELECT ID, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21, a22, a23, a24, a25, a26, a27, a28, a29, a30, a31, a32, a33, a34, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34 FROM initDNAtest";
				$result = $conn->query($sql);

				$DNA = [];
				$aDNA = [];

				$idPad = intval(237 + $sp); // +sp   first ID from initDNA DB

				if ($result->num_rows > 0) {
				    // output data of each row
				    while($row = $result->fetch_assoc()) {
				    	if ($row["ID"] == $idPad) {  ///////////////here goes the specimen ID that will be displayed

				    		// echo "DNA<br>";
							for ($x = 0; $x <= 34; $x++) {
					    		$int = $x;
					    		$str = "a";
						        
						        array_push($DNA, $row[$str.$int]);
						        // echo $DNA[$x] . " ";
						        // echo $x." ";
						    }

						    // echo "<br><br>aDNA<br>";

						    for ($x = 0; $x <= 34; $x++) {
					    		$int = $x;
					    		$str = "b";
						        
						        array_push($aDNA, $row[$str.$int]);
						        // echo $aDNA[$x] . " ";
						    }
					    }
				    }
				} else {
				    echo "0 results";
				}

				$conn->close();




				

				?>

			<script type="text/javascript">
				var dbGeneralCount = parseInt("<?php echo $generalCount; ?>");
				var dbGen = parseInt("<?php echo $gen; ?>");
				var dbSp = parseInt("<?php echo $sp; ?>");
				var dbDNA = [];
				var dbADNA = [];

				$(document).ready(function(){

					pushGenSpToDB();

					
					// console.log(dbGeneralCount,dbGen, dbSp);

					///////get DNA from db to js
					

					dbDNA.push(parseInt("<?php echo $DNA[0]; ?>"));
					dbDNA.push(parseInt("<?php echo $DNA[1]; ?>"));
					dbDNA.push(parseInt("<?php echo $DNA[2]; ?>"));
					dbDNA.push(parseInt("<?php echo $DNA[3]; ?>"));
					dbDNA.push(parseInt("<?php echo $DNA[4]; ?>"));
					dbDNA.push(parseInt("<?php echo $DNA[5]; ?>"));
					dbDNA.push(parseInt("<?php echo $DNA[6]; ?>"));
					dbDNA.push(parseInt("<?php echo $DNA[7]; ?>"));
					dbDNA.push(parseInt("<?php echo $DNA[8]; ?>"));
					dbDNA.push(parseInt("<?php echo $DNA[9]; ?>"));
					dbDNA.push(parseInt("<?php echo $DNA[10]; ?>"));
					dbDNA.push(parseInt("<?php echo $DNA[11]; ?>"));
					dbDNA.push(parseInt("<?php echo $DNA[12]; ?>"));
					dbDNA.push(parseInt("<?php echo $DNA[13]; ?>"));
					dbDNA.push(parseInt("<?php echo $DNA[14]; ?>"));
					dbDNA.push(parseInt("<?php echo $DNA[15]; ?>"));
					dbDNA.push(parseInt("<?php echo $DNA[16]; ?>"));
					dbDNA.push(parseInt("<?php echo $DNA[17]; ?>"));
					dbDNA.push(parseInt("<?php echo $DNA[18]; ?>"));
					dbDNA.push(parseInt("<?php echo $DNA[19]; ?>"));
					dbDNA.push(parseInt("<?php echo $DNA[20]; ?>"));
					dbDNA.push(parseInt("<?php echo $DNA[21]; ?>"));
					dbDNA.push(parseInt("<?php echo $DNA[22]; ?>"));
					dbDNA.push(parseInt("<?php echo $DNA[23]; ?>"));
					dbDNA.push(parseInt("<?php echo $DNA[24]; ?>"));
					dbDNA.push(parseInt("<?php echo $DNA[25]; ?>"));
					dbDNA.push(parseInt("<?php echo $DNA[26]; ?>"));
					dbDNA.push(parseInt("<?php echo $DNA[27]; ?>"));
					dbDNA.push(parseInt("<?php echo $DNA[28]; ?>"));
					dbDNA.push(parseInt("<?php echo $DNA[29]; ?>"));
					dbDNA.push(parseInt("<?php echo $DNA[30]; ?>"));
					dbDNA.push(parseFloat("<?php echo $DNA[31]; ?>"));
					dbDNA.push(parseFloat("<?php echo $DNA[32]; ?>"));
					dbDNA.push(parseFloat("<?php echo $DNA[33]; ?>"));
					dbDNA.push(parseFloat("<?php echo $DNA[34]; ?>"));

					dbADNA.push(parseInt("<?php echo $aDNA[0]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[1]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[2]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[3]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[4]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[5]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[6]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[7]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[8]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[9]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[10]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[11]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[12]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[13]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[14]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[15]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[16]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[17]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[18]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[19]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[20]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[21]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[22]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[23]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[24]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[25]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[26]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[27]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[28]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[29]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[30]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[31]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[32]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[33]; ?>"));
					dbADNA.push(parseInt("<?php echo $aDNA[34]; ?>"));

					console.log(DNA);
					console.log(aDNA);

					design(dbDNA, dbADNA);
				});
			</script>

		</div>
		<!-- <div id="images">col2</div> -->
	</div>
	<script src="build/js/main.js"></script>
	<script src="build/js/ajax.js"></script>
	<script src="build/js/firstGen.js"></script>

</body>
</html>