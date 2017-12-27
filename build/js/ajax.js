'use strict';

function myFunction() {
	var name = DNA[0];
	var email = DNA[1];
	var password = DNA[2];
	var contact = DNA[3];
	// Returns successful data submission message when the entered information is stored in database.
	var dataString = 'name1=' + name + '&email1=' + email + '&password1=' + password + '&contact1=' + contact;

	$.ajax({
		type: "POST",
		url: "ajaxjs.php",
		data: dataString,
		cache: false,
		success: function success(html) {
			alert("cool");
		}
	});

	return false;
}