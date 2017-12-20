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
	rand(0,fonts.length),
	rand(0,fonts.length),
	randFl(0.9,1.8),
	randFl(1.8,5.8),
	randFl(1.2,4.8),
	rand(0,weights.length),
	rand(0,tTransforms.length),
	rand(0,tDecorations.length),
	rand(0,24),
	rand(0,6),
	rand(0,10),
	randFl(0,1),
	rand(-10,15),
	rand(0,tAligns.length),
	rand(0,300),
	rand(0,255),
	rand(0,255),
	rand(0,255),
	rand(0,130),
	rand(-50,100),
	rand(-50,100),
	rand(0,1),
	rand(0,9),
	rand(0,4)
];

let aDNA =[]; //activeDNA

for (var i = 0; i < DNA.length; i++) {
	aDNA.push(rand(0,10));
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
	c1 = [rand(0,255), rand(0,255), rand(0,255)];
	c2 = [rand(0,255), rand(0,255), rand(0,255)];

	if (colorDiff(c1,c2) >= 140) {
		applyColor();
	} else {
		randomColor();
	}
}

let indexDNA = 0;

const activateProperty = (target, property, setting, probability) => {
	if (aDNA[indexDNA] === 1) {
		$(target).css(property, setting);
	}
	indexDNA++;
}

const design = () => {

	let colWidth = rand(40,70);

	tempCount++;

	$("#textWrap").css("width", colWidth+"%");
	$(".linkedImg, .linkedRef").css("width", 100-colWidth+"%");

	if (rand(0,1)===1) {
		$("#textWrap").css("float","left");
		$(".linkedImg, .linkedRef").css("left","auto").css("right", "0");
	} else {
		$("#textWrap").css("float","right");
		$(".linkedImg, .linkedRef").css("right","auto").css("left","0");
	}

	//big landing
	let headerH = $("header").outerHeight();
	if (rand(0,3)===0) {
		$("#landing").addClass("bigLanding").css("top",`${headerH}px`);
		$("#textWrap").addClass("bigLanding");
		// activateProperty("h2", "font-size", randFl(1.2,9)+"rem", 1);

		// $("#mainWrap").css("padding-top", "100vh !important");
	} else {
		$("#landing").removeClass("bigLanding");
		$("#textWrap").removeClass("bigLanding");

	}
	$("#headerTitle").text(DNA);

	randomColor();


	activateProperty("body", "font-family", fonts[DNA[0]], 1);
	activateProperty("h2, h3", "font-family", fonts[DNA[1]], 1);
	activateProperty("p", "font-size", fonts[DNA[2]]+"rem", 1);
	activateProperty("h2", "font-size", fonts[DNA[3]]+"rem", 1);
	activateProperty("h3", "font-size", fonts[DNA[4]]+"rem", 1);

	activateProperty("h2, h3", "font-weight", weights[DNA[5]], 1);
	activateProperty("h2, h3, header", "text-transform", tTransforms[DNA[6]], 1);
	activateProperty("h2, h3", "text-decoration", tDecorations[DNA[7]], 1);
	activateProperty("section, header, .linkedImg, .linkedRef", "padding", DNA[8]+"px", 1);

	activateProperty("section, header", "box-shadow", `0px ${DNA[9]}px ${DNA[10]}px rgba(${c2[0]},${c2[1]},${c2[2]},${DNA[11]})`, 3); //fix
	activateProperty("section, header", "border-radius", `${DNA[12]}px`, 3);
	activateProperty("h2, h3", "text-align", tAligns[DNA[13]], 1);

	// activateProperty("section", "column-count", `${rand(-3,2)}`, 10);
	activateProperty("section", "padding-bottom", `${DNA[14]}px`, 1);
	activateProperty("body", "background-color", `rgb(${DNA[15]},${DNA[16]},${DNA[17]})`, 1);

	activateProperty("#bg", "filter", `blur(${DNA[18]}px)`, 10);

	activateProperty("#bg", "filter", `grayscale(${DNA[19]}%) `, 3);
	activateProperty("#textWrap, header", "filter", `grayscale(${DNA[20]}%) `, 3);

	activateProperty("#bg", "background-color", bw[DNA[21]], 4);



	//BORDER //////////////WHERE IS THE BORDER
	if (DNA[22]===1) {
		var color = `rgb(${c2[0]},${c2[1]},${c2[2]})`;
		var randThickness = DNA[23];

		$("header").css("border-bottom", `${randThickness}px solid ${color}`);
		$("#textWrap").css("border-right", `${randThickness}px solid ${color}`);
		$("#textWrap").css("border-left", `${randThickness}px solid ${color}`);
		$("section").css("border-bottom", `${randThickness}px solid ${color}`);
	}

	//section bgs
	const alternateColor = () => {
		if (rand(0,1)===1) {
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

	var colorProb = rand(0,6);
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

setTimeout(function(){
	$("*").css("transition", ".3s");
},1000);


$("#redesign").click(function(){
	design();
});

$(document).ready(function() {
    $(document).bind('keydown',function(e){
       if(e.keyCode == 82) {
       	design();
       }
    });
});



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