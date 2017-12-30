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

		console.log(dbRatings);
		for (var i = 0; i < dbRatings.length; i++) {
			if (dbRatings[i] >=1) {
				fitParents++;
			}
		}

		eliteOffspring = fitParents * 2;

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
			newDNA[j].push(allDNA[randParent][i]);
			newADNA[j].push(allADNA[randParent][i]);

		}

	}

	for (var j = offspringNo; j < generationSpecimens; j++) { // generate children from all parents
		newDNA.push([]);
		newADNA.push([]);


		for (var i = 0; i < allDNA[0].length; i++) { // generate DNA of 1 specimen

			var randParent = rand(0,allDNA.length-1);; //random
			newDNA[j].push(allDNA[randParent][i]);
			newADNA[j].push(allADNA[randParent][i]);

		}	

	}

	console.log(newDNA);

	// mutate(newDNA[0]);

}

const mutate = (arr) => {
	// arr / 
}


if (dbGeneralCount == 20) {
	alert("generate new gen");
}

reproduce();