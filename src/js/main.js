const fonts = ["sans-serif","serif","monospace", "Akkurat", "Akkurat-Mono", "Eczar-Regular", "FortescuePro-Regular", "HelveticaNeue-BoldExt"];
const weights = ["normal", "bold", "bolder", "lighter"];
const tTransforms = ["none","capitalize","uppercase","lowercase"];
const tDecorations = ["none","underline","none","none","none"];
const tAligns = ["left", "right", "center", "justify"];
const paragraphAligns = ["left", "left", "left", "justify"];
const bw= ["black", "white"];

let c1 = []; //bg
let c2 = []; //fg
let tempCount = 0;

let DNA = [
	rand(0,fonts.length), // font size 0
	rand(0,fonts.length), // font size 1
	rand(0,weights.length), // font weight 2
	rand(0,tTransforms.length), // text transform 3
	rand(0,tDecorations.length), // text decoration 4
	rand(0,24), // padding 5
	rand(0,6), // box shadow length(?) 6
	rand(0,10), // box shadow blur(?) 7
	rand(-10,15), // border radius 8
	rand(0,tAligns.length), // text align 9
	rand(0,300), // sect padding bottom 10
	rand(0,255), // bg color r 11
	rand(0,255), // bg color g 12
	rand(0,255), // bg color b 13
	rand(0,130), // bg blur 14
	rand(-50,100), // bg grayscale 15
	rand(-50,100), // textwrap grayscale 16
	rand(0,1), // bg bw 17
	rand(0,9), // border activate 18
	rand(0,4), // border thickness 19
	rand(0,1), // alternate section bg activate 20
	rand(0,6), // alternate section bg activate(2) 21
	rand(0,255), // main colors 22
	rand(0,255), // main colors 23
	rand(0,255), // main colors 24
	rand(0,255), // main colors 25
	rand(0,255), // main colors 26
	rand(0,255), // main colors 27
	rand(40,70), // col width 28
	rand(0,1), // float L or R 29
	rand(0,3), // big landing 30
	randFl(0.9,1.8), // font size p 31
	randFl(1.8,5.8), // font size h2 32
	randFl(1.2,4.8), // font size h3 33
	randFl(0,1) // box shadow opacity 34
];

let aDNA =[]; //activeDNA

console.log(DNA.length);

for (var i = 0; i < DNA.length; i++) {
	aDNA.push(rand(0,1));
}

console.log(aDNA);

function rand(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function randFl(min,max) {
    return (Math.random() * (max - min) + min).toFixed(4)
}

const colorDiff = (v1,v2) => {
	let i,
        d = 0;
        for (i = 0; i < v1.length; i++) {
            d += (v1[i] - v2[i])*(v1[i] - v2[i]);
        }
        return Math.floor(Math.sqrt(d));
}

const applyColor = () => {
	$("#bg").css("background-color", `rgb(${c1[0]},${c1[1]},${c1[2]})`);
	$("body, a").css("color", `rgb(${c2[0]},${c2[1]},${c2[2]})`);
}

const randomColor = () => {
	c1 = [DNA[22], DNA[23], DNA[24]];
	c2 = [DNA[25], DNA[26], DNA[27]];

	// if (colorDiff(c1,c2) >= 140) {
		applyColor();
	// } else {
		// randomColor();
	// }
}

let indexDNA = 0;

const activateProperty = (target, property, setting, probability) => {
	if (aDNA[indexDNA] === 1) {
		$(target).css(property, setting);
	}
	indexDNA++;
}

const design = () => {

	let colWidth = DNA[28];

	tempCount++;

	$("#textWrap").css("width", colWidth+"%");
	$(".linkedImg, .linkedRef").css("width", 100-colWidth+"%");

	if (DNA[29]===1) {
		$("#textWrap").css("float","left");
		$(".linkedImg, .linkedRef").css("left","auto").css("right", "0");
	} else {
		$("#textWrap").css("float","right");
		$(".linkedImg, .linkedRef").css("right","auto").css("left","0");
	}

	//big landing
	let headerH = $("header").outerHeight();
	if (DNA[30]===0) {
		$("#landing").addClass("bigLanding").css("top",`${headerH}px`);
		$("#textWrap").addClass("bigLanding");
		// activateProperty("h2", "font-size", randFl(1.2,9)+"rem", 1);

		// $("#mainWrap").css("padding-top", "100vh !important");
	} else {
		$("#landing").removeClass("bigLanding");
		$("#textWrap").removeClass("bigLanding");

	}
	$("#landing").append(`Design ID: ${DNA}`);

	randomColor();


	activateProperty("body", "font-family", fonts[DNA[0]], 1);
	activateProperty("h2, h3", "font-family", fonts[DNA[1]], 1);
	activateProperty("p", "font-size", DNA[31]+"rem", 1);
	activateProperty("h2", "font-size", DNA[32]+"rem", 1);
	activateProperty("h3", "font-size", DNA[33]+"rem", 1);
	activateProperty("h2, h3", "font-weight", weights[DNA[2]], 1);
	activateProperty("h2, h3, header", "text-transform", tTransforms[DNA[3]], 1);
	activateProperty("h2, h3", "text-decoration", tDecorations[DNA[4]], 1);
	activateProperty("section, header, .linkedImg, .linkedRef", "padding", DNA[5]+"px", 1);
	activateProperty("section, header", "box-shadow", `0px ${DNA[6]}px ${DNA[7]}px rgba(${c2[0]},${c2[1]},${c2[2]},${DNA[34]})`, 3); //fix
	activateProperty("section, header", "border-radius", `${DNA[8]}px`, 3);
	activateProperty("h2, h3", "text-align", tAligns[DNA[9]], 1);
	// activateProperty("section", "column-count", `${rand(-3,2)}`, 10);
	activateProperty("section", "padding-bottom", `${DNA[10]}px`, 1);
	activateProperty("body", "background-color", `rgb(${DNA[11]},${DNA[12]},${DNA[13]})`, 1);
	activateProperty("#bg", "filter", `blur(${DNA[14]}px)`, 10);
	activateProperty("#bg", "filter", `grayscale(${DNA[15]}%) `, 3);
	activateProperty("#textWrap, header", "filter", `grayscale(${DNA[16]}%) `, 3);
	activateProperty("#bg", "background-color", bw[DNA[17]], 4);



	//BORDER //////////////WHERE IS THE BORDER
	if (DNA[18]===1) {
		var color = `rgb(${c2[0]},${c2[1]},${c2[2]})`;
		var randThickness = DNA[19];

		$("header").css("border-bottom", `${randThickness}px solid ${color}`);
		$("#textWrap").css("border-right", `${randThickness}px solid ${color}`);
		$("#textWrap").css("border-left", `${randThickness}px solid ${color}`);
		$("section").css("border-bottom", `${randThickness}px solid ${color}`);
	}

	//section bgs
	const alternateColor = () => {
		if (DNA[20]===1) {
			$("header").css("background-color", `rgb(${c1[0]},${c1[1]},${c1[2]})`);
			$("header, a").css("color", `rgb(${c2[0]},${c2[1]},${c2[2]})`);
		} else {
			$("header").css("background-color", `rgb(${c2[0]},${c2[1]},${c2[2]})`);
			$("header, a").css("color", `rgb(${c1[0]},${c1[1]},${c1[2]})`);
		}

		$("section").each(function(i){
			if (i % 2 === 0) {
				$(this).css("background-color", `rgb(${c1[0]},${c1[1]},${c1[2]})`);
				$(this).css("color", `rgb(${c2[0]},${c2[1]},${c2[2]})`);
			} else {
				$(this).css("background-color", `rgb(${c2[0]},${c2[1]},${c2[2]})`);
				$(this).css("color", `rgb(${c1[0]},${c1[1]},${c1[2]})`);
			}
		});
	}

	var colorProb = DNA[21];
	if (colorProb===0) {
		alternateColor();
	} else if (colorProb === 1) {
		$("section").css("background-color", `transparent`);
		$("section").css("color, a", `rgb(${c2[0]},${c2[1]},${c2[2]})`);
	} else {
		$("section, header").css("background-color", `transparent`);
		$("section, header, a").css("color", `rgb(${c2[0]},${c2[1]},${c2[2]})`);
	}

}



setTimeout(function(){
	design();
},500);

// setTimeout(function(){
// 	$("*").css("transition", ".3s");
// },1000);


$("#redesign").click(function(){
	location.reload();
});

// $(document).ready(function() {
//     $(document).bind('keydown',function(e){
//        if(e.keyCode == 82) {
//        	design();
//        }
//     });
// });



//this might be very inefficient
const hoverRefOrImg = (hovered, highlight) => {
	$(hovered).each(function(i){
		$(this).hover(function(){
			$(highlight).each(function(ind){
				if (i === ind) {
					$(this).addClass("shiny");
				}
			});
		}, function(){
			$("*").removeClass("shiny");
		});
	});
};

hoverRefOrImg(".refLink", ".linkedRef");
hoverRefOrImg(".linkedRef", ".refLink");
hoverRefOrImg(".imgLink", ".linkedImg");
hoverRefOrImg(".linkedImg img", ".imgLink");


const rate = () => {
	var $bar = $("#rateBar");
	var $barInner = $("#rateBarInner");
	var barW = $bar.width();
	var score = 0;
	console.log(barW+ " lel");

	$bar.mousemove(function(e){
		var parentOffset = $(this).offset(); 
		//or $(this).offset(); if you really just want the current element's offset
		var relX = Math.floor(e.pageX - parentOffset.left);
		score = Math.floor((relX / barW) * 10);
		console.log(score);

		$barInner.css("width", `${relX}px`);
	});

	$bar.mouseup(function(){
		// alert(`Thank you. Your score ----> ${score}/10`);
		$barInner.prepend(score);
		$bar.addClass("innactive");
	});
}

rate();