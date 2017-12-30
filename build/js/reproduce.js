"use strict";

var reproduce = function reproduce() {
	var activeGen = dbGen - 1;
	var newDNA = [];
	var newADNA = [];
	var indByPro = []; //indexes by probability. unrated designs and 0 scores are ignored

	// console.log(allDNA);

	var calculateOffspring = function calculateOffspring() {
		// calculate number of elite offspring
		var fitParents = 0;
		var eliteOffspring = void 0;
		var maxEliteOffspring = 18;
		var promiscuity = 2; // how much fit parents will reproduce

		// let ratingLen = dbRatings.length;


		if (dbRatings.join() >= 0) {
			dbRatings = [];
			for (var i = 0; i < generationSpecimens; i++) {
				dbRatings.push(1);
			}
		}

		console.log(dbRatings);

		for (var i = 0; i < dbRatings.length; i++) {
			if (dbRatings[i] >= 1) {
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
	};

	var offspringNo = calculateOffspring(); // elite offspring
	var offspringRand = generationSpecimens - offspringNo; // offspring from all

	for (var i = 0; i < dbRatings.length; i++) {
		for (var j = 0; j < dbRatings[i]; j++) {
			indByPro.push(i);
		}
	}

	for (var j = 0; j < offspringNo; j++) {
		// generate children from rated parents
		newDNA.push([]);
		newADNA.push([]);

		for (var i = 0; i < allDNA[0].length; i++) {
			// generate DNA of 1 specimen

			var randParent = indByPro[rand(0, indByPro.length - 1)]; //random with probability based on fitness

			if (isInt(allDNA[randParent][i]) === true) {
				newDNA[j].push(parseInt(allDNA[randParent][i]));
			} else {
				newDNA[j].push(parseFloat(allDNA[randParent][i]));
			}

			newADNA[j].push(parseInt(allADNA[randParent][i]));
		}
	}

	for (var j = offspringNo; j < generationSpecimens; j++) {
		// generate children from all parents
		newDNA.push([]);
		newADNA.push([]);

		for (var i = 0; i < allDNA[0].length; i++) {
			// generate DNA of 1 specimen

			var randParent = rand(0, allDNA.length - 1);; //random

			if (isInt(allDNA[randParent][i]) === true) {
				newDNA[j].push(parseInt(allDNA[randParent][i]));
			} else {
				newDNA[j].push(parseFloat(allDNA[randParent][i]));
			}

			newADNA[j].push(parseInt(allADNA[randParent][i]));
		}
	}

	for (var h = 0; h < newDNA.length; h++) {
		// i could add if statement so only sometimes it mutates --- ?
		for (var i = 0; i < newDNA[h].length; i++) {
			mutateSingleDNA(newDNA[h], i);
		}
	}

	pushNewGen(newDNA, newADNA);
	// console.log(newDNA);
};

var mutateSingleDNA = function mutateSingleDNA(arr, ind) {
	var mutationRate = 0; // Mutation probability. Lower numbers = more likely (0 being certain)
	var mutationStrength = 20; // Lower numbers result in more drastic changes
	var mutationEffective = Math.ceil(arr[ind] / mutationStrength);
	var mutationEffectiveFl = arr[ind] / mutationStrength;

	if (mutationEffective === 0) {
		mutationEffective = 1;
	}

	var posNeg = [-1, 1];

	if (isInt(arr[ind]) === true) {
		if (rand(0, mutationRate) === 0) {
			arr[ind] += mutationEffective * posNeg[rand(0, 1)];
		}
	} else {
		if (rand(0, mutationRate) === 0) {
			arr[ind] += mutationEffectiveFl * posNeg[rand(0, 1)];
		}
	}
};

if (dbSp === 20) {
	alert("generate new gen");
	reproduce();
}