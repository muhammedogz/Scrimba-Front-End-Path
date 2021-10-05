const bodyEl = document.querySelector("body");

async function getColors() {
    const res = await fetch("https://apis.scrimba.com/hexcolors/?count=2");
    console.log(res);
    const data = await res.json();
    return data;
}

getColors();