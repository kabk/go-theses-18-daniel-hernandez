"use strict";

function pushDNAtoDB() {
	var dataString = "a0=" + DNA[0];

	for (var i = 0; i < DNA.length - 1; i++) {
		dataString += "&a" + (i + 1) + "=" + DNA[1 + i];
		// console.log(`a${i+1} DNA[${i+1}]`);
	}

	for (var i = 0; i < DNA.length; i++) {
		dataString += "&b" + i + "=" + aDNA[i];
		// console.log("ADNA"+(i));
	}

	// console.log(dataString);

	$.ajax({
		type: "POST",
		url: "ajaxjs.php",
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
	var dataString = "gen=" + 1 + "&sp=" + 1;

	$.ajax({
		type: "POST",
		url: "initPushGenSp.php",
		data: dataString,
		cache: false,
		success: function success(html) {
			// alert("cool");
		}
	});

	return false;
}

function pushGenSpToDB(gene, spec, rate) {
	var dataString = "gen=" + gene + "&sp=" + spec + "&rating=" + rate;

	$.ajax({
		type: "POST",
		url: "pushRating.php",
		data: dataString,
		cache: false,
		success: function success(html) {
			// alert("cool");
		}
	});

	return false;
}