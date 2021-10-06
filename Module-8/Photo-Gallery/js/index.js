const bodyEl = document.querySelector("body");

const photoCount = 14; // max 100

async function getPhotos(count) {
    const res = await fetch(`https://picsum.photos/v2/list?page=2&limit=${count}`);
    const photos = await res.json();
    const p = photos[0].download_url;
    console.log(p.slice(0,p.length - 10));

    let html = "<div class='photos'>";

    for (const photo of photos) {
        let url = photo.download_url;
        url = url.slice(0, url.length - 10) + "/200/300";
        
        html += `<div class="photo" style="background-image: url('${url}");"></div>`;
    
    }
    html += "</div>";
    bodyEl.innerHTML += html;
    
}

getPhotos(photoCount);