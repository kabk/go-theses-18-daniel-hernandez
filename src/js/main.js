const fonts = ["fantasy", "sans-serif","serif","monospace", "Akkurat", "Akkurat-Mono", "Eczar-Regular", "FortescuePro-Regular", "HelveticaNeue-BoldExt"];
const weights = ["normal", "bold", "bolder", "lighter"];
const tTransforms = ["none","capitalize","uppercase","lowercase"];
const tDecorations = ["none","underline","none","none","none"];
const tAligns = ["left", "right", "center", "justify"];
const paragraphAligns = ["left", "left", "left", "justify"];


let c1 = []; //bg
let c2 = []; //fg

let tempCount = 0;

// let DNA = [
// 	0,
// 	0,
// 	0,
// 	0,
// 	0,
// ];

function rand(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
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
	$("body").css("background-color", `rgb(${c1[0]},${c1[1]},${c1[2]})`);
	$("body, a").css("color", `rgb(${c2[0]},${c2[1]},${c2[2]})`);
}

const randomColor = () => {
	c1 = [rand(0,255), rand(0,255), rand(0,255)];
	c2 = [rand(0,255), rand(0,255), rand(0,255)];

	if (colorDiff(c1,c2) >= 140) {
		applyColor();
	} else {
		// console.log(colorDiff(c1,c2),"another color",);
		randomColor();
	}
}

const activateProperty = (target, property, setting, probability) => {
	if (rand(0,probability) === 1) {
		$(target).css(property, setting);
	}
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

	randomColor();

	activateProperty("body", "font-family", fonts[rand(0,fonts.length)], 1);
	activateProperty("h3", "font-family", fonts[rand(0,fonts.length)], 1);
	activateProperty("p", "font-size", rand(10,18)+"pt", 1);
	activateProperty("h3", "font-size", rand(12,40)+"pt", 1);
	activateProperty("h3", "font-weight", weights[rand(0,weights.length)], 1);
	activateProperty("h3, header", "text-transform", tTransforms[rand(0,tTransforms.length)], 1);
	activateProperty("h3", "text-decoration", tDecorations[rand(0,tDecorations.length)], 1);
	activateProperty("section, header, .linkedImg, .linkedRef", "padding", rand(0,24)+"px", 1);
	// activateProperty("header", "box-shadow", `${rand(0,0)}px ${rand(0,6)}px ${rand(2,10)}px`, 1);
	activateProperty("section, header", "box-shadow", `0px ${rand(0,6)}px ${rand(0,10)}px rgba(${c2[0]},${c2[1]},${c2[2]},${Math.random()})`, 3); //fix
	activateProperty("section, header", "border-radius", `${rand(-10,15)}px`, 1);
	// activateProperty("p", "text-align", paragraphAligns[rand(0,paragraphAligns.length)], 1);
	activateProperty("h3", "text-align", tAligns[rand(0,tAligns.length)], 1);
	// console.log(c1, 1);

	activateProperty("section", "column-count", `${rand(-3,2)}`, 10);

	// activateProperty(".linkedImg", "max-height", `${rand(50,60)}vh`, 1);

	// activateProperty("header", "transform", `rotate(${temp[rand(0,temp.length)]}deg)`)
	activateProperty("canvas", "filter", `blur(${rand(0,100)}px)`, 1);
	// activateProperty("*", "filter", `grayscale(${rand(0,100)}%) `, 1);
	// $("body").css("filter", "grayscale(100%)", 1);
	// activateProperty("*", "filter", `hue-rotate(${rand(0,180)}deg)`, 1);


	$("#designCounter").text(tempCount);
	// draw();
}

// let time = 0;
// setInterval(function(){
// 	time++;

// 	if (time < 10) {
// 		design();
// 	}
// },100);

setTimeout(function(){
	design();
	// $("*").css("transition", ".3s");
},500);
setTimeout(function(){
	$("*").css("transition", ".3s");
},1000);


$("#redesign").click(function(){
	design();
});



///////////////////////canvas test
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

let ww = window.innerWidth;
let wh = window.innerHeight;


ctx.canvas.width  = ww;
ctx.canvas.height = wh;

function Vertex(){
	this.x = rand(0,ww);
	this.y = rand(0,wh);

	this.run = function(){
		this.display();
		this.update();
	}


	this.display = function(){
    	// ctx.fillStyle = `rgb(${rand(0,255)},${rand(0,255)},${rand(0,255)})`;
    	 ctx.fillStyle = `white`;

    	ctx.lineTo(this.x,this.y);
    	// ctx.fillRect(this.x,this.y,7,7);
	}

	this.update = function(){
    	this.x += rand(-30,30);
    	this.y += rand(-30,30);
    }
}

let vertexes = [];

for (var i = 0; i < rand(0,18); i++) {
	vertexes.push(new Vertex());
}

const draw = () => {
	// ctx.fillStyle = `rgb(${rand(0,255)},${rand(0,255)},${rand(0,255)})`;
	ctx.fillStyle = "blue";
	ctx.fillRect(0,0,ww,wh);

    ctx.beginPath();
    ctx.moveTo(ww/2, wh/2);

    
	for (var i = 0; i < vertexes.length; i++) {
		vertexes[i].run();
	}
	ctx.fill();

}


$( window ).scroll(function() {
	// draw();
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

