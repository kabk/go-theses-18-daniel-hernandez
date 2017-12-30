function pushDNAtoDB(DNAarr, aDNAarr) {
	let dataString = `a0=${DNAarr[0]}`;
	
	for (var i = 0; i < DNAarr.length-1; i++) {
		dataString += `&a${i+1}=${DNAarr[1+i]}`;
		// console.log(`a${i+1} DNA[${i+1}]`);
	}

	for (var i = 0; i < DNAarr.length; i++) {
		dataString += `&b${i}=${aDNAarr[i]}`;
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

	let idPadding = 621 - 1; //where DB id starts ---> db = activeSP

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