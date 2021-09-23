const saveEl = document.getElementById("save-el");
const tabEl = document.getElementById("btn-tab");
const deleteEl = document.getElementById('delete-el');
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

let info = [];

// if there is a previous data
// store in info and render it
const localCheck = JSON.parse(localStorage.getItem("lead"));
// if local not null, take values from it
if (localCheck)
{
    info = localCheck; 
    renderUl();
}

// add click event
saveEl.addEventListener("click", function() {
    const value = inputEl.value;
    if (value.length === 0)
        return;
    
    info.push(value);
    inputEl.value = "";
    localStorage.setItem("lead",JSON.stringify(info));
    renderUl();
});

function renderUl() {
    let content = "";
    for (let i = 0; i < info.length; i++)
    {
        content += `
            <li>
                <a href="${info[i]}" target="_blank">${info[i]}</a>
            </li>
        `;
    }
    console.log(content);
    ulEl.innerHTML = content;
    //! alternative 
    // const li = document.createElement("li");
    // li.textContent = value;
    // ulEl.append(li);
}

// save current tab
tabEl.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        info.push(tabs[0].url);
        localStorage.setItem("lead",JSON.stringify(info));
        renderUl();
    });


});

// delete saved ones
deleteEl.addEventListener("dblclick", function() {
    info = [];
    localStorage.setItem("lead",JSON.stringify(info));
    renderUl();
});