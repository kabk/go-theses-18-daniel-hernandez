"use strict";

function pushDNAtoDB(DNAarr, aDNAarr) {
	var dataString = "a0=" + DNAarr[0];

	for (var i = 0; i < DNAarr.length - 1; i++) {
		dataString += "&a" + (i + 1) + "=" + DNAarr[1 + i];
		// console.log(`a${i+1} DNA[${i+1}]`);
	}

	for (var i = 0; i < DNAarr.length; i++) {
		dataString += "&b" + i + "=" + aDNAarr[i];
		// console.log("ADNA"+(i));
	}

	// console.log(dataString);

	$.ajax({
		type: "POST",
		url: "php/pushDNA.php",
		data: dataString,
		cache: false,
		success: function success(html) {
			// alert("cool");
		}
	});

	return false;
}

function pushGenSpToDB() {
	//init only
	var dataString = "";

	$.ajax({
		type: "POST",
		url: "php/pushGenSp.php",
		data: dataString,
		cache: false,
		success: function success(html) {
			// alert("cool");
		}
	});

	return false;
}

function pushRatingToDB(gCount, gene, spec, rate) {

	var dataString = "generalCount=" + gCount + "&gen=" + gene + "&sp=" + (spec + idPadding) + "&rating=" + rate;

	// console.log(spec+idPadding);

	$.ajax({
		type: "POST",
		url: "php/pushRating.php",
		data: dataString,
		cache: false,
		success: function success(html) {
			// alert("cool");
		}
	});
	console.log(dataString);
	return false;
}