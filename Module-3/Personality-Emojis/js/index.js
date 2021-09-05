const emojisEl = document.getElementById("emojis-el");

const input = document.getElementById("emoji-input");

const saveEnd = document.getElementById("save-btn-end");
const saveFirst = document.getElementById("save-btn-first");
const deleteEnd = document.getElementById("delete-btn-end");
const deleteFirst = document.getElementById("delete-btn-first");


let emojis = [];

saveEnd.addEventListener("click", function() {
    const value = input.value;
    if (value)
    {
        emojis.push(value);
        input.value = "";
        render();
    }
});

saveFirst.addEventListener("click", function() {
    const value = input.value;
    if (value)
    {
        emojis.unshift(value);
        input.value = "";
        render();
    }
});

deleteEnd.addEventListener("click", function()  {
    if (emojis.length > 0)
    {
        emojis.pop();
        render();
    }
});

deleteFirst.addEventListener("click", function() {
    if (emojis.length > 0)
    {
        emojis.shift();
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

