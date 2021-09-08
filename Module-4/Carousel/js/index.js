const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
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
    

    if (imageCount % 2 === 1)
    {
        image.src = nextImage;
        image.classList.remove("hidden");
        image2.classList.add("hidden");

        bg1.style.backgroundImage = `url("${nextImage}")`;
        bg1.classList.remove("hidden");
        bg2.classList.add("hidden");
    }
    else
    {
        image2.src = nextImage;
        image2.classList.remove("hidden");
        image.classList.add("hidden");

        bg2.style.backgroundImage = `url("${nextImage}")`;
        bg2.classList.remove("hidden");
        bg1.classList.add("hidden");
    }
}