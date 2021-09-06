const inputEl = document.getElementById("text-input");

inputEl.addEventListener("keyup", function(event) {
    const val = event.target.value.toLowerCase();
    console.log(val);
});