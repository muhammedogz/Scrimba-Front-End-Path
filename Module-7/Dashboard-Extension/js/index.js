const bodyEl = document.querySelector("body");
const imageAuthor = document.getElementById("image-author");
const imageInfo = document.getElementById("image-info");

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=tech")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        imageAuthor.textContent = data.user.name;
        imageInfo.setAttribute("href", data.links.html);
        bodyEl.style.backgroundImage = `url(${data.urls.small})`;
    });