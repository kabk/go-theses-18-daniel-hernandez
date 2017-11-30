"use strict";

$(document).ready(function () {
	setSectWidth();
	// customize();
	dispImg();
});

function setSectWidth() {
	function wordsPerLine() {
		var dWidth = $(document).width();

		var lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

		var splLorem = lorem.split(" ");

		$("#measureTxt").show();

		for (var i = 0; i < splLorem.length; i++) {
			$("#measureTxt").append("<span>" + splLorem[i] + "</span> ");

			var lastSpan = $("#measureTxt span:last-child").position();

			if (lastSpan.left >= dWidth) {
				$("#measureTxt").empty().hide();
				return i - 1;
			}
		}
	}

	function shrinkSection() {
		var targetWords = 10;
		var wpl = wordsPerLine();
		var sectW = 100 * targetWords / wpl;
		if (sectW < 100) {
			$("#textWrap").css("width", sectW + "vw");
		} else {
			$("#textWrap").css("width", "100vw");
		}
	}

	shrinkSection();
}

function customize() {
	var r = 255;
	var g = 255;
	var b = 255;

	var sliderR = document.getElementById("r");
	var sliderG = document.getElementById("g");
	var sliderB = document.getElementById("b");

	sliderR.oninput = function () {
		r = this.value;
		$("body").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
	};

	sliderG.oninput = function () {
		g = this.value;
		$("body").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
	};

	sliderB.oninput = function () {
		b = this.value;
		$("body").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
	};
}

function dispImg() {
	var yMiddle = $(window).height() / 2;
	var imageY = [];

	$("#images img").each(function (i) {
		$(this).addClass("image" + i);
		// imageY.push($(this).scrollTop();
		// console.log(imageY[i]);
	});

	$(document).scroll(function () {
		var scrollTop = $(document).scrollTop();
		$(".link").each(function (i) {
			var y = $(this).offset().top - scrollTop;
			if (y <= yMiddle && y >= yMiddle - 10) {
				$('#images').animate({
					scrollTop: $(".image" + i).offset().top - scrollTop + 18
				}, 800);
				console.log($(".image" + i).offset().top - scrollTop);
			}
		});
	});
}