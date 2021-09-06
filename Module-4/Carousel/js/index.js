const body = document.getElementById("body");
const image = document.getElementById("display-image");

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
// body.style.background = "url(\"images/icon.png\")";

console.log(body.style.backgroundImage);

rightBtn.addEventListener("click", function() {
    body.style.backgroundImage = "url(\"images/left-arrow.png\")";
    image.src = "images/left-arrow.png";
    console.log(image);
});