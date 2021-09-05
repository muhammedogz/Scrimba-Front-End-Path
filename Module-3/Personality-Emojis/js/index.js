const emojisEl = document.getElementById("emojis-el");
const input = document.getElementById("emoji-input");
const saveEnd = document.getElementById("save-btn-end");

let emojis = ["💘", "😢", "💪"];

saveEnd.addEventListener("click", function() {
    const value = input.value;
    if (value)
    {
        emojis.push(value);
        render();
    }
});

function render() {
    let str = "";
    for (let i = 0; i < emojis.length; i++)
    {
        str += `<span>${emojis[i]} </span>`;
    }
    emojisEl.innerHTML = str;
}

