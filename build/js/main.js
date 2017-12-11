"use strict";

var fonts = ["sans-serif", "serif", "monospace", "Akkurat", "Akkurat-Mono", "Eczar-Regular", "FortescuePro-Regular", "HelveticaNeue-BoldExt"];
var weights = ["normal", "bold", "bolder", "lighter"];
var tTransforms = ["none", "capitalize", "uppercase", "lowercase"];
var tDecorations = ["none", "underline", "none", "none", "none"];
var tAligns = ["left", "right", "center", "justify"];
var paragraphAligns = ["left", "left", "left", "justify"];

var c1 = []; //bg
var c2 = []; //fg

var tempCount = 0;

// let DNA = [
// 	0,
// 	0,
// 	0,
// 	0,
// 	0,
// ];

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

	// if (rand(0,3)===0) {
	// 	$("header").addClass("bottom").css("top",`${headerH}px`);
	// 	// activateProperty("h2", "font-size", randFl(1.2,9)+"rem", 1);

	// 	// $("#mainWrap").css("padding-top", "100vh !important");
	// } else {
	// 	$("header").removeClass("bottom");

	// }

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
	// activateProperty("header", "box-shadow", `${rand(0,0)}px ${rand(0,6)}px ${rand(2,10)}px`, 1);
	activateProperty("section, header", "box-shadow", "0px " + rand(0, 6) + "px " + rand(0, 10) + "px rgba(" + c2[0] + "," + c2[1] + "," + c2[2] + "," + Math.random() + ")", 3); //fix
	activateProperty("section, header", "border-radius", rand(-10, 15) + "px", 3);
	// activateProperty("p", "text-align", paragraphAligns[rand(0,paragraphAligns.length)], 1);
	activateProperty("h2, h3", "text-align", tAligns[rand(0, tAligns.length)], 1);
	// console.log(c1, 1);

	activateProperty("section", "column-count", "" + rand(-3, 2), 10);
	activateProperty("section", "padding-bottom", rand(0, 300) + "px", 1);
	// activateProperty("section", "transform", `skew(${rand(0,20)}deg, ${rand(0,20)}deg)`, 1);

	// activateProperty("section", "transform", `skewY(${rand(0,10)}deg)`, 1);


	// activateProperty(".linkedImg", "max-height", `${rand(50,60)}vh`, 1);

	// activateProperty("header", "transform", `rotate(${temp[rand(0,temp.length)]}deg)`)
	// activateProperty("canvas", "filter", `blur(${rand(0,100)}px)`, 1);
	activateProperty("body", "background-color", "rgb(" + rand(0, 255) + "," + rand(0, 255) + "," + rand(0, 255) + ")", 1);

	activateProperty("#bg", "filter", "blur(" + rand(0, 130) + "px)", 10);

	activateProperty("#bg", "filter", "grayscale(" + rand(-50, 100) + "%) ", 3);
	activateProperty("#textWrap, header", "filter", "grayscale(" + rand(-50, 100) + "%) ", 3);
	// $(".linkedImg").css("filter", "grayscale(0%) !important");


	var bw = ["black", "white"];
	activateProperty("#bg", "background-color", bw[rand(0, 1)], 4);

	//BORDER
	if (rand(0, 9) === 1) {
		var color = "rgb(" + c2[0] + "," + c2[1] + "," + c2[2] + ")";
		var randNum = rand(0, 4);
		var randThickness = rand(0, 4);
		// if (randNum===0) {
		// 	color = "black";
		// } else if (randNum===1) {
		// 	color = "white";
		// } else {
		// 	color = `rgb(${c2[0]},${c2[1]},${c2[2]})`;
		// }
		console.log(color);
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

	//// Img position
	// if (rand(0,4)==1) {
	// 	$(".linkedImg").css("position","relative");
	// } else {
	// 	$(".linkedImg").css("position","absolute");
	// }


	// let headerH = $("header").outerHeight();
	// console.log(headerH);
	// $("#mainWrap").css("margin-top", `${headerH}px`);

	// draw();
};

// let time = 0;
setInterval(function () {
	// design();
	// 	time++;

	// 	if (time < 10) {
	// 		design();
	// 	}
}, 2200);

setTimeout(function () {
	design();
	// $("*").css("transition", ".3s");
}, 500);
setTimeout(function () {
	$("*").css("transition", ".3s");
}, 1000);

$("#redesign").click(function () {
	design();
});

///////////////////////canvas test
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var ww = window.innerWidth;
var wh = window.innerHeight;

ctx.canvas.width = ww;
ctx.canvas.height = wh;

function Vertex() {
	this.x = rand(0, ww);
	this.y = rand(0, wh);

	this.run = function () {
		this.display();
		this.update();
	};

	this.display = function () {
		// ctx.fillStyle = `rgb(${rand(0,255)},${rand(0,255)},${rand(0,255)})`;
		ctx.fillStyle = "white";

		ctx.lineTo(this.x, this.y);
		// ctx.fillRect(this.x,this.y,7,7);
	};

	this.update = function () {
		this.x += rand(-30, 30);
		this.y += rand(-30, 30);
	};
}

var vertexes = [];

for (var i = 0; i < rand(0, 18); i++) {
	vertexes.push(new Vertex());
}

var draw = function draw() {
	ctx.fillStyle = "rgb(" + rand(0, 255) + "," + rand(0, 255) + "," + rand(0, 255) + ")";
	// ctx.fillStyle = "blue";
	ctx.fillRect(0, 0, ww, wh);

	ctx.beginPath();
	ctx.moveTo(ww / 2, wh / 2);

	for (var i = 0; i < vertexes.length; i++) {
		vertexes[i].run();
	}
	ctx.fill();
};

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