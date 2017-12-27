const firstGen = () => {

	for (var i = 0; i < generationSpecimens; i++) {
		DNA = generateDNA();
		aDNA = generateADNA();
		pushDNAtoDB();
	}

}

// firstGen();