"use strict";

var reproduce = function reproduce() {
	var activeGen = dbGen - 1;
	var newDNA = [];
	var newADNA = [];
	var indByPro = []; //indexes by probability. unrated designs and 0 scores are ignored
	var offspringNo = 16;
	var offspringRand = generationSpecimens - offspringNo;

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
			newDNA[j].push(allDNA[randParent][i]);
			newADNA[j].push(allADNA[randParent][i]);
		}
	}

	for (var j = offspringNo; j < generationSpecimens; j++) {
		// generate children from all parents
		newDNA.push([]);
		newADNA.push([]);

		for (var i = 0; i < allDNA[0].length; i++) {
			// generate DNA of 1 specimen

			var randParent = rand(0, allDNA.length - 1);; //random
			newDNA[j].push(allDNA[randParent][i]);
			newADNA[j].push(allADNA[randParent][i]);
		}
	}

	console.log(newADNA);
};

// const mutate = () => {
// 	const mutationRate = 1;
// }


if (dbGeneralCount == 20) {
	alert("generate new gen");
}

// reproduce();