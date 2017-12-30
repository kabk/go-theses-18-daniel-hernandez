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
				<p>As artificial intelligence rapidly expands towards new areas, it is essential for graphic designers to learn about this topic and understand its potential implications. It is still very unclear what these emerging technologies might be able to achieve in a creative field like graphic design, given that it is very difficult to emulate a form of human creativity that is able to transform, combine and explore a vast conceptual space, like graphic designers do. This thesis aims to envision what might be possible through machine learning in the future, and specifically through which methods this might be achieved.</p>
				<p>Developing an artificial intelligence capable of autonomous design is a very difficult problem, because graphic design, and especially “good graphic design" is an intrinsically subjective and abstract concept which is very difficult to quantify and fully automate. This thesis aims to examine to what extent this kind of autonomous design is possible, how it might be achieved, and what this achievement would imply.</p>
				<p>This research is mostly carried out through experimentation with several existing technologies like deep neural networks, generative adversarial networks and genetic algorithms, evaluating their capabilities as well as their limitations to perform the tasks of a graphic designer. The use of these technologies in the area of graphic design remains virtually unexplored, which is why a deeper understanding of their capabilities could point out how we could adapt to the major changes that are likely to occur to the discipline of graphic design in the near future.</p>
			</section>

			<section>
				<h3>Introduction</h3>
				<p>Machine learning is a field in computer science which revolves around providing a computer program the capacity to learn something without direct programming. For example, one might try to get a computer to excel at chess. One way to do that would be to program all the rules, as well as what move it’s supposed to perform given a certain configuration of the board. Another possibility would be to have it calculate all the potential moves in the future and to chose from the best solution. Both of these options would be far from ideal because it would take a very long time and effort to program them manually. Furthermore, programming the computer’s moves manually would mean that all kinds of human errors would be encoded into the program, restraining it from the potential of coming up with a solution the programmer didn’t think of.</p>
				<p>An approach based on machine learning, would likely be much more efficient, effective and ultimately produce a better chess player. A machine learning model would provide the program the ability to learn the game by itself, gradually improving until reaching its goal, all with very little human intervention. There are several different kinds of models of machine learning, several of which are inspired by natural, biological processes. Some well known examples are genetic algorithms, inspired by Darwinian evolution and neural networks, largely inspired by how groups of neurons work inside the human brain. Both of these, as well as other machine learning models, will be discussed in detail below.</p>
				<p>In the past couple years, we have begun to see this area of computer science really thriving and achieving very impressive feats. This has been accomplished with methods developed over a decade ago, but that only now we can carry out because of an exponential increase in the computing power available to us, and the equally vast amount of data at our disposal.</p>
				<p>Machine learning methods can now accomplish tasks we couldn’t have deemed possible 5 years ago. In fact, without the general population’s knowledge, it is an essential component to many of the technologies we use daily, it picks the songs we listen to, the results of out internet searches, it translates our texts, verifies our identities, predicts the weather and so on. Furthermore, the range of tasks AI performs in our daily life will most probably dramatically increase in the coming years. There is no doubt that these systems can accomplish a wide range of tasks more efficiently than humans, and in many cases with much better results.</p>
				<p>Technological progress is by no means linear. As humans create tools, they can make use of that new tool to create a better one faster than what would have been possible without the initial tool. For example, after the computer was invented, inevitably computers became a tool for designing better computers much more efficiently. This better computer will subsequently allow for even better computers to be produced even faster, and so on. Because of this phenomenon, the speed in which technological innovation occurs is exponential. Many people fear this fact, especially with artificial intelligence in the picture, foreseeing a scenario where an artificial intelligence would be able design a superior version of itself, repeating this process several times and at an increasing speed, reaching some kind of super intelligence, which is regarded as a great threat by many[ref]. Whether this scenario is plausible or not, it is a fact that artificial intelligence and machine learning systems will be far, far superior in the near future.</p>
				<p>The fact that technological growth is rapidly accelerating is very relevant: while this text examines the potential of contemporary machine learning systems in the field of graphic design, the limitations that now constrain a machine’s ability to learn design will be greatly reduced in the future. This thesis apart from analyzing current machine learning models and their current capability to design, attempts to make a proposition on how these systems might be improved, allowing for new, more powerful ways to achieve this goal.</p>
			</section>

			<section>
				<h3>On genetic algorithms and fitness functions</h3>
				<p>Genetic algorithms are a model for machine learning inspired by biological evolution. As described by Darwin [ref], life on Earth has undergone a very long process of selection, or as it is often called, survival of the fittest. The way that this works is that the fittest specimens (individuals most suited for survival) will live longer and therefore be able to mate more often than other less fit individuals. Take primates as an example, they developed superior intelligence over millions of years, the individuals that randomly acquired higher intelligence through mutations, had a greater chance of survival and passed on their genes to the next generations, very slowly optimizing the species for their goal: survival.</p>
				<p>The same process is emulated within a genetic algorithm. There are several variants of this model, but the main premise is that a generation, consisting of several individuals is created, measured based on their goal (fitness), and reproduced accordingly, with mutations occurring randomly allowing the subject to evolve further. The main feature of genetic algorithms, as well as biological evolution, is optimization. The subjects evolve always towards a version of themselves that is more optimized to meet their goal. However, it is important to notice that since optimization is based on random mutation, the subjects will probably never reach the absolute best possible version of themselves, but rather an approximation.</p>
				<p>Genetic algorithms allow us to solve problems very efficiently. Instead of searching for all possible solutions, this model is selective and explores what it deems more valuable. For this reason it commonly used to carry out several tasks, from solving mathematical problems to developing medicines to product design. Since often this processes occur with very limited human intervention, the results are often very unexpected and seem counter intuitive, but nonetheless, perform much better than their human-designed predecessors. A good example of this is NASA’s spacecraft antenna which, despite its alien appearance, is remarkably optimized to carry out it’s task. These strange design choices are one of the reasons why it would be very interesting to explore the idea of genetic algorithms producing something visual like graphic design.</p>
				<p>One of the most difficult problems of generating graphic design through artificial intelligence, and more specifically genetic algorithms, is that there is a substantial need for human assistance in the learning process of the algorithm. This is due to the fact that an essential element of the genetic algorithm is the fitness function. The fitness function is a loss function which encompasses all the merits or qualities of a given generated item. In other words, it evaluates with a score, how good it is compared to the other samples generated by the same algorithm. So, while programming a genetic algorithm, one would write the fitness function according to the goal that wants to be reached. For example, if we were generating a race car, our fitness function would probably consist of its speed, and secondarily also its efficiency, durability and/or safety. Subsequently, when the genetic algorithm is running, it would use this fitness function to define which of the generated cars is the best, and it would generate with the best characteristics accordingly.</p>
				<p>When it comes to generating race cars, writing a fitness function is fairly straight forward, as we have a relatively clear idea of what a good race car consists of. But if our goal is to generate a graphic design poster through genetic algorithms, things become much more difficult. This is because, as opposed to race cars, the elements that make good design good, are not clear at all.</p>
				<p>If we have no clear way of steering the generation process of the genetic algorithm towards what we subjectively think is good, then the algorithm can’t possibly output satisfactory results. Therefore, what is usually done to solve this problem is to use assisted learning methods, such as manually training the model. A well known example of this is the interactive installation titled Galápagos, by Karl Sims[http://www.karlsims.com/galapagos/], in which twelve computers generated a series of virtual 3D “organisms” that would evolve through time. The goal was to create the most aesthetically interesting organisms, so the fitness of each sample was also defined by a very subjective and arguably unquantifiable factor. A sensor was placed in front of each computer screen, counting for how long each sample was observed by a viewer. This input served as the fitness of each sample, therefore allowing the samples to breed, mutate and evolve based on a subjective characteristic like “being interesting”.</p>
				<p>Assisted learning is very effective because the person training the model is in full control of what what is being learned and therefore also has a very high degree of control over the results of the algorithm, especially with manual training, such as Karl Sim’s Galápagos. Nevertheless, there are important disadvantages to these models. The most significant one is that the speed of training is extremely slow compared to other machine learning models. Models with a built in automatic fitness function will be able to compute and evolve the samples at an incomparable speed, which means that the process not only becomes more convenient, but that the samples are allowed to evolve indefinitely, possibly to their “peak” evolutionary state. Additionally, genetic algorithms have a huge potential for problem solving, as they may explore unexpected alternatives that the user may not have considered. Manually determining the fitness of each sample not only slows the process down, but it hinders its potential of generating more innovative solutions. It greatly subjects the result to the human preconceptions of what the result is supposed to be.</p>
				<p>A possible solution to the fitness function problem, is to develop a double model, consisting partly of a genetic algorithm as well as a deep neural network (DNN) [insert definition of DNN] that would serve as a classifier that would control the fitness function of the genetic algorithm. The DNN can be trained with datasets of graphic design image files (in this case posters, to avoid format issues). These datasets have to be previously classified by hand into “good” and “bad” posters. Through training, the DNN could learn to identify all the variable and subjective elements that make a poster good. If this experiment is successful, the trained DNN would be able to get a poster as an input, evaluate it, and output a score for it.<p></p>

				</p><p>Even though avoiding a biased result is unachievable, it is possible to reach a higher degree of impartiality. I attempted to gather posters generally regarded as “good”, by gathering data from poster competitions, museums and other forms of archives. This way the results will be slightly less based on my own personal opinion and backed by a broader consensus.</p>
				<p>However, it is important to note that even if there is some consensus backing the training data, it is ultimately chosen by me. I made the decision to chose certain poster competitions or museums that I believed contained “valuable” content. For this reason the process and outcome will be inevitably influenced by my subjective interpretation of what quality means in design. Therefore, in a scenario where the trained DNN works, it would reflect, to a certain extent, my own taste and opinions in its decisions. Additionally if this DNN working to gather were to generate posters, it would by no means result in anything that could be considered objectively “good”, as there is no such thing.</p>
				<p>The purpose of the following experiment is to determine whether using a DNN to determine the fitness function of a genetic algorithm is viable. The results are rather uncertain, mostly because the DNN could or could not accurate capture the pattern that links all the good posters together and all the bad posters together. DNNs are very good at finding patterns, which is why they often excel at image recognition and classification. If we were to try to classify dolphin images, it would find all the common characteristics that constitute a dolphin image, and effectively classify any image within this class. The difficulty with graphic design posters, lies in the fact that the posters themselves vary vastly. While a dolphin image will always contain some kind of dolphin, posters will most of the time not have any resemblance to each other. My hypothesis is that the DNN will be able to find certain patterns in the way typography is placed, as well as the use of colour throughout the image. However, it is very possible that the trained DNN will have a hard time classifying with perfect accuracy, given the fact that the differences between the good and bad posters is not so evident, nor objective. On the other hand DNNs are known for being able to identify differences between very similar inputs.</p>
				<p>The training data consists of little over 3000 images, half of which are pre-classified as bad and the other as good. The training will be done using Google’s Tensorflow machine learning library, which provides a basic structure for the deep neural network. In order to be able to accurately identify patterns, shapes, colours, and edges, I will be using a pre-trained model called Inception-V3, which already has the ability to recognize over 1000 different objects with a high degree of accuracy. Subsequently, I will add the two classes “good poster”, and “bad poster” and train the network for 24 hrs.</p>
				<p>After successful training, the DNN was ready to be to be tested. Any number of posters can be fed to the DNN, an will be classified, on a scale from 0 to 100, on the network’s interpretation of good and bad. I avoided classifying any of the posters that were in the original dataset, as they would probably return an output of 100% good or bad, according to my initial pre-classification. Following are some of the results.</p>
			</section>

			<section>
				<span class="imgLink">image example</span><span class="linkedImg"><img src="img/galapagos-icc240.jpg" /><span class="imgCaption"><br>Caption blerp, 1923</span></span>
				<sup class="refLink">1</sup><span class="linkedRef">1. Hijazi, Samer, Rishi Kumar, and Chris Rowen. “Using Convolutional Neural Networks for Image Recognition.” Cadence, 2015.</span>
			</section>



				
			<section id="info">

			</section>


			<?php

				$servername = "localhost:8889";
				$username = "root";
				$password = "root";
				$dbname = "genetic";

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

				$sql = "SELECT ID, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21, a22, a23, a24, a25, a26, a27, a28, a29, a30, a31, a32, a33, a34, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34 FROM initDNAtest";
				$result = $conn->query($sql);

				$allDNA = [];
				$allADNA = [];

				$DNA = [];
				$aDNA = [];

				$genCount = 0;

				$idPad = intval(357 + $sp - 1); // +sp   first ID from initDNA DB

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
					        	array_push($DNA, $row[$strA . $x]);
						    }

						    for ($x = 0; $x <= 34; $x++) {
					    		array_push($aDNA, $row[$strB . $x]);
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
				var dbDNA = <?php echo json_encode( $DNA ); ?>;
				var dbADNA = <?php echo json_encode( $aDNA ); ?>;
				var dbRatings = <?php echo json_encode( $ratings ); ?>;

				var allDNA = <?php echo json_encode( $allDNA ); ?>;
				var allADNA = <?php echo json_encode( $allADNA ); ?>;

				// console.log(dbDNA, dbADNA);

				$(document).ready(function(){

					// pushGenSpToDB();

					design(dbDNA, dbADNA);

				});
			</script>

		</div>
	</div>
	<script src="build/js/main.js"></script>
	<script src="build/js/ajax.js"></script>
	<script src="build/js/firstGen.js"></script>
	<script src="build/js/reproduce.js"></script>

</body>
</html>