"use strict";

var fonts = ["sans-serif", "serif", "monospace"];

var rand = function rand(min, max) {
	var rand = Math.floor(Math.random() * (max + 1)) + min;
	return rand;
};

var activateProperty = function activateProperty(target, property, setting) {
	if (rand(0, 1) === 1) {
		$(target).css(property, setting);
	}
};

var design = function design() {
	var colWidth = rand(35, 70);
	$("#textWrap").css("width", colWidth + "%");
	$("#images").css("width", 100 - colWidth + "%");
	if (rand(0, 1) === 1) {
		$("#textWrap").css("float", "left");
		$("#images").css("float", "right");
		console.log("1,2");
	} else {
		$("#textWrap").css("float", "right");
		$("#images").css("float", "left");
	}

	activateProperty("body", "background-color", "rgba(" + rand(0, 255) + "," + rand(0, 255) + "," + rand(0, 255) + "," + rand(0, 255) + ")");

	activateProperty("body", "color", "rgba(" + rand(0, 255) + "," + rand(0, 255) + "," + rand(0, 255) + "," + rand(0, 255) + ")");

	// activateProperty("p", "filter", `blur(${rand(0,2)}px)`);
	activateProperty("body", "font-family", fonts[rand(0, fonts.length)]);
	activateProperty("h3", "font-family", fonts[rand(0, fonts.length)]);

	activateProperty("p", "font-size", rand(8, 16) + "pt");
	activateProperty("h3", "font-size", rand(8, 24) + "pt");
	activateProperty("section, header", "padding", rand(0, 24) + "px");
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