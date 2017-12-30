"use strict";

var firstGen = function firstGen() {
	for (var i = 0; i < generationSpecimens; i++) {
		DNA = generateDNA();
		aDNA = generateADNA();
		pushDNAtoDB(DNA, aDNA);
	}
};

// firstGen();

var pushNewGen = function pushNewGen(DNAarr, aDNAarr) {
	for (var i = 0; i < generationSpecimens; i++) {
		var _DNA = DNAarr[i];
		var _aDNA = aDNAarr[i];
		pushDNAtoDB(_DNA, _aDNA);
		console.log(_DNA, _aDNA);
	}
};