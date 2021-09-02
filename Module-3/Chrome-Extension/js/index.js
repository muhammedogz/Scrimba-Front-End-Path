const buttonEl = document.getElementById("button-el");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

let info = [];

buttonEl.addEventListener("click", function() {
    const value = inputEl.value;
    if (value.length === 0)
        return;

    info.push(value);
    inputEl.value = "";
    renderUl();
});

function renderUl() {
    let content = "";
    for (let i = 0; i < info.length; i++)
    {
        content += "<li>" + info[i] + "</li>";
    }
    ulEl.innerHTML = content;
    //! alternative 
    // const li = document.createElement("li");
    // li.textContent = value;
    // ulEl.append(li);
}