const imageArray = [
	"/assets/img/sauce1",
	"/assets/img/sauce2",
	"/assets/img/sauce3"
];

const image = document.querySelector("#imgDiv img");
const source = document.querySelector("#imgDiv source");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum] + "-m" + ".png");
	source.setAttribute("srcset", array[randomNum] + ".png");
}
