const reproduce = () => {
	let activeGen = dbGen - 1;
	let newDNA = [];
	let newADNA = [];
	let indByPro = []; //indexes by probability. unrated designs and 0 scores are ignored

	let activeRatings = [];
	let activeParentDNA = [];
	let activePatentADNA = [];

	dbRatings.push(rand(0,1)); // last design that cant be rated (solve)
	
	//grab last 20 elements from array

	let count = 0; // to get index 0-20;

	for (var i = (dbRatings.length - generationSpecimens); i < dbRatings.length; i++) {
		activeRatings.push(parseInt(dbRatings[i]));
		activeParentDNA.push([]);
		activeParentDNA[count] = allDNA[i];
		activePatentADNA.push([]);
		activePatentADNA[count] = allADNA[i];
		console.log(i,count);
		count++;
	}

	console.log("activeParentDNA ",activeParentDNA);
	console.log("allDNA ",allDNA);
	console.log("arratings ",activeRatings);


	const calculateOffspring = () => { // calculate number of elite offspring
		let fitParents = 0;
		let eliteOffspring;
		let maxEliteOffspring = generationSpecimens - (generationSpecimens/4);
		let promiscuity = 2; // how much fit parents will reproduce

		// if no ratings, still reproduce. otherwise error
		if (combineArr(activeRatings) <= 1) {
			activeRatings = [];
			for (var i = 0; i < generationSpecimens; i++) {
				activeRatings.push(1);
			}	
		}


		for (var i = 0; i < activeRatings.length; i++) {
			if (activeRatings[i] >=1) {
				fitParents++;
			}
		}

		eliteOffspring = Math.floor(fitParents * promiscuity);

		if (eliteOffspring >= maxEliteOffspring) {
			eliteOffspring = maxEliteOffspring;
		}

		if (eliteOffspring <= 1) {
			eliteOffspring = 2;
		}
		return eliteOffspring;
	}

	let offspringNo = calculateOffspring(); // elite offspring
	let offspringRand = generationSpecimens - offspringNo; // offspring from all in generation

	for (var i = 0; i < activeRatings.length; i++) {
		for (var j = 0; j < activeRatings[i]; j++) {
			indByPro.push(i);
		}
	}

	for (var j = 0; j < offspringNo; j++) { // generate children from rated parents
		newDNA.push([]);
		newADNA.push([]);

		for (var i = 0; i < activeParentDNA[0].length; i++) { // generate DNA of 1 specimen

			var randParent = indByPro[rand(0,indByPro.length-1)]; //random with probability based on fitness

			if (isInt(activeParentDNA[randParent][i]) === true) {
				newDNA[j].push(parseInt(activeParentDNA[randParent][i]));
			} else {
				newDNA[j].push(parseFloat(activeParentDNA[randParent][i]));
			}

			newADNA[j].push(parseInt(activePatentADNA[randParent][i]));

		}

	}

	for (var j = offspringNo; j < generationSpecimens; j++) { // generate children from all parents


		if (j%2===0) { // half of times push new dna, other half get from unfit parents
			newDNA.push(generateDNA());
			newADNA.push(generateADNA());
		} else {
			newDNA.push([]);
			newADNA.push([]);


			for (var i = 0; i < activeParentDNA[0].length; i++) { // generate DNA of 1 specimen

				var randParent = rand(0,activeParentDNA.length-1); //random parent

				if (isInt(activeParentDNA[randParent][i]) === true) {
					newDNA[j].push(parseInt(activeParentDNA[randParent][i]));
				} else {
					newDNA[j].push(parseFloat(activeParentDNA[randParent][i]));
				}

				newADNA[j].push(parseInt(activePatentADNA[randParent][i]));

			}	

		}



	}


	for (var h = 0; h < newDNA.length; h++) {
		if (rand(0,1) >= 1) { // 1/2 chance of mutation
			for (var i = 0; i < newDNA[h].length; i++) {
				mutateSingleDNA(newDNA[h], i);
			}
		}
	}

	pushNewGen(newDNA, newADNA);
	console.log("newDNA ",newDNA);
}

const mutateSingleDNA = (arr, ind) => {
	const mutationRate = 6; // Mutation probability. Lower numbers = more likely (0 being certain)
	const mutationStrength = 15; // Lower numbers result in more drastic changes
	let mutationEffective = Math.ceil(arr[ind]/mutationStrength);
	const mutationEffectiveFl = arr[ind]/mutationStrength;

	if (mutationEffective === 0) {
		mutationEffective = 1;
	}

	const posNeg = [-1, 1];

	if (isInt(arr[ind]) === true) {
		if (rand(0,mutationRate)===0) {
			arr[ind] += (mutationEffective * posNeg[rand(0,1)]);
		}
	} else {
		if (rand(0,mutationRate)===0) {
			arr[ind] += (mutationEffectiveFl * posNeg[rand(0,1)]);
		}
	}
}

if (dbSp === generationSpecimens) {
	alert("reproducing a new generation");
	reproduce();
}