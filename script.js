const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const button = document.querySelector(".myButton");

setGradientStyle = (col1 , col2)=> { 
	body.style.background = 
	"linear-gradient(to right, " 
	+ col1 
	+ ", " 
	+ col2 
	+ ")";

	css.textContent = body.style.background + ";";
}

setGradient = ( ) => {
	setGradientStyle(color1.value, color2.value); 
}

generateRandomColors = ()=> {
	let color1 = (Math.random() * 0xfffff * 1000000).toString(16);
	color1 = '#' + color1.slice(0, 6);
	let color2 = (Math.random() * 0xfffff * 1000000).toString(16);
	color2 = '#' + color2.slice(0, 6);
	setGradientStyle(color1, color2); 
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", generateRandomColors);