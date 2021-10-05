const bodyEl = document.querySelector("body");
const imageAuthor = document.getElementById("image-author");
const imageInfo = document.getElementById("image-info");

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=asdasdasd")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        imageAuthor.textContent = "By: " + data.user.name;
        imageInfo.setAttribute("href", data.links.html);
        bodyEl.style.backgroundImage = `url(${data.urls.small})`;
    })
    .catch(err => {
        console.error(err);
        bodyEl.style.backgroundImage = `url(images/default-bg.jpg)`;
        imageAuthor.textContent = "By: " + "Dhaval Parmar";
        imageInfo.setAttribute("href", "https://unsplash.com/photos/dnPniNPUe4o");
        
    });