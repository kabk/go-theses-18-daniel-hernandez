function pushDNAtoDB() {
	let dataString = `a0=${DNA[0]}`;
	
	for (var i = 0; i < DNA.length-1; i++) {
		dataString += `&a${i+1}=${DNA[1+i]}`;
		// console.log(`a${i+1} DNA[${i+1}]`);
	}

	for (var i = 0; i < DNA.length; i++) {
		dataString += `&b${i}=${aDNA[i]}`;
		// console.log("ADNA"+(i));
	}

	// console.log(dataString);

	$.ajax({
		type: "POST",
		url: "ajaxjs.php",
		data: dataString,
		cache: false,
		success: function(html) {
			// alert("cool");
		}
	});
	
	return false;
}

function pushGenSpToDB(){ //init only
	let dataString = `gen=${1}&sp=${1}`;
	
	$.ajax({
		type: "POST",
		url: "initPushGenSp.php",
		data: dataString,
		cache: false,
		success: function(html) {
			// alert("cool");
		}
	});
	
	return false;
}



function pushRatingToDB(gene, spec, rate){

	let idPadding = 326 - 1; //where DB id starts ---> db = activeSP

	let dataString = `gen=${gene}&sp=${spec+idPadding}&rating=${rate}`;

	// console.log(spec+idPadding);

	$.ajax({
		type: "POST",
		url: "pushRating.php",
		data: dataString,
		cache: false,
		success: function(html) {
			// alert("cool");
		}
	});
	console.log(dataString);
	return false;
}