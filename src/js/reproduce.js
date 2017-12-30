const reproduce = () => {
	let activeGen = dbGen - 1;
	let newDNA = [];
	let newADNA = [];
	let indByPro = []; //indexes by probability. unrated designs and 0 scores are ignored

	// console.log(allDNA);

	const calculateOffspring = () => { // calculate number of elite offspring
		var fitParents = 0;
		var eliteOffspring;
		var maxEliteOffspring = 18;
		var promiscuity = 2; // how much fit parents will reproduce

		for (var i = 0; i < dbRatings.length; i++) {
			if (dbRatings[i] >=1) {
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
	let offspringRand = generationSpecimens - offspringNo; // offspring from all

	for (var i = 0; i < dbRatings.length; i++) {
		for (var j = 0; j < dbRatings[i]; j++) {
			indByPro.push(i);
		}
	}

	for (var j = 0; j < offspringNo; j++) { // generate children from rated parents
		newDNA.push([]);
		newADNA.push([]);

		for (var i = 0; i < allDNA[0].length; i++) { // generate DNA of 1 specimen

			var randParent = indByPro[rand(0,indByPro.length-1)]; //random with probability based on fitness

			if (isInt(allDNA[randParent][i]) === true) {
				newDNA[j].push(parseInt(allDNA[randParent][i]));
			} else {
				newDNA[j].push(parseFloat(allDNA[randParent][i]));
			}

			newADNA[j].push(parseInt(allADNA[randParent][i]));

		}

	}

	for (var j = offspringNo; j < generationSpecimens; j++) { // generate children from all parents
		newDNA.push([]);
		newADNA.push([]);


		for (var i = 0; i < allDNA[0].length; i++) { // generate DNA of 1 specimen

			var randParent = rand(0,allDNA.length-1);; //random

			if (isInt(allDNA[randParent][i]) === true) {
				newDNA[j].push(parseInt(allDNA[randParent][i]));
			} else {
				newDNA[j].push(parseFloat(allDNA[randParent][i]));
			}

			newADNA[j].push(parseInt(allADNA[randParent][i]));

		}	

	}

	console.log(newDNA[0]);

	for (var i = 0; i < newDNA[0].length; i++) {
		mutateSingleDNA(newDNA[0], i);
	}
	


	console.log(newDNA[0]);

}

const mutateSingleDNA = (arr, ind) => {
	const mutationRate = 8; // Mutation probability. Lower numbers = more likely (0 being certain)
	const mutationStrength = 20; // Lower numbers result in more drastic changes
	let mutationEffective = Math.ceil(arr[ind]/mutationStrength);
	const mutationEffectiveFl = arr[ind]/mutationStrength;

	if (mutationEffective === 0) {
		mutationEffective = 1;
	}


	const posNeg = [-1, 1];

	// console.log(arr[ind]+" original val");
	// console.log(ind, mutationEffective + " mutationEffective");
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


if (dbGeneralCount == 20) {
	alert("generate new gen");
}

reproduce();