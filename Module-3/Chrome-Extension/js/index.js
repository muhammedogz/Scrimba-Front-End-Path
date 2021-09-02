const buttonEl = document.getElementById("button-el");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

let info = [];

buttonEl.addEventListener("click", () => {
    const value = inputEl.value;
    if (value.length === 0)
        return;

    info.push(value);
    ulEl.innerHTML += "<li>" + value + "</li>";
    inputEl.value = "";
});

function renderUl() {
    for (let i = 0; i < info.length; i++)
    {
        ulEl.innerHTML += "<li>" + info[i] + "</li>";
    }
}