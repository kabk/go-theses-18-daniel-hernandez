function myFunction() {
	let name = DNA[0];
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var contact = document.getElementById("contact").value;
	// Returns successful data submission message when the entered information is stored in database.
	var dataString = 'name1=' + name + '&email1=' + email + '&password1=' + password + '&contact1=' + contact;
	if (name == '' || email == '' || password == '' || contact == '') {
		alert("Please Fill All Fields");
	} else {
	$.ajax({
		type: "POST",
		url: "ajaxjs.php",
		data: dataString,
		cache: false,
		success: function(html) {
		alert(html);
		}
		});
	}
	return false;
}