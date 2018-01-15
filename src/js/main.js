const fonts = ["sans-serif","serif","monospace", "Akkurat", "Akkurat-Mono", "AkzidenzGroteskBE-Regular", "Bembo", "Eczar-Regular", "FortescuePro-Regular", "HelveticaNeue-BoldExt", "HelveticaNeue-Extended", "Lexicon-RomanA", "Lexicon-RomanD", "Perpetua", "PxGrotesk-Regular", "Stanley-Bold", "Stanley-Regular", "Univers-Extended", "Univers"];
const weights = ["normal", "bold", "bolder", "lighter"];
const tTransforms = ["none","capitalize","uppercase","lowercase"];
const tDecorations = ["none","underline","none","none","none"];
const tAligns = ["left", "right", "center", "justify"];
const paragraphAligns = ["left", "left", "left", "justify"];
const bw= ["black", "white"];
const rgbMinMax = [0,255];

let c1 = []; //bg
let c2 = []; //fg
let DNA;
let aDNA;

const generateDNA = () => {
	let arr = [
		rgbMinMax[rand(0,rgbMinMax.length-1)], // main colors 22 0
		rgbMinMax[rand(0,rgbMinMax.length-1)], // main colors 23 1
		rgbMinMax[rand(0,rgbMinMax.length-1)], // main colors 24 2
		rgbMinMax[rand(0,rgbMinMax.length-1)], // main colors 25 3
		rgbMinMax[rand(0,rgbMinMax.length-1)], // main colors 26 4
		rgbMinMax[rand(0,rgbMinMax.length-1)], // main colors 27 5
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
		rand(0,5), // border activate 18
		rand(0,3), // border thickness 19
		rand(0,1), // alternate section bg activate 20
		rand(0,6), // alternate section bg activate(2) 21
		rand(0,fonts.length), // font 0 22
		rand(0,fonts.length), // font 1 23
		rand(0,weights.length), // font weight 2 24
		rand(0,tTransforms.length), // text transform 3 25
		rand(0,tDecorations.length), // text decoration 4 26
		rand(3,25), // padding 5 27
		rand(40,70), // col width 28
		rand(0,1), // float L or R 29
		rand(0,3), // big landing 30
		parseFloat(randFl(0.9,1.8)), // font size p 31
		parseFloat(randFl(1.8,5.8)), // font size h2 32
		parseFloat(randFl(1.2,4.8)), // font size h3 33
		parseFloat(randFl(0,1)) // box shadow opacity 34
	];
	return arr;
}

const generateADNA = () => {
	let arr = []; //activeDNA

	for (var i = 0; i < DNA.length; i++) {
		arr.push(rand(0,1));
	}

	return arr;
}

DNA = generateDNA();
aDNA = generateADNA();

for (var i = 0; i < generationSpecimens; i++) {
	// console.log(generateDNA());
}

function rand(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function isInt(n) {
   return n % 1 === 0;
}

function randFl(min,max) {
    return (Math.random() * (max - min) + min).toFixed(4)
}

function combineArr(arr){
	let x = 0;
	for (var i = 0; i < arr.length; i++) {
		x += arr[i];
	}
	return x;
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
	$("#bg, #prevDesigns").css("background-color", `rgb(${c1[0]},${c1[1]},${c1[2]})`);
	$("body, a, #prevDesigns").css("color", `rgb(${c2[0]},${c2[1]},${c2[2]})`);
}

const randomColor = (DNAarr) => {
	c1 = [DNAarr[0], DNAarr[1], DNAarr[2]];
	c2 = [DNAarr[3], DNAarr[4], DNAarr[5]];

	if (colorDiff(c1,c2) <= 30) {
		console.log("randcolor");
		c1 = [rand(0,255), rand(0,255), rand(0,255)];
	}

	indexDNA+=6;

	// if (colorDiff(c1,c2) >= 140) {
		applyColor();
	// } else {
		// randomColor();
	// }
}

let indexDNA = 0;

const activateProperty = (target, property, setting, probability, aDNAarr) => {
	if (parseInt(aDNAarr[indexDNA]) === 1) { // === 1
		$(target).css(property, setting);
	}

	indexDNA++;
}

const design = (DNAarr, aDNAarr) => {
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

	activateProperty("section, header, #prevDesigns", "box-shadow", `0px ${DNAarr[6]}px ${DNAarr[7]}px rgba(${c2[0]},${c2[1]},${c2[2]},${DNAarr[34]})`, 3, aDNAarr); //f, aDNAarrix
	activateProperty("section, header, #rateBar, #rateBarInner, #prevDesigns", "border-radius", `${DNAarr[8]}px`, 3, aDNAarr);
	activateProperty("h2, h3", "text-align", tAligns[DNAarr[9]], 1, aDNAarr);
	// activateProperty("section", "column-count", `${rand(-3,2)}`, 10, aDNAarr);
	activateProperty("section", "padding-bottom", `${DNAarr[10]}px`, 1, aDNAarr);
	activateProperty("body, #prevDesigns", "background-color", `rgb(${DNAarr[11]},${DNAarr[12]},${DNAarr[13]})`, 1, aDNAarr);
	activateProperty("#bg", "filter", `blur(${DNAarr[14]}px)`, 10, aDNAarr);
	activateProperty("#bg", "filter", `grayscale(${DNAarr[15]}%) `, 3, aDNAarr);
	activateProperty("#textWrap, header, #prevDesigns", "filter", `grayscale(${DNAarr[16]}%) `, 3, aDNAarr);
	activateProperty("#bg, body, #prevDesigns", "background-color", bw[DNAarr[17]], 4, aDNAarr);

	//BORDER
	if (parseInt(DNAarr[18]) <= 0) {
		var color = `rgb(${c2[0]},${c2[1]},${c2[2]})`;
		var randThickness = parseInt(DNAarr[19]);
		$("header, #prevDesigns").css("border-bottom", `${randThickness}px solid ${color}`);
		$("#textWrap").css("border-right", `${randThickness}px solid ${color}`);
		$("#textWrap").css("border-left", `${randThickness}px solid ${color}`);
		$("section").css("border-bottom", `${randThickness}px solid ${color}`);
	} else {
		$("header, #prevDesigns").css("border-bottom", `none`);
		$("#textWrap").css("border-right", `none`);
		$("#textWrap").css("border-left", `none`);
		$("section").css("border-bottom", `none`);
	}

	//section bgs
	const alternateColor = () => {
		if (parseInt(DNAarr[20]) <= 0) {
			$("headerm #prevDesigns").css("background-color", `rgb(${c1[0]},${c1[1]},${c1[2]})`);
			$("header, #prevDesigns").css("color", `rgb(${c2[0]},${c2[1]},${c2[2]})`);
		} else {
			$("header, #prevDesigns").css("background-color", `rgb(${c2[0]},${c2[1]},${c2[2]})`);
			$("header, #prevDesigns").css("color", `rgb(${c1[0]},${c1[1]},${c1[2]})`);
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


	var colorProb = parseInt(DNAarr[21]);
	if (colorProb<=0) {
		alternateColor();
	} else if (colorProb === 1) {
		$("header, #prevDesigns").css("background-color", `rgb(${c2[0]},${c2[1]},${c2[2]})`);
		$("header, #prevDesigns").css("color", `rgb(${c1[0]},${c1[1]},${c1[2]})`);
		$("#bg").css("background-color", `rgb(${c1[0]},${c1[1]},${c1[2]})`);
		$("section").css("color, a", `rgb(${c2[0]},${c2[1]},${c2[2]})`);
	} else if (colorProb === 2) {
		$("header, section, #prevDesigns").css("background-color", `transparent`);
	} else{
		$("header, #bg, #prevDesigns").css("background-color", `rgb(${c1[0]},${c1[1]},${c1[2]})`);
		$("header, #prevDesigns").css("color", `rgb(${c2[0]},${c2[1]},${c2[2]})`);
	}

	indexDNA+=4;

	activateProperty("body", "font-family", fonts[parseInt(DNAarr[22])], 1, aDNAarr);
	activateProperty("h2, h3", "font-family", fonts[parseInt(DNAarr[23])], 1, aDNAarr);
	activateProperty("h2, h3", "font-weight", weights[parseInt(DNAarr[24])], 1, aDNAarr);
	activateProperty("h2, h3, header", "text-transform", tTransforms[parseInt(DNAarr[25])], 1, aDNAarr);
	activateProperty("h2, h3", "text-decoration", tDecorations[parseInt(DNAarr[26])], 1, aDNAarr);
	activateProperty("section, header, .linkedImg, .linkedRef, #prevDesigns", "padding", `${parseInt(DNAarr[27])}px`, 1, aDNAarr);


	let colWidth = DNAarr[28];

	$("#textWrap").css("width", colWidth+"%");
	$(".linkedImg, .linkedRef").css("width", 100-colWidth+"%");
	
	if (parseInt(DNAarr[29])===0) {
		$("#textWrap").css("float","left");
		$(".linkedImg, .linkedRef").css("left","auto").css("right", "0");
		$("#prevDesigns").css("width", 100-colWidth+"%");
	} else {
		$("#textWrap").css("float","right");
		$(".linkedImg, .linkedRef").css("right","auto").css("left","0");
		$("#prevDesigns").css("width", colWidth+"%");
	}

	//big landing
	let headerH;

	setTimeout(function(){
		headerH = $("header").outerHeight();
		$("#mainWrap").css("padding-top",`${headerH}px`);
		$("#prevDesigns").css("margin-top",`${headerH}px`);
	},1200);

	if (parseInt(DNAarr[30])===0) {
		// $("#landing").addClass("bigLanding").css("top",`${headerH}px`);
		$("#landing").addClass("bigLanding");
		$("#textWrap").addClass("bigLanding");
		// activateProperty("h2", "font-size", randFl(1.2,9)+"rem", 1);
		// $("#mainWrap").css("padding-top", "100vh !important");
	} else {
		$("#landing").removeClass("bigLanding");
		$("#textWrap").removeClass("bigLanding");

	}

	indexDNA+=3;

	// console.log(parseFloat(DNAarr[32]), aDNAarr[32], "h2");
	// console.log(parseFloat(DNAarr[33]), aDNAarr[33], "h2");
	activateProperty("p", "font-size", parseFloat(DNAarr[31])+"rem", 1, aDNAarr);
	activateProperty("h2", "font-size", parseFloat(DNAarr[32])+"rem", 1, aDNAarr);
	activateProperty("h3", "font-size", parseFloat(DNAarr[33])+"rem", 1, aDNAarr);

	let midSize = (parseFloat(DNAarr[31])+parseFloat(DNAarr[33]))/2.2;
	if (midSize < DNAarr[31]) {
		midSize = DNAarr[31];
	}

	$("h4").css("font-size", `${midSize}rem`);
	$(".smallerNo").css("font-size", `${midSize/1.4}rem`);
	
	if (parseInt(parseInt(DNAarr[22]))===8) {
		$("p").css("line-height","130%"); //fortesque correction
	}

}


$("#redesign").click(function(){
	location.reload();
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


const rate = () => {
	var $bar = $("#rateBar");
	var $barInner = $("#rateBarInner");
	var barW = $bar.width();
	var score = 0;

	$bar.mousemove(function(e){
		var parentOffset = $(this).offset(); 
		var relX = Math.floor(e.pageX - parentOffset.left);
		score = Math.floor((relX / barW) * 10.9);
		$barInner.css("width", `${relX}px`);
		$barInner.text(score);
	});

	$bar.mouseup(function(){
		$bar.addClass("innactive");
		pushRatingToDB(dbGeneralCount + idPadding + 1, dbGen, dbSp, score);
	});
}


$("#designCounter").text(dbGeneralCount+1);
$("#generationCounter").text(dbGen);
$("#specimenCounter").text(dbSp);


rate();


const landingMessage = () =>{
	let $message = $("#landingMessage");
	let $button = $("#landingMessage a");

	$message.show();
	$message.addClass("notTransp");
	$button.addClass("notTransp");
	$("section, header:not(.notTransp)").css("opacity", 0.3);


	$button.click(function(event){
		event.preventDefault();
		$message.remove();
		design(activeDNA, activeADNA);

		$("section, header:not(.notTransp)").css("opacity", 1);
	});
}

const showLandingOnce = () => {

	if (sessionStorage.seen) {
		design(activeDNA, activeADNA);
		tableOfContents();
	} else {
		landingMessage();
		sessionStorage.setItem("seen", true);
	}
}

const tableOfContents = () => {
	var count = 0;
	var sectionCoords = [];
	setTimeout(function(){
	$("section").each(function(i){
		var sectionTitle = $(this).find("h3").text();

		if (sectionTitle.length >= 1 && i >= 2) {
			count++;
			sectionCoords.push($(this).offset().top);
			$("#toc").append(`<h4><span class="smallerNo">0${count}</span> <strong>${sectionTitle}</strong></h4>`);
		}

	});


	$("#toc h4").each(function(i){
		$(this).click(function(){
			event.preventDefault();
			$('html, body').animate({
	            scrollTop: sectionCoords[i]
	        }, 1000);
		});
	});
	},1200);

}

const clickToEnlarge = () => {
	$("img").each(function(){
		let $img = $(this);
		let src = $img.attr("src");
		let text = $img.parent().find("span").text();
		$img.click(function(){
			console.log($img);
			$("body").append(`<div class="bigImg"><div><img src="${src}"><br><p>${text}</p></div></div>`);
			closeImg();
		});
	});
}

const closeImg = () => {
	$(".bigImg").click(function(){
		$(".bigImg").remove();
	});
}

clickToEnlarge();


const numberRefs = () => {
	$(".refLink").each(function(i){
		$(this).text(i+1);
	});

	$(".linkedRef").each(function(i){
		// $(this).append((i+1)+". "+references[i]);
		$("#references").append((i+1)+". "+references[i]+"<br><br>");
	});
}



const avoidCollidingSideContent = () => {
	let bottomCoords = [];
	let topCoords = [];
	// let cumOverlap = []; //cumulative for recursiveness

	$(".linkedImg").each(function(i){
		let $this = $(this);
		var h = $this.outerHeight();
		var o = $this.offset().top;

		// cumOverlap.push(0);

		var bottom = h+o;

		$this.addClass(`linkedImg${i}`);
		bottomCoords.push(bottom);
		topCoords.push(o);
	});

	const pushElementsDown = () => {
		let errorsThisIteration = 0;
		for (var i = 0; i < bottomCoords.length; i++) {
			var overlap = bottomCoords[i] - topCoords[i+1]
			if (bottomCoords[i] > topCoords[i+1]) {
				console.log("OVERLAP "+overlap);
				// $(".linkedImg"+(i+1)).css("padding-top", overlap+"px");
				var originalImgH = $(".linkedImg"+(i)).find("img").outerHeight();
				$(".linkedImg"+(i)).find("img").css("height", (originalImgH-overlap)+"px");

				// cumOverlap[i] += overlap;
				// errorsThisIteration++;
			} else {
				$(".linkedImg"+(i+1)).css("padding-top", "0");
			}
		}
		if (errorsThisIteration >= 1) {
			// setTimeout(function(){
			// 				pushElementsDown();

			// },500);
		}
	}

	pushElementsDown();
}

setTimeout(function(){
	avoidCollidingSideContent();
},1900);


$("sup").click(function(event){
	event.preventDefault();

	let refPos = $("#references").offset().top;

	$('html, body').animate({
        scrollTop: refPos-200
    }, 1000);
});





const references = [`S. Venkatachalam, Founding Partner, Centerview Capital Technology. (2017, May 24). 2017 is the year of artificial intelligence. Here's why. Retrieved December 10, 2017, from <a href="https://www.weforum.org/agenda/2017/05/2017-is-the-year-of-artificial-intelligence-here-s-why/">weforum.org</a>`,
`Sneed, A. (2015, May 19). Moore's Law Keeps Going, Defying Expectations. Retrieved January 03, 2018, from <a href="https://www.scientificamerican.com/article/moore-s-law-keeps-going-defying-expectations/">scientificamerican.com</a>`,
`Roser, M., & Ritchie, H. (n.d.). Technological Progress. Retrieved January 02, 2018, from <a href="https://ourworldindata.org/technological-progress/">ourworldindata.org</a>`,
`Cellan-Jones, R. (2014, December 02). Stephen Hawking warns artificial intelligence could end mankind. Retrieved January 01, 2018, from <a href="http://www.bbc.com/news/technology-30290540">bbc.com</a>`,
`Etherington, D. (2017, September 04). Elon Musk warns that vying for AI superiority could lead to WW3. Retrieved January 02, 2018, from <a href="https://techcrunch.com/2017/09/04/elon-musk-warns-that-vying-for-ai-superiority-could-lead-to-ww3/">techcrunch.com</a>`,
`Darwin, C. (1859). On the origin of species by means of natural selection, or, the preservation of favoured races in the struggle for life. London: J. Murray.`,
`Mccall, J. (2005). Genetic algorithms for modelling and optimisation. Journal of Computational and Applied Mathematics, 184(1), 205-222. doi:10.1016/j.cam.2004.07.034`,
`Imperial College London. (n.d.). Application of Genetic Algorithms. Retrieved December 14, 2017, from <a href="https://www.doc.ic.ac.uk/~nd/surprise_96/journal/vol1/tcw2/article1.html">doc.ic.ac.uk</a>`,
`Hornby, G., Globus, A., Linden, D., & Lohn, J. (2006). Automated Antenna Design with Evolutionary Algorithms. Space 2006. doi:10.2514/6.2006-7242`,
`Sims, K. (1997). Galápagos. Retrieved January 09, 2018, from <a href="http://www.karlsims.com/galapagos/">karlsims.com</a>`,
`Woodford, C. (2017, February 24). How neural networks work - A simple introduction. Retrieved January 08, 2018, from <a href="http://www.explainthatstuff.com/introduction-to-neural-networks.html">explainthatstuff.com</a>`,
`Google. (2015, November 9). Tensorflow. Retrieved January 10, 2018, from <a href="https://github.com/tensorflow">github.com</a>`,
`Google. (2017, December 21). Tensorflow/models. Retrieved January 10, 2018, from <a href="https://github.com/tensorflow/models/tree/master/research/inception">github.com</a>`,
`Agüera y Arcas, B. (2016, July 22). Retrieved January 03, 2018, from <a href="www.youtube.com/watch?v=uSUOdu_5MPc">youtube.com</a>`,
`Jennings, K. E. (2010, October 02). Developing Creativity: Artificial Barriers in Artificial Intelligence. Minds & Machines, 20(4), 489-501.`,
`Boden, M. A. (2009, Fall). Computer Models of Creativity. AI Magazine, 30(3). doi:https://doi.org/10.1609/aimag.v30i3.2254`,
`Goodfellow, Ian J.; Pouget-Abadie, Jean; Mirza, Mehdi; Xu, Bing; Warde-Farley, David; Ozair, Sherjil; Courville, Aaron; Bengio, Yoshua. Generative Adversarial Networks. ARXIV.`,
`Vincent, J. (2017, October 30). All of these faces are fake celebrities spawned by AI. Retrieved January 02, 2018, from <a href="https://www.theverge.com/2017/10/30/16569402/ai-generate-fake-faces-celebs-nvidia-gan">theverge.com</a>`,
`Karras, T., Aila, T., Laine, S., & Lehtinen, J. (2017). Progressive growing of  GANs for improved quality, stability, and variation. ILCR. Retrieved from <a href="http://research.nvidia.com/sites/default/files/publications/karras2017gan-paper.pdf">research.nvidia.com</a>`,
`(2016, June 19). 255BITS/HyperGAN. Retrieved January 03, 2018, from <a href="https://github.com/255BITS/HyperGAN">github.com</a>`,
`Boden, M. A. (2009, Fall). Computer Models of Creativity. AI Magazine, 30(3). doi:https://doi.org/10.1609/aimag.v30i3.2254`,
`Goodfellow, I. J. (2017, December 03). Tweet. Retrieved January 01, 2018, from <a href="https://twitter.com/goodfellow_ian/status/937406530743287808">twitter.com</a>`,
`Radford, A., & Chintala, S. (2015, Nov 22). Newmu/dcgan_code. Retrieved January 10, 2018, from <a href="https://github.com/Newmu/dcgan_code">github.com</a>`,];


numberRefs();
