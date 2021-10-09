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
        url = url.slice(0, url.length - 10) + "/200/300";
        
        images += `<img class="photo" src="${url}">`;
    
    }
    outerDiv.innerHTML = images;
    bodyEl.appendChild(outerDiv);
}

getPhotos(photoCount)
    .then(clickImage);

function clickImage() {
    const images = document.querySelectorAll(".photo");
    
    for (const image of images) {
        image.addEventListener("click", (event) => {
            console.log("I click", event);

            for (const img of images) {
                if (img.classList.contains("onscreen")) 
                    img.classList.remove("onscreen");
            }

            event.target.classList.add("onscreen");
            
        });
    }
}

