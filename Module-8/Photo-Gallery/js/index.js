const bodyEl = document.querySelector("body");

const photoCount = 20; // max 100

async function getPhotos(count) {
    const res = await fetch(`https://picsum.photos/v2/list?page=2&limit=${count}`);
    const photos = await res.json();

    const outerDiv = document.createElement("div");
    outerDiv.classList.add("photos");

    let images = "";

    for (const photo of photos) {
        let url = photo.download_url;
        
        // remove last part of url and att new dimensions
        url = url.slice(0, url.length - 10) + "/600/800";
        
        images += `<img class="photo" src="${url}">`;
    
    }
    outerDiv.innerHTML = images;
    bodyEl.appendChild(outerDiv);
}

getPhotos(photoCount)
    .then(clickImage);

function clickImage() {
    const parentDiv = document.querySelector(".photos");
    const images = document.querySelectorAll(".photo");

    for (const image of images) {
        image.addEventListener("click", (event) => {
            // add required class to make bigger
            event.target.classList.add("onscreen");

            // create an outer div to keep image in fixed
            const tempDiv = document.createElement("div");
            tempDiv.classList.add("outerImageDiv");

            // change desired image and tempDiv parent
            parentDiv.replaceChild(tempDiv,event.target);
            tempDiv.appendChild(event.target);

            // if tempDiv clicked
            // remove div and image from parent and make it fresh
            tempDiv.addEventListener("click", () => {
                tempDiv.removeChild(event.target);
                parentDiv.replaceChild(event.target, tempDiv);
          
                for (const img of images) {
                    if (img.classList.contains("onscreen")) 
                    img.classList.remove("onscreen");
                }
            });

        });
    }
}