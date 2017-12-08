const fonts = ["sans-serif","serif","monospace", "Akkurat", "Akkurat-Mono", "Eczar-Regular", "FortescuePro-Regular"];
const weights = ["normal", "bold", "bolder", "lighter"];
const tTransforms = ["none","capitalize","uppercase","lowercase"];
const tDecorations = ["none","underline","none","none","none"];
let c1 = []; //bg
let c2 = []; //fg

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
		console.log(colorDiff(c1,c2),"another color",);
		randomColor();
	}
}

const activateProperty = (target, property, setting) => {
	if (rand(0,1) === 1) {
		$(target).css(property, setting);
	}
}

const design = () => {

	let colWidth = rand(30,70);

	
	
	$("#textWrap").css("width", colWidth+"%");
	$("#images").css("width", 100-colWidth+"%");
	if (rand(0,1)===1) {
		$("#textWrap").css("float","left");
		$("#images").css("float","right");
	} else {
		$("#textWrap").css("float","right");
		$("#images").css("float","left");
	}

	activateProperty("body", "font-family", fonts[rand(0,fonts.length)]);
	activateProperty("h3", "font-family", fonts[rand(0,fonts.length)]);
	activateProperty("p", "font-size", rand(10,18)+"pt");
	activateProperty("h3", "font-size", rand(10,40)+"pt");
	activateProperty("h3", "font-weight", weights[rand(0,weights.length)]);
	activateProperty("h3", "text-transform", tTransforms[rand(0,tTransforms.length)]);
	activateProperty("h3", "text-decoration", tDecorations[rand(0,tDecorations.length)]);
	activateProperty("section, header, #images", "padding", rand(0,24)+"px");

	randomColor();
}

let time = 0;
setInterval(function(){
	time++;

	if (time < 3) {
		design();
	}
},400);

$("#redesign").click(function(){
	design();
});