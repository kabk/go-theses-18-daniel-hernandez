setSectWidth();
customize();

function setSectWidth(){
	function wordsPerLine(){
		let dWidth = $(document).width();

		const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

		var splLorem = lorem.split(" ");

		$("#measureTxt").show();

		for (var i = 0; i < splLorem.length; i++) {
			$("#measureTxt").append(`<span>${splLorem[i]}</span> `);

			var lastSpan = $("#measureTxt span:last-child").position();


			if (lastSpan.left >= dWidth) {
				$("#measureTxt").empty().hide();
				return i-1;
			}
		}
	}

	function shrinkSection(){
		let targetWords = 10;
		var wpl = wordsPerLine();
		let sectW = 100 * targetWords / wpl;
		console.log(sectW);
		if (sectW < 100) {
			$("section").css("width", `${sectW}vw`);
		} else {
			$("section").css("width", `100vw`);
		}
	}

	shrinkSection();
}




function customize(){
	let r = 255;
	let g = 255;
	let b = 255;

	var sliderR = document.getElementById("r");
	var sliderG = document.getElementById("g");
	var sliderB = document.getElementById("b");

	sliderR.oninput = function() {
	    r = this.value;
	    $("body").css("background-color",`rgb(${r},${g},${b})`)
	}

	sliderG.oninput = function() {
	    g = this.value;
	    $("body").css("background-color",`rgb(${r},${g},${b})`)
	}

	sliderB.oninput = function() {
	    b = this.value;
	    $("body").css("background-color",`rgb(${r},${g},${b})`)
	}
}