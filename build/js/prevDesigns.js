"use strict";

var prevDesigns = function prevDesigns() {
	// const $prevDesigns = $("#prevDesigns");
	var $button = $("#prevDesignsBtn");
	// let topDesignIndexes = [];
	var prevDesignsVisible = false;

	$(".filter").each(function (i) {
		var $thisFilter = $(this);

		$(this).click(function () {
			$("#designIds").empty();

			$(".filter").removeClass("active");
			$thisFilter.addClass("active");

			for (var j = 0; j < dbRatings.length; j++) {
				if (parseInt(dbRatings[j]) === i) {
					$("#designIds").append("<span class=\"prevDesignId\">#" + j + "</span> ");
				}
			}
			clickDesignId();
		});
	});

	var clickDesignId = function clickDesignId() {
		$(".prevDesignId").each(function (i) {
			$(this).click(function () {
				var chosenId = $(this).text();

				while (chosenId.charAt(0) === '#') {
					//remove #
					chosenId = chosenId.substr(1);
				}

				console.log(chosenId);
				defaultDesign();

				design(allDNA[parseInt(chosenId)], allADNA[parseInt(chosenId)]);
			});
		});
	};

	for (var i = 0; i < dbRatings.length; i++) {}
	// $prevDesigns.append(`#${i+1} `);


	// for (var i = 11 - 1; i >= 0; i--) {
	// 	if ($.inArray(i.toString(), dbRatings) >= 0) {
	// 		$prevDesigns.append(`<span id="rating${i}">Rated ${i}:<br></span><br>`);
	// 	}
	// }

	// for (var i = 0; i < dbRatings.length; i++) {
	// 	topDesignIndexes.push(i); //error here
	// 	var rating = dbRatings[i];
	// 	$("#rating"+rating).append(`<strong>${i}</strong> `);
	// }

	// console.log(dbRatings);

	// for (var i = 0; i < dbRatings.length; i++) {
	// 	if (dbRatings[i] >= ratingThresh) {
	// 		var designNo = i+1;

	// 		topDesignIndexes.push(i);
	// 		$prevDesigns.append(`<span href="#">#${designNo}</span>&nbsp; `);
	// 	}
	// }

	// if (topDesignIndexes.length <= 0) {
	// 	$prevDesigns.text("No designs to show yet. Chech back later.");
	// }

	// $("#prevDesigns strong").each(function(i){
	// 	let gen = Math.ceil(topDesignIndexes[i]/generationSpecimens);
	// 	let sp = topDesignIndexes[i]-((gen-1)*generationSpecimens)+1;
	// 	$(this).click(function(event){
	// 		event.preventDefault();
	// 		$("#designCounter").text(topDesignIndexes[i]+1);
	// 		$("#generationCounter").text(Math.ceil(gen));
	// 		$("#specimenCounter").text(sp);

	// 		defaultDesign();

	// 		design(allDNA[topDesignIndexes[i]], allADNA[topDesignIndexes[i]]);

	// 	});
	// });

	// $("#prevDesigns").click(function(event){
	// 	event.preventDefault();
	// 	$("#prevDesigns").hide();
	// 	prevDesignsVisible = false;
	// });

	$("#prevDesignsBtn").click(function (event) {
		event.preventDefault();
		if (prevDesignsVisible === false) {
			$("#prevDesigns").show();
			prevDesignsVisible = true;
		} else {
			$("#prevDesigns").hide();
			prevDesignsVisible = false;
		}
	});
};

prevDesigns();

var defaultDesign = function defaultDesign() {
	var defDNA = [255, // main colors 22 0
	255, // main colors 23 1
	255, // main colors 24 2
	0, // main colors 25 3
	0, // main colors 26 4
	0, // main colors 27 5
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
	1, // bg bw 17
	1, // border activate 18
	0, // border thickness 19
	1, // alternate section bg activate 20
	2, // alternate section bg activate(2) 21
	1, // font 0 22
	1, // font 1 23
	0, // font weight 2 24
	0, // text transform 3 25
	0, // text decoration 4 26
	0, // padding 5 27
	100, // col width 28
	0, // float L or R 29
	0, // big landing 30
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
};