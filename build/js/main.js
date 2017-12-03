"use strict";

var fonts = ["sans-serif", "serif", "monospace"];
var weights = ["normal", "bold", "bolder", "lighter"];
var tTransforms = ["none", "capitalize", "uppercase", "lowercase"];
var tDecorations = ["none", "underline", "none", "none", "none"];

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

var activateProperty = function activateProperty(target, property, setting) {
	if (rand(0, 1) === 1) {
		$(target).css(property, setting);
	}
};

var design = function design() {
	var colWidth = rand(30, 70);
	console.log(colWidth + " colWidth");
	$("#textWrap").css("width", colWidth + "%");
	$("#images").css("width", 100 - colWidth + "%");
	if (rand(0, 1) === 1) {
		$("#textWrap").css("float", "left");
		$("#images").css("float", "right");
		console.log("1,2");
	} else {
		$("#textWrap").css("float", "right");
		$("#images").css("float", "left");
		console.log("2,1");
	}

	// activateProperty("body", "background-color", `rgba(${rand(0,255)},${rand(0,255)},${rand(0,255)},${rand(0,255)})`);
	activateProperty("body, a", "color", "rgba(" + rand(0, 255) + "," + rand(0, 255) + "," + rand(0, 255) + "," + rand(0, 255) + ")");
	activateProperty("body", "font-family", fonts[rand(0, fonts.length)]);
	activateProperty("h3", "font-family", fonts[rand(0, fonts.length)]);
	activateProperty("p", "font-size", rand(8, 18) + "pt");
	activateProperty("h3", "font-size", rand(8, 40) + "pt");
	activateProperty("h3", "font-weight", weights[rand(0, weights.length)]);
	activateProperty("h3", "text-transform", tTransforms[rand(0, tTransforms.length)]);
	activateProperty("h3", "text-decoration", tDecorations[rand(0, tDecorations.length)]);
	activateProperty("section, header, #images", "padding", rand(0, 24) + "px");
};

var time = 0;
setInterval(function () {
	time++;

	if (time < 3) {
		design();
	}
}, 400);

$("#redesign").click(function () {
	design();
});