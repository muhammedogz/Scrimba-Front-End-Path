const bodyEl = document.querySelector("body");
const imageAuthor = document.getElementById("image-author");
const imageInfo = document.getElementById("image-info");

const clock = document.querySelector(".clock h1");

const dollar = document.getElementById("dollar");
const euro = document.getElementById("euro");
const pound = document.getElementById("pound");

// set current time
const date = new Date();
const currentTime = date.toLocaleTimeString("tr", {timeStyle: "short"});
clock.textContent = currentTime;

// get new bg image
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=asdasdasd")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong");
        }
        return res.json();
    })
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


// get current currency
function getCurrencyTRY(currency, symbol) {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${symbol}/try.json`)
        .then(res => {
            if (!res.ok) {
                throw Error("Something went wrong");
            }
            return res.json();
        })
        .then(data => {
            const str = "" + data.try;
            currency.textContent = str.slice(0,5);
        })
        .catch(() => {
            currency.style.fontSize = "1.1rem";
            currency.textContent = "An error occurred";
        });
}

getCurrencyTRY(dollar, "usd");
getCurrencyTRY(euro, "eur");
getCurrencyTRY(pound, "gbp");