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
var DNA = void 0;
var aDNA = void 0;

var generationSpecimens = 20;

var generateDNA = function generateDNA() {
	var arr = [rand(0, fonts.length), // font 0
	rand(0, fonts.length), // font 1
	rand(0, weights.length), // font weight 2
	rand(0, tTransforms.length), // text transform 3
	rand(0, tDecorations.length), // text decoration 4
	rand(1, 24), // padding 5
	rand(0, 6), // box shadow length(?) 6
	rand(0, 10), // box shadow blur(?) 7
	rand(-10, 15), // border radius 8
	rand(0, tAligns.length), // text align 9
	rand(0, 300), // sect padding bottom 10
	rand(0, 255), // bg color r 11
	rand(0, 255), // bg color g 12
	rand(0, 255), // bg color b 13
	rand(0, 130), // bg blur 14
	rand(-50, 100), // bg grayscale 15
	rand(-50, 100), // textwrap grayscale 16
	rand(0, 1), // bg bw 17
	rand(0, 9), // border activate 18
	rand(0, 4), // border thickness 19
	rand(0, 1), // alternate section bg activate 20
	rand(0, 6), // alternate section bg activate(2) 21
	rand(0, 255), // main colors 22
	rand(0, 255), // main colors 23
	rand(0, 255), // main colors 24
	rand(0, 255), // main colors 25
	rand(0, 255), // main colors 26
	rand(0, 255), // main colors 27
	rand(40, 70), // col width 28
	rand(0, 1), // float L or R 29
	rand(0, 3), // big landing 30
	parseFloat(randFl(0.9, 1.8)), // font size p 31
	parseFloat(randFl(1.8, 5.8)), // font size h2 32
	parseFloat(randFl(1.2, 4.8)), // font size h3 33
	parseFloat(randFl(0, 1)) // box shadow opacity 34
	];
	return arr;
};

var generateADNA = function generateADNA() {
	var arr = []; //activeDNA

	for (var i = 0; i < DNA.length; i++) {
		arr.push(rand(0, 1));
	}

	return arr;
};

DNA = generateDNA();
aDNA = generateADNA();

for (var i = 0; i < generationSpecimens; i++) {
	// console.log(generateDNA());
}

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function isInt(n) {
	return n % 1 === 0;
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

var randomColor = function randomColor(DNAarr) {
	c1 = [DNAarr[22], DNAarr[23], DNAarr[24]];
	c2 = [DNAarr[25], DNAarr[26], DNAarr[27]];
	indexDNA += 6;

	// if (colorDiff(c1,c2) >= 140) {
	applyColor();
	// } else {
	// randomColor();
	// }
};

// const map = () => {

// }

var indexDNA = 0;

var activateProperty = function activateProperty(target, property, setting, probability, aDNAarr) {
	if (parseInt(aDNAarr[indexDNA]) === 1) {
		$(target).css(property, setting);
	}
	indexDNA++;
};

var design = function design(DNAarr, aDNAarr) {

	$("#landing").append("Design ID: [ ");

	for (var i = 0; i < DNA.length; i++) {
		$("#landing").append(Math.floor(DNAarr[i]) + " ");
	}

	for (var i = 0; i < DNA.length; i++) {
		$("#landing").append(Math.floor(aDNAarr[i]) + " ");
	}

	$("#landing").append("]");

	activateProperty("body", "font-family", fonts[DNAarr[0]], 1, aDNAarr);
	activateProperty("h2, h3", "font-family", fonts[DNAarr[1]], 1, aDNAarr);
	activateProperty("h2, h3", "font-weight", weights[DNAarr[2]], 1, aDNAarr);
	activateProperty("h2, h3, header", "text-transform", tTransforms[DNAarr[3]], 1, aDNAarr);
	activateProperty("h2, h3", "text-decoration", tDecorations[DNAarr[4]], 1, aDNAarr);
	activateProperty("section, header, .linkedImg, .linkedRef", "padding", DNAarr[5] + "px", 1, aDNAarr);
	activateProperty("section, header", "box-shadow", "0px " + DNAarr[6] + "px " + DNAarr[7] + "px rgba(" + c2[0] + "," + c2[1] + "," + c2[2] + "," + DNAarr[34] + ")", 3, aDNAarr); //f, aDNAarrix
	activateProperty("section, header", "border-radius", DNAarr[8] + "px", 3, aDNAarr);
	activateProperty("h2, h3", "text-align", tAligns[DNAarr[9]], 1, aDNAarr);
	// activateProperty("section", "column-count", `${rand(-3,2)}`, 10, aDNAarr);
	activateProperty("section", "padding-bottom", DNAarr[10] + "px", 1, aDNAarr);
	activateProperty("body", "background-color", "rgb(" + DNAarr[11] + "," + DNAarr[12] + "," + DNAarr[13] + ")", 1, aDNAarr);
	activateProperty("#bg", "filter", "blur(" + DNAarr[14] + "px)", 10, aDNAarr);
	activateProperty("#bg", "filter", "grayscale(" + DNAarr[15] + "%) ", 3, aDNAarr);
	activateProperty("#textWrap, header", "filter", "grayscale(" + DNAarr[16] + "%) ", 3, aDNAarr);
	activateProperty("#bg", "background-color", bw[DNAarr[17]], 4, aDNAarr);

	//BORDER //////////////WHERE IS THE BORDER
	if (DNAarr[18] === 1) {
		var color = "rgb(" + c2[0] + "," + c2[1] + "," + c2[2] + ")";
		var randThickness = DNAarr[19];

		$("header").css("border-bottom", randThickness + "px solid " + color);
		$("#textWrap").css("border-right", randThickness + "px solid " + color);
		$("#textWrap").css("border-left", randThickness + "px solid " + color);
		$("section").css("border-bottom", randThickness + "px solid " + color);
	}

	//section bgs
	var alternateColor = function alternateColor() {
		if (DNAarr[20] === 1) {
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

	var colorProb = DNAarr[21];
	if (colorProb === 0) {
		alternateColor();
	} else if (colorProb === 1) {
		$("section").css("background-color", "transparent");
		$("section").css("color, a", "rgb(" + c2[0] + "," + c2[1] + "," + c2[2] + ")");
	} else {
		$("section, header").css("background-color", "transparent");
		$("section, header, a").css("color", "rgb(" + c2[0] + "," + c2[1] + "," + c2[2] + ")");
	}

	indexDNA += 4;

	randomColor(DNAarr);

	var colWidth = DNAarr[28];

	$("#textWrap").css("width", colWidth + "%");
	$(".linkedImg, .linkedRef").css("width", 100 - colWidth + "%");

	if (DNAarr[29] === 1) {
		$("#textWrap").css("float", "left");
		$(".linkedImg, .linkedRef").css("left", "auto").css("right", "0");
	} else {
		$("#textWrap").css("float", "right");
		$(".linkedImg, .linkedRef").css("right", "auto").css("left", "0");
	}

	//big landing
	var headerH = void 0;

	setTimeout(function () {
		headerH = $("header").outerHeight();
		$("#mainWrap").css("padding-top", headerH + "px");
	}, 1200);

	if (DNAarr[30] === 0) {
		// $("#landing").addClass("bigLanding").css("top",`${headerH}px`);
		$("#landing").addClass("bigLanding");
		$("#textWrap").addClass("bigLanding");
		// activateProperty("h2", "font-size", randFl(1.2,9)+"rem", 1);
		// $("#mainWrap").css("padding-top", "100vh !important");
	} else {
		$("#landing").removeClass("bigLanding");
		$("#textWrap").removeClass("bigLanding");
	}

	indexDNA += 3;

	activateProperty("p", "font-size", DNAarr[31] + "rem", 1, aDNAarr);
	activateProperty("h2", "font-size", DNAarr[32] + "rem", 1, aDNAarr);
	activateProperty("h3", "font-size", DNAarr[33] + "rem", 1, aDNAarr);

	if (parseInt(DNAarr[0]) === 6) {
		$("p").css("line-height", "130%"); //fortesque correction
	}
};

$("#redesign").click(function () {
	location.reload();
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

var rate = function rate() {
	var $bar = $("#rateBar");
	var $barInner = $("#rateBarInner");
	var barW = $bar.width();
	var score = 0;

	$bar.mousemove(function (e) {
		var parentOffset = $(this).offset();
		var relX = Math.floor(e.pageX - parentOffset.left);
		score = Math.floor(relX / barW * 10.9);
		$barInner.css("width", relX + "px");
		$barInner.text(score);
	});

	$bar.mouseup(function () {
		$bar.addClass("innactive");
		pushRatingToDB(dbGen, dbSp, score);
	});
};

$("#designCounter").text(dbSp);
$("#generationCounter").text(dbGen);

rate();