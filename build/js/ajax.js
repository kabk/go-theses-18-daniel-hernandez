"use strict";

function myFunction() {
	// // Returns successful data submission message when the entered information is stored in database.
	// let dataString = 'a0=' + name + '&email1=' + email + '&password1=' + password + '&contact1=' + contact;

	// let dataString = `
	// 	a0=${}
	// 	&a1=${}
	// 	&a1=${}
	// 	&a1=${}
	// `;

	var dataString = "a0=" + DNA[0];

	for (var i = 0; i < DNA.length - 1; i++) {
		dataString += "&a" + (i + 1) + "=" + DNA[1 + i];
		// console.log(`a${i+1} DNA[${i+1}]`);
	}

	for (var i = 0; i < DNA.length; i++) {
		dataString += "&b" + i + "=" + aDNA[i];
		// console.log("ADNA"+(i));
	}

	console.log(dataString);

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