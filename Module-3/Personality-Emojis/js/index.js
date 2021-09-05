const emojisEl = document.getElementById("emojis-el");

let emojis = ["💘", "😢", "💪"];

function render() {
    let str = "";
    for (let i = 0; i < emojis.length; i++)
    {
        str += `<span>${emojis[i]}</span>`;
    }
    emojisEl.innerHTML = str;
}

render();