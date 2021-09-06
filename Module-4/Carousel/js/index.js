const body = document.getElementById("body");
const image = document.getElementById("display-image");

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
// body.style.background = "url(\"images/icon.png\")";

let imageCount = 1;
const maxImageCount = 5;

rightBtn.addEventListener("click", function() {
    imageCount++;
    if (imageCount > maxImageCount)
        imageCount = 1;

    renderImage();
});

leftBtn.addEventListener("click", function() {
    imageCount--;
    if (imageCount < 1)
        imageCount = maxImageCount;
    
    renderImage();
});

function renderImage() {
    const nextImage = `images/card-images/image-${imageCount}.png`;
    body.style.backgroundImage = `url("${nextImage}")`;
    image.src = nextImage;
}