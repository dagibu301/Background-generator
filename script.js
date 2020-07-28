const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const button = document.querySelector(".myButton");

setGradient = ()=> {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

generateRandomColors = ()=> {
	let color1 = (Math.random() * 0xfffff * 1000000).toString(16);
	color1 = '#' + color1.slice(0, 6);
	let color2 = (Math.random() * 0xfffff * 1000000).toString(16);
	color2 = '#' + color2.slice(0, 6);
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1 
	+ ", " 
	+ color2 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", generateRandomColors);