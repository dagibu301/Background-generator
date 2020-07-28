const css = document.querySelector("h3");
const colorInput1 = document.querySelector(".color1");
const colorInput2 = document.querySelector(".color2");
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
	setGradientStyle(colorInput1.value, colorInput2.value); 
}

generateRandomColors = ()=> {
	let color1 = (Math.random() * 0xfffff * 1000000).toString(16);
	color1 = '#' + color1.slice(0, 6);
	let color2 = (Math.random() * 0xfffff * 1000000).toString(16);
	color2 = '#' + color2.slice(0, 6);
	setGradientStyle(color1, color2); 
	colorInput1.value = color1;
	colorInput2.value = color2;
}

colorInput1.addEventListener("input", setGradient);

colorInput2.addEventListener("input", setGradient);

button.addEventListener("click", generateRandomColors);