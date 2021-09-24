const btn = document.getElementById("btn");
const idea = document.getElementById("idea");
const body = document.querySelector("body");

btn.addEventListener("click", () =>  {
        
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => body.style.backgroundImage = `url(${data.message})`);


    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => idea.textContent = data.activity);
});