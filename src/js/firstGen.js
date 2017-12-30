const firstGen = () => {
	for (var i = 0; i < generationSpecimens; i++) {
		DNA = generateDNA();
		aDNA = generateADNA();
		pushDNAtoDB(DNA, aDNA);
	}
}


const pushNewGen = (DNAarr, aDNAarr) => {
	for (var i = 0; i < generationSpecimens; i++) {
		let DNA = DNAarr[i];
		let aDNA = aDNAarr[i];
		pushDNAtoDB(DNA, aDNA);
		// console.log(DNA, aDNA);
	}
}