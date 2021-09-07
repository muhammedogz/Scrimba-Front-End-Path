const body = document.getElementById("body");
const image = document.getElementById("display-image");
const image2 = document.getElementById("display-image-2");

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
// body.style.background = "url(\"images/icon.png\")";

let imageCount = 1;
const maxImageCount = 10;

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

    if (imageCount % 2 === 1)
    {
        image.src = nextImage;
        image.classList.remove("hidden");
        image2.classList.add("hidden");
    }
    else
    {
        image2.src = nextImage;
        image2.classList.remove("hidden");
        image.classList.add("hidden");
    }
}