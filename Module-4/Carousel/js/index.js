const body = document.getElementById("body");
const image = document.getElementById("display-image");

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
// body.style.background = "url(\"images/icon.png\")";

let imageCount = 1;

rightBtn.addEventListener("click", function() {
    imageCount++;
    if (imageCount > 10)
        imageCount = 1;

    renderImage();
});

leftBtn.addEventListener("click", function() {
    imageCount--;
    if (imageCount < 1)
        imageCount = 10;
    
    renderImage();
});

function renderImage() {
    const nextImage = `images/card-images/image-${imageCount}.png`;
    body.style.backgroundImage = `url("${nextImage}")`;
    image.src = nextImage;
}