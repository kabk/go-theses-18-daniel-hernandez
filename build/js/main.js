"use strict";

var fonts = ["sans-serif", "serif", "monospace", "Akkurat", "Akkurat-Mono", "Eczar-Regular", "FortescuePro-Regular", "HelveticaNeue-BoldExt"];
var weights = ["normal", "bold", "bolder", "lighter"];
var tTransforms = ["none", "capitalize", "uppercase", "lowercase"];
var tDecorations = ["none", "underline", "none", "none", "none"];
var tAligns = ["left", "right", "center", "justify"];
var paragraphAligns = ["left", "left", "left", "justify"];
var bw = ["black", "white"];

var c1 = []; //bg
var c2 = []; //fg

var tempCount = 0;

var DNA = [0, 0, 0, 0, 0];

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randFl(min, max) {
	return (Math.random() * (max - min) + min).toFixed(4);
}

var colorDiff = function colorDiff(v1, v2) {
	var i = void 0,
	    d = 0;
	for (i = 0; i < v1.length; i++) {
		d += (v1[i] - v2[i]) * (v1[i] - v2[i]);
	}
	return Math.floor(Math.sqrt(d));
};

var applyColor = function applyColor() {
	$("#bg").css("background-color", "rgb(" + c1[0] + "," + c1[1] + "," + c1[2] + ")");
	$("body, a").css("color", "rgb(" + c2[0] + "," + c2[1] + "," + c2[2] + ")");
};

var randomColor = function randomColor() {
	c1 = [rand(0, 255), rand(0, 255), rand(0, 255)];
	c2 = [rand(0, 255), rand(0, 255), rand(0, 255)];

	if (colorDiff(c1, c2) >= 140) {
		applyColor();
	} else {
		// console.log(colorDiff(c1,c2),"another color",);
		randomColor();
	}
};

var activateProperty = function activateProperty(target, property, setting, probability) {
	if (rand(0, probability) === 1) {
		$(target).css(property, setting);
	}
};

var design = function design() {

	var colWidth = rand(40, 70);

	tempCount++;

	$("#textWrap").css("width", colWidth + "%");
	$(".linkedImg, .linkedRef").css("width", 100 - colWidth + "%");

	if (rand(0, 1) === 1) {
		$("#textWrap").css("float", "left");
		$(".linkedImg, .linkedRef").css("left", "auto").css("right", "0");
	} else {
		$("#textWrap").css("float", "right");
		$(".linkedImg, .linkedRef").css("right", "auto").css("left", "0");
	}

	//big landing
	var headerH = $("header").outerHeight();
	if (rand(0, 3) === 0) {
		$("#landing").addClass("bigLanding").css("top", headerH + "px");
		$("#textWrap").addClass("bigLanding");
		// activateProperty("h2", "font-size", randFl(1.2,9)+"rem", 1);

		// $("#mainWrap").css("padding-top", "100vh !important");
	} else {
		$("#landing").removeClass("bigLanding");
		$("#textWrap").removeClass("bigLanding");
	}

	randomColor();

	activateProperty("body", "font-family", fonts[rand(0, fonts.length)], 1);
	activateProperty("h2, h3", "font-family", fonts[rand(0, fonts.length)], 1);
	activateProperty("p", "font-size", randFl(0.9, 1.8) + "rem", 1);
	activateProperty("h2", "font-size", randFl(1.8, 5.8) + "rem", 1);
	activateProperty("h3", "font-size", randFl(1.2, 4.8) + "rem", 1);

	activateProperty("h2, h3", "font-weight", weights[rand(0, weights.length)], 1);
	activateProperty("h2, h3, header", "text-transform", tTransforms[rand(0, tTransforms.length)], 1);
	activateProperty("h2, h3", "text-decoration", tDecorations[rand(0, tDecorations.length)], 1);
	activateProperty("section, header, .linkedImg, .linkedRef", "padding", rand(0, 24) + "px", 1);

	activateProperty("section, header", "box-shadow", "0px " + rand(0, 6) + "px " + rand(0, 10) + "px rgba(" + c2[0] + "," + c2[1] + "," + c2[2] + "," + Math.random() + ")", 3); //fix
	activateProperty("section, header", "border-radius", rand(-10, 15) + "px", 3);
	activateProperty("h2, h3", "text-align", tAligns[rand(0, tAligns.length)], 1);

	activateProperty("section", "column-count", "" + rand(-3, 2), 10);
	activateProperty("section", "padding-bottom", rand(0, 300) + "px", 1);
	activateProperty("body", "background-color", "rgb(" + rand(0, 255) + "," + rand(0, 255) + "," + rand(0, 255) + ")", 1);

	activateProperty("#bg", "filter", "blur(" + rand(0, 130) + "px)", 10);

	activateProperty("#bg", "filter", "grayscale(" + rand(-50, 100) + "%) ", 3);
	activateProperty("#textWrap, header", "filter", "grayscale(" + rand(-50, 100) + "%) ", 3);

	activateProperty("#bg", "background-color", bw[rand(0, 1)], 4);

	//BORDER
	if (rand(0, 9) === 1) {
		var color = "rgb(" + c2[0] + "," + c2[1] + "," + c2[2] + ")";
		var randNum = rand(0, 4);
		var randThickness = rand(0, 4);

		$("header").css("border-bottom", randThickness + "px solid " + color);
		$("#textWrap").css("border-right", randThickness + "px solid " + color);
		$("#textWrap").css("border-left", randThickness + "px solid " + color);
		$("section").css("border-bottom", randThickness + "px solid " + color);
	}

	//section bgs
	var alternateColor = function alternateColor() {
		if (rand(0, 1) === 1) {
			$("header").css("background-color", "rgb(" + c1[0] + "," + c1[1] + "," + c1[2] + ")");
			$("header, a").css("color", "rgb(" + c2[0] + "," + c2[1] + "," + c2[2] + ")");
		} else {
			$("header").css("background-color", "rgb(" + c2[0] + "," + c2[1] + "," + c2[2] + ")");
			$("header, a").css("color", "rgb(" + c1[0] + "," + c1[1] + "," + c1[2] + ")");
		}

		$("section").each(function (i) {
			if (i % 2 === 0) {
				$(this).css("background-color", "rgb(" + c1[0] + "," + c1[1] + "," + c1[2] + ")");
				$(this).css("color", "rgb(" + c2[0] + "," + c2[1] + "," + c2[2] + ")");
			} else {
				$(this).css("background-color", "rgb(" + c2[0] + "," + c2[1] + "," + c2[2] + ")");
				$(this).css("color", "rgb(" + c1[0] + "," + c1[1] + "," + c1[2] + ")");
			}
		});
	};

	var colorProb = rand(0, 6);
	if (colorProb === 0) {
		alternateColor();
	} else if (colorProb === 1) {
		$("section").css("background-color", "transparent");
		$("section").css("color, a", "rgb(" + c2[0] + "," + c2[1] + "," + c2[2] + ")");
	} else {
		$("section, header").css("background-color", "transparent");
		$("section, header, a").css("color", "rgb(" + c2[0] + "," + c2[1] + "," + c2[2] + ")");
	}
};

setTimeout(function () {
	design();
}, 500);

setTimeout(function () {
	$("*").css("transition", ".3s");
}, 1000);

$("#redesign").click(function () {
	design();
});

$(document).ready(function () {
	$(document).bind('keydown', function (e) {
		if (e.keyCode == 82) {
			design();
		}
	});
});

//this might be very inefficient
var hoverRefOrImg = function hoverRefOrImg(hovered, highlight) {
	$(hovered).each(function (i) {
		$(this).hover(function () {
			$(highlight).each(function (ind) {
				if (i === ind) {
					$(this).addClass("shiny");
				}
			});
		}, function () {
			$("*").removeClass("shiny");
		});
	});
};

hoverRefOrImg(".refLink", ".linkedRef");
hoverRefOrImg(".linkedRef", ".refLink");
hoverRefOrImg(".imgLink", ".linkedImg");
hoverRefOrImg(".linkedImg img", ".imgLink");