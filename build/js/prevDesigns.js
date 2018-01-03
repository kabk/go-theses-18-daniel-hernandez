"use strict";

var prevDesigns = function prevDesigns() {
	var $prevDesigns = $("#prevDesigns");
	var $button = $("#prevDesignsBtn");
	var topDesignIndexes = [];
	var ratingThresh = 3;

	for (var i = 0; i < dbRatings.length; i++) {
		if (dbRatings[i] >= ratingThresh) {
			// let gen = Math.ceil(i/generationSpecimens);
			// let sp = i-((gen-1)*generationSpecimens);
			topDesignIndexes.push(i);
			$prevDesigns.append("<a href=\"#\">#" + (i + 1) + "</a>&nbsp;&nbsp;");
		}
	}

	// console.log(topDesignIndexes);
	// console.log(allDNA[topDesignIndexes], allADNA[topDesignIndexes]);


	if (topDesignIndexes.length <= 0) {
		$prevDesigns.text("No designs to show yet. Chech back later.");
	}

	$("#prevDesigns a").each(function (i) {
		var gen = Math.ceil(topDesignIndexes[i] / generationSpecimens);
		var sp = topDesignIndexes[i] - (gen - 1) * generationSpecimens + 1;
		$(this).hover(function () {
			$("#designCounter").text(topDesignIndexes[i] + 1);
			$("#generationCounter").text(Math.ceil(gen));
			$("#specimenCounter").text(sp);
			// $("*").css("transition", "0s");

			// setTimeout(function(){
			defaultDesign();
			// },50);

			// $("body").css("font-family", "serif");
			// setTimeout(function(){
			design(allDNA[topDesignIndexes[i]], allADNA[topDesignIndexes[i]]);
			// },2200);
		});
	});

	$("#prevDesigns").click(function () {
		$("#prevDesigns").hide();
	});

	$("#prevDesignsBtn").click(function () {
		$("#prevDesigns").show();
	});
};

prevDesigns();

var defaultDesign = function defaultDesign() {
	var defDNA = [1, // font 0
	1, // font 1
	0, // font weight 2
	0, // text transform 3
	0, // text decoration 4
	0, // padding 5
	0, // box shadow length(?) 6
	0, // box shadow blur(?) 7
	0, // border radius 8
	0, // text align 9
	0, // sect padding bottom 10
	255, // bg color r 11
	255, // bg color g 12
	255, // bg color b 13
	0, // bg blur 14
	0, // bg grayscale 15
	0, // textwrap grayscale 16
	0, // bg bw 17
	1, // border activate 18
	0, // border thickness 19
	1, // alternate section bg activate 20
	3, // alternate section bg activate(2) 21
	255, // main colors 22
	255, // main colors 23
	255, // main colors 24
	0, // main colors 25
	0, // main colors 26
	0, // main colors 27
	100, // col width 28
	0, // float L or R 29
	1, // big landing 30
	1.2, // font size p 31
	1.2, // font size h2 32
	1.2, // font size h3 33
	0 // box shadow opacity 34
	];
	var defADNA = [];
	for (var i = 0; i < allDNA[0].length; i++) {
		defADNA.push(1);
	}
	design(defDNA, defADNA);
	// $("body").
};