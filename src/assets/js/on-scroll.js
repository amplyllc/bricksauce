
window.onscroll = function() {
	const imageDiv = document.querySelector(".img.brick");
	const image = document.querySelector(".img.brick img");
	const source = document.querySelector(".img.brick source");
	var scrollTop = document.documentElement.scrollTop * 0.5;
	imageDiv.style.transform =
	  "translateX(-150px) translateY(calc(100vh + -175% + " + scrollTop + "px))";
	if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
        image.setAttribute("src", "/assets/img/bricksauce-m.png");
		source.setAttribute("srcset", "/assets/img/bricksauce.png");
    }
};