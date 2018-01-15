"use strict";

var fonts = ["sans-serif", "serif", "monospace", "Akkurat", "Akkurat-Mono", "AkzidenzGroteskBE-Regular", "Bembo", "Eczar-Regular", "FortescuePro-Regular", "HelveticaNeue-BoldExt", "HelveticaNeue-Extended", "Lexicon-RomanA", "Lexicon-RomanD", "Perpetua", "PxGrotesk-Regular", "Stanley-Bold", "Stanley-Regular", "Univers-Extended", "Univers"];
var weights = ["normal", "bold", "bolder", "lighter"];
var tTransforms = ["none", "capitalize", "uppercase", "lowercase"];
var tDecorations = ["none", "underline", "none", "none", "none"];
var tAligns = ["left", "right", "center", "justify"];
var paragraphAligns = ["left", "left", "left", "justify"];
var bw = ["black", "white"];
var rgbMinMax = [0, 255];

var c1 = []; //bg
var c2 = []; //fg
var DNA = void 0;
var aDNA = void 0;

var generateDNA = function generateDNA() {
	var arr = [rgbMinMax[rand(0, rgbMinMax.length - 1)], // main colors 22 0
	rgbMinMax[rand(0, rgbMinMax.length - 1)], // main colors 23 1
	rgbMinMax[rand(0, rgbMinMax.length - 1)], // main colors 24 2
	rgbMinMax[rand(0, rgbMinMax.length - 1)], // main colors 25 3
	rgbMinMax[rand(0, rgbMinMax.length - 1)], // main colors 26 4
	rgbMinMax[rand(0, rgbMinMax.length - 1)], // main colors 27 5
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
	rand(0, 5), // border activate 18
	rand(0, 3), // border thickness 19
	rand(0, 1), // alternate section bg activate 20
	rand(0, 6), // alternate section bg activate(2) 21
	rand(0, fonts.length), // font 0 22
	rand(0, fonts.length), // font 1 23
	rand(0, weights.length), // font weight 2 24
	rand(0, tTransforms.length), // text transform 3 25
	rand(0, tDecorations.length), // text decoration 4 26
	rand(3, 25), // padding 5 27
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

function combineArr(arr) {
	var x = 0;
	for (var i = 0; i < arr.length; i++) {
		x += arr[i];
	}
	return x;
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
	$("#bg, #prevDesigns").css("background-color", "rgb(" + c1[0] + "," + c1[1] + "," + c1[2] + ")");
	$("body, a, #prevDesigns").css("color", "rgb(" + c2[0] + "," + c2[1] + "," + c2[2] + ")");
};

var randomColor = function randomColor(DNAarr) {
	c1 = [DNAarr[0], DNAarr[1], DNAarr[2]];
	c2 = [DNAarr[3], DNAarr[4], DNAarr[5]];

	if (colorDiff(c1, c2) <= 30) {
		console.log("randcolor");
		c1 = [rand(0, 255), rand(0, 255), rand(0, 255)];
	}

	indexDNA += 6;

	// if (colorDiff(c1,c2) >= 140) {
	applyColor();
	// } else {
	// randomColor();
	// }
};

var indexDNA = 0;

var activateProperty = function activateProperty(target, property, setting, probability, aDNAarr) {
	if (parseInt(aDNAarr[indexDNA]) === 1) {
		// === 1
		$(target).css(property, setting);
	}

	indexDNA++;
};

var design = function design(DNAarr, aDNAarr) {
	indexDNA = 0;
	// $("#landing").append(`Design ID: [ `);

	// for (var i = 0; i < DNA.length; i++) {
	// 	$("#landing").append(`${Math.floor(DNAarr[i])} `);
	// }

	// for (var i = 0; i < DNA.length; i++) {
	// 	$("#landing").append(`${Math.floor(aDNAarr[i])} `);
	// }

	// $("#landing").append(`]`);

	/////INDEX DNA ORDER WRONG

	randomColor(DNAarr); // this should be below, as it shifts adna. but it's here because color must be defined before. not so important thoush. still - fix

	activateProperty("section, header, #prevDesigns", "box-shadow", "0px " + DNAarr[6] + "px " + DNAarr[7] + "px rgba(" + c2[0] + "," + c2[1] + "," + c2[2] + "," + DNAarr[34] + ")", 3, aDNAarr); //f, aDNAarrix
	activateProperty("section, header, #rateBar, #rateBarInner, #prevDesigns", "border-radius", DNAarr[8] + "px", 3, aDNAarr);
	activateProperty("h2, h3", "text-align", tAligns[DNAarr[9]], 1, aDNAarr);
	// activateProperty("section", "column-count", `${rand(-3,2)}`, 10, aDNAarr);
	activateProperty("section", "padding-bottom", DNAarr[10] + "px", 1, aDNAarr);
	activateProperty("body, #prevDesigns", "background-color", "rgb(" + DNAarr[11] + "," + DNAarr[12] + "," + DNAarr[13] + ")", 1, aDNAarr);
	activateProperty("#bg", "filter", "blur(" + DNAarr[14] + "px)", 10, aDNAarr);
	activateProperty("#bg", "filter", "grayscale(" + DNAarr[15] + "%) ", 3, aDNAarr);
	activateProperty("#textWrap, header, #prevDesigns", "filter", "grayscale(" + DNAarr[16] + "%) ", 3, aDNAarr);
	activateProperty("#bg, body, #prevDesigns", "background-color", bw[DNAarr[17]], 4, aDNAarr);

	//BORDER
	if (parseInt(DNAarr[18]) <= 0) {
		var color = "rgb(" + c2[0] + "," + c2[1] + "," + c2[2] + ")";
		var randThickness = parseInt(DNAarr[19]);
		$("header, #prevDesigns").css("border-bottom", randThickness + "px solid " + color);
		$("#textWrap").css("border-right", randThickness + "px solid " + color);
		$("#textWrap").css("border-left", randThickness + "px solid " + color);
		$("section").css("border-bottom", randThickness + "px solid " + color);
	} else {
		$("header, #prevDesigns").css("border-bottom", "none");
		$("#textWrap").css("border-right", "none");
		$("#textWrap").css("border-left", "none");
		$("section").css("border-bottom", "none");
	}

	//section bgs
	var alternateColor = function alternateColor() {
		if (parseInt(DNAarr[20]) <= 0) {
			$("headerm #prevDesigns").css("background-color", "rgb(" + c1[0] + "," + c1[1] + "," + c1[2] + ")");
			$("header, #prevDesigns").css("color", "rgb(" + c2[0] + "," + c2[1] + "," + c2[2] + ")");
		} else {
			$("header, #prevDesigns").css("background-color", "rgb(" + c2[0] + "," + c2[1] + "," + c2[2] + ")");
			$("header, #prevDesigns").css("color", "rgb(" + c1[0] + "," + c1[1] + "," + c1[2] + ")");
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

	var colorProb = parseInt(DNAarr[21]);
	if (colorProb <= 0) {
		alternateColor();
	} else if (colorProb === 1) {
		$("header, #prevDesigns").css("background-color", "rgb(" + c2[0] + "," + c2[1] + "," + c2[2] + ")");
		$("header, #prevDesigns").css("color", "rgb(" + c1[0] + "," + c1[1] + "," + c1[2] + ")");
		$("#bg").css("background-color", "rgb(" + c1[0] + "," + c1[1] + "," + c1[2] + ")");
		$("section").css("color, a", "rgb(" + c2[0] + "," + c2[1] + "," + c2[2] + ")");
	} else if (colorProb === 2) {
		$("header, section, #prevDesigns").css("background-color", "transparent");
	} else {
		$("header, #bg, #prevDesigns").css("background-color", "rgb(" + c1[0] + "," + c1[1] + "," + c1[2] + ")");
		$("header, #prevDesigns").css("color", "rgb(" + c2[0] + "," + c2[1] + "," + c2[2] + ")");
	}

	indexDNA += 4;

	activateProperty("body", "font-family", fonts[parseInt(DNAarr[22])], 1, aDNAarr);
	activateProperty("h2, h3", "font-family", fonts[parseInt(DNAarr[23])], 1, aDNAarr);
	activateProperty("h2, h3", "font-weight", weights[parseInt(DNAarr[24])], 1, aDNAarr);
	activateProperty("h2, h3, header", "text-transform", tTransforms[parseInt(DNAarr[25])], 1, aDNAarr);
	activateProperty("h2, h3", "text-decoration", tDecorations[parseInt(DNAarr[26])], 1, aDNAarr);
	activateProperty("section, header, .linkedImg, .linkedRef, #prevDesigns", "padding", parseInt(DNAarr[27]) + "px", 1, aDNAarr);

	var colWidth = DNAarr[28];

	$("#textWrap").css("width", colWidth + "%");
	$(".linkedImg, .linkedRef").css("width", 100 - colWidth + "%");

	if (parseInt(DNAarr[29]) === 0) {
		$("#textWrap").css("float", "left");
		$(".linkedImg, .linkedRef").css("left", "auto").css("right", "0");
		$("#prevDesigns").css("width", 100 - colWidth + "%");
	} else {
		$("#textWrap").css("float", "right");
		$(".linkedImg, .linkedRef").css("right", "auto").css("left", "0");
		$("#prevDesigns").css("width", colWidth + "%");
	}

	//big landing
	var headerH = void 0;

	setTimeout(function () {
		headerH = $("header").outerHeight();
		$("#mainWrap").css("padding-top", headerH + "px");
		$("#prevDesigns").css("margin-top", headerH + "px");
	}, 1200);

	if (parseInt(DNAarr[30]) === 0) {
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

	// console.log(parseFloat(DNAarr[32]), aDNAarr[32], "h2");
	// console.log(parseFloat(DNAarr[33]), aDNAarr[33], "h2");
	activateProperty("p", "font-size", parseFloat(DNAarr[31]) + "rem", 1, aDNAarr);
	activateProperty("h2", "font-size", parseFloat(DNAarr[32]) + "rem", 1, aDNAarr);
	activateProperty("h3", "font-size", parseFloat(DNAarr[33]) + "rem", 1, aDNAarr);

	var midSize = (parseFloat(DNAarr[31]) + parseFloat(DNAarr[33])) / 2.2;
	if (midSize < DNAarr[31]) {
		midSize = DNAarr[31];
	}

	$("h4").css("font-size", midSize + "rem");
	$(".smallerNo").css("font-size", midSize / 1.4 + "rem");

	if (parseInt(parseInt(DNAarr[22])) === 8) {
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
		pushRatingToDB(dbGeneralCount + idPadding + 1, dbGen, dbSp, score);
	});
};

$("#designCounter").text(dbGeneralCount + 1);
$("#generationCounter").text(dbGen);
$("#specimenCounter").text(dbSp);

rate();

var landingMessage = function landingMessage() {
	var $message = $("#landingMessage");
	var $button = $("#landingMessage a");

	$message.show();
	$message.addClass("notTransp");
	$button.addClass("notTransp");
	$("section, header:not(.notTransp)").css("opacity", 0.3);

	$button.click(function (event) {
		event.preventDefault();
		$message.remove();
		design(activeDNA, activeADNA);

		$("section, header:not(.notTransp)").css("opacity", 1);
	});
};

var showLandingOnce = function showLandingOnce() {

	if (sessionStorage.seen) {
		design(activeDNA, activeADNA);
		tableOfContents();
	} else {
		landingMessage();
		sessionStorage.setItem("seen", true);
	}
};

var tableOfContents = function tableOfContents() {
	var count = 0;
	var sectionCoords = [];
	setTimeout(function () {
		$("section").each(function (i) {
			var sectionTitle = $(this).find("h3").text();

			if (sectionTitle.length >= 1 && i >= 2) {
				count++;
				sectionCoords.push($(this).offset().top);
				$("#toc").append("<h4><span class=\"smallerNo\">0" + count + "</span> <strong>" + sectionTitle + "</strong></h4>");
			}
		});

		$("#toc h4").each(function (i) {
			$(this).click(function () {
				event.preventDefault();
				$('html, body').animate({
					scrollTop: sectionCoords[i]
				}, 1000);
			});
		});
	}, 1200);
};

var clickToEnlarge = function clickToEnlarge() {
	$("img").each(function () {
		var $img = $(this);
		var src = $img.attr("src");
		var text = $img.parent().find("span").text();
		$img.click(function () {
			console.log($img);
			$("body").append("<div class=\"bigImg\"><div><img src=\"" + src + "\"><br><p>" + text + "</p></div></div>");
			closeImg();
		});
	});
};

var closeImg = function closeImg() {
	$(".bigImg").click(function () {
		$(".bigImg").remove();
	});
};

clickToEnlarge();

var avoidCollidingSideContent = function avoidCollidingSideContent() {
	var bottomCoords = [];
	var topCoords = [];
	$(".sideContent").each(function (i) {
		var $this = $(this);
		var h = $this.outerHeight();
		var o = $this.offset().top;

		var bottom = h + o;

		$this.addClass("sideContent" + i);
		bottomCoords.push(bottom);
		topCoords.push(o);
	});

	for (var i = 0; i < bottomCoords.length; i++) {
		var overlap = bottomCoords[i] - topCoords[i + 1];
		if (bottomCoords[i] > topCoords[i + 1]) {
			console.log("OVERLAP" + overlap);
			$(".sideContent" + (i + 1)).css("padding-top", overlap + "px");
		} else {
			$(".sideContent" + (i + 1)).css("padding-top", "0");
		}
	}
};

setTimeout(function () {
	avoidCollidingSideContent();
}, 1900);