"use strict";

var prevDesigns = function prevDesigns() {
	var $prevDesigns = $("#prevDesigns div");
	var $button = $("#prevDesignsBtn");
	var topDesignIndexes = [];
	var ratingThresh = 7;

	for (var i = 0; i < dbRatings.length; i++) {
		if (dbRatings[i] >= ratingThresh) {
			var gen = Math.ceil(i / generationSpecimens);
			var sp = i - (gen - 1) * generationSpecimens;
			topDesignIndexes.push(i);
			$prevDesigns.append("<a href=\"#\">Design " + (i + 1) + " Generation " + gen + " Specimen " + sp + " - Rating " + dbRatings[i] + "</a><br><br>");
		}
	}

	if (topDesignIndexes.length <= 0) {
		$prevDesigns.text("No designs to show yet. Chech back later.");
	}

	$("#prevDesigns div a").each(function (i) {
		$(this).hover(function () {
			design(allDNA[topDesignIndexes[i]], allADNA[topDesignIndexes[i]]);
			console.log(i);
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