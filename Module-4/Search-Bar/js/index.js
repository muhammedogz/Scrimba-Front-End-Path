const results = document.getElementById("results");
const items = document.getElementsByClassName("name");

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(event) {
    const value = event.target.value.toLowerCase();

    for (let i = 0; i < items.length; i++)
    {
        if (!items[i].textContent.toLowerCase().includes(value))
        {  
            items[i].style.display = "none";
        }
        else
        {
            items[i].style.display = "block";
        }
    }
});